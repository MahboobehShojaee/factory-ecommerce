import React, { useEffect, useRef, useMemo } from "react";

import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useNavigate } from "react-router-dom";

import { getCategoryByName } from "../../constants/categories.js";

import { useRTL } from "../../hooks/useRTL.js";

import { Heading, Text } from "../../components/ui/Typography.jsx";

const ProductCard = React.memo(function ProductCard({

  category,

  lang = "fa",

  isHighlighted = false,

  onClickHighlight, // برای اتصال به ChatBot یا هایلایت

}) {

  const refScroll = useRef(null);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const navigate = useNavigate();

  const { isRTL } = useRTL();



  // 🧠 Safety checks and پشتیبانی همزمان از دیتای قدیم و جدید

  if (!category || typeof category !== 'object') {

    return null;

  }



  const name =

    typeof category.name === "object" ? category.name?.[lang] || category.name?.en || '' : category.name || '';



  const subtitle =

    typeof category.subtitle === "object"

      ? category.subtitle?.[lang] || category.subtitle?.en || ''

      : category.subtitle || '';



  const description =

    typeof category.description === "object"

      ? category.description?.[lang] || category.description?.en || ''

      : category.description || '';



  const highlights = Array.isArray(category.features?.[lang]) ? category.features[lang] : 

                     Array.isArray(category.features) ? category.features :

                     Array.isArray(category.highlights) ? category.highlights : [];

  const firstTwoLetters = name?.substring(0, 2) || "";



  // Get category config for stable slug

  const categoryConfig = useMemo(() => getCategoryByName(name), [name]);

  const categorySlug = categoryConfig?.slug || name.toLowerCase().replace(/\s+/g, '-');



  // Handle Technical Specs button click

  const handleTechnicalSpecsClick = (e) => {

    e.stopPropagation(); // Prevent card click

    // Navigate to category specs page using stable slug

    navigate(`/products/${categorySlug}/specifications`);

  };



  // 🔥 اسکرول خودکار هنگام highlight

  useEffect(() => {

    if (isHighlighted && refScroll.current) {

      refScroll.current.scrollIntoView({ behavior: "smooth", block: "center" });

    }

  }, [isHighlighted]);



  if (!inView) return <div ref={ref} className="h-[350px] w-full"></div>;



  return (

    <motion.article

      ref={(node) => {

        ref(node);

        refScroll.current = node;

      }}

      layout

      initial={{ opacity: 0, scale: 0.95 }}

      animate={{ opacity: 1, scale: isHighlighted ? 1.02 : 1 }}

      exit={{ opacity: 0, scale: 0.95 }}

      className={`category-card-premium group relative flex flex-col justify-between cursor-pointer touch-manipulation ${
        isHighlighted ? "border-[#D4AF37] ring-1 ring-[#D4AF37]/20" : ""
      }`}

      onClick={() => onClickHighlight && onClickHighlight(category.id || name)}

    >

      {/* ✨ Highlight Glow */}

      {isHighlighted && (

        <div className="absolute inset-0 bg-[#D4AF37]/5 pointer-events-none" />

      )}



      {/* Watermark */}

      <div

        className={`absolute pointer-events-none opacity-[0.03] text-9xl font-black select-none uppercase tracking-tighter ${

          isRTL ? "-left-6 -top-6" : "-right-6 -top-6"

        }`}

      >

        Setareh

      </div>



      {/* Header */}

      <div className="p-4 sm:p-8 pb-0">

        <div

          className={`flex items-start justify-between gap-3 sm:gap-4 ${

            isRTL ? "flex-row" : "flex-row-reverse"

          }`}

        >

          <div className={`space-y-1 sm:space-y-2 flex-1 min-w-0 ${isRTL ? "text-right" : "text-left"}`}>

            <div

              className={`flex items-center gap-2 ${isRTL ? "justify-end" : "justify-start"}`}

            >

              {!isRTL && <span className="h-[2px] w-3 sm:w-4 bg-[#D4AF37]" />}

              <Text size="xs" weight="black" className="text-[#D4AF37] uppercase tracking-widest">

                {subtitle || ""}

              </Text>

              {isRTL && <span className="h-[2px] w-3 sm:w-4 bg-[#D4AF37]" />}

            </div>

            <Heading level={3} className="text-lg sm:text-2xl group-hover:text-[#D4AF37] transition-colors leading-tight">

              {name || ""}

            </Heading>

          </div>



          <div className="flex h-12 w-12 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-[16px] sm:rounded-[22px] bg-[#374151] text-[#D4AF37] shadow-lg sm:shadow-xl group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-500">

            <span className="text-[10px] sm:text-xs font-black rotate-[-12deg] group-hover:rotate-0 transition-transform">

              {firstTwoLetters}

            </span>

          </div>

        </div>



        <Text size="sm" weight="medium" className="mt-2 sm:mt-4 leading-relaxed text-gray-500 overflow-hidden line-clamp-2">

          {description || ""}

        </Text>

      </div>



      {/* Highlights */}

      {highlights.length > 0 && (

        <div className="px-4 sm:px-8 mt-3 sm:mt-4">

          <div className="rounded-[16px] sm:rounded-[20px] bg-gray-50/50 border border-gray-100 p-3 sm:p-4">

            <ul className="space-y-2 sm:space-y-3">

              {highlights.slice(0, 2).map((item) => (

                <li

                  key={item}

                  className={`flex items-center gap-2 sm:gap-3 text-[9px] sm:text-[11px] font-bold text-[#4B5563] ${

                    isRTL ? "justify-end text-right" : "justify-start text-left"

                  }`}

                >

                  <span

                    className={`${

                      isRTL ? "order-last" : "order-first"

                    } flex h-4 w-4 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37]`}

                  >

                    <svg

                      className="h-2.5 w-2.5 sm:h-3 sm:w-3"

                      fill="none"

                      viewBox="0 0 24 24"

                      stroke="currentColor"

                    >

                      <path

                        strokeLinecap="round"

                        strokeLinejoin="round"

                        strokeWidth={4}

                        d="M5 13l4 4L19 7"

                      />

                    </svg>

                  </span>

                  <span className="text-ellipsis">{item}</span>

                </li>

              ))}

            </ul>

          </div>

        </div>

      )}



      {/* Footer - Simplified */}
      <div className="p-4 sm:p-6 flex items-center justify-between">
        <div className="h-[1px] flex-1 bg-gray-100"></div>
        <motion.button
          whileHover={{ x: isRTL ? -3 : 3, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleTechnicalSpecsClick}
          className={`${
            isRTL ? "mr-3 sm:mr-4" : "ml-3 sm:ml-4"
          } flex items-center gap-2 text-[8px] sm:text-[10px] font-black text-[#374151] uppercase tracking-[0.1em] group/btn cursor-pointer touch-manipulation`}
        >
          <span className="group-hover/btn:text-[#D4AF37] transition-colors whitespace-nowrap">
            {isRTL ? "\u0645\u0634\u0627\u0647\u062F\u0647 \u0645\u062D\u0635\u0648\u0644\u0627\u062A" : "View Details"}
          </span>
          <div
            className={`flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-gray-100 group-hover/btn:bg-[#D4AF37] group-hover/btn:text-white transition-all ${
              isRTL ? "" : "rotate-180"
            }`}
          >
            <span className="text-xs sm:text-sm">{'\u2190'}</span>
          </div>
        </motion.button>
      </div>

    </motion.article>

  );

});



ProductCard.displayName = 'ProductCard';



export default ProductCard;

