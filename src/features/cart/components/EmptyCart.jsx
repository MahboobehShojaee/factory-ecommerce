import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext.jsx";
import { getLocalizedNavPath } from "../../../content/navigation/data.js";

export default function EmptyCart({ onClose = () => {} }) {
  const { dict, lang } = useLanguage();
  const t = dict.cart || {};

  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[320px] text-center px-4 py-10">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative mb-8"
      >
        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center border border-gray-100 shadow-inner">
          <ShoppingBag className="w-12 h-12 text-gray-300" strokeWidth={1.25} />
        </div>
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-16 rounded-full bg-[#D4AF37]/40 blur-sm" />
      </motion.div>

      <h3 className="text-xl font-black text-gray-900 tracking-tight mb-2">
        {t.emptyTitle}
      </h3>
      <p className="text-sm text-gray-500 max-w-xs leading-relaxed mb-8">
        {t.emptyMessage}
      </p>

      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
        <Link
          to={getLocalizedNavPath("/products", lang)}
          onClick={onClose}
          className="btn-cinematic-gold flex-1 min-h-[48px] text-[11px]"
        >
          {t.startShopping}
        </Link>
        <button
          type="button"
          onClick={onClose}
          className="flex-1 min-h-[48px] rounded-2xl border border-gray-200 text-[11px] font-black uppercase tracking-wider text-gray-600 hover:bg-gray-50 transition-colors"
        >
          {t.continueShopping}
        </button>
      </div>
    </div>
  );
}
