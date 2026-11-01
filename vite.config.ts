import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: process.env.PAGES_BASE_PATH || "/",
  plugins: [react()],
  resolve: {
    alias: Object.fromEntries(
      ["components", "data", "styles", "lib", "pages", "src"].map((name) => [
        `#${name}`,
        fileURLToPath(
          new URL(name === "src" ? "./src" : `./src/${name}`, import.meta.url),
        ),
      ]),
    ),
  },
  server: { host: "127.0.0.1", port: 5174, strictPort: true },
  preview: { host: "127.0.0.1", port: 4174, strictPort: true },
});
