import productsFallback from "../../../server/data/products.json";
import { getAllCategories, getCategoryBySlug } from "../../constants/categories.js";
import { apiClient } from "../client.js";

async function fetchWithFallback(fetcher, fallback) {
  try {
    const { data } = await fetcher();
    return data.data;
  } catch {
    return fallback();
  }
}

export async function fetchProducts() {
  return fetchWithFallback(
    () => apiClient.get("/api/products"),
    () => productsFallback,
  );
}

export async function fetchProductCategories() {
  return getAllCategories();
}

export async function fetchCategoryBySlug(slug) {
  return getCategoryBySlug(slug);
}
