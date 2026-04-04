import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext.jsx";
import productData from "../../../server/data/products.json";
import PreviewModal from "./PreviewModal.jsx";

export default function JSONProductGrid({ activeFilter, isRTL }) {
  const { lang } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [wishlist, setWishlist] = useState(new Set());
  const [compareList, setCompareList] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products based on active filter and search term
  const filteredProducts = React.useMemo(() => {
    let products = productData;
    
    // Apply category filter
    if (activeFilter !== "all") {
      products = products.filter(product => 
        product.category[lang] === activeFilter
      );
    }
    
    // Apply search filter
    if (searchTerm.trim()) {
      products = products.filter(product => 
        product.name[lang].toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description[lang].toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category[lang].toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return products;
  }, [activeFilter, lang, searchTerm]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleAddToWishlist = (productId) => {
    setWishlist(prev => {
      const newWishlist = new Set(prev);
      if (newWishlist.has(productId)) {
        newWishlist.delete(productId);
      } else {
        newWishlist.add(productId);
      }
      return newWishlist;
    });
  };

  const handleAddToCompare = (productId) => {
    setCompareList(prev => {
      const newCompareList = new Set(prev);
      if (newCompareList.has(productId)) {
        newCompareList.delete(productId);
      } else if (newCompareList.size < 3) {
        newCompareList.add(productId);
      }
      return newCompareList;
    });
  };

  return (
    <>
      {/* JSON Product Search Bar */}
      <div className="mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`flex items-center justify-between gap-4 ${isRTL ? "flex-row-reverse" : ""}`}
        >
          {/* Search Input */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder={lang === "fa" ? "جستجوی محصولات..." : "Search products..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full px-4 py-3 pl-12 pr-4 text-sm border border-gray-200 rounded-full focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300 ${
                  isRTL ? "pr-12 pl-4" : "pl-12 pr-4"
                }`}
              />
              <svg
                className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 ${isRTL ? "right-4" : "left-4"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Result Count */}
          <div className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
            <span className="text-sm text-gray-600">
              {filteredProducts.length} {lang === "fa" ? "محصول" : "products"}
            </span>
            
            {/* Clear Search */}
            {searchTerm.trim() && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSearchTerm("")}
                className="px-3 py-1.5 text-xs font-medium text-[#D4AF37] border border-[#D4AF37]/30 rounded-full hover:bg-[#D4AF37] hover:text-white transition-all duration-300"
              >
                {lang === "fa" ? "پاک کردن" : "Clear"}
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>

      {/* Compact Product Grid */}
      <div id="json-products" role="region" aria-label="Product listings" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group h-full"
          >
            {/* Compact Product Card */}
            <div 
              className="bg-white border border-gray-100 rounded-[20px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 cursor-pointer h-full flex flex-col"
              onClick={() => handleProductClick(product)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && handleProductClick(product)}
              aria-label={`View ${product.name[lang]} details`}
            >
              {/* Product Image Section */}
              <div className="relative h-32 bg-gradient-to-br from-[#374151] to-[#4B5563] overflow-hidden flex-shrink-0">
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name[lang]}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                
                {/* Placeholder Image with Pattern */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ display: 'none' }}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                      <svg className="w-6 h-6 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                      </svg>
                    </div>
                    <div className="text-white/60 text-[10px] font-mono">
                      {product.category[lang]}
                    </div>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-2 left-2">
                  <span className="inline-block px-2 py-1 bg-white/90 backdrop-blur-sm text-[#D4AF37] text-[8px] font-black rounded-full uppercase tracking-wider shadow-lg">
                    {product.category[lang]}
                  </span>
                </div>

                {/* Quick Actions */}
                <div className="absolute bottom-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToWishlist(product.id);
                    }}
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                      wishlist.has(product.id)
                        ? "bg-[#D4AF37] text-white"
                        : "bg-white/90 backdrop-blur-sm text-gray-600 hover:bg-[#D4AF37] hover:text-white"
                    }`}
                    aria-label={wishlist.has(product.id) ? "Remove from wishlist" : "Add to wishlist"}
                  >
                    <svg className="w-3 h-3" fill={wishlist.has(product.id) ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Compact Product Content */}
              <div className="p-4 flex flex-col flex-1">
                {/* Product Name */}
                <h3 className="text-lg font-black text-[#374151] leading-tight mb-2 group-hover:text-[#D4AF37] transition-colors line-clamp-2 flex-shrink-0">
                  {product.name[lang]}
                </h3>

                {/* Spacer to push price to bottom */}
                <div className="flex-1"></div>

                {/* Price */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-black text-[#D4AF37]">
                    {product.price}
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                </div>

                {/* View Details Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProductClick(product);
                  }}
                  className="w-full bg-[#D4AF37] text-white py-2 rounded-[12px] font-black text-[9px] uppercase tracking-widest hover:bg-[#B8941F] transition-all duration-300 shadow hover:shadow-md flex-shrink-0"
                >
                  {lang === "fa" ? "مشاهده جزئیات" : "View Details"}
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredProducts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <div className="text-gray-400 text-lg mb-4">
            {lang === "fa" ? "محصولی یافت نشد" : "No products found"}
          </div>
          <div className="text-gray-500 text-sm">
            {lang === "fa" 
              ? `برای جستجوی "${searchTerm}" نتیجه‌ای وجود ندارد` 
              : `No results found for "${searchTerm}"`
            }
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSearchTerm("")}
            className="mt-6 px-6 py-2 bg-[#D4AF37] text-white text-sm font-black rounded-full hover:bg-[#B8941F] transition-colors duration-300"
          >
            {lang === "fa" ? "پاک کردن جستجو" : "Clear Search"}
          </motion.button>
        </motion.div>
      )}

      {/* Compare Bar */}
      {compareList.size > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-full shadow-lg px-6 py-3 flex items-center gap-4 z-30"
        >
          <span className="text-sm text-gray-600">
            {compareList.size} {lang === "fa" ? "محصول برای مقایسه" : "products to compare"}
          </span>
          <button className="px-4 py-1 bg-[#D4AF37] text-white text-xs font-black rounded-full hover:bg-[#B8941F] transition-colors">
            {lang === "fa" ? "مقایسه" : "Compare"}
          </button>
          <button 
            onClick={() => setCompareList(new Set())}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </motion.div>
      )}

      {/* Preview Modal */}
      <PreviewModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddToWishlist={handleAddToWishlist}
        onAddToCompare={handleAddToCompare}
        isInWishlist={selectedProduct ? wishlist.has(selectedProduct.id) : false}
        isInCompare={selectedProduct ? compareList.has(selectedProduct.id) : false}
        isRTL={isRTL}
      />
    </>
  );
}
