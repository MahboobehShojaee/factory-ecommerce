/**
 * Catalog Configuration
 * Centralized catalog download paths and filenames
 */

export const catalogConfig = {
  en: {
    path: "/catalog/catalog-en.pdf",
    filename: "catalog-en.pdf",
    downloadText: "Download Catalog",
  },
  fa: {
    path: "/catalog/catalog-fa.pdf",
    filename: "catalog-fa.pdf",
    downloadText: "دانلود کاتالوگ",
  },
};

/**
 * Get catalog configuration for a specific language
 */
export function getCatalogConfig(lang) {
  return catalogConfig[lang] || catalogConfig.fa;
}
