import { motion } from "framer-motion";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext.jsx";
import { useRTL } from "../../../hooks/useRTL.js";
import { useCartStore } from "../store/cartStore.js";
import Image from "../../../components/ui/Image.jsx";
import { resolveProductImage } from "../../../lib/media/resolveProductImage.js";

export default function CartItem({ item }) {
  const { dict, lang } = useLanguage();
  const { isRTL } = useRTL();
  const { updateQuantity, removeItem } = useCartStore();

  const t = dict.cart || {};
  const price = typeof item.price === "number" ? item.price : parseFloat(String(item.price).replace(/[^0-9.]/g, "")) || 0;
  const itemTotal = price * item.quantity;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: isRTL ? 24 : -24 }}
      className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className={`flex gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
        <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
          {item.image ? (
            <Image
              src={resolveProductImage(item.image)}
              alt={item.name}
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
        </div>

        <div className={`flex-1 min-w-0 ${isRTL ? "text-right" : "text-left"}`}>
          <div className={`flex items-start justify-between gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
            <div className="min-w-0 flex-1">
              <h3 className="font-bold text-gray-900 truncate text-sm sm:text-base">
                {item.name}
              </h3>
              {item.category && (
                <p className="text-xs text-gray-500 mt-0.5 truncate">{item.category}</p>
              )}
              <p className="text-base font-black text-[#D4AF37] mt-1.5">
                ${price.toFixed(2)}
              </p>
            </div>

            <button
              type="button"
              onClick={() => removeItem(item.id)}
              className="p-2 rounded-xl text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
              aria-label={t.remove}
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          <div
            className={`mt-4 flex items-center justify-between gap-3 ${isRTL ? "flex-row-reverse" : ""}`}
          >
            <div
              className={`inline-flex items-center rounded-xl border border-gray-200 bg-gray-50/80 ${isRTL ? "flex-row-reverse" : ""}`}
            >
              <button
                type="button"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="p-2.5 min-h-[40px] min-w-[40px] flex items-center justify-center hover:bg-white rounded-l-xl transition-colors"
                aria-label={lang === "fa" ? "کاهش" : "Decrease"}
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="px-3 min-w-[2.5rem] text-center text-sm font-black text-gray-800">
                {item.quantity}
              </span>
              <button
                type="button"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="p-2.5 min-h-[40px] min-w-[40px] flex items-center justify-center hover:bg-white rounded-r-xl transition-colors"
                aria-label={lang === "fa" ? "افزایش" : "Increase"}
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className={isRTL ? "text-left" : "text-right"}>
              <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                {t.itemTotal}
              </p>
              <p className="font-black text-gray-900">${itemTotal.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
