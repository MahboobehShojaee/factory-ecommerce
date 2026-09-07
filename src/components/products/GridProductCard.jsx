/**
 * Premium grid product card for catalog
 */

import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { useRTL } from "../../hooks/useRTL.js";
import { Heading, Text } from "../ui/Typography.jsx";
import { resolveProductImage } from "../../lib/media/resolveProductImage.js";

export const GridProductCard = React.memo(function GridProductCard({
  product,
  index,
  onClick,
  onAddToCart,
  viewLabel,
  isAdded,
}) {
  const { lang } = useLanguage();
  const { isRTL } = useRTL();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const handleClick = useCallback(() => onClick(product), [onClick, product]);

  const handleAdd = useCallback(
    (e) => {
      e.stopPropagation();
      onAddToCart?.(product);
    },
    [onAddToCart, product],
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.4) }}
      className="group h-full"
    >
      <div
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={(e) => e.key === "Enter" && handleClick()}
        className="product-card-premium h-full flex flex-col cursor-pointer touch-manipulation !shadow-sm"
        aria-label={`${product.name[lang]} — ${viewLabel}`}
      >
        <div className="media-frame-aspect flex-shrink-0">
          <img
            src={resolveProductImage(product.image)}
            alt={product.name[lang]}
            loading="lazy"
            className="absolute inset-0 media-cover transition-transform duration-500 group-hover:scale-[1.02]"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <span
            className={`absolute top-3 ${isRTL ? "right-3" : "left-3"} inline-flex px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#D4AF37] text-[9px] font-black uppercase tracking-wider shadow-lg`}
          >
            {product.category[lang]}
          </span>
        </div>

        <div className={`flex flex-col flex-1 p-4 sm:p-5 gap-0 ${isRTL ? "text-right" : "text-left"}`}>
          <Heading
            level={3}
            className="text-base sm:text-lg leading-snug mb-2 line-clamp-2 group-hover:text-[#D4AF37] transition-colors"
          >
            {product.name[lang]}
          </Heading>

          <Text size="xs" className="text-gray-500 leading-relaxed mb-4 line-clamp-2 flex-1">
            {product.description[lang]}
          </Text>

          <div className={`flex gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleClick}
              className="flex-1 btn-cinematic-dark min-h-[44px] text-[10px] gap-1.5"
            >
              {viewLabel}
              <Arrow className="w-3.5 h-3.5" aria-hidden />
            </motion.button>

            {onAddToCart && (
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAdd}
                className={`min-h-[44px] min-w-[44px] rounded-2xl flex items-center justify-center transition-all ${
                  isAdded
                    ? "bg-emerald-500 text-white"
                    : "bg-[#D4AF37]/15 text-[#B8860B] hover:bg-[#D4AF37] hover:text-white"
                }`}
                aria-label={lang === "fa" ? "افزودن به سبد" : "Add to cart"}
              >
                <ShoppingCart className="w-5 h-5" aria-hidden />
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
});
