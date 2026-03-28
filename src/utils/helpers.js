// Utility helper functions

/**
 * Format number with appropriate suffix
 * @param {number|string} value - The value to format
 * @returns {string} Formatted value with suffix
 */
export const formatStatValue = (value) => {
  const str = String(value);
  if (str.includes('+')) return str;
  if (str.includes('k')) return str;
  return str;
};

/**
 * Debounce function to limit function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Check if element is in viewport
 * @param {Element} element - Element to check
 * @returns {boolean} Whether element is in viewport
 */
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Smooth scroll to element
 * @param {Element} element - Element to scroll to
 * @param {Object} options - Scroll options
 */
export const scrollToElement = (element, options = {}) => {
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    ...options
  });
};

/**
 * Generate unique ID
 * @returns {string} Unique ID
 */
export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

/**
 * Get localized text with fallback
 * @param {Object} dict - Translation dictionary
 * @param {string} key - Key to lookup
 * @param {string} fallback - Fallback text
 * @returns {string} Localized text or fallback
 */
export const getLocalizedText = (dict, key, fallback = '') => {
  const keys = key.split('.');
  let value = dict;
  
  for (const k of keys) {
    value = value?.[k];
    if (value === undefined) return fallback;
  }
  
  return value || fallback;
};
