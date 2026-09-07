/**
 * Copy product photos to public/products/ with ASCII filenames for Linux hosting.
 * Run: node scripts/sync-product-images.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const sourceDir = path.join(root, "src/assets/images/products");
const targetDir = path.join(root, "public/products");

const files = [
  { source: "سیم افشان.jpg", target: "sim-afshan.jpg", publicPath: "/products/sim-afshan.jpg" },
  { source: "کابل افشان.jpg", target: "kabel-afshan.jpg", publicPath: "/products/kabel-afshan.jpg" },
  { source: "کابل مفتول.jpg", target: "kabel-maftol.jpg", publicPath: "/products/kabel-maftol.jpg" },
  { source: "کابل آلومینیوم.jpg", target: "kabel-aluminum.jpg", publicPath: "/products/kabel-aluminum.jpg" },
  { source: "کابل مخابراتی.jpg", target: "kabel-mokhaberati.jpg", publicPath: "/products/kabel-mokhaberati.jpg" },
  { source: "کابل کواکسیال.jpg", target: "kabel-coaxial.jpg", publicPath: "/products/kabel-coaxial.jpg" },
  { source: "سیم نایلون.jpg", target: "sim-naylon.jpg", publicPath: "/products/sim-naylon.jpg" },
  { source: "کابل شبکه.jpg", target: "kabel-shabakeh.jpg", publicPath: "/products/kabel-shabakeh.jpg" },
];

fs.mkdirSync(targetDir, { recursive: true });

for (const file of files) {
  const from = path.join(sourceDir, file.source);
  const to = path.join(targetDir, file.target);
  if (!fs.existsSync(from)) {
    console.warn(`Skip missing source: ${file.source}`);
    continue;
  }
  fs.copyFileSync(from, to);
  console.log(`${file.source} -> ${file.target}`);
}

const productsPath = path.join(root, "server/data/products.json");
let productsJson = fs.readFileSync(productsPath, "utf-8");

for (const file of files) {
  const legacy = `/src/assets/images/products/${file.source}`;
  productsJson = productsJson.split(legacy).join(file.publicPath);
}

fs.writeFileSync(productsPath, productsJson);
console.log("Updated server/data/products.json image paths");
