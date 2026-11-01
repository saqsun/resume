// Browser checks run sequentially to keep memory usage bounded.
/* eslint-disable no-await-in-loop */
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, resolve, sep } from "node:path";
import { chromium } from "playwright";
import { PDFDocument } from "pdf-lib";
import { resumeRoutes } from "../src/data/routes.ts";
import { pdfFiles, variants, type VariantId } from "../src/data/variants.ts";

const dist = resolve(import.meta.dirname, "../dist");
const base = process.env.PAGES_BASE_PATH || "/";
const contentTypes: Record<string, string> = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".pdf": "application/pdf",
};
const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(
      new URL(request.url!, "http://localhost").pathname,
    );
    if (!pathname.startsWith(base)) throw new Error("Outside base path");
    let file = resolve(dist, pathname.slice(base.length));
    if (file !== dist && !file.startsWith(`${dist}${sep}`))
      throw new Error("Outside dist");
    if ((await stat(file)).isDirectory()) file = resolve(file, "index.html");
    response.setHeader(
      "Content-Type",
      contentTypes[extname(file)] || "application/octet-stream",
    );
    response.end(await readFile(file));
  } catch {
    response.writeHead(404).end("Not found");
  }
});
await new Promise<void>((done) => server.listen(0, "127.0.0.1", done));
const address = server.address();
assert(address && typeof address !== "string");
const origin = `http://127.0.0.1:${address.port}`;
const browser = await chromium.launch({ channel: "chromium" });

try {
  const page = await browser.newPage();
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("response", (response) => {
    if (response.status() >= 400)
      errors.push(`${response.status()}: ${response.url()}`);
  });

  for (const id of Object.keys(variants) as VariantId[]) {
    const route = `${origin}${base}${resumeRoutes[id].slice(1)}/`;
    const response = await page.goto(route, { waitUntil: "networkidle" });
    assert(response?.ok(), `Direct route failed: ${id}`);
    await page.reload({ waitUntil: "networkidle" });
    await page.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all([...document.images].map((image) => image.decode()));
    });
    assert.equal(
      await page.locator(".page-header p").textContent(),
      variants[id].title,
    );
    assert.equal(await page.getByRole("combobox").count(), 0);
    assert.equal(await page.getByRole("button").count(), 0);
    assert.equal(await page.locator(".page").count(), 2);
    const fits = await page.evaluate(() =>
      [...document.querySelectorAll(".page")].every((sheet) => {
        const footer = sheet.querySelector("footer")!.getBoundingClientRect();
        return (
          sheet.scrollWidth <= sheet.clientWidth &&
          [...sheet.querySelectorAll(".main-column, aside")].every(
            (column) =>
              column.getBoundingClientRect().bottom <= footer.top - 12,
          )
        );
      }),
    );
    assert(fits, `Content overflow: ${id}`);
    const download = page.getByRole("link", {
      name: "Download PDF",
      exact: true,
    });
    assert.equal(
      await download.getAttribute("href"),
      `${base}pdf/${pdfFiles[id]}`,
    );
    const [file] = await Promise.all([
      page.waitForEvent("download"),
      download.click(),
    ]);
    assert.equal(file.suggestedFilename(), pdfFiles[id]);
    const bytes = await readFile((await file.path())!);
    assert(bytes.equals(await readFile(resolve(dist, "pdf", pdfFiles[id]))));
    const pdf = await PDFDocument.load(bytes);
    assert.equal(pdf.getPageCount(), 2);
    console.log(
      `${id}: direct route, refresh, assets, two-page fit and PDF download passed`,
    );
  }

  await page.goto(`${origin}${base}`, { waitUntil: "networkidle" });
  for (const id of Object.keys(variants) as VariantId[]) {
    await page.getByRole("combobox").selectOption(id);
    const link = page.getByRole("link", {
      name: `Open ${variants[id].title} in a new tab`,
    });
    assert.equal(
      await link.getAttribute("href"),
      `${base}${resumeRoutes[id].slice(1)}`,
    );
    assert.equal(await link.getAttribute("target"), "_blank");
  }
  assert.deepEqual(errors, []);
  console.log("Root version selector and dedicated links passed");
} finally {
  await browser.close();
  await new Promise<void>((done, reject) =>
    server.close((error) => (error ? reject(error) : done())),
  );
}
