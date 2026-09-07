import { useEffect, useRef } from 'react';

/**
 * Hook to track scroll depth for analytics
 * Tracks scroll progress at 25%, 50%, 75%, and 100%
 */
export const useScrollDepthTracking = (eventName = 'scroll_depth', options = {}) => {
  const { threshold = [25, 50, 75, 100], enabled = true } = options;
  const trackedThresholds = useRef(new Set());

  useEffect(() => {
    if (!enabled) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = Math.round((scrollTop / scrollHeight) * 100);

      threshold.forEach((percent) => {
        if (scrollPercent >= percent && !trackedThresholds.current.has(percent)) {
          trackedThresholds.current.add(percent);

          // Track scroll depth event
          if (window.analytics && window.analytics.trackEvent) {
            window.analytics.trackEvent(eventName, {
              category: 'engagement',
              label: `${percent}%`,
              value: percent,
            });
          }

          // Track to GA4 if available
          if (window.gtag) {
            window.gtag('event', eventName, {
              event_category: 'engagement',
              event_label: `${percent}%`,
              value: percent,
            });
          }

          // Track to Clarity if available
          if (window.clarity) {
            window.clarity('event', eventName, {
              depth: percent,
            });
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      trackedThresholds.current.clear();
    };
  }, [eventName, threshold, enabled]);
};

/**
 * Hook to track time on page
 */
export const useTimeOnPageTracking = (eventName = 'time_on_page', options = {}) => {
  const { intervals = [30, 60, 120, 300], enabled = true } = options;
  const trackedIntervals = useRef(new Set());

  useEffect(() => {
    if (!enabled) return;

    intervals.forEach((seconds) => {
      const timer = setTimeout(() => {
        if (!trackedIntervals.current.has(seconds)) {
          trackedIntervals.current.add(seconds);

          // Track time on page event
          if (window.analytics && window.analytics.trackEvent) {
            window.analytics.trackEvent(eventName, {
              category: 'engagement',
              label: `${seconds}s`,
              value: seconds,
            });
          }

          // Track to GA4 if available
          if (window.gtag) {
            window.gtag('event', eventName, {
              event_category: 'engagement',
              event_label: `${seconds}s`,
              value: seconds,
            });
          }
        }
      }, seconds * 1000);

      return () => clearTimeout(timer);
    });

    return () => {
      trackedIntervals.current.clear();
    };
  }, [eventName, intervals, enabled]);
};
