/**
 * Normalize product image URLs from API data for production/static hosting.
 */
const LEGACY_PRODUCT_IMAGE_MAP = {
  "/src/assets/images/products/سیم افشان.jpg": "/products/sim-afshan.jpg",
  "/src/assets/images/products/کابل افشان.jpg": "/products/kabel-afshan.jpg",
  "/src/assets/images/products/کابل مفتول.jpg": "/products/kabel-maftol.jpg",
  "/src/assets/images/products/کابل آلومینیوم.jpg": "/products/kabel-aluminum.jpg",
  "/src/assets/images/products/کابل مخابراتی.jpg": "/products/kabel-mokhaberati.jpg",
  "/src/assets/images/products/کابل کواکسیال.jpg": "/products/kabel-coaxial.jpg",
  "/src/assets/images/products/سیم نایلون.jpg": "/products/sim-naylon.jpg",
  "/src/assets/images/products/کابل شبکه.jpg": "/products/kabel-shabakeh.jpg",
};

export function resolveProductImage(image) {
  if (!image || typeof image !== "string") return "";
  if (LEGACY_PRODUCT_IMAGE_MAP[image]) return LEGACY_PRODUCT_IMAGE_MAP[image];
  if (image.startsWith("/products/")) return image;
  if (image.startsWith("/src/assets/images/products/")) {
    const filename = image.split("/").pop();
    return LEGACY_PRODUCT_IMAGE_MAP[image] || `/products/${encodeURIComponent(filename)}`;
  }
  return image;
}
