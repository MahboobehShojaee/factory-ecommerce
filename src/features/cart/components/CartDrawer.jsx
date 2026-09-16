import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../../context/LanguageContext.jsx";
import { useRTL } from "../../../hooks/useRTL.js";
import { useCartStore } from "../store/cartStore.js";
import { getLocalizedNavPath } from "../../../content/navigation/data.js";
import CartItem from "./CartItem.jsx";
import EmptyCart from "./EmptyCart.jsx";

export default function CartDrawer() {
  const { dict, lang } = useLanguage();
  const { isRTL } = useRTL();
  const { isOpen, closeCart, items, getTotalPrice, getTotalItems, clearCart } =
    useCartStore();
  const drawerRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const previouslyFocused = document.activeElement;
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();

      const handleKeyDown = (event) => {
        if (event.key === "Escape") closeCart();
        if (event.key !== "Tab" || !drawerRef.current) return;

        const focusable = drawerRef.current.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
        previouslyFocused?.focus();
      };
    }
    document.body.style.overflow = "";
    return undefined;
  }, [closeCart, isOpen]);

  const t = dict.cart || {};
  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  const slideFrom = isRTL ? "-100%" : "100%";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#1f2937]/60 backdrop-blur-sm z-[110]"
            onClick={closeCart}
            aria-hidden
          />

          <motion.aside
            ref={drawerRef}
            initial={{ x: slideFrom }}
            animate={{ x: 0 }}
            exit={{ x: slideFrom }}
            transition={{ type: "spring", damping: 30, stiffness: 280 }}
            className={`cart-drawer-premium fixed top-0 h-full w-full max-w-md z-[120] flex flex-col ${
              isRTL ? "left-0 border-r border-gray-200" : "right-0 border-l border-gray-200"
            }`}
            role="dialog"
            aria-modal="true"
            aria-label={t.title}
          >
            {/* Header */}
            <div
              className={`flex items-center justify-between gap-4 p-5 sm:p-6 border-b border-gray-100 bg-white/80 backdrop-blur-md ${
                isRTL ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className={`flex items-center gap-3 min-w-0 ${isRTL ? "flex-row-reverse" : ""}`}
              >
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#B8860B] flex items-center justify-center shadow-lg shadow-[#D4AF37]/30 shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div className={isRTL ? "text-right" : "text-left"}>
                  <h2 className="text-lg font-black text-gray-900 tracking-tight">
                    {t.title}
                  </h2>
                  <p className="text-xs text-gray-500 font-medium">
                    {totalItems} {t.items}
                  </p>
                </div>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeCart}
                className="p-2.5 rounded-2xl border border-gray-200 hover:bg-gray-50 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label={lang === "fa" ? "بستن" : "Close"}
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5">
              {items.length === 0 ? (
                <EmptyCart onClose={closeCart} />
              ) : (
                <div className="space-y-3">
                  <AnimatePresence mode="popLayout">
                    {items.map((item) => (
                      <CartItem key={item.id} item={item} />
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-gray-100 p-5 sm:p-6 space-y-4 bg-white">
                <div
                  className={`flex items-center justify-between ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  <span className="text-sm font-bold text-gray-600 uppercase tracking-wider">
                    {t.subtotal}
                  </span>
                  <span className="text-2xl font-black text-[#D4AF37]">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>

                <div className="space-y-2.5">
                  <Link
                    to={getLocalizedNavPath("/contact", lang)}
                    onClick={closeCart}
                    className="btn-cinematic-gold w-full min-h-[48px] text-[11px]"
                  >
                    {t.checkout}
                  </Link>

                  <button
                    type="button"
                    onClick={clearCart}
                    className="w-full min-h-[44px] rounded-2xl border border-gray-200 text-gray-600 text-[11px] font-black uppercase tracking-wider hover:bg-gray-50 transition-colors"
                  >
                    {t.clearCart}
                  </button>

                  <button
                    type="button"
                    onClick={closeCart}
                    className="w-full py-2 text-[10px] font-bold text-gray-400 hover:text-[#374151] uppercase tracking-widest transition-colors"
                  >
                    {t.continueShopping}
                  </button>
                </div>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
