
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Improved performance mounting
const mountApp = () => {
  const rootElement = document.getElementById("root");
  
  if (!rootElement) {
    console.error("Failed to find the root element");
    return;
  }
  
  try {
    // Create root with concurrency
    const root = createRoot(rootElement);
    
    // Render with optimized settings
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    // Web Vitals reporting
    if ('PerformanceObserver' in window) {
      // Create a performance observer for CLS
      const clsObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach(entry => {
          // Type assertion for layout-shift specific properties
          const layoutShiftEntry = entry as PerformanceEntry & { hadRecentInput?: boolean, value?: number };
          
          // Check if this is a valid layout shift entry with the properties we need
          if (layoutShiftEntry.hadRecentInput !== undefined && layoutShiftEntry.value !== undefined) {
            if (layoutShiftEntry.hadRecentInput) return;
            
            const cls = layoutShiftEntry.value;
            if (cls > 0.1) {
              console.warn('High CLS detected:', cls);
            }
          }
        });
      });
      
      // Start observing layout shifts
      clsObserver.observe({ type: 'layout-shift', buffered: true });
      
      // LCP observer
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        // Report LCP to console
        console.log('LCP:', lastEntry.startTime);
      });
      
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      
      // FID observer
      const fidObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach(entry => {
          const fidEntry = entry as PerformanceEntry & { processingStart?: number, startTime: number };
          // Check if we have the needed properties
          if (fidEntry.processingStart !== undefined) {
            const fid = fidEntry.processingStart - fidEntry.startTime;
            console.log('FID:', fid);
          }
        });
      });
      
      fidObserver.observe({ type: 'first-input', buffered: true });
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

// Optimize hydration by waiting for DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    // Use requestIdleCallback for non-critical rendering
    if ('requestIdleCallback' in window) {
      requestIdleCallback(mountApp, { timeout: 2000 });
    } else {
      setTimeout(mountApp, 1);
    }
  });
} else {
  // DOM already loaded, mount as soon as possible
  if ('requestIdleCallback' in window) {
    requestIdleCallback(mountApp, { timeout: 2000 });
  } else {
    setTimeout(mountApp, 1);
  }
}
