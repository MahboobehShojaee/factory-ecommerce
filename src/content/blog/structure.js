/**
 * Blog / Knowledge Foundation Structure
 * Prepared for future blog and technical article implementation
 * This provides the data structure and organization for a scalable content system
 */

/**
 * Content Types
 * Defines the different types of content for the knowledge base
 */
export const contentTypes = [
  {
    id: "pillar",
    slug: "pillar",
    name: {
      en: "Pillar Page",
      fa: "صفحه ستون",
    },
    description: {
      en: "Comprehensive guides covering entire topical clusters",
      fa: "راهنماهای جامع که کل خوشه‌های موضوعی را پوشش می‌دهند",
    },
    minWordCount: 2000,
    maxWordCount: 5000,
  },
  {
    id: "cluster",
    slug: "cluster",
    name: {
      en: "Cluster Article",
      fa: "مقاله خوشه",
    },
    description: {
      en: "Focused deep-dive articles on specific sub-topics",
      fa: "مقالات عمیق متمرکز بر زیرموضوعات خاص",
    },
    minWordCount: 1000,
    maxWordCount: 1500,
  },
  {
    id: "guide",
    slug: "guide",
    name: {
      en: "Technical Guide",
      fa: "راهنمای فنی",
    },
    description: {
      en: "Step-by-step technical guides and tutorials",
      fa: "راهنماهای فنی گام‌به‌گام و آموزش‌ها",
    },
    minWordCount: 800,
    maxWordCount: 1200,
  },
  {
    id: "comparison",
    slug: "comparison",
    name: {
      en: "Comparison",
      fa: "مقایسه",
    },
    description: {
      en: "Side-by-side comparisons of products or technologies",
      fa: "مقایسه‌های کنارهم محصولات یا فناوری‌ها",
    },
    minWordCount: 600,
    maxWordCount: 1000,
  },
  {
    id: "faq",
    slug: "faq",
    name: {
      en: "FAQ",
      fa: "سوالات متداول",
    },
    description: {
      en: "Frequently asked questions and quick answers",
      fa: "سوالات متداول و پاسخ‌های سریع",
    },
    minWordCount: 300,
    maxWordCount: 600,
  },
  {
    id: "glossary",
    slug: "glossary",
    name: {
      en: "Glossary",
      fa: "واژه‌نامه",
    },
    description: {
      en: "Technical term definitions and industry terminology",
      fa: "تعاریف اصطلاحات فنی و اصطلاحات صنعت",
    },
    minWordCount: 100,
    maxWordCount: 300,
  },
];

/**
 * Article Categories
 * Predefined categories for organizing blog posts and technical articles
 */
export const articleCategories = [
  {
    id: "technical",
    slug: "technical",
    name: {
      en: "Technical Articles",
      fa: "مقالات فنی",
    },
    description: {
      en: "In-depth technical articles about cable technology, standards, and applications",
      fa: "مقالات فنی عمیق در مورد تکنولوژی کابل، استانداردها و کاربردها",
    },
  },
  {
    id: "industry",
    slug: "industry",
    name: {
      en: "Industry News",
      fa: "اخبار صنعت",
    },
    description: {
      en: "Latest news and updates from the wire and cable industry",
      fa: "آخرین اخبار و به‌روزرسانی‌ها از صنعت سیم و کابل",
    },
  },
  {
    id: "case-studies",
    slug: "case-studies",
    name: {
      en: "Case Studies",
      fa: "مطالعات موردی",
    },
    description: {
      en: "Real-world project implementations and success stories",
      fa: "پیاده‌سازی پروژه‌های واقعی و داستان‌های موفقیت",
    },
  },
  {
    id: "quality",
    slug: "quality",
    name: {
      en: "Quality & Standards",
      fa: "کیفیت و استانداردها",
    },
    description: {
      en: "Information about quality standards, certifications, and testing procedures",
      fa: "اطلاعات در مورد استانداردهای کیفی، گواهینامه‌ها و رویه‌های آزمون",
    },
  },
  {
    id: "installation",
    slug: "installation",
    name: {
      en: "Installation Guides",
      fa: "راهنمای نصب",
    },
    description: {
      en: "Cable installation procedures and best practices",
      fa: "رویه‌های نصب کابل و بهترین شیوه‌ها",
    },
  },
  {
    id: "sizing",
    slug: "sizing",
    name: {
      en: "Cable Sizing",
      fa: "اندازه‌گیری کابل",
    },
    description: {
      en: "Cable sizing calculations and electrical design guides",
      fa: "محاسبات اندازه‌گیری کابل و راهنماهای طراحی الکتریکی",
    },
  },
];

/**
 * Article Tags
 * Common tags for categorizing and filtering articles
 */
export const articleTags = [
  { id: "power-cables", slug: "power-cables", name: { en: "Power Cables", fa: "کابل‌های برق" } },
  { id: "control-cables", slug: "control-cables", name: { en: "Control Cables", fa: "کابل‌های کنترل" } },
  { id: "communication", slug: "communication", name: { en: "Communication", fa: "مخابرات" } },
  { id: "xlpe", slug: "xlpe", name: { en: "XLPE", fa: "XLPE" } },
  { id: "pvc", slug: "pvc", name: { en: "PVC", fa: "PVC" } },
  { id: "iec-standards", slug: "iec-standards", name: { en: "IEC Standards", fa: "استانداردهای IEC" } },
  { id: "fire-resistant", slug: "fire-resistant", name: { en: "Fire Resistant", fa: "مقاوم در برابر حریق" } },
  { id: "armored", slug: "armored", name: { en: "Armored", fa: "زره‌دار" } },
  { id: "marine", slug: "marine", name: { en: "Marine", fa: "دریایی" } },
  { id: "solar", slug: "solar", name: { en: "Solar", fa: "خورشیدی" } },
  { id: "testing", slug: "testing", name: { en: "Testing", fa: "آزمون" } },
  { id: "installation", slug: "installation", name: { en: "Installation", fa: "نصب" } },
  { id: "low-voltage", slug: "low-voltage", name: { en: "Low Voltage", fa: "ولتاژ پایین" } },
  { id: "medium-voltage", slug: "medium-voltage", name: { en: "Medium Voltage", fa: "ولتاژ متوسط" } },
  { id: "copper", slug: "copper", name: { en: "Copper", fa: "مس" } },
  { id: "aluminum", slug: "aluminum", name: { en: "Aluminum", fa: "آلومینیوم" } },
];

/**
 * Topical Clusters
 * Defines the main topical clusters for SEO authority building
 */
export const topicalClusters = [
  {
    id: "cable-types",
    slug: "cable-types",
    name: {
      en: "Cable Types & Insulation",
      fa: "انواع کابل و عایق",
    },
    pillarSlug: "complete-guide-cable-types-insulation",
    description: {
      en: "Comprehensive guide to cable types, insulation materials, and applications",
      fa: "راهنمای جامع انواع کابل، مواد عایق و کاربردها",
    },
  },
  {
    id: "standards",
    slug: "standards",
    name: {
      en: "Standards & Certifications",
      fa: "استانداردها و گواهینامه‌ها",
    },
    pillarSlug: "iec-standards-certifications-guide",
    description: {
      en: "IEC standards, certifications, and testing procedures",
      fa: "استانداردهای IEC، گواهینامه‌ها و رویه‌های آزمون",
    },
  },
  {
    id: "installation",
    slug: "installation",
    name: {
      en: "Installation & Applications",
      fa: "نصب و کاربردها",
    },
    pillarSlug: "cable-installation-guide",
    description: {
      en: "Cable installation methods and industrial applications",
      fa: "روش‌های نصب کابل و کاربردهای صنعتی",
    },
  },
  {
    id: "sizing",
    slug: "sizing",
    name: {
      en: "Cable Sizing & Calculations",
      fa: "اندازه‌گیری و محاسبات کابل",
    },
    pillarSlug: "cable-sizing-calculations-guide",
    description: {
      en: "Cable sizing, ampacity, and electrical design calculations",
      fa: "اندازه‌گیری کابل، آمپریتی و محاسبات طراحی الکتریکی",
    },
  },
  {
    id: "fire-safety",
    slug: "fire-safety",
    name: {
      en: "Fire Resistant Cables",
      fa: "کابل‌های مقاوم در برابر حریق",
    },
    pillarSlug: "fire-resistant-cables-guide",
    description: {
      en: "Fire resistant, fire retardant, and safety cables",
      fa: "کابل‌های مقاوم در برابر حریق، بازدارنده حریق و ایمنی",
    },
  },
  {
    id: "armored",
    slug: "armored",
    name: {
      en: "Armored Cables",
      fa: "کابل‌های زره‌دار",
    },
    pillarSlug: "armored-cables-guide",
    description: {
      en: "Armored cables and mechanical protection",
      fa: "کابل‌های زره‌دار و محافظت مکانیکی",
    },
  },
  {
    id: "control",
    slug: "control",
    name: {
      en: "Control & Instrumentation",
      fa: "کنترل و ابزار دقیق",
    },
    pillarSlug: "control-instrumentation-cables-guide",
    description: {
      en: "Control cables, instrumentation cables, and signal cables",
      fa: "کابل‌های کنترل، کابل‌های ابزار دقیق و کابل‌های سیگنال",
    },
  },
  {
    id: "manufacturing",
    slug: "manufacturing",
    name: {
      en: "Manufacturing & Quality",
      fa: "تولید و کیفیت",
    },
    pillarSlug: "cable-manufacturing-process-guide",
    description: {
      en: "Cable manufacturing process and quality control",
      fa: "فرآیند تولید کابل و کنترل کیفیت",
    },
  },
];

/**
 * Get article category by slug
 */
export function getArticleCategoryBySlug(slug) {
  return articleCategories.find((cat) => cat.slug === slug) || null;
}

/**
 * Get article tag by slug
 */
export function getArticleTagBySlug(slug) {
  return articleTags.find((tag) => tag.slug === slug) || null;
}

/**
 * Get content type by slug
 */
export function getContentTypeBySlug(slug) {
  return contentTypes.find((type) => type.slug === slug) || null;
}

/**
 * Get topical cluster by slug
 */
export function getTopicalClusterBySlug(slug) {
  return topicalClusters.find((cluster) => cluster.slug === slug) || null;
}

/**
 * Get all article categories
 */
export function getAllArticleCategories() {
  return articleCategories;
}

/**
 * Get all article tags
 */
export function getAllArticleTags() {
  return articleTags;
}

/**
 * Get all content types
 */
export function getAllContentTypes() {
  return contentTypes;
}

/**
 * Get all topical clusters
 */
export function getAllTopicalClusters() {
  return topicalClusters;
}
