import React from "react";
import { useLanguage } from "../context/LanguageContext.jsx";
import { Toaster } from "react-hot-toast";

import HeaderSection from "../components/contact/HeaderSection.jsx";
import ContactForm from "../components/contact/ContactForm.jsx";
import SidebarInfo from "../components/contact/SidebarInfo.jsx";
import SurveyForm from "../components/contact/SurveyForm.jsx";
import SeoHead from "../lib/seo/SeoHead.jsx";
import { buildBreadcrumbSchema, buildLocalBusinessSchema } from "../lib/seo/schema.js";
import { useRTL } from "../hooks/useRTL.js";
import { FadeInUp } from "../animations/motionPresets.jsx";
import { Heading, Text } from "../components/ui/Typography.jsx";
import { SectionWrapper } from "../components/layout/SectionWrapper.jsx";

export default function Contact() {
  const { dict } = useLanguage();
  const { isRTL, dirClass } = useRTL();
  const t = dict?.contact || {};
  const projectOptions = t.projectOptions || [];
  const cableOptions = t.cableOptions || [];

  return (
    <>
      <SeoHead
        title={isRTL ? "تماس با ما | ستاره کرمان" : "Contact Us | Setareh Kerman"}
        description={
          isRTL
            ? "برای استعلام پروژه و دریافت مشاوره مهندسی کابل با تیم ستاره کرمان تماس بگیرید."
            : "Contact Setareh Kerman for cable project inquiries, engineering consultation, and procurement support."
        }
        canonical="/contact"
        jsonLd={[
          buildBreadcrumbSchema([
            { name: isRTL ? "خانه" : "Home", url: "https://setarehkerman.com" },
            { name: isRTL ? "تماس با ما" : "Contact Us", url: "https://setarehkerman.com/contact" },
          ]),
          buildLocalBusinessSchema(),
        ]}
      />
      <section className={`space-y-6 pb-16 relative ${dirClass}`}>
        <Toaster position="top-right" reverseOrder={false} />

        {/* Hero Header */}
        <SectionWrapper padding="py-6 sm:py-8 md:py-10">
          <FadeInUp delay={0}>
            <HeaderSection t={t} />
          </FadeInUp>
        </SectionWrapper>

        {/* Main Contact Section */}
        <section className="container mx-auto px-4 sm:px-6" aria-label="Contact form and information">
          <FadeInUp delay={0.2}>
            <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-start">
              <ContactForm
                t={t}
                projectOptions={projectOptions}
                cableOptions={cableOptions}
              />
              <SidebarInfo t={t} />
            </div>
          </FadeInUp>
        </section>

      {/* WhatsApp Call-to-Action Section */}
      <section className="container mx-auto px-4 sm:px-6" aria-label="WhatsApp contact">
        <FadeInUp delay={0.4}>
          <div className="bg-[#374151] border border-white/10 p-6 sm:p-8 md:p-10 rounded-[30px] sm:rounded-[45px] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37]/5 rounded-full translate-x-10 -translate-y-10 blur-3xl" />
            <div className="relative z-10 space-y-6">
              <div className={`w-16 h-1.5 bg-[#D4AF37] rounded-full shadow-[0_0_15px_rgba(212,175,55,0.4)] ${isRTL ? "mr-0 ml-auto" : ""}`} />
              <Text size="lg" weight="medium" className="text-gray-200 leading-relaxed">
                {isRTL
                  ? "برای سفارش‌های عمده، مشخصات سفارشی و فرصت‌های همکاری با تیم فروش ما تماس بگیرید."
                  : "For bulk orders, custom specifications, and partnership opportunities, please contact our sales team."}
              </Text>
              <a
                href="https://wa.me/989132445950"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#B8960C] hover:from-[#E5C158] hover:to-[#D4AF37] text-[#111827] font-black px-8 py-4 rounded-2xl transition-all duration-500 shadow-xl hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:scale-[1.02]"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {isRTL ? "گفتگو در واتساپ" : "Chat on WhatsApp"}
              </a>
            </div>
          </div>
        </FadeInUp>
      </section>

      {/* Customer Satisfaction Survey */}
      <section className="container mx-auto px-4 sm:px-6" aria-label="Customer satisfaction survey">
        <FadeInUp delay={0.5}>
          <SurveyForm t={t} cableOptions={cableOptions} />
        </FadeInUp>
      </section>

      {/* Embedded Google Map Section */}
      <section className="container mx-auto px-4 sm:px-6" aria-label="Location map">
        <FadeInUp delay={0.6}>
          <div className="bg-white border border-gray-100 rounded-[24px] sm:rounded-[40px] shadow-2xl shadow-gray-200/50 relative overflow-hidden">
            {/* Map iframe */}
            <div className="relative h-[280px] sm:h-[400px] md:h-[500px]">
              <iframe
                src="https://www.google.com/maps?q=Ayatollah+Salehi+Street+Between+Alley+12+and+14+Kerman+Iran&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Setareh Kerman Location"
                className="absolute inset-0"
              />
            </div>

            {/* Floating "Open in Maps" button */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Ayatollah+Salehi+Street+Between+Alley+12+and+14+Kerman+Iran"
              target="_blank"
              rel="noopener noreferrer"
              className={`absolute top-4 ${isRTL ? "left-4" : "right-4"} bg-[#374151] hover:bg-[#D4AF37] text-white text-[10px] font-black uppercase tracking-[0.2em] px-5 py-3 rounded-2xl shadow-lg transition-all duration-500 hover:scale-[1.02] flex items-center gap-2`}
            >
              {isRTL ? "مشاهده در نقشه" : "Open in Maps"}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </FadeInUp>
      </section>
      </section>
    </>
  );
}
