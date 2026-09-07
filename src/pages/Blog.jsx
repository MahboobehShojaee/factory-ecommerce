import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import { useRTL } from "../hooks/useRTL.js";
import { FadeInUp, StaggerContainer } from "../animations/motionPresets.jsx";
import { Card } from "../components/ui/Card.jsx";
import { getAllArticleCategories, getAllArticleTags } from "../content/blog/structure.js";
import SeoHead from "../lib/seo/SeoHead.jsx";
import { buildBreadcrumbSchema } from "../lib/seo/schema.js";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import { Heading, Text } from "../components/ui/Typography.jsx";
import articles from "../content/articles/index.js";

export default function Blog() {
  const { dict, lang } = useLanguage();
  const { isRTL, dirClass } = useRTL();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);

  const categories = getAllArticleCategories();
  const tags = getAllArticleTags();

  const mappedArticles = articles.map((article) => ({
    id: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    category: article.category,
    tags: article.tags,
    author: article.author,
    publishDate: article.publishDate,
    readTime: article.readTime || "10 min",
    featuredImage: article.featuredImage,
    slug: article.slug,
    contentType: article.contentType,
  }));

  const filteredArticles = mappedArticles.filter((article) => {
    if (selectedCategory && article.category !== selectedCategory) return false;
    if (selectedTag && !article.tags.includes(selectedTag)) return false;
    return true;
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: dict.layout?.navHome || "Home", url: `/${lang === "fa" ? "fa" : ""}` },
    { name: "Knowledge Center", url: `/${lang === "fa" ? "fa/" : ""}blog` },
  ]);

  return (
    <>
      <SeoHead
        title={isRTL ? "مرکز دانش | ستاره کرمان" : "Knowledge Center | Setareh Kerman"}
        description={
          isRTL
            ? "مقالات فنی، راهنماهای صنعتی و دانش کابل و سیم از کارخانه ستاره کرمان"
            : "Technical articles, industrial guides, and wire & cable knowledge from Setareh Kerman factory"
        }
        canonical={lang === "fa" ? "/fa/blog" : "/blog"}
        lang={lang}
        jsonLd={breadcrumbSchema}
      />

      <section className={`min-h-screen bg-[#F8F9FA] ${dirClass}`}>
        {/* Hero Section */}
        <div className="relative bg-[#374151] overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23D4AF37\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
          </div>

          <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-28 relative z-10">
            <FadeInUp>
              <div className="max-w-3xl">
                <Text size="xs" weight="bold" className="inline-block px-4 py-2 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] uppercase tracking-widest mb-6">
                  {isRTL ? "مرکز دانش" : "Knowledge Center"}
                </Text>
                <Heading level={1} className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
                  {isRTL ? "مقالات فنی و راهنماهای صنعتی" : "Technical Articles & Industrial Guides"}
                </Heading>
                <Text size="lg" className="text-gray-300 max-w-2xl">
                  {isRTL
                    ? "در مورد تکنولوژی کابل، استانداردها و بهترین شیوه‌های صنعتی از متخصصان ستاره کرمان بیاموزید."
                    : "Learn about cable technology, standards, and best industrial practices from Setareh Kerman experts."}
                </Text>
              </div>
            </FadeInUp>
          </div>
        </div>

        {/* Filters Section */}
        <div className="container mx-auto px-6 py-8">
          <FadeInUp delay={0.2}>
            <div className="flex flex-wrap gap-4 items-center">
              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-gray-600 uppercase tracking-wider">
                  {isRTL ? "دسته‌بندی:" : "Category:"}
                </span>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                      selectedCategory === null
                        ? "bg-[#374151] text-white"
                        : "bg-white text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {isRTL ? "همه" : "All"}
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                        selectedCategory === cat.id
                          ? "bg-[#374151] text-white"
                          : "bg-white text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {cat.name[lang]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tag Filter */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-gray-600 uppercase tracking-wider">
                  {isRTL ? "برچسب:" : "Tag:"}
                </span>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedTag(null)}
                    className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                      selectedTag === null
                        ? "bg-[#D4AF37] text-white"
                        : "bg-white text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {isRTL ? "همه" : "All"}
                  </button>
                  {tags.slice(0, 5).map((tag) => (
                    <button
                      key={tag.id}
                      onClick={() => setSelectedTag(tag.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                        selectedTag === tag.id
                          ? "bg-[#D4AF37] text-white"
                          : "bg-white text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {tag.name[lang]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>

        {/* Breadcrumb */}
        <div className="container mx-auto px-6 py-4">
          <Breadcrumb
            items={[
              { label: dict.layout?.navHome || "Home", url: `/${lang === "fa" ? "fa" : ""}` },
              { label: isRTL ? "مرکز دانش" : "Knowledge Center", url: null },
            ]}
            lang={lang}
          />
        </div>

        {/* Articles Grid */}
        <div className="container mx-auto px-6 py-12">
          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <FadeInUp key={article.id} delay={index * 0.1}>
                  <Link to={`/${lang === "fa" ? "fa/" : ""}blog/${article.slug}`}>
                    <Card className="h-full hover:shadow-2xl transition-all duration-500 group cursor-pointer">
                      {/* Featured Image */}
                      <div className="relative h-48 overflow-hidden rounded-t-2xl">
                        <img
                          src={article.featuredImage}
                          alt={article.title[lang]}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full bg-[#D4AF37] text-white text-xs font-bold uppercase tracking-wider">
                            {categories.find((c) => c.id === article.category)?.name[lang]}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <Heading level={3} className="text-xl mb-3 group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                          {article.title[lang]}
                        </Heading>
                        <Text size="sm" className="text-gray-600 mb-4 line-clamp-3">
                          {article.excerpt[lang]}
                        </Text>

                        {/* Meta */}
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <div className="flex items-center gap-4">
                            <span>{article.author}</span>
                            <span>•</span>
                            <span>{article.readTime}</span>
                          </div>
                          <span>{new Date(article.publishDate).toLocaleDateString(lang === "fa" ? "fa-IR" : "en-US")}</span>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {article.tags.slice(0, 3).map((tagId) => {
                            const tag = tags.find((t) => t.id === tagId);
                            return tag ? (
                              <span
                                key={tag.id}
                                className="px-2 py-1 rounded bg-gray-100 text-gray-600 text-xs font-bold"
                              >
                                {tag.name[lang]}
                              </span>
                            ) : null;
                          })}
                        </div>
                      </div>
                    </Card>
                  </Link>
                </FadeInUp>
              ))}
            </div>
          </StaggerContainer>

          {filteredArticles.length === 0 && (
            <FadeInUp>
              <div className="text-center py-20">
                <Text size="lg" className="text-gray-500">
                  {isRTL ? "مقاله‌ای یافت نشد" : "No articles found"}
                </Text>
              </div>
            </FadeInUp>
          )}
        </div>

        {/* CTA Section */}
        <section className="container mx-auto px-6 py-10 sm:py-14 md:py-20">
          <FadeInUp>
            <Card className="bg-[#374151] text-white p-12 text-center">
              <Heading level={2} className="text-white mb-4">
                {isRTL ? "سوالی دارید؟" : "Have a Question?"}
              </Heading>
              <Text className="text-gray-300 mb-8 max-w-2xl mx-auto">
                {isRTL
                  ? "تیم فنی ما آماده پاسخگویی به سؤالات شما در مورد کابل‌ها و راه‌حل‌های صنعتی است."
                  : "Our technical team is ready to answer your questions about cables and industrial solutions."}
              </Text>
              <Link
                to={`/${lang === "fa" ? "fa/" : ""}contact`}
                className="inline-block px-8 py-4 bg-[#D4AF37] text-white rounded-xl font-bold hover:bg-[#B8860B] transition-colors"
              >
                {isRTL ? "تماس با ما" : "Contact Us"}
              </Link>
            </Card>
          </FadeInUp>
        </section>
      </section>
    </>
  );
}
