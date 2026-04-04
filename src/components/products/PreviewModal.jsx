import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext.jsx";

export default function PreviewModal({ 
  product, 
  isOpen, 
  onClose, 
  onAddToWishlist, 
  onAddToCompare,
  isInWishlist,
  isInCompare,
  isRTL 
}) {
  const { lang } = useLanguage();

  if (!product) return null;

  const handleAddToWishlist = () => {
    onAddToWishlist(product.id);
  };

  const handleAddToCompare = () => {
    onAddToCompare(product.id);
  };

  const handleRequestInfo = () => {
    // Navigate to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      onClose();
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-[9998]"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-[30px] shadow-2xl overflow-hidden">
              {/* Modal Header */}
              <div className="relative h-48 bg-gradient-to-br from-[#374151] to-[#4B5563] overflow-hidden flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.name[lang]}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                
                {/* Placeholder */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ display: 'none' }}
                >
                  <div className="text-center">
                    <div className="w-20 h-20 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mb-3 mx-auto">
                      <svg className="w-10 h-10 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                      </svg>
                    </div>
                    <div className="text-white/60 text-xs font-mono">
                      {product.category[lang]}
                    </div>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors z-[10000]"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-[#D4AF37] text-[10px] font-black rounded-full uppercase tracking-wider shadow-lg">
                    {product.category[lang]}
                  </span>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-12rem)]">
                {/* Product Title & Price */}
                <div className="mb-6">
                  <h3 className="text-2xl font-black text-[#374151] leading-tight mb-2">
                    {product.name[lang]}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-[#D4AF37]">
                      {product.price}
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="text-[10px] font-black tracking-widest text-[#D4AF37] uppercase mb-3">
                    {lang === "fa" ? "توضیحات" : "Description"}
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-500 font-medium">
                    {product.description[lang]}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-[10px] font-black tracking-widest text-[#D4AF37] uppercase mb-3">
                    {lang === "fa" ? "ویژگی‌ها" : "Features"}
                  </h4>
                  <ul className="space-y-2">
                    {product.features[lang].map((feature, idx) => (
                      <li key={idx} className={`flex items-center gap-3 text-[11px] font-bold text-[#4B5563] ${isRTL ? "justify-end text-right" : "justify-start text-left"}`}>
                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] ${isRTL ? "order-last" : "order-first"}`}
                        >
                          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Applications */}
                <div className="mb-6">
                  <h4 className="text-[10px] font-black tracking-widest text-[#D4AF37] uppercase mb-3">
                    {lang === "fa" ? "کاربردها" : "Applications"}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.applications[lang].map((application, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] text-xs rounded-full border border-[#D4AF37]/20"
                      >
                        {application}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <button
                    onClick={handleRequestInfo}
                    className="flex-1 bg-[#D4AF37] text-white py-3 rounded-[20px] font-black text-[10px] uppercase tracking-widest hover:bg-[#B8941F] transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    {lang === "fa" ? "درخواست اطلاعات" : "Request Info"}
                  </button>
                  
                  <div className="flex gap-3">
                    <button
                      onClick={handleAddToWishlist}
                      className={`px-4 py-3 rounded-[20px] border-2 transition-all duration-300 ${
                        isInWishlist 
                          ? "bg-[#D4AF37] text-white border-[#D4AF37]" 
                          : "bg-white text-gray-600 border-gray-200 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                      }`}
                    >
                      <svg className="w-5 h-5" fill={isInWishlist ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    
                    <button
                      onClick={handleAddToCompare}
                      className={`px-4 py-3 rounded-[20px] border-2 transition-all duration-300 ${
                        isInCompare 
                          ? "bg-[#D4AF37] text-white border-[#D4AF37]" 
                          : "bg-white text-gray-600 border-gray-200 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
