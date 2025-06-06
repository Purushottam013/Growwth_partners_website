import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
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
        manualChunks: undefined,
        assetFileNames: (assetInfo) => {
          // Ensure robots.txt keeps its name and location
          if (assetInfo.name === 'robots.txt') {
            return 'robots.txt';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
    assetsDir: 'assets',
    sourcemap: false,
    copyPublicDir: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  },
  publicDir: 'public'
}));
