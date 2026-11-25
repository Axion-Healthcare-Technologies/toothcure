import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Keep `site` identical to `url` in src/data/site.ts (used for sitemap + canonical links).
export default defineConfig({
  site: "https://example.com", // TODO: real domain
  trailingSlash: "always",
  build: { format: "directory" },
  integrations: [react(), sitemap()],
  vite: { plugins: [tailwindcss()] },
});
