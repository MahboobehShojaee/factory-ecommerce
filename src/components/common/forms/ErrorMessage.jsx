import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable Error Message component for form validation
 * Supports bilingual (fa/en) and RTL
 */
const ErrorMessage = React.memo(function ErrorMessage({ message, className = '' }) {
  if (!message) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`flex items-center gap-2 text-sm text-red-600 font-medium ${className}`}
    >
      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>{message}</span>
    </motion.div>
  );
});

ErrorMessage.displayName = 'ErrorMessage';

export default ErrorMessage;
