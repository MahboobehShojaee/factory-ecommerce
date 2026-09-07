import { lazy, Suspense } from "react";
import Layout from "../components/layout/Layout.jsx";
import AppRouter from "./router/AppRouter.jsx";
import WhatsAppStickyCTA from "../components/ui/WhatsAppStickyCTA.jsx";

const ChatBot = lazy(() => import("../components/ChatBot.jsx"));
const chatbotEnabled = import.meta.env.VITE_ENABLE_CHATBOT === "true";

export default function AppShell() {
  return (
    <Layout>
      <AppRouter />
      {chatbotEnabled && (
        <Suspense fallback={null}>
          <ChatBot />
        </Suspense>
      )}
      <WhatsAppStickyCTA />
    </Layout>
  );
}