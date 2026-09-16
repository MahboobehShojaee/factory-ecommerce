import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext.jsx";
import { useCartStore } from "../store/cartStore.js";

export default function CartIcon() {
  const { dict, lang } = useLanguage();
  const { openCart, getTotalItems } = useCartStore();

  const totalItems = getTotalItems();
  const t = dict.cart || {};

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      onClick={openCart}
      className="relative p-2.5 lg:p-1.5 rounded-full border border-transparent hover:border-gray-100 hover:bg-gray-50 transition-all min-h-[44px] min-w-[44px] lg:min-h-[2.15rem] lg:min-w-[2.15rem] flex items-center justify-center"
      aria-label={t.openCart}
    >
      <ShoppingCart className="w-5 h-5 text-[#374151]" strokeWidth={2} />

      {totalItems > 0 && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className={`absolute -top-0.5 min-w-[1.25rem] h-5 px-1 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white rounded-full flex items-center justify-center text-[10px] font-black shadow-md ${
            lang === "fa" ? "-left-0.5" : "-right-0.5"
          }`}
        >
          {totalItems > 99 ? "99+" : totalItems}
        </motion.span>
      )}
    </motion.button>
  );
}
