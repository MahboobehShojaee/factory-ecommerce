import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

const DEFAULT_SITE_URL = "https://setarehkerman.com";

function siteUrlHtmlPlugin() {
  return {
    name: "site-url-html",
    transformIndexHtml(html) {
      const siteUrl = (process.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, "");
      return html.replaceAll(DEFAULT_SITE_URL, siteUrl);
    },
  };
}

export default defineConfig(({ mode }) => ({
  plugins: [react(), siteUrlHtmlPlugin()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
      "@ui": fileURLToPath(new URL("./src/components/ui", import.meta.url)),
      "@layout": fileURLToPath(new URL("./src/components/layout", import.meta.url)),
      "@api": fileURLToPath(new URL("./src/api", import.meta.url)),
      "@lib": fileURLToPath(new URL("./src/lib", import.meta.url)),
      "@constants": fileURLToPath(new URL("./src/constants", import.meta.url)),
      "@animations": fileURLToPath(new URL("./src/animations", import.meta.url)),
    },
  },
  server: {
    cors: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  build: {
    sourcemap: mode === 'development',
    minify: 'oxc',
    target: 'es2020',
    rolldownOptions: {
      checks: {
        pluginTimings: false,
      },
      output: {
        manualChunks(id) {
          const normalizedId = id.replaceAll("\\", "/");
          if (!normalizedId.includes("/node_modules/")) return undefined;

          const groups = {
            react: ["react", "react-dom", "react-router-dom"],
            motion: ["framer-motion"],
            query: ["@tanstack/react-query", "axios"],
            pdf: ["jspdf"],
            forms: ["react-hook-form", "zod", "@hookform/resolvers"],
            state: ["zustand"],
            ui: ["react-hot-toast", "react-intersection-observer"],
          };

          for (const [chunkName, packages] of Object.entries(groups)) {
            if (packages.some((packageName) => normalizedId.includes(`/node_modules/${packageName}/`))) {
              return chunkName;
            }
          }

          return undefined;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: false,
  },
  preview: {
    port: 4173,
    strictPort: true,
  },
}));

