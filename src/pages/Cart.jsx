import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import { useRTL } from "../hooks/useRTL.js";
import { useCartStore } from "../features/cart/store/cartStore.js";
import { getLocalizedNavPath } from "../content/navigation/data.js";
import SeoHead from "../lib/seo/SeoHead.jsx";
import CartItem from "../features/cart/components/CartItem.jsx";
import EmptyCart from "../features/cart/components/EmptyCart.jsx";
import { FadeInUp } from "../animations/motionPresets.jsx";
import { SectionHeader } from "../components/layout/SectionWrapper.jsx";
import { Card } from "../components/ui/Card.jsx";
import { Heading } from "../components/ui/Typography.jsx";

export default function Cart() {
  const { dict, lang } = useLanguage();
  const { isRTL, dirClass } = useRTL();
  const { items, getTotalPrice, getTotalItems, clearCart } = useCartStore();

  const t = dict.cart || {};
  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  return (
    <>
      <SeoHead
        title={isRTL ? "سبد خرید | ستاره کرمان" : "Cart | Setareh Kerman"}
        description={
          isRTL
            ? "سبد خرید شما - مدیریت و درخواست استعلام محصولات انتخاب شده"
            : "Your cart - manage items and request a quotation"
        }
        noindex
      />

      <section className={`min-h-[60vh] py-10 sm:py-12 md:py-16 ${dirClass}`}>
        <SectionHeader
          title={t.title}
          description={`${totalItems} ${t.items}`}
          align="center"
          headingLevel={1}
        />

        {items.length === 0 ? (
          <FadeInUp>
            <div className="max-w-lg mx-auto mt-8">
              <Card className="p-6 sm:p-10 border-gray-100 shadow-xl">
                <EmptyCart />
              </Card>
            </div>
          </FadeInUp>
        ) : (
          <div className="mt-10 grid lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-2 space-y-3">
              {items.map((item, index) => (
                <FadeInUp key={item.id} delay={index * 0.06}>
                  <CartItem item={item} />
                </FadeInUp>
              ))}
            </div>

            <div className="lg:col-span-1">
              <FadeInUp delay={0.15}>
                <Card className="p-6 sm:p-8 sticky top-28 border-[#D4AF37]/20 shadow-xl">
                  <Heading level={3} className="text-lg sm:text-xl mb-6">
                    {t.summary}
                  </Heading>

                  <div className="space-y-4">
                    <div
                      className={`flex justify-between items-center ${isRTL ? "flex-row-reverse" : ""}`}
                    >
                      <span className="text-sm text-gray-600 font-medium">
                        {t.subtotal}
                      </span>
                      <span className="font-bold text-gray-900">
                        ${totalPrice.toFixed(2)}
                      </span>
                    </div>

                    <div
                      className={`flex justify-between items-center ${isRTL ? "flex-row-reverse" : ""}`}
                    >
                      <span className="text-sm text-gray-600 font-medium">
                        {t.shipping}
                      </span>
                      <span className="font-bold text-emerald-600 text-sm">
                        {t.free}
                      </span>
                    </div>

                    <div className="border-t border-gray-100 pt-4">
                      <div
                        className={`flex justify-between items-center ${isRTL ? "flex-row-reverse" : ""}`}
                      >
                        <span className="text-base font-black text-gray-900">
                          {t.total}
                        </span>
                        <span className="text-2xl font-black text-[#D4AF37]">
                          ${totalPrice.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <Link
                      to={getLocalizedNavPath("/contact", lang)}
                      className="btn-cinematic-gold w-full min-h-[52px] text-[11px] mt-2"
                    >
                      {t.checkout}
                    </Link>

                    <Link
                      to={getLocalizedNavPath("/products", lang)}
                      className="block w-full text-center min-h-[44px] leading-[44px] rounded-2xl border border-gray-200 text-[11px] font-black uppercase tracking-wider text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      {t.continueShopping}
                    </Link>

                    <button
                      type="button"
                      onClick={clearCart}
                      className="w-full py-2 text-xs font-bold text-red-500 hover:text-red-600 transition-colors"
                    >
                      {t.clearCart}
                    </button>
                  </div>
                </Card>
              </FadeInUp>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
