// Developed by Mahboobeh Shojaei | محبوبه شجاعی

import AppShell from "./app/AppShell.jsx";
import GoogleAnalytics from "./lib/analytics/GoogleAnalytics.jsx";
import MicrosoftClarity from "./lib/analytics/MicrosoftClarity.jsx";
import ErrorBoundary from "./components/common/ErrorBoundary.jsx";

if (import.meta.env.DEV) {
  console.log(
    "%c🧕 Developed by Mahboobeh Shojaei %c🌐 محبوبه شجاعی",
    "color:#d4af37;font-size:16px;font-weight:700;background:#1f2937;padding:8px 12px;border-radius:6px 0 0 6px;",
    "color:#fff;font-size:16px;font-weight:700;background:#374151;padding:8px 12px;border-radius:0 6px 6px 0;",
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <GoogleAnalytics />
      <MicrosoftClarity />
      <AppShell />
    </ErrorBoundary>
  );
}
