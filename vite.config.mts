import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
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
    minify: 'esbuild',
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
          motion: ["framer-motion"],
          query: ["@tanstack/react-query", "axios"],
          pdf: ["jspdf"],
          forms: ["react-hook-form", "zod", "@hookform/resolvers"],
          state: ["zustand"],
          ui: ["react-helmet-async", "react-hot-toast", "react-intersection-observer"],
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

