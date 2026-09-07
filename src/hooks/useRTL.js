/**
 * Custom hook for RTL (Right-to-Left) handling
 * Centralizes RTL logic and provides consistent utilities across components
 */

import { useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';

/**
 * RTL hook that provides RTL-related utilities
 * @returns {Object} RTL utilities
 */
export const useRTL = () => {
  const { isRTL, lang } = useLanguage();

  // Direction class for text alignment
  const dirClass = useMemo(() => (isRTL ? 'text-right' : 'text-left'), [isRTL]);

  // Flex direction for RTL layouts
  const flexDir = useMemo(() => (isRTL ? 'flex-row-reverse' : 'flex-row'), [isRTL]);

  // Margin/padding utilities for RTL
  const marginStart = useMemo(() => (isRTL ? 'mr' : 'ml'), [isRTL]);
  const marginEnd = useMemo(() => (isRTL ? 'ml' : 'mr'), [isRTL]);
  const paddingStart = useMemo(() => (isRTL ? 'pr' : 'pl'), [isRTL]);
  const paddingEnd = useMemo(() => (isRTL ? 'pl' : 'pr'), [isRTL]);

  // Arrow/icon rotation for RTL
  const arrowRotation = useMemo(() => (isRTL ? 180 : 0), [isRTL]);

  // Check if Persian language
  const isPersian = useMemo(() => lang === 'fa', [lang]);

  // Check if English language
  const isEnglish = useMemo(() => lang === 'en', [lang]);

  // Get localized text with fallback
  const getLocalizedText = (faText, enText) => {
    return isPersian ? faText : enText;
  };

  // Get spacing class with RTL awareness
  const getSpacingClass = (property, value, isStart = true) => {
    const prefix = isStart ? marginStart : marginEnd;
    return `${prefix}-${value}`;
  };

  // Get flex class with RTL awareness
  const getFlexClass = (direction = 'row') => {
    if (direction === 'row') return flexDir;
    if (direction === 'row-reverse') return isRTL ? 'flex-row' : 'flex-row-reverse';
    return direction;
  };

  return {
    // Core RTL state
    isRTL,
    lang,
    isPersian,
    isEnglish,

    // Utility classes
    dirClass,
    flexDir,
    marginStart,
    marginEnd,
    paddingStart,
    paddingEnd,

    // Visual utilities
    arrowRotation,

    // Helper functions
    getLocalizedText,
    getSpacingClass,
    getFlexClass,
  };
};

/**
 * Simplified RTL hook for components that only need basic RTL support
 */
export const useBasicRTL = () => {
  const { isRTL, lang } = useLanguage();

  return {
    isRTL,
    lang,
    dirClass: isRTL ? 'text-right' : 'text-left',
    flexDir: isRTL ? 'flex-row-reverse' : 'flex-row',
  };
};
