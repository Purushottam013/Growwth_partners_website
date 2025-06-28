// vite.config.ts

import { defineConfig, ViteDevServer } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";
import type { IncomingMessage, ServerResponse } from "http";

export default defineConfig(({ mode }) => ({
  base: "/",

  server: {
    host: "::",
    port: 8080,
    configureServer: (server: ViteDevServer) => {
      if (mode === "development") {
        server.middlewares.use(
          (
            req: IncomingMessage & { url?: string },
            res: ServerResponse,
            next: () => void
          ) => {
            if (!req.url) return next();

            // Only serve these public files from /public
            const PUBLIC_FILES = ["/sitemap.xml", "/robots.txt"];
            const urlPath = req.url.split(/[?#]/)[0];
            if (PUBLIC_FILES.includes(urlPath)) {
              const publicDir = path.resolve(process.cwd(), "public");
              const filePath = path.join(publicDir, urlPath);

              console.log(
                `[VITE MIDDLEWARE] Requested: ${req.url} → ${filePath}`
              );

              if (fs.existsSync(filePath)) {
                if (filePath.endsWith(".xml")) {
                  res.setHeader("Content-Type", "application/xml");
                } else if (filePath.endsWith(".txt")) {
                  res.setHeader("Content-Type", "text/plain");
                }
                res.setHeader("X-Content-Type-Options", "nosniff");
                return fs.createReadStream(filePath)
                  .on("error", (e) => {
                    console.error("Error streaming static file:", e);
                    next();
                  })
                  .pipe(res);
              } else {
                console.warn(`[VITE MIDDLEWARE] File not found: ${filePath}`);
              }
            }

            next();
          }
        );
      }
    },
    strictPort: false,
    hmr: { port: 8080 },
    headers: { "Access-Control-Allow-Origin": "*" },
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  // Tell Vite-SSG and SSR to bundle react-helmet-async
  ssr: {
    noExternal: ["react-helmet-async"],
  },

  // Vite-SSG options
  ssgOptions: {
    formatting: "minify",
    script: "async",
    // only include these routes in the SSG build
    includedRoutes: (paths: string[]) =>
      paths
        .map((p) => (p === "/" ? "index" : p.replace(/^\/|\/$/g, "")))
        .filter((p) => !p.startsWith("admin") && p !== "admin-login"),
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // include robots.txt and sitemap.xml as assets
  assetsInclude: ["**/*.txt", "**/*.xml"],
  publicDir: "public",

  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "robots.txt") return "robots.txt";
          if (assetInfo.name === "sitemap.xml") return "sitemap.xml";
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
    include: ["react", "react-dom", "react-router-dom"],
  },
}));
