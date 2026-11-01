import { copyFile, mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { resumeRoutes } from "../src/data/routes.ts";

const dist = resolve(import.meta.dirname, "../dist");
await Promise.all(
  Object.values(resumeRoutes).map(async (route) => {
    const destination = resolve(dist, route.slice(1));
    await mkdir(destination, { recursive: true });
    await copyFile(
      resolve(dist, "index.html"),
      resolve(destination, "index.html"),
    );
  }),
);
await writeFile(resolve(dist, ".nojekyll"), "");
