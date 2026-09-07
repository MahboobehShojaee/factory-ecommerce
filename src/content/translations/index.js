/**
 * Centralized Translation Index
 * Combines all modular translation files into a single export
 * This maintains backward compatibility while enabling modular architecture
 */

import { layoutTranslations } from './layout.js';
import { homeTranslations } from './home.js';
import { projectsTranslations } from './projects.js';
import { productsTranslations } from './products.js';
import { aboutTranslations } from './about.js';
import { contactTranslations } from './contact.js';
import { cartTranslations } from './cart.js';

/**
 * Merge all translation modules
 * Structure: { en: { ... }, fa: { ... } }
 */
export const translations = {
  en: {
    ...layoutTranslations.en,
    ...homeTranslations.en,
    ...projectsTranslations.en,
    ...productsTranslations.en,
    ...aboutTranslations.en,
    ...contactTranslations.en,
    ...cartTranslations.en,
  },
  fa: {
    ...layoutTranslations.fa,
    ...homeTranslations.fa,
    ...projectsTranslations.fa,
    ...productsTranslations.fa,
    ...aboutTranslations.fa,
    ...contactTranslations.fa,
    ...cartTranslations.fa,
  },
};

/**
 * Get translations for a specific language
 */
export function getTranslations(lang) {
  return translations[lang] || translations.fa;
}

/**
 * Get a specific translation section
 */
export function getTranslationSection(lang, section) {
  const langTranslations = translations[lang] || translations.fa;
  return langTranslations[section] || {};
}
