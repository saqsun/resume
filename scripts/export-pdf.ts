// Export sequentially to bound browser memory and finish validation before the next version.
/* eslint-disable no-await-in-loop */
import { mkdir, copyFile, writeFile, rm } from "node:fs/promises";
import { resolve } from "node:path";
import { PDFDocument } from "pdf-lib";
import { chromium } from "playwright";
import { preview } from "vite";
import { pdfFiles, type VariantId } from "../src/data/variants.ts";

const root = resolve(import.meta.dirname, "..");
const out = resolve(root, "output/pdf");
await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
const server = await preview({
  root,
  preview: { host: "127.0.0.1", port: 0, strictPort: false },
});
const browser = await chromium.launch({ channel: "chromium" });
try {
  for (const id of Object.keys(pdfFiles) as VariantId[]) {
    const variantOut = resolve(out, id);
    await mkdir(variantOut, { recursive: true });
    const page = await browser.newPage({
      viewport: { width: 1120, height: 1400 },
      deviceScaleFactor: 1,
    });
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    const response = await page.goto(
      `${server.resolvedUrls!.local[0]}?variant=${id}`,
      {
        waitUntil: "networkidle",
      },
    );
    if (!response?.ok()) throw new Error("Preview did not load");
    await page.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all([...document.images].map((image) => image.decode()));
    });
    const inspect = () =>
      page.evaluate(() =>
        [...document.querySelectorAll<HTMLElement>(".page")].map((sheet) => {
          const bounds = sheet.getBoundingClientRect();
          const footer = sheet.querySelector("footer")!.getBoundingClientRect();
          const content = [
            ...sheet.querySelectorAll(".main-column, aside"),
          ].map((el) => el.getBoundingClientRect());
          return {
            width: bounds.width,
            height: bounds.height,
            columns: content.map((box) => ({
              left: box.left - bounds.left,
              top: box.top - bounds.top,
              width: box.width,
              height: box.height,
            })),
            overflow:
              content.some((box) => box.bottom > footer.top - 12) ||
              sheet.scrollWidth > sheet.clientWidth,
          };
        }),
      );
    const screen = await inspect();
    if (screen.length !== 2 || screen.some((sheet) => sheet.overflow))
      throw new Error(`Invalid two-page layout: ${JSON.stringify(screen)}`);
    await page.screenshot({
      path: resolve(variantOut, "web-preview.png"),
      fullPage: true,
    });
    await page
      .locator(".page")
      .nth(0)
      .screenshot({ path: resolve(variantOut, "web-page-1.png") });
    await page
      .locator(".page")
      .nth(1)
      .screenshot({ path: resolve(variantOut, "web-page-2.png") });
    await page.emulateMedia({ media: "print" });
    const print = await inspect();
    if (JSON.stringify(screen) !== JSON.stringify(print))
      throw new Error("Screen and print page geometry differ");
    const dimensions = await page.locator(".thumbnail").evaluateAll((images) =>
      images.map((image) => ({
        width: image.getBoundingClientRect().width,
        height: image.getBoundingClientRect().height,
      })),
    );
    if (
      dimensions.some(
        (d) =>
          Math.abs(d.width - (80 * 4) / 3) > 0.1 ||
          Math.abs(d.height - (40 * 4) / 3) > 0.1,
      )
    )
      throw new Error("Inconsistent thumbnails");
    if (errors.length) throw new Error(errors.join("\n"));
    const pdf = resolve(out, pdfFiles[id]);
    const bytes = await page.pdf({
      path: pdf,
      preferCSSPageSize: true,
      printBackground: true,
      displayHeaderFooter: false,
      tagged: true,
    });
    const pdfDocument = await PDFDocument.load(bytes);
    if (pdfDocument.getPageCount() !== 2)
      throw new Error(`${id}: PDF is not two pages`);
    for (const sheet of pdfDocument.getPages()) {
      const { width, height } = sheet.getSize();
      if (Math.abs(width - 595.28) > 1 || Math.abs(height - 841.89) > 1)
        throw new Error(`${id}: PDF page is not A4`);
    }
    for (const directory of ["public/pdf", "dist/pdf"]) {
      await mkdir(resolve(root, directory), { recursive: true });
      await copyFile(pdf, resolve(root, directory, pdfFiles[id]));
    }
    await writeFile(
      resolve(variantOut, "validation.json"),
      JSON.stringify(
        { screen, print, thumbnailCount: dimensions.length, errors },
        null,
        2,
      ),
    );
    console.log(
      `Exported ${pdf}; two A4 sheets, identical screen/print geometry, ${dimensions.length} uniform thumbnails.`,
    );
    await page.close();
  }
} finally {
  await browser.close();
  await new Promise<void>((done, reject) =>
    server.httpServer.close((error) => (error ? reject(error) : done())),
  );
}
