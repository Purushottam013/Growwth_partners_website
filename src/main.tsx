
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Improved performance mounting with better error handling
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
    
    // Web Vitals reporting - improved implementation
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
      
      // LCP observer with improved data handling
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        // Report LCP to console
        console.log('LCP:', lastEntry.startTime);
        
        // Send to analytics if needed
        if (lastEntry.startTime > 2500) {
          console.warn('Poor LCP detected:', lastEntry.startTime);
        }
      });
      
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      
      // FID observer with better type assertion
      const fidObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach(entry => {
          const fidEntry = entry as PerformanceEntry & { processingStart?: number, startTime: number };
          // Check if we have the needed properties
          if (fidEntry.processingStart !== undefined) {
            const fid = fidEntry.processingStart - fidEntry.startTime;
            console.log('FID:', fid);
            
            // Report poor FID
            if (fid > 100) {
              console.warn('Poor FID detected:', fid);
            }
          }
        });
      });
      
      fidObserver.observe({ type: 'first-input', buffered: true });
      
      // Add INP measurement
      try {
        const inpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          entries.forEach(entry => {
            // Type assertion for INP specific properties
            const inpEntry = entry as PerformanceEntry & { 
              interactionId?: number, 
              target?: Node,
              duration?: number 
            };
            
            if (inpEntry.duration !== undefined && inpEntry.duration > 200) {
              console.warn('High interaction latency detected:', inpEntry.duration);
            }
          });
        });
        
        // Fixed: Remove durationThreshold which is not supported in PerformanceObserverInit
        inpObserver.observe({ type: 'event', buffered: true });
      } catch (e) {
        // INP measurement might not be supported in all browsers
        console.info('INP measurement not supported');
      }
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

// Use more performant approach for initial load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    // Prioritize critical path rendering
    setTimeout(mountApp, 0);
  });
} else {
  // DOM already loaded, mount immediately
  setTimeout(mountApp, 0);
}

// Add resource hint optimization
if (window.requestIdleCallback) {
  window.requestIdleCallback(() => {
    // Preconnect to likely required domains during idle time
    const domains = [
      'https://fonts.gstatic.com',
      'https://fonts.googleapis.com'
    ];
    
    domains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, { timeout: 5000 });
}
