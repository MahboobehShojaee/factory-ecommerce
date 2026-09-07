import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { useRTL } from '../../hooks/useRTL.js';
import { List, ChevronRight, Menu, X } from 'lucide-react';

export default function TableOfContents({ content, lang }) {
  const { isRTL, dirClass } = useRTL();
  const [headings, setHeadings] = useState([]);
  const [activeHeading, setActiveHeading] = useState('');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const tocRef = useRef(null);

  // Extract headings from content
  useEffect(() => {
    if (!content) return;

    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const headingElements = doc.querySelectorAll('h2, h3, h4');
    
    const extractedHeadings = Array.from(headingElements).map((heading, index) => ({
      id: `heading-${index}`,
      text: heading.textContent,
      level: parseInt(heading.tagName.charAt(1)),
      element: heading,
    }));

    setHeadings(extractedHeadings);
  }, [content]);

  // Track active heading on scroll
  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      setIsMobileOpen(false);
    }
  };

  if (headings.length === 0) return null;

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className={`lg:hidden fixed bottom-20 right-4 z-40 bg-[#374151] text-white p-3 rounded-full shadow-lg ${isRTL ? 'left-4 right-auto' : ''}`}
        aria-label={lang === 'fa' ? 'محتوا' : 'Contents'}
      >
        {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile TOC */}
      {isMobileOpen && (
        <div className={`lg:hidden fixed inset-0 z-30 bg-black/50 ${dirClass}`}>
          <div
            className={`fixed top-0 ${isRTL ? 'left-0' : 'right-0'} h-full w-80 bg-white shadow-2xl overflow-y-auto`}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-black text-[#374151]">
                  {lang === 'fa' ? 'فهرست مطالب' : 'Table of Contents'}
                </h3>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="text-gray-500 hover:text-[#374151]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <TOCList
                headings={headings}
                activeHeading={activeHeading}
                onHeadingClick={scrollToHeading}
                isRTL={isRTL}
                lang={lang}
              />
            </div>
          </div>
        </div>
      )}

      {/* Desktop TOC */}
      <div className="hidden lg:block sticky top-24">
        <div className="bg-white border border-gray-100 rounded-2xl shadow-lg shadow-gray-200/50 p-6">
          <h3 className={`text-sm font-black text-[#374151] uppercase tracking-wider mb-4 flex items-center gap-2 ${isRTL ? 'text-right' : 'text-left'}`}>
            <List className="w-4 h-4 text-[#D4AF37]" />
            {lang === 'fa' ? 'فهرست مطالب' : 'Table of Contents'}
          </h3>
          <TOCList
            headings={headings}
            activeHeading={activeHeading}
            onHeadingClick={scrollToHeading}
            isRTL={isRTL}
            lang={lang}
          />
        </div>
      </div>
    </>
  );
}

function TOCList({ headings, activeHeading, onHeadingClick, isRTL, lang }) {
  return (
    <nav aria-label="Table of Contents">
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{
              marginLeft: isRTL ? 0 : `${(heading.level - 2) * 16}px`,
              marginRight: isRTL ? `${(heading.level - 2) * 16}px` : 0,
            }}
          >
            <button
              onClick={() => onHeadingClick(heading.id)}
              className={`w-full text-left text-sm transition-all duration-200 hover:text-[#D4AF37] ${
                activeHeading === heading.id
                  ? 'text-[#D4AF37] font-bold'
                  : 'text-gray-600'
              } ${isRTL ? 'text-right' : 'text-left'}`}
              style={{
                paddingLeft: isRTL ? 0 : `${(heading.level - 2) * 8 + 8}px`,
                paddingRight: isRTL ? `${(heading.level - 2) * 8 + 8}px` : 0,
              }}
            >
              <span className="flex items-center gap-2">
                {activeHeading === heading.id && (
                  <ChevronRight className={`w-3 h-3 ${isRTL ? 'rotate-180' : ''}`} />
                )}
                {heading.text}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/**
 * Add heading IDs to content for TOC navigation
 * @param {string} content - HTML content
 * @returns {string} - Content with heading IDs
 */
export function addHeadingIds(content) {
  if (!content) return content;

  const parser = new DOMParser();
  const doc = parser.parseFromString(content, 'text/html');
  const headingElements = doc.querySelectorAll('h2, h3, h4');

  headingElements.forEach((heading, index) => {
    heading.id = `heading-${index}`;
  });

  return doc.body.innerHTML;
}

/**
 * Generate TOC data from content
 * @param {string} content - HTML content
 * @returns {Array} - Array of heading objects
 */
export function generateTOCData(content) {
  if (!content) return [];

  const parser = new DOMParser();
  const doc = parser.parseFromString(content, 'text/html');
  const headingElements = doc.querySelectorAll('h2, h3, h4');

  return Array.from(headingElements).map((heading, index) => ({
    id: `heading-${index}`,
    text: heading.textContent,
    level: parseInt(heading.tagName.charAt(1)),
  }));
}
