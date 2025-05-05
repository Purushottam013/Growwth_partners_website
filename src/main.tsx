
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Use requestIdleCallback for non-critical initialization
const mountApp = () => {
  const rootElement = document.getElementById("root");
  
  if (!rootElement) {
    console.error("Failed to find the root element");
    return;
  }
  
  try {
    // Create root with concurrency
    const root = createRoot(rootElement);
    
    // Use production rendering without strict mode
    root.render(
      <App />
    );
    
    // Register performance metrics for analytics
    if ('performance' in window && 'measure' in performance) {
      window.addEventListener('load', () => {
        // Report performance entries after load
        requestAnimationFrame(() => {
          setTimeout(() => {
            if ('PerformanceObserver' in window) {
              // Report LCP
              const lcpObserver = new PerformanceObserver((entryList) => {
                const entries = entryList.getEntries();
                const lastEntry = entries[entries.length - 1];
                console.log('LCP:', lastEntry.startTime);
              });
              
              lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
              
              // Report FID
              const fidObserver = new PerformanceObserver((entryList) => {
                const entries = entryList.getEntries();
                if (entries.length > 0) {
                  // Cast to PerformanceEventTiming to access processingStart property
                  const firstEntry = entries[0] as PerformanceEventTiming;
                  console.log('FID:', firstEntry.processingStart - firstEntry.startTime);
                }
              });
              
              fidObserver.observe({ type: 'first-input', buffered: true });
            }
          }, 0);
        });
      });
    }
    
  } catch (error) {
    console.error("Error rendering React application:", error);
    
    // Provide fallback UI in case of render failure
    if (rootElement) {
      rootElement.innerHTML = `
        <div style="padding: 20px; text-align: center;">
          <h2>Something went wrong</h2>
          <p>Please try refreshing the page</p>
        </div>
      `;
    }
  }
};

// Execute using requestIdleCallback for better first paint
if ('requestIdleCallback' in window) {
  // Use requestIdleCallback for non-critical initialization
  requestIdleCallback(() => {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", mountApp);
    } else {
      mountApp();
    }
  }, { timeout: 1000 });  
} else {
  // Fallback for browsers without requestIdleCallback
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountApp);
  } else {
    mountApp();
  }
}
