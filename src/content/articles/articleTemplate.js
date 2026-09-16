/**
 * Article Template System
 * Provides templates for scalable content production
 * Leverages existing reusable systems: typography, TOC, technical tables, breadcrumb, FAQ schema
 */

import { buildArticleSchema, buildFAQSchema } from '../../lib/seo/schema.js';
import { generateTOCData, addHeadingIds } from '../../components/ui/TableOfContents.jsx';
import { localizedBlogUrl } from '../../config/site.js';

/**
 * Article Template
 * Base template for all article types
 */
export const articleTemplate = {
  // Basic metadata
  slug: '',
  contentType: 'cluster', // pillar, cluster, guide, comparison, faq, glossary
  topicalCluster: '',
  category: '',
  tags: [],
  
  // SEO metadata
  primaryKeyword: '',
  secondaryKeywords: [],
  metaDescription: '',
  
  // Content
  title: {
    en: '',
    fa: '',
  },
  excerpt: {
    en: '',
    fa: '',
  },
  content: {
    en: '',
    fa: '',
  },
  
  // Publishing metadata
  author: 'Setareh Kerman Engineering Team',
  publishDate: new Date().toISOString().split('T')[0],
  readTime: 5, // minutes
  featuredImage: '',
  
  // Internal linking
  linksToPillar: false,
  internalLinks: [],
  relatedArticles: [],
  
  // FAQ content (for FAQ articles)
  faqs: [],
  
  // Technical specifications (for technical articles)
  technicalSpecs: {},
  
  // Comparison data (for comparison articles)
  comparisonData: null,
  
  // CTA configuration
  ctas: [
    {
      type: 'consultation',
      location: 'after-introduction',
      text: {
        en: 'Need Technical Consultation?',
        fa: 'نیاز به مشاوره فنی دارید؟',
      },
    },
    {
      type: 'catalog',
      location: 'after-content',
      text: {
        en: 'Download Our Cable Catalog',
        fa: 'کاتالوگ کابل ما را دانلود کنید',
      },
    },
  ],
};

/**
 * Generate article with schema
 */
export function generateArticleSchema(article, lang) {
  const url = localizedBlogUrl(article.slug, lang);
  
  // Base article schema
  const schema = buildArticleSchema({
    headline: article.title[lang],
    description: article.excerpt[lang],
    author: article.author,
    publishDate: article.publishDate,
    url,
    image: article.featuredImage,
  });
  
  // Add FAQ schema if FAQs exist
  if (article.faqs && article.faqs.length > 0) {
    const faqSchema = buildFAQSchema(article.faqs);
    if (faqSchema) {
      return [schema, faqSchema];
    }
  }
  
  return [schema];
}

/**
 * Generate article metadata for SEO
 */
export function generateArticleMetadata(article, lang) {
  return {
    title: `${article.title[lang]} | Setareh Kerman`,
    description: article.metaDescription || article.excerpt[lang],
    canonical: localizedBlogUrl(article.slug, lang),
    openGraph: {
      title: article.title[lang],
      description: article.excerpt[lang],
      type: 'article',
      url: localizedBlogUrl(article.slug, lang),
      images: article.featuredImage ? [
        {
          url: article.featuredImage,
          width: 1200,
          height: 630,
          alt: article.title[lang],
        },
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title[lang],
      description: article.excerpt[lang],
      images: article.featuredImage ? [article.featuredImage] : [],
    },
    alternates: {
      canonical: localizedBlogUrl(article.slug, "en"),
      languages: {
        en: localizedBlogUrl(article.slug, "en"),
        fa: localizedBlogUrl(article.slug, "fa"),
      },
    },
  };
}

/**
 * Process article content for rendering
 */
export function processArticleContent(content) {
  // Add heading IDs for TOC navigation
  const contentWithIds = addHeadingIds(content);
  
  return contentWithIds;
}

/**
 * Generate article data structure
 */
export function createArticle(data) {
  return {
    ...articleTemplate,
    ...data,
    
    // Process content
    processedContent: {
      en: data.content?.en ? processArticleContent(data.content.en) : '',
      fa: data.content?.fa ? processArticleContent(data.content.fa) : '',
    },
    
    // Generate TOC data
    tocData: {
      en: data.content?.en ? generateTOCData(data.content.en) : [],
      fa: data.content?.fa ? generateTOCData(data.content.fa) : [],
    },
    
    // Calculate read time (average 200 words per minute)
    readTime: data.readTime || Math.ceil((data.content?.en?.split(/\s+/).length || 0) / 200),
  };
}

/**
 * Pillar Article Template
 * For comprehensive pillar pages
 */
export const pillarArticleTemplate = {
  ...articleTemplate,
  contentType: 'pillar',
  wordCount: { min: 2000, max: 5000 },
  internalLinks: { min: 15, max: 20 },
  sections: [
    'introduction',
    'overview',
    'detailed-explanation',
    'comparison',
    'applications',
    'standards',
    'selection-guide',
    'installation',
    'maintenance',
    'faq',
    'conclusion',
  ],
};

/**
 * Cluster Article Template
 * For focused cluster articles
 */
export const clusterArticleTemplate = {
  ...articleTemplate,
  contentType: 'cluster',
  wordCount: { min: 1000, max: 1500 },
  internalLinks: { min: 8, max: 12 },
  sections: [
    'introduction',
    'main-topic',
    'technical-details',
    'applications',
    'comparison',
    'conclusion',
  ],
};

/**
 * Technical Guide Template
 * For step-by-step guides
 */
export const technicalGuideTemplate = {
  ...articleTemplate,
  contentType: 'guide',
  wordCount: { min: 800, max: 1200 },
  internalLinks: { min: 5, max: 8 },
  sections: [
    'introduction',
    'prerequisites',
    'step-by-step',
    'tips',
    'troubleshooting',
    'conclusion',
  ],
};

/**
 * Comparison Article Template
 * For side-by-side comparisons
 */
export const comparisonArticleTemplate = {
  ...articleTemplate,
  contentType: 'comparison',
  wordCount: { min: 600, max: 1000 },
  internalLinks: { min: 3, max: 5 },
  sections: [
    'introduction',
    'overview',
    'comparison-table',
    'detailed-comparison',
    'selection-criteria',
    'conclusion',
  ],
};

/**
 * FAQ Article Template
 * For FAQ pages
 */
export const faqArticleTemplate = {
  ...articleTemplate,
  contentType: 'faq',
  wordCount: { min: 300, max: 600 },
  internalLinks: { min: 2, max: 4 },
  sections: [
    'introduction',
    'faqs',
    'related-topics',
  ],
};

/**
 * Glossary Entry Template
 * For glossary pages
 */
export const glossaryEntryTemplate = {
  ...articleTemplate,
  contentType: 'glossary',
  wordCount: { min: 100, max: 300 },
  internalLinks: { min: 1, max: 3 },
  sections: [
    'definition',
    'context',
    'related-terms',
  ],
};

/**
 * Content Validation
 */
export function validateArticle(article, lang) {
  const errors = [];
  const warnings = [];

  // Required fields
  if (!article.slug) errors.push('Missing slug');
  if (!article.title[lang]) errors.push(`Missing title in ${lang}`);
  if (!article.excerpt[lang]) errors.push(`Missing excerpt in ${lang}`);
  if (!article.content[lang]) errors.push(`Missing content in ${lang}`);
  if (!article.primaryKeyword) warnings.push('Missing primary keyword');
  if (!article.topicalCluster) warnings.push('Missing topical cluster');
  if (!article.category) warnings.push('Missing category');

  // Word count validation
  const wordCount = article.content[lang]?.split(/\s+/).length || 0;
  const contentType = article.contentType;
  
  if (contentType === 'pillar' && wordCount < 2000) {
    warnings.push('Pillar article below minimum word count (2000)');
  }
  if (contentType === 'cluster' && wordCount < 1000) {
    warnings.push('Cluster article below minimum word count (1000)');
  }

  // Internal links validation
  if (article.internalLinks && article.internalLinks.length < 3) {
    warnings.push('Article has fewer than 3 internal links');
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Content Publishing Checklist
 */
export const publishingChecklist = [
  'Article has unique slug',
  'Title is SEO-optimized',
  'Meta description is compelling',
  'Content has proper heading structure (H1-H6)',
  'Content includes primary keyword naturally',
  'Content includes secondary keywords',
  'Internal links to pillar page',
  'Internal links to related cluster pages',
  'FAQ section included (if applicable)',
  'CTAs placed strategically',
  'Featured image optimized',
  'Alt text for all images',
  'Table of contents generated',
  'Breadcrumb navigation configured',
  'Schema markup generated',
  'Read time calculated',
  'Related articles configured',
  'Tags assigned',
  'Category assigned',
  'Topical cluster assigned',
  'Content proofread',
  'Technical accuracy verified',
  'Bilingual content synchronized',
];
