import { getProducts } from "../services/productService.js";

export function listProducts(req, res) {
  const products = getProducts();
  res.json({ data: products, total: products.length });
}

export function getProduct(req, res) {
  const products = getProducts();
  const id = Number(req.params.id);
  const product = products.find((p) => p.id === id);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  res.json({ data: product });
}
