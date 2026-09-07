import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Google Analytics 4 Integration
 * Tracks page views, events, and user interactions
 */

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
const ENABLE_ANALYTICS = import.meta.env.VITE_ENABLE_ANALYTICS === 'true';

// Initialize GA4
export const initGA = () => {
  if (!ENABLE_ANALYTICS || !GA_MEASUREMENT_ID) return;

  // Load gtag.js
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false, // We'll handle page views manually
  });
};

// Track page view
export const trackPageView = (path, title) => {
  if (!ENABLE_ANALYTICS || !GA_MEASUREMENT_ID) return;

  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title,
    page_location: window.location.href,
  });
};

// Track custom event
export const trackEvent = (eventName, parameters = {}) => {
  if (!ENABLE_ANALYTICS || !GA_MEASUREMENT_ID) return;

  window.gtag('event', eventName, parameters);
};

// GA4 Component
export default function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    // Track page view on route change
    const title = document.title;
    trackPageView(location.pathname, title);
  }, [location]);

  return null;
}

// Event tracking utilities
export const analytics = {
  // CTA Tracking
  trackCTAClick: (ctaName, location) => {
    trackEvent('cta_click', {
      cta_name: ctaName,
      location: location,
    });
  },

  // Form Tracking
  trackFormSubmit: (formName) => {
    trackEvent('form_submit', {
      form_name: formName,
    });
  },

  trackFormStart: (formName) => {
    trackEvent('form_start', {
      form_name: formName,
    });
  },

  // Conversion Tracking
  trackWhatsAppClick: (location) => {
    trackEvent('whatsapp_click', {
      location: location,
    });
  },

  trackQuotationRequest: (formData) => {
    trackEvent('quotation_request', {
      project_type: formData.projectType,
      urgency: formData.urgency,
    });
  },

  trackCatalogDownload: (withLeadCapture = false) => {
    trackEvent('catalog_download', {
      lead_capture: withLeadCapture,
    });
  },

  trackContactFormSubmit: (formData) => {
    trackEvent('contact_form_submit', {
      project_type: formData.projectType,
      cable_count: formData.selectedCables?.length || 0,
    });
  },

  // Article Tracking
  trackArticleView: (articleTitle, category) => {
    trackEvent('article_view', {
      article_title: articleTitle,
      category: category,
    });
  },

  trackArticleShare: (articleTitle, platform) => {
    trackEvent('article_share', {
      article_title: articleTitle,
      platform: platform,
    });
  },

  trackReadingProgress: (articleTitle, percentage) => {
    trackEvent('reading_progress', {
      article_title: articleTitle,
      percentage: percentage,
    });
  },

  // Product Tracking
  trackProductView: (productName, category) => {
    trackEvent('product_view', {
      product_name: productName,
      category: category,
    });
  },

  // Navigation Tracking
  trackNavigationClick: (destination) => {
    trackEvent('navigation_click', {
      destination: destination,
    });
  },

  // Language Tracking
  trackLanguageChange: (fromLang, toLang) => {
    trackEvent('language_change', {
      from_language: fromLang,
      to_language: toLang,
    });
  },

  // Error Tracking
  trackError: (errorType, errorMessage) => {
    trackEvent('error', {
      error_type: errorType,
      error_message: errorMessage,
    });
  },

  // Content Performance Tracking
  trackArticleEngagement: (articleSlug, engagementType, data = {}) => {
    trackEvent('article_engagement', {
      article_slug: articleSlug,
      engagement_type: engagementType,
      ...data,
    });
  },

  trackArticleCTAClick: (articleSlug, ctaType, ctaLocation) => {
    trackEvent('article_cta_click', {
      article_slug: articleSlug,
      cta_type: ctaType,
      cta_location: ctaLocation,
    });
  },

  trackArticleConversion: (articleSlug, conversionType) => {
    trackEvent('article_conversion', {
      article_slug: articleSlug,
      conversion_type: conversionType,
    });
  },

  trackTopPerformingContent: (articleSlug, metrics) => {
    trackEvent('top_performing_content', {
      article_slug: articleSlug,
      page_views: metrics.pageViews,
      avg_time_on_page: metrics.avgTimeOnPage,
      bounce_rate: metrics.bounceRate,
      scroll_depth: metrics.scrollDepth,
    });
  },

  trackContentSearch: (searchQuery, resultsCount) => {
    trackEvent('content_search', {
      search_query: searchQuery,
      results_count: resultsCount,
    });
  },

  trackContentFilter: (filterType, filterValue) => {
    trackEvent('content_filter', {
      filter_type: filterType,
      filter_value: filterValue,
    });
  },

  trackRelatedArticleClick: (currentArticleSlug, relatedArticleSlug) => {
    trackEvent('related_article_click', {
      current_article_slug: currentArticleSlug,
      related_article_slug: relatedArticleSlug,
    });
  },

  trackTableOfContentsClick: (articleSlug, headingId) => {
    trackEvent('toc_click', {
      article_slug: articleSlug,
      heading_id: headingId,
    });
  },

  trackTechnicalTermHover: (articleSlug, term) => {
    trackEvent('technical_term_hover', {
      article_slug: articleSlug,
      term: term,
    });
  },
};
