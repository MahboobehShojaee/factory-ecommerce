/**
 * Writes domain-aware robots.txt, sitemap.xml, and patches liara_nginx CSP in dist/.
 * Uses VITE_SITE_URL and VITE_API_BASE_URL from the build environment.
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const distDir = resolve(root, "dist");

const DEFAULT_SITE_URL = "https://setarehkerman.com";
const DEFAULT_API_BASE_URL = "https://api.setarehkerman.com";

function stripTrailingSlash(value) {
  return String(value || "").trim().replace(/\/$/, "");
}

const siteUrl = stripTrailingSlash(process.env.VITE_SITE_URL || DEFAULT_SITE_URL);
const apiUrl = stripTrailingSlash(process.env.VITE_API_BASE_URL || DEFAULT_API_BASE_URL);

if (!existsSync(distDir)) {
  console.warn("[generate-deploy-seo] dist/ not found; skipping.");
  process.exit(0);
}

const sitemapTemplate = readFileSync(resolve(root, "public/sitemap.xml"), "utf8");
writeFileSync(
  resolve(distDir, "sitemap.xml"),
  sitemapTemplate.replaceAll(DEFAULT_SITE_URL, siteUrl),
);

writeFileSync(
  resolve(distDir, "robots.txt"),
  `# Robots.txt for Setareh Kerman Wire & Cable
# ${siteUrl}

User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`,
);

const nginxPath = resolve(distDir, "liara_nginx.conf");
if (existsSync(nginxPath)) {
  let nginx = readFileSync(nginxPath, "utf8");
  nginx = nginx.replace(
    /connect-src 'self'[^;]+/,
    `connect-src 'self' ${apiUrl} https://www.google-analytics.com https://region1.google-analytics.com https://www.clarity.ms https://*.clarity.ms`,
  );
  writeFileSync(nginxPath, nginx);
}

console.log(`[generate-deploy-seo] site=${siteUrl} api=${apiUrl}`);
