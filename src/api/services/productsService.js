import { getAllCategories, getCategoryBySlug } from "../../constants/categories.js";
import { apiClient } from "../client.js";

async function fetchWithFallback(fetcher, fallback) {
  try {
    const { data } = await fetcher();
    return data.data;
  } catch (error) {
    if (error.response) throw error;
    return fallback();
  }
}

async function loadProductsFallback() {
  const { default: products } = await import("../../../server/data/products.json");
  return products;
}

export async function fetchProducts() {
  return fetchWithFallback(
    () => apiClient.get("/api/products"),
    loadProductsFallback,
  );
}

export async function fetchProductCategories() {
  return getAllCategories();
}

export async function fetchCategoryBySlug(slug) {
  return getCategoryBySlug(slug);
}
