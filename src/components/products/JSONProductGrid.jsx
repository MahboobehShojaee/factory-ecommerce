import React, { useState, useCallback } from "react";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { useCartStore } from "../../features/cart/store/cartStore.js";
import { useRTL } from "../../hooks/useRTL.js";
import PreviewModal from "./PreviewModal.jsx";
import { useProductsQuery } from "../../api/hooks/useProductsQuery.js";
import {
  LoadingState,
  ErrorState,
  EmptyState,
} from "../../components/ui/AsyncState.jsx";
import { ProductSearchBar } from "./ProductSearchBar.jsx";
import { CategoryFilter } from "./CategoryFilter.jsx";
import { GridProductCard } from "./GridProductCard.jsx";
import { Pagination } from "../../components/ui/Pagination.jsx";
import { CATEGORY_FILTERS } from "../../constants/productFilters.js";
import { resolveProductImage } from "../../lib/media/resolveProductImage.js";

export default function JSONProductGrid() {
  const { lang } = useLanguage();
  const { isRTL } = useRTL();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [wishlist, setWishlist] = useState(new Set());
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [addedItems, setAddedItems] = useState({});
  const { addItem } = useCartStore();
  const productsQuery = useProductsQuery();
  const ITEMS_PER_PAGE = 12;

  // Filter products based on search term and category
  const filteredProducts = React.useMemo(() => {
    let products = productsQuery.data || [];

    // Apply category filter
    if (selectedCategory !== null) {
      const filter = CATEGORY_FILTERS[selectedCategory];
      if (filter) {
        products = products.filter((product) =>
          filter.match.includes(product.category.en),
        );
      }
    }

    // Apply search filter
    if (searchTerm.trim()) {
      products = products.filter(
        (product) =>
          product.name[lang].toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description[lang]
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          product.category[lang]
            .toLowerCase()
            .includes(searchTerm.toLowerCase()),
      );
    }

    return products;
  }, [productsQuery.data, lang, searchTerm, selectedCategory]);

  // Pagination logic
  const paginatedProducts = React.useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  // Reset page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const handleProductClick = useCallback((product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  }, []);

  const handleAddToWishlist = useCallback((productId) => {
    setWishlist((prev) => {
      const newWishlist = new Set(prev);
      if (newWishlist.has(productId)) {
        newWishlist.delete(productId);
      } else {
        newWishlist.add(productId);
      }
      return newWishlist;
    });
  }, []);

  const handleAddToCart = useCallback(
    (product) => {
      if (addedItems[product.id]) return;
      const cartProduct = {
        id: product.id,
        name: product.name[lang],
        category: product.category[lang],
        price: product.price,
        image: resolveProductImage(product.image),
      };
      addItem(cartProduct, 1);
      setAddedItems((prev) => ({ ...prev, [product.id]: true }));
      setTimeout(() => {
        setAddedItems((prev) => ({ ...prev, [product.id]: false }));
      }, 2000);
    },
    [addItem, addedItems, lang],
  );

  if (productsQuery.isLoading) {
    return (
      <LoadingState
        label={
          lang === "fa" ? "در حال بارگذاری محصولات..." : "Loading products..."
        }
      />
    );
  }

  if (productsQuery.error) {
    return (
      <ErrorState
        title={
          lang === "fa" ? "خطا در دریافت محصولات" : "Failed to load products"
        }
        description={productsQuery.error.message}
        onRetry={productsQuery.refetch}
      />
    );
  }

  return (
    <>
      {/* Search and Filter Bar - Collapsible */}
      <div className="mb-6">
        <ProductSearchBar
          searchTerm={searchTerm}
          onSearchChange={(e) => setSearchTerm(e.target.value)}
          showFilters={showFilters}
          onToggleFilters={() => setShowFilters(!showFilters)}
          hasActiveFilter={selectedCategory !== null}
        />

        {/* Collapsible Category Filters */}
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={(index) => setSelectedCategory(index)}
          showFilters={showFilters}
        />
      </div>

      {/* Compact Product Grid */}
      <div
        id="json-products"
        role="region"
        aria-label="Product listings"
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {paginatedProducts.map((product, index) => (
          <GridProductCard
            key={product.id}
            product={product}
            index={index}
            onClick={handleProductClick}
            onAddToCart={handleAddToCart}
            isAdded={!!addedItems[product.id]}
            viewLabel={lang === "fa" ? "مشاهده محصول" : "View Product"}
          />
        ))}
      </div>

      {filteredProducts.length === 0 ? (
        <div className="py-8">
          <EmptyState
            title={lang === "fa" ? "محصولی یافت نشد" : "No products found"}
            description={
              searchTerm.trim()
                ? lang === "fa"
                  ? `برای جستجوی "${searchTerm}" نتیجه‌ای وجود ندارد`
                  : `No results found for "${searchTerm}"`
                : undefined
            }
          />
        </div>
      ) : null}

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      {/* Preview Modal */}
      <PreviewModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddToWishlist={handleAddToWishlist}
        isInWishlist={
          selectedProduct ? wishlist.has(selectedProduct.id) : false
        }
        isRTL={isRTL}
      />
    </>
  );
}
