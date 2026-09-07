/**
 * Metadata Template System
 * Provides SEO metadata templates for different content types
 * Leverages existing SEO utilities and schema generators
 */

import { generateArticleMetadata, generateArticleSchema } from './articleTemplate.js';
import { buildBreadcrumbSchema } from '../../lib/seo/schema.js';
import { generateArticleBreadcrumbItems } from '../../components/ui/Breadcrumb.jsx';

/**
 * Base metadata template
 */
export const baseMetadataTemplate = {
  title: '',
  description: '',
  keywords: [],
  canonical: '',
  og: {
    title: '',
    description: '',
    image: '',
    type: 'website',
    url: '',
  },
  twitter: {
    card: 'summary_large_image',
    title: '',
    description: '',
    image: '',
  },
  alternates: {
    canonical: '',
    languages: {},
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/**
 * Generate complete metadata for article
 */
export function generateCompleteMetadata(article, lang) {
  const baseUrl = 'https://setarehkerman.com';
  const url = `${baseUrl}/${lang === 'fa' ? 'fa/' : ''}blog/${article.slug}`;
  
  // Generate article metadata
  const articleMetadata = generateArticleMetadata(article, lang);
  
  // Generate schema
  const schemas = generateArticleSchema(article, lang);
  
  // Generate breadcrumb schema
  const breadcrumbSchema = buildBreadcrumbSchema(
    generateArticleBreadcrumbItems(article, lang).map((item, index) => ({
      name: item.label,
      url: item.url || `${url}`,
    }))
  );
  
  return {
    ...articleMetadata,
    schemas: [...schemas, breadcrumbSchema],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${baseUrl}/blog/${article.slug}`,
      languages: {
        en: `${baseUrl}/blog/${article.slug}`,
        fa: `${baseUrl}/fa/blog/${article.slug}`,
      },
    },
  };
}

/**
 * Metadata templates by content type
 */
export const metadataTemplates = {
  pillar: {
    title: (title) => `${title} | Complete Guide | Setareh Kerman`,
    description: (excerpt) => `${excerpt} Comprehensive guide covering all aspects of the topic with technical details, applications, and best practices.`,
    keywords: (primary, secondary) => [primary, ...secondary, 'complete guide', 'technical guide', 'industrial cable'],
  },
  cluster: {
    title: (title) => `${title} | Technical Article | Setareh Kerman`,
    description: (excerpt) => `${excerpt} In-depth technical article covering specifications, applications, and industry standards.`,
    keywords: (primary, secondary) => [primary, ...secondary, 'technical article', 'cable specification', 'industrial application'],
  },
  guide: {
    title: (title) => `${title} | Step-by-Step Guide | Setareh Kerman`,
    description: (excerpt) => `${excerpt} Practical step-by-step guide with tips, troubleshooting, and best practices.`,
    keywords: (primary, secondary) => [primary, ...secondary, 'how to guide', 'tutorial', 'step by step'],
  },
  comparison: {
    title: (title) => `${title} | Comparison | Setareh Kerman`,
    description: (excerpt) => `${excerpt} Side-by-side comparison with technical specifications, pros and cons, and selection criteria.`,
    keywords: (primary, secondary) => [primary, ...secondary, 'comparison', 'vs', 'difference'],
  },
  faq: {
    title: (title) => `${title} | FAQ | Setareh Kerman`,
    description: (excerpt) => `${excerpt} Frequently asked questions with expert answers from Setareh Kerman engineers.`,
    keywords: (primary, secondary) => [primary, ...secondary, 'faq', 'questions', 'answers'],
  },
  glossary: {
    title: (title) => `${title} | Glossary | Setareh Kerman`,
    description: (excerpt) => `${excerpt} Technical definition and explanation from the wire and cable industry glossary.`,
    keywords: (primary, secondary) => [primary, ...secondary, 'glossary', 'definition', 'terminology'],
  },
};

/**
 * Generate metadata based on content type
 */
export function generateMetadataByContentType(article, lang) {
  const template = metadataTemplates[article.contentType] || metadataTemplates.cluster;
  const title = article.title[lang];
  const excerpt = article.excerpt[lang];
  const primary = article.primaryKeyword;
  const secondary = article.secondaryKeywords || [];
  
  return {
    title: template.title(title),
    description: template.description(excerpt),
    keywords: template.keywords(primary, secondary),
  };
}

/**
 * Generate Open Graph metadata
 */
export function generateOpenGraphMetadata(article, lang) {
  const baseUrl = 'https://setarehkerman.com';
  const url = `${baseUrl}/${lang === 'fa' ? 'fa/' : ''}blog/${article.slug}`;
  
  return {
    title: article.title[lang],
    description: article.excerpt[lang],
    type: 'article',
    url,
    siteName: 'Setareh Kerman Wire & Cable',
    locale: lang === 'fa' ? 'fa_IR' : 'en_US',
    images: article.featuredImage ? [
      {
        url: article.featuredImage,
        width: 1200,
        height: 630,
        alt: article.title[lang],
        type: 'image/jpeg',
      },
    ] : [],
    publishedTime: article.publishDate,
    modifiedTime: article.publishDate,
    authors: [`${baseUrl}/#organization`],
    section: article.category,
    tags: article.tags,
  };
}

/**
 * Generate Twitter Card metadata
 */
export function generateTwitterMetadata(article, lang) {
  return {
    card: 'summary_large_image',
    title: article.title[lang],
    description: article.excerpt[lang],
    images: article.featuredImage ? [article.featuredImage] : [],
    creator: '@SetarehKerman',
  };
}

/**
 * Generate structured data for rich snippets
 */
export function generateStructuredData(article, lang) {
  const baseUrl = 'https://setarehkerman.com';
  const url = `${baseUrl}/${lang === 'fa' ? 'fa/' : ''}blog/${article.slug}`;
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title[lang],
    description: article.excerpt[lang],
    image: article.featuredImage,
    author: {
      '@type': 'Organization',
      name: article.author,
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Setareh Kerman Wire & Cable',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
    datePublished: article.publishDate,
    dateModified: article.publishDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
  
  // Add FAQ structured data if available
  if (article.faqs && article.faqs.length > 0) {
    structuredData.faq = {
      '@type': 'FAQPage',
      mainEntity: article.faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question[lang] || faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer[lang] || faq.answer,
        },
      })),
    };
  }
  
  return structuredData;
}

/**
 * Generate hreflang tags for multilingual SEO
 */
export function generateHreflangTags(article) {
  const baseUrl = 'https://setarehkerman.com';
  
  return [
    {
      rel: 'alternate',
      hrefLang: 'en',
      href: `${baseUrl}/blog/${article.slug}`,
    },
    {
      rel: 'alternate',
      hrefLang: 'fa',
      href: `${baseUrl}/fa/blog/${article.slug}`,
    },
    {
      rel: 'alternate',
      hrefLang: 'x-default',
      href: `${baseUrl}/blog/${article.slug}`,
    },
  ];
}

/**
 * Generate canonical URL
 */
export function generateCanonicalUrl(article, lang) {
  const baseUrl = 'https://setarehkerman.com';
  
  // English is the default/canonical version
  return `${baseUrl}/blog/${article.slug}`;
}

/**
 * Generate robots meta tags
 */
export function generateRobotsMeta(article) {
  return {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  };
}

/**
 * Complete metadata generator
 */
export function generateAllMetadata(article, lang) {
  return {
    title: article.title[lang],
    description: article.excerpt[lang],
    keywords: [article.primaryKeyword, ...(article.secondaryKeywords || [])].join(', '),
    canonical: generateCanonicalUrl(article, lang),
    openGraph: generateOpenGraphMetadata(article, lang),
    twitter: generateTwitterMetadata(article, lang),
    alternates: {
      canonical: generateCanonicalUrl(article, lang),
      languages: {
        en: `https://setarehkerman.com/blog/${article.slug}`,
        fa: `https://setarehkerman.com/fa/blog/${article.slug}`,
      },
    },
    robots: generateRobotsMeta(article),
    structuredData: generateStructuredData(article, lang),
    hreflang: generateHreflangTags(article),
  };
}
