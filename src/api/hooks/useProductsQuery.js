import { useQuery } from "@tanstack/react-query";
import {
  fetchProducts,
  fetchProductCategories,
  fetchCategoryBySlug,
} from "../services/productsService.js";

export function useProductsQuery() {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5,
  });
}

export function useProductCategoriesQuery() {
  return useQuery({
    queryKey: ["product-categories"],
    queryFn: fetchProductCategories,
    staleTime: 1000 * 60 * 10,
  });
}

export function useCategorySpecsQuery(slug) {
  return useQuery({
    queryKey: ["category-specs", slug],
    queryFn: () => fetchCategoryBySlug(slug),
    enabled: Boolean(slug),
    staleTime: 1000 * 60 * 10,
  });
}
