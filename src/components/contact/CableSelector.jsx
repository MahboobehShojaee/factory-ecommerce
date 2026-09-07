/**
 * Cable Selector Component
 * Reusable checkbox group for cable family selection with animations
 */

import React, { useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const CableSelector = React.memo(({ 
  options, 
  selected, 
  onChange, 
  error 
}) => {
  const toggleCable = useCallback((opt) => {
    const updated = selected.includes(opt)
      ? selected.filter((i) => i !== opt)
      : [...selected, opt];
    onChange(updated);
  }, [selected, onChange]);

  return (
    <div className="space-y-2">
      {error && (
        <p className="text-sm text-red-600 font-medium">
          {error}
        </p>
      )}
      <div className="grid grid-cols-2 gap-2">
        {options.map((opt) => {
          const isSelected = selected.includes(opt);
          return (
            <motion.label
              key={opt}
              animate={{
                backgroundColor: isSelected ? "#FDF7E7" : "#F9FAFB",
                borderColor: isSelected ? "#D4AF37" : "#F3F4F6",
              }}
              className="flex items-center justify-between gap-2 rounded-xl border px-3 py-2 cursor-pointer group transition-all"
            >
              <input
                type="checkbox"
                className="h-4 w-4 accent-[#D4AF37]"
                onChange={() => toggleCable(opt)}
                checked={isSelected}
                aria-label={opt}
              />
              <span
                className={`text-[9px] font-bold transition-colors ${
                  isSelected ? "text-[#D4AF37]" : "text-gray-500"
                }`}
              >
                {opt}
              </span>
              <AnimatePresence>
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="text-[#D4AF37]"
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.label>
          );
        })}
      </div>
    </div>
  );
});

CableSelector.displayName = 'CableSelector';
