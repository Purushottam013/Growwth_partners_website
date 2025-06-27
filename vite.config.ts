import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base:'/',
  server: {
    host: "::",
    port: 8080,
    strictPort: false,
    hmr: {
      port: 8080
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
 build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "robots.txt") {
            return "robots.txt";
          }
          if (assetInfo.name === "sitemap.xml") {
            return "sitemap.xml";
          }
          return assetInfo.name || "asset";
        },
      },
    },
    minify: mode === "production" ? "esbuild" : false,
    sourcemap: mode === "development",
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    copyPublicDir: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom',"react-router-dom"],
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  },
  publicDir: 'public'
}));
