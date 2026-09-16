import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useRTL } from '../../hooks/useRTL.js';

export default function Breadcrumb({ items, lang }) {
  const { isRTL } = useRTL();

  if (!items || items.length === 0) return null;

  return (
    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
      <Link
        to={`/${lang === 'fa' ? 'fa' : ''}`}
        className="hover:text-[#D4AF37] transition-colors flex items-center gap-1"
        aria-label={lang === 'fa' ? 'خانه' : 'Home'}
      >
        <Home className="w-4 h-4" />
      </Link>
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
          {item.url ? (
            <Link
              to={item.url}
              className="hover:text-[#D4AF37] transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[#374151] font-medium">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}

/**
 * Generate breadcrumb items for article pages
 * @param {Object} article - Article data
 * @param {string} lang - Language code
 * @returns {Array} - Breadcrumb items
 */
export function generateArticleBreadcrumbItems(article, lang) {
  const items = [];

  // Add category if exists
  if (article.category) {
    items.push({
      label: article.category.name[lang],
      url: `/${lang === 'fa' ? 'fa/' : ''}blog/category/${article.category.slug}`,
    });
  }

  // Add topical cluster if exists
  if (article.topicalCluster) {
    items.push({
      label: article.topicalCluster.name[lang],
      url: `/${lang === 'fa' ? 'fa/' : ''}blog/cluster/${article.topicalCluster.slug}`,
    });
  }

  // Add article title (current page, no URL)
  items.push({
    label: article.title[lang],
    url: null,
  });

  return items;
}

/**
 * Generate breadcrumb items for category pages
 * @param {Object} category - Category data
 * @param {string} lang - Language code
 * @returns {Array} - Breadcrumb items
 */
export function generateCategoryBreadcrumbItems(category, lang) {
  return [
    {
      label: lang === 'fa' ? 'دانش‌کده' : 'Knowledge Center',
      url: `/${lang === 'fa' ? 'fa/' : ''}blog`,
    },
    {
      label: category.name[lang],
      url: null,
    },
  ];
}

/**
 * Generate breadcrumb items for cluster pages
 * @param {Object} cluster - Cluster data
 * @param {string} lang - Language code
 * @returns {Array} - Breadcrumb items
 */
export function generateClusterBreadcrumbItems(cluster, lang) {
  return [
    {
      label: lang === 'fa' ? 'دانش‌کده' : 'Knowledge Center',
      url: `/${lang === 'fa' ? 'fa/' : ''}blog`,
    },
    {
      label: cluster.name[lang],
      url: null,
    },
  ];
}
