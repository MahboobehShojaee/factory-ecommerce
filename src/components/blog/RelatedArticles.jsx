import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRTL } from '../../hooks/useRTL.js';
import { FadeInUp } from '../../animations/motionPresets.jsx';
import { ArrowRight, Calendar } from 'lucide-react';
import { getAllArticleCategories } from '../../content/blog/structure.js';
import { Heading, Text } from '../../components/ui/Typography.jsx';

export default function RelatedArticles({ currentArticleSlug, currentCategory, articles, lang = 'en' }) {
  const { isRTL, dirClass } = useRTL();
  const categories = getAllArticleCategories();

  const relatedArticles = articles
    .filter(article => article.slug !== currentArticleSlug)
    .filter(article => {
      if (currentCategory && article.category === currentCategory) {
        return true;
      }
      return true;
    })
    .slice(0, 3);

  if (relatedArticles.length === 0) {
    return null;
  }

  return (
    <section className={`py-16 ${dirClass}`} aria-label="Related articles">
      <div className="container mx-auto px-6">
        <FadeInUp delay={0}>
          <div className="mb-8">
            <Heading level={2} className={`text-2xl mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
              {lang === 'fa' ? 'مقالات مرتبط' : 'Related Articles'}
            </Heading>
            <div className={`w-16 h-1 bg-[#D4AF37] rounded-full ${isRTL ? 'ml-auto' : ''}`} />
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedArticles.map((article, index) => (
            <FadeInUp key={article.slug} delay={index * 0.1}>
              <Link
                to={`/${lang === 'fa' ? 'fa/' : ''}blog/${article.slug}`}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white border border-gray-100 rounded-[30px] shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-[#D4AF37]/10 transition-all duration-300 overflow-hidden h-full"
                >
                  {/* Article Image */}
                  {article.featuredImage && (
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={article.featuredImage}
                        alt={article.title?.[lang] || ""}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  {/* Article Content */}
                  <div className="p-6">
                    {/* Category Badge */}
                    {article.category && (
                      <div className="inline-block px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-black uppercase tracking-wider rounded-full mb-3">
                        {categories.find((c) => c.id === article.category)?.name?.[lang] || article.category}
                      </div>
                    )}

                    {/* Title */}
                    <Heading level={3} className={`text-lg mb-3 line-clamp-2 group-hover:text-[#D4AF37] transition-colors ${isRTL ? 'text-right' : 'text-left'}`}>
                      {article.title[lang]}
                    </Heading>

                    {/* Excerpt */}
                    <Text size="sm" className={`text-gray-600 mb-4 line-clamp-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {article.excerpt[lang]}
                    </Text>

                    {/* Meta */}
                    <div className={`flex items-center gap-4 text-xs text-gray-500`}>
                      {article.publishDate && (
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{new Date(article.publishDate).toLocaleDateString(lang === "fa" ? "fa-IR" : "en-US")}</span>
                        </div>
                      )}
                    </div>

                    {/* Read More */}
                    <div className={`flex items-center gap-2 mt-4 text-[#D4AF37] text-sm font-bold group-hover:gap-3 transition-all ${isRTL ? 'flex-row-reverse' : ''}`}>
                      {lang === 'fa' ? 'ادامه مطلب' : 'Read More'}
                      <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
