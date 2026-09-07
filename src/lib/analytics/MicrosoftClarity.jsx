import { useEffect } from 'react';

/**
 * Microsoft Clarity Integration
 * Provides heatmaps, session recordings, and user behavior analytics
 */

const CLARITY_PROJECT_ID = import.meta.env.VITE_CLARITY_PROJECT_ID;
const ENABLE_ANALYTICS = import.meta.env.VITE_ENABLE_ANALYTICS === 'true';

// Initialize Clarity
export const initClarity = () => {
  if (!ENABLE_ANALYTICS || !CLARITY_PROJECT_ID) return;

  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", CLARITY_PROJECT_ID);
};

// Clarity Component
export default function MicrosoftClarity() {
  useEffect(() => {
    initClarity();
  }, []);

  return null;
}
