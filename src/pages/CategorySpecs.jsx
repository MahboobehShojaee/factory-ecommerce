import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import { useRTL } from "../hooks/useRTL.js";
import SeoHead from "../lib/seo/SeoHead.jsx";
import { buildBreadcrumbSchema, buildProductSchema } from "../lib/seo/schema.js";
import { useCategorySpecsQuery, useProductCategoriesQuery } from "../api/hooks/useProductsQuery.js";
import { LoadingState, ErrorState } from "../components/ui/AsyncState.jsx";
import { FadeInUp } from "../animations/motionPresets.jsx";
import { SpecificationTable } from "../components/ui/TechnicalTable.jsx";
import { Heading, Text } from "../components/ui/Typography.jsx";

const labels = {
  conductor: { en: "Conductor", fa: "هادی" },
  insulation: { en: "Insulation", fa: "عایق" },
  voltageRating: { en: "Voltage Rating", fa: "ولتاژ نامی" },
  temperatureRange: { en: "Temperature Range", fa: "محدوده دما" },
  standard: { en: "Standard", fa: "استاندارد" },
  crossSection: { en: "Cross Section", fa: "سطح مقطع" },
  coreCount: { en: "Core Count", fa: "تعداد هسته" },
  shielding: { en: "Shielding", fa: "شیلدینگ" },
  armor: { en: "Armor", fa: "زره" },
};

export default function CategorySpecs() {
  const { category: categorySlug } = useParams();
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const { isRTL, dirClass } = useRTL();
  const [isGenerating, setIsGenerating] = useState(false);
  const categoryQuery = useCategorySpecsQuery(categorySlug);
  const categoriesQuery = useProductCategoriesQuery();
  const categoryConfig = categoryQuery.data;
  const allCategories = categoriesQuery.data || [];

  if (categoryQuery.isLoading) {
    return <LoadingState label={lang === "fa" ? "در حال بارگذاری مشخصات..." : "Loading specifications..."} />;
  }

  if (categoryQuery.error) {
    return (
      <ErrorState
        title={lang === "fa" ? "خطا در دریافت اطلاعات" : "Failed to load category"}
        description={categoryQuery.error.message}
        onRetry={categoryQuery.refetch}
      />
    );
  }

  if (!categoryConfig) {
    return (
      <section className={`min-h-screen bg-gray-50 py-10 sm:py-14 md:py-20 ${dirClass}`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <Heading level={1} className="text-4xl mb-4">
              {lang === "fa" ? "دسته یافت نشد" : "Category Not Found"}
            </Heading>
            <Text className="text-gray-600 mb-8">
              {lang === "fa" ? "دسته درخواست شده وجود ندارد" : "The requested category does not exist"}
            </Text>
            <button
              onClick={() => navigate('/products')}
              className="px-6 py-3 bg-[#D4AF37] text-white rounded-lg hover:bg-[#B8941F] transition-colors"
            >
              {lang === "fa" ? "بازگشت به محصولات" : "Back to Products"}
            </button>
          </div>
        </div>
      </section>
    );
  }

  const seoTitle = `${categoryConfig.titles[lang]} | ${lang === "fa" ? "مشخصات فنی" : "Technical Specifications"} | Setareh Kerman`;
  const seoDescription =
    lang === "fa"
      ? `مشخصات فنی ${categoryConfig.titles[lang]} شامل هادی، عایق، استاندارد و کاربردهای صنعتی.`
      : `Technical specifications for ${categoryConfig.titles[lang]} including conductor, insulation, standards, and applications.`;

  const otherCategories = allCategories.filter((cat) => cat.slug !== categorySlug);

  const handleDownloadPDF = async () => {
    setIsGenerating(true);
    try {
      const { generateProfessionalPDF } = await import("../lib/pdf/professionalPDFGenerator.js");
      const pdf = generateProfessionalPDF(categoryConfig, lang);
      const filename = `${categoryConfig.slug}-technical-specs.pdf`;
      pdf.save(filename);
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
      <SeoHead
        title={seoTitle}
        description={seoDescription}
        canonical={`/products/${categorySlug}/specifications`}
        jsonLd={[
          buildProductSchema({
            name: categoryConfig.titles[lang],
            description: seoDescription,
            category: categoryConfig.titles.en,
            url: `https://setarehkerman.com/products/${categorySlug}/specifications`,
          }),
          buildBreadcrumbSchema([
            { name: isRTL ? "محصولات" : "Products", url: "https://setarehkerman.com/products" },
            { name: categoryConfig.titles[lang], url: `https://setarehkerman.com/products/${categorySlug}/specifications` },
          ]),
        ]}
      />
      <section className={`min-h-screen bg-gray-50 py-10 sm:py-14 md:py-20 ${dirClass}`}>
        <div className="container mx-auto px-4 sm:px-6">
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-sm ${isRTL ? "flex-row-reverse" : ""}`}>
              <li>
                <Link to="/products" className="text-gray-500 hover:text-[#D4AF37] transition-colors">
                  {lang === "fa" ? "محصولات" : "Products"}
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium">
                {categoryConfig.titles[lang]}
              </li>
            </ol>
          </nav>

          <FadeInUp>
            <button
              onClick={() => navigate("/products")}
              className="mb-8 flex items-center gap-2 text-gray-600 hover:text-[#D4AF37] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {lang === "fa" ? "بازگشت به محصولات" : "Back to Products"}
            </button>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="mb-6 flex flex-wrap justify-end gap-3 sm:gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDownloadPDF}
                disabled={isGenerating}
                className={`flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl ${
                  isGenerating
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-[#D4AF37] text-white border-2 border-[#D4AF37] hover:bg-[#B8941F] hover:border-[#B8941F]"
                }`}
              >
                {isGenerating ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    {lang === "fa" ? "در حال تولید..." : "Generating..."}
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {lang === "fa" ? "دانلود مشخصات فنی" : "Download Technical Specs"}
                  </>
                )}
              </motion.button>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <article className="overflow-hidden rounded-xl bg-white shadow-2xl">
              <header 
                className="relative p-8 text-center border-b-4"
                style={{ borderColor: categoryConfig.brandColor }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl font-bold">SK</span>
                  </div>
                </div>
                
                <Heading level={1}>
                  {categoryConfig.titles[lang]} {lang === "fa" ? "مشخصات فنی" : "Technical Specifications"}
                </Heading>
                <Text size="lg" color="gray-600" className="mb-6">
                  Setareh Kerman Wire & Cable - {lang === "fa" ? "کارخانه سیم و کابل ستاره کرمان" : "Wire & Cable Factory"}
                </Text>
                <div 
                  className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl shadow-lg"
                  style={{ backgroundColor: `${categoryConfig.brandColor}20` }}
                >
                  <span className="text-3xl">{categoryConfig.icons.header}</span>
                  <Heading level={2} className="text-2xl" style={{ color: categoryConfig.brandColor }}>
                    {categoryConfig.titles[lang]}
                  </Heading>
                </div>
              </header>

              <section className="p-8 bg-gray-50 border-b">
                <Heading level={2} className="mb-4">
                  {lang === "fa" ? "نمای کلی و مشخصات فنی" : "Overview and Technical Specifications"}
                </Heading>
                <div className="prose prose-gray max-w-none">
                  <Text className="mb-4">
                    {seoDescription}
                  </Text>
                </div>
              </section>

              <section className="p-8">
                <Heading level={2} className="mb-6">
                  {lang === "fa" ? "مشخصات فنی دقیق" : "Detailed Technical Specifications"}
                </Heading>
                
                <SpecificationTable
                  title={lang === "fa" ? "مشخصات کلیدی" : "Key Specifications"}
                  lang={lang}
                  specifications={Object.entries(categoryConfig.specs).map(([key, spec]) => ({
                    label: labels[key]?.[lang] || key,
                    value: `${spec.value} - ${spec.description[lang]}`,
                  }))}
                />
              </section>

              <section className="p-8 bg-gray-50 border-t">
                <Heading level={2} className="mb-6">
                  {lang === "fa" ? "کاربردها" : "Applications"}
                </Heading>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {categoryConfig.applications.map((app, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg bg-white border border-gray-200"
                    >
                      <div 
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${categoryConfig.brandColor}10` }}
                      >
                        <svg className="w-4 h-4" style={{ color: categoryConfig.brandColor }} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                      <Text>{app}</Text>
                    </div>
                  ))}
                </div>
              </section>

              <section className="p-8">
                <Heading level={2} className="mb-6">
                  {lang === "fa" ? "ویژگی‌های کلیدی" : "Key Features"}
                </Heading>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {categoryConfig.features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg bg-gray-50"
                    >
                      <div 
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${categoryConfig.brandColor}10` }}
                      >
                        <svg className="w-4 h-4" style={{ color: categoryConfig.brandColor }} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                      </div>
                      <Text>{feature}</Text>
                    </div>
                  ))}
                </div>
              </section>

              {otherCategories.length > 0 && (
                <section className="p-8 bg-gray-50 border-t">
                  <Heading level={2} className="mb-6">
                    {lang === "fa" ? "سایر دسته‌های محصولات" : "Other Product Categories"}
                  </Heading>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {otherCategories.map((category) => (
                      <Link
                        key={category.slug}
                        to={`/products/${category.slug}/specifications`}
                        className="flex items-center gap-3 p-4 rounded-lg bg-white border border-gray-200 hover:border-[#D4AF37] hover:shadow-md transition-all duration-300"
                      >
                        <span className="text-2xl">{category.icons.header}</span>
                        <div>
                          <Heading level={3} className="text-base">{category.titles[lang]}</Heading>
                          <Text size="sm" className="text-gray-600">
                            {lang === "fa" ? "مشاهده مشخصات فنی" : "View technical specifications"}
                          </Text>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* Professional Footer */}
              <footer 
                className="p-8 text-center border-t"
                style={{ backgroundColor: `${categoryConfig.brandColor}05` }}
              >
                <div className="mb-4">
                  <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: categoryConfig.brandColor }}></div>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                  <div className="mb-4 md:mb-0">
                    <Text weight="bold" className="text-gray-900">© 2024 Setareh Kerman Wire & Cable</Text>
                    <p>{lang === "fa" ? "وب سایت: www.setarehkerman.com" : "Website: www.setarehkerman.com"}</p>
                    <p>{lang === "fa" ? "ایمیل: info.setarehkerman@gmail.com" : "Email: info.setarehkerman@gmail.com"}</p>
                  </div>
                  <div>
                    <p><strong>{lang === "fa" ? "تاریخ تولید:" : "Generated on:"}</strong> {new Date().toLocaleDateString()}</p>
                    <p><strong>{lang === "fa" ? "تماس:" : "Contact:"}</strong> +98 34 1234 5678</p>
                    <p><strong>{lang === "fa" ? "آدرس:" : "Address:"}</strong> Kerman, Iran</p>
                  </div>
                </div>
              </footer>
            </article>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
