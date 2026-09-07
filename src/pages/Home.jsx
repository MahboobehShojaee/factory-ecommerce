import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import { useRTL } from "../hooks/useRTL.js";
import { getLocalizedNavPath } from "../content/navigation/data.js";
import { trustMetrics } from "../content/homepage/sections.js";
import HeroSection from "../components/home/HeroSection.jsx";
import ProjectsSection from "../components/ProjectsSection.jsx";
import SeoHead from "../lib/seo/SeoHead.jsx";
import { buildOrganizationSchema } from "../lib/seo/schema.js";
import VisualTrustSignals from "../components/ui/VisualTrustSignals.jsx";
import FactoryCapabilities from "../components/ui/FactoryCapabilities.jsx";
import ExportCapability from "../components/ui/ExportCapability.jsx";
import ScrollReveal from "../components/common/ScrollReveal.jsx";
import SectionDivider from "../components/common/SectionDivider.jsx";

export default function Home() {
  const { lang } = useLanguage();
  const { isRTL, dirClass } = useRTL();
  const l = lang === "fa" ? "fa" : "en";

  return (
    <>
      <SeoHead
        title={
          isRTL
            ? "سیم و کابل ستاره کرمان | صفحه اصلی"
            : "Setareh Kerman Wire & Cable | Home"
        }
        description={
          isRTL
            ? "کارخانه سیم و کابل ستاره کرمان؛ تولیدکننده کابل های صنعتی با استانداردهای بین المللی."
            : "Setareh Kerman wire and cable factory for industrial-grade power, control and communication solutions."
        }
        canonical="/"
        lang={l}
        jsonLd={buildOrganizationSchema()}
      />

      <div className={`pb-6 sm:pb-10 md:pb-12 ${dirClass}`}>
        {/* 1. Hero — Who we are */}
        <section aria-label="Hero introduction" className="px-1 sm:px-0">
          <HeroSection />
        </section>

        {/* 2. Factory capabilities — English only (hidden on Farsi to avoid duplicate/empty blocks) */}
        {!isRTL && (
          <>
            <ScrollReveal>
              <FactoryCapabilities lang={l} />
            </ScrollReveal>
            <SectionDivider />
          </>
        )}

        {/* 3. Trust signals — Certifications & metrics */}
        <ScrollReveal>
          <VisualTrustSignals lang={l} metrics={trustMetrics} />
        </ScrollReveal>

        <SectionDivider />

        {/* 4. Featured projects — Proof of delivery */}
        <ScrollReveal>
          <section aria-labelledby="projects-heading">
            <ProjectsSection />
          </section>
        </ScrollReveal>

        <SectionDivider />

        {/* 7. Export capability — Global reach */}
        <ScrollReveal delay={0.05}>
          <ExportCapability lang={l} />
        </ScrollReveal>

        {/* 10. Final CTA — Contact opportunity */}
        <ScrollReveal delay={0.05}>
          <section className="section-spacing-sm">
            <div className="page-container">
              <div className="ds-card bg-gradient-to-br from-[#374151] to-[#1F2937] text-white text-center p-10 sm:p-14 rounded-3xl">
                <h2 className="text-2xl sm:text-3xl font-black mb-4 text-balance">
                  {isRTL
                    ? "آماده همکاری در پروژه بعدی شما هستیم"
                    : "Ready to Power Your Next Project"}
                </h2>
                <p className="text-gray-300 max-w-xl mx-auto mb-8 text-balance">
                  {isRTL
                    ? "برای دریافت مشاوره فنی، استعلام قیمت یا بازدید از کارخانه با ما تماس بگیرید."
                    : "Contact us for technical consultation, quotation requests, or a factory tour."}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    to={getLocalizedNavPath("/contact", lang)}
                    className="btn-cinematic-gold px-8"
                  >
                    {isRTL ? "تماس با ما" : "Contact Us"}
                  </Link>
                  <Link
                    to={getLocalizedNavPath("/products", lang)}
                    className="btn-cinematic-ghost px-8 !border-white/25"
                  >
                    {isRTL ? "مشاهده کاتالوگ" : "Browse Catalog"}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </>
  );
}
