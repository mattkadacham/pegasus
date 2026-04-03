import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  const siteUrl = env.VITE_SITE_URL || "https://mattkadacham.github.io/pegasus/";
  const basePath = env.VITE_SITE_BASE_PATH || "/pegasus/";

  return {
    base: basePath,
    plugins: [
      react(),
      {
        name: "site-url-html-replacements",
        transformIndexHtml(html) {
          return html.replace(/%SITE_URL%/g, siteUrl);
        },
      },
    ],
  };
});
