import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const productsPath = path.join(__dirname, "../data/products.json");

const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"));

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === id) || null;
}

export function findRelevantProducts(query, lang) {
  if (!query || typeof query !== "string") return [];
  const normalized = query.toLowerCase();
  return products
    .filter((p) => {
      const name = (p.name[lang] || "").toLowerCase();
      const desc = (p.description[lang] || "").toLowerCase();
      return name.includes(normalized) || desc.includes(normalized);
    })
    .slice(0, 3);
}

export function buildProductContext(productsList, lang) {
  if (!productsList.length) return "";
  return productsList
    .map(
      (p) => `
Product: ${p.name[lang]}
Category: ${p.category[lang]}
Description: ${p.description[lang]}
Features: ${p.features[lang]?.join(", ") || ""}
Applications: ${p.applications[lang]?.join(", ") || ""}
`,
    )
    .join("\n");
}
