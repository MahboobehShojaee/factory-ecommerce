import { absoluteUrl, defaultOgImage, siteUrl } from "../../config/site.js";

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Setareh Kerman Wire & Cable",
    url: siteUrl,
    logo: defaultOgImage,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kerman",
      addressCountry: "IR",
    },
  };
}

export function buildBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildProductSchema({ name, description, category, url }) {
  return {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    name,
    description,
    category,
    url,
    brand: {
      "@type": "Brand",
      name: "Setareh Kerman",
    },
  };
}

export function buildArticleSchema({ headline, description, author, publishDate, url, image }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    author: {
      "@type": "Organization",
      name: author,
    },
    datePublished: publishDate,
    dateModified: publishDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    image: image || defaultOgImage,
    publisher: {
      "@type": "Organization",
      name: "Setareh Kerman Wire & Cable",
      logo: {
        "@type": "ImageObject",
        url: defaultOgImage,
      },
    },
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Setareh Kerman Wire & Cable Factory",
    image: defaultOgImage,
    description: "Industrial wire and cable manufacturing factory in Kerman, Iran. Producing high-quality power, control, and communication cables.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Industrial Zone, Kerman",
      addressLocality: "Kerman",
      addressRegion: "Kerman",
      postalCode: "761681361",
      addressCountry: "IR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.2839,
      longitude: 57.0833,
    },
    url: siteUrl,
    telephone: "+98-34-32522626",
    email: "info.setarehkerman@gmail.com",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    priceRange: "$$",
  };
}

/**
 * Build FAQ Schema for articles with FAQ content
 * @param {Array} faqs - Array of FAQ objects with question and answer
 * @returns {Object} - FAQPage schema
 */
export function buildFAQSchema(faqs) {
  if (!faqs || faqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Build HowTo Schema for technical guides
 * @param {Object} howToData - HowTo data object
 * @returns {Object} - HowTo schema
 */
export function buildHowToSchema({ name, description, steps, image, tool, supply }) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    image,
    tool: tool ? {
      "@type": "HowToTool",
      name: tool,
    } : undefined,
    supply: supply ? {
      "@type": "HowToSupply",
      name: supply,
    } : undefined,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image,
    })),
  };
}

/**
 * Build TechnicalArticle Schema for technical content
 * @param {Object} articleData - Article data object
 * @returns {Object} - TechnicalArticle schema
 */
export function buildTechnicalArticleSchema({ headline, description, author, publishDate, url, image, proficiencyLevel, dependencies }) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline,
    description,
    author: {
      "@type": "Organization",
      name: author,
    },
    datePublished: publishDate,
    dateModified: publishDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    image: image || defaultOgImage,
    publisher: {
      "@type": "Organization",
      name: "Setareh Kerman Wire & Cable",
      logo: {
        "@type": "ImageObject",
        url: defaultOgImage,
      },
    },
    proficiencyLevel: proficiencyLevel || "Beginner",
    dependencies: dependencies || [],
  };
}

/**
 * Build Glossary schema for glossary pages
 * @param {Object} glossaryData - Glossary data object
 * @returns {Object} - DefinedTerm schema
 */
export function buildGlossarySchema({ name, definition, url, category }) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name,
    definition: {
      "@type": "DefinedTerm",
      termCode: category,
      description: definition,
    },
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Wire and Cable Industry Glossary",
      url: absoluteUrl("/glossary"),
    },
    url,
  };
}

