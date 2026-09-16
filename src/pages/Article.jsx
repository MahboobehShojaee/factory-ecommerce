import { useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import { useRTL } from "../hooks/useRTL.js";
import { FadeInUp } from "../animations/motionPresets.jsx";
import { Card } from "../components/ui/Card.jsx";
import { getAllArticleCategories, getAllArticleTags } from "../content/blog/structure.js";
import { articlesMap, articles } from "../content/articles/index.js";
import SeoHead from "../lib/seo/SeoHead.jsx";
import { buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from "../lib/seo/schema.js";
import { Share2, Clock, ArrowLeft } from "lucide-react";
import RelatedArticles from "../components/blog/RelatedArticles.jsx";
import { useScrollDepthTracking, useTimeOnPageTracking } from "../hooks/useScrollDepthTracking.js";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import TableOfContents from "../components/ui/TableOfContents.jsx";
import { Heading, Text, ArticleContent } from "../components/ui/Typography.jsx";
import { SpecificationTable } from "../components/ui/TechnicalTable.jsx";
import DOMPurify from "dompurify";
import { localizedBlogUrl } from "../config/site.js";

export default function Article() {
  const { slug } = useParams();
  const { dict, lang } = useLanguage();
  const { isRTL, dirClass } = useRTL();
  const navigate = useNavigate();
  const [readingProgress, setReadingProgress] = useState(0);
  const [shareStatus, setShareStatus] = useState("");
  const contentRef = useRef(null);

  const categories = getAllArticleCategories();
  const tags = getAllArticleTags();

  useScrollDepthTracking('article_scroll_depth', { enabled: true });
  useTimeOnPageTracking('article_time_on_page', { enabled: true });

  const article = articlesMap[slug] || null;

  useEffect(() => {
    if (!article) return;
    const handleScroll = () => {
      if (contentRef.current) {
        const element = contentRef.current;
        const articleTop = window.scrollY + element.getBoundingClientRect().top;
        const totalHeight = Math.max(element.offsetHeight - window.innerHeight, 1);
        const progress = ((window.scrollY - articleTop) / totalHeight) * 100;
        setReadingProgress(Math.max(0, Math.min(progress, 100)));
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [article]);

  if (!article) {
    return (
      <>
        <SeoHead
          title={isRTL ? "مقاله یافت نشد" : "Article Not Found"}
          description={isRTL ? "مقاله درخواست‌شده یافت نشد." : "The requested article could not be found."}
          noindex
          lang={lang}
        />
        <section className={`min-h-screen bg-[#F8F9FA] flex items-center justify-center ${dirClass}`}>
          <div className="text-center">
              <Heading level={1} className="mb-4">
                {isRTL ? "مقاله یافت نشد" : "Article Not Found"}
              </Heading>
              <Text className="text-gray-500 mb-8">
                {isRTL
                  ? "متأسفیم، مقاله مورد نظر شما یافت نشد."
                  : "Sorry, the article you are looking for could not be found."}
              </Text>
          <Link
            to={`/${lang === "fa" ? "fa/" : ""}blog`}
            className="inline-block px-8 py-4 bg-[#374151] text-white rounded-xl font-bold hover:bg-[#D4AF37] transition-colors"
          >
            {isRTL ? "بازگشت به مرکز دانش" : "Back to Knowledge Center"}
          </Link>
          </div>
        </section>
      </>
    );
  }

  const category = categories.find((c) => c.id === article.category);
  const rawContent = article.processedContent?.[lang] || article.content?.[lang] || "";
  const content = DOMPurify.sanitize(rawContent);

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: dict.layout?.navHome || "Home", url: `/${lang === "fa" ? "fa" : ""}` },
    { name: "Knowledge Center", url: `/${lang === "fa" ? "fa/" : ""}blog` },
    { name: article.title?.[lang] || "", url: `/${lang === "fa" ? "fa/" : ""}blog/${slug}` },
  ]);

  const articleSchema = buildArticleSchema({
    headline: article.title?.[lang] || "",
    description: article.excerpt?.[lang] || "",
    author: article.author || "Setareh Kerman Engineering Team",
    publishDate: article.publishDate || "",
    url: localizedBlogUrl(slug, lang),
  });

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: article.title?.[lang] || "",
          text: article.excerpt?.[lang] || "",
          url: window.location.href,
        });
        return;
      }
      await navigator.clipboard.writeText(window.location.href);
      setShareStatus(isRTL ? "لینک کپی شد." : "Link copied.");
    } catch (error) {
      if (error?.name !== "AbortError") {
        setShareStatus(isRTL ? "اشتراک‌گذاری انجام نشد." : "Unable to share this article.");
      }
    }
  };

  return (
    <>
      <SeoHead
        title={`${article.title?.[lang] || ""} | ${isRTL ? "ستاره کرمان" : "Setareh Kerman"}`}
        description={article.excerpt?.[lang] || ""}
        canonical={lang === "fa" ? `/fa/blog/${slug}` : `/blog/${slug}`}
        image={article.featuredImage}
        lang={lang}
        jsonLd={[
          breadcrumbSchema,
          articleSchema,
          ...(article.faqs?.length > 0
            ? [buildFAQSchema(article.faqs.map((faq) => ({
                question: faq.question[lang] || faq.question,
                answer: faq.answer[lang] || faq.answer,
              })))]
            : []),
        ]}
      />

      <section className={`min-h-screen bg-[#F8F9FA] ${dirClass}`}>
        <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
          <div
            className="h-full bg-[#D4AF37] transition-all duration-150"
            style={{ width: `${readingProgress}%` }}
          />
        </div>

        <div className="container mx-auto px-6 py-4">
          <Breadcrumb
            items={[
              { label: dict.layout?.navHome || "Home", url: `/${lang === "fa" ? "fa" : ""}` },
              { label: isRTL ? "مرکز دانش" : "Knowledge Center", url: `/${lang === "fa" ? "fa/" : ""}blog` },
              { label: article.title?.[lang] || "", url: null },
            ]}
            lang={lang}
          />
        </div>

        <div className="container mx-auto px-6 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-[#D4AF37] transition-colors"
          >
            <ArrowLeft className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} />
            <span className="font-bold">{isRTL ? "بازگشت" : "Back"}</span>
          </button>
        </div>

        <div className="container mx-auto px-6 py-8">
          <FadeInUp>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
                  {category?.name?.[lang]}
                </span>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime || "10 min"}</span>
                </div>
              </div>

              <Heading level={1} className="text-4xl md:text-5xl mb-6">
                {article.title[lang]}
              </Heading>
              {article.excerpt && (
                <Text size="xl" className="text-gray-600 mb-8">
                  {article.excerpt[lang]}
                </Text>
              )}
            </div>
          </FadeInUp>
        </div>

        <div className="container mx-auto px-6 py-12">
          <FadeInUp delay={0.3}>
            <div className="flex gap-8 max-w-6xl mx-auto">
              <div className="flex-1 min-w-0">
                <Card className="p-8 md:p-12">
                  <ArticleContent>
                    <div
                      ref={contentRef}
                      className="article-body"
                      style={{ scrollBehavior: "smooth" }}
                      dangerouslySetInnerHTML={{ __html: content }}
                    />
                  </ArticleContent>
                </Card>
              </div>
              <aside className="contents lg:block lg:w-72 lg:flex-shrink-0">
                <div className="sticky top-24">
                  <TableOfContents content={content} lang={lang} />
                </div>
              </aside>
            </div>
          </FadeInUp>
        </div>

        {/* Technical Specifications Table */}
        {article.technicalSpecs && Object.keys(article.technicalSpecs).length > 0 && (
          <div className="container mx-auto px-6 py-8">
            <FadeInUp delay={0.35}>
              <div className="max-w-4xl mx-auto">
                <SpecificationTable
                  title={isRTL ? "مشخصات فنی" : "Technical Specifications"}
                  lang={lang}
                  specifications={Object.entries(article.technicalSpecs).map(([key, spec]) => ({
                    label: spec.label?.[lang] || key,
                    value: spec.value,
                  }))}
                />
              </div>
            </FadeInUp>
          </div>
        )}

        <div className="container mx-auto px-6 py-8">
          <FadeInUp delay={0.4}>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap gap-3">
                {article.tags?.map((tagId) => {
                  const tag = tags.find((t) => t.id === tagId);
                  return tag ? (
                    <span
                      key={tag.id}
                      className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-bold hover:bg-[#D4AF37]/20 hover:text-[#D4AF37] transition-colors cursor-pointer"
                    >
                      {tag.name?.[lang]}
                    </span>
                  ) : null;
                })}
              </div>
            </div>
          </FadeInUp>
        </div>

        <div className="container mx-auto px-6 py-8">
          <FadeInUp delay={0.5}>
            <div className="max-w-4xl mx-auto">
              <Card className="p-6 flex items-center justify-between">
                <div>
                  <Heading level={3} className="text-base mb-1">
                    {isRTL ? "اشتراک‌گذاری مقاله" : "Share Article"}
                  </Heading>
                  <Text size="sm" className="text-gray-500">
                    {isRTL ? "این مقاله را با همکاران خود به اشتراک بگذارید" : "Share this article with your colleagues"}
                  </Text>
                </div>
                <button
                  type="button"
                  onClick={handleShare}
                  className="flex items-center gap-2 px-6 py-3 bg-[#374151] text-white rounded-xl font-bold hover:bg-[#D4AF37] transition-colors"
                >
                  <Share2 className="w-5 h-5" />
                  <span>{isRTL ? "اشتراک‌گذاری" : "Share"}</span>
                </button>
                <span className="sr-only" role="status" aria-live="polite">
                  {shareStatus}
                </span>
              </Card>
            </div>
          </FadeInUp>
        </div>

        <RelatedArticles
          currentArticleSlug={slug}
          currentCategory={article.category}
          articles={articles}
          lang={lang}
        />

        <section className="container mx-auto px-6 py-20">
          <FadeInUp>
            <Card className="bg-[#374151] text-white p-12 text-center">
              <Heading level={2} className="text-white mb-4">
                {isRTL ? "آماده همکاری هستید؟" : "Ready to Collaborate?"}
              </Heading>
              <Text className="text-gray-300 mb-8 max-w-2xl mx-auto">
                {isRTL
                  ? "تیم مهندسی ما آماده ارائه مشاوره فنی و تأمین کابل‌های صنعتی برای پروژه شماست."
                  : "Our engineering team is ready to provide technical consultation and supply industrial cables for your project."}
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
