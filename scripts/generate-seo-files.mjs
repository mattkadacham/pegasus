import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { loadEnv } from "vite";

const rootDir = process.cwd();
const publicDir = path.join(rootDir, "public");
const env = loadEnv(process.env.NODE_ENV || "production", rootDir, "");

const rawSiteUrl = env.VITE_SITE_URL || process.env.VITE_SITE_URL || "https://mattkadacham.github.io/pegasus/";
const rawBasePath = env.VITE_SITE_BASE_PATH || process.env.VITE_SITE_BASE_PATH || "/pegasus/";

const siteUrl = rawSiteUrl.endsWith("/") ? rawSiteUrl : `${rawSiteUrl}/`;
const trimmedBasePath = rawBasePath.replace(/\/+$/, "");
const basePath = trimmedBasePath.startsWith("/") ? trimmedBasePath : `/${trimmedBasePath}`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}sitemap.xml
`;

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}</loc>
  </url>
  <url>
    <loc>${siteUrl}drinks</loc>
  </url>
</urlset>
`;

const notFoundHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Pegasus Tap Room</title>
    <script>
      (function () {
        var location = window.location;
        var basePath = "${basePath}";
        var nextPath = location.pathname + location.search + location.hash;

        sessionStorage.setItem("pegasus-path", nextPath);
        location.replace(location.origin + basePath + "/");
      })();
    </script>
  </head>
  <body></body>
</html>
`;

await mkdir(publicDir, { recursive: true });
await writeFile(path.join(publicDir, "robots.txt"), robots);
await writeFile(path.join(publicDir, "sitemap.xml"), sitemap);
await writeFile(path.join(publicDir, "404.html"), notFoundHtml);
