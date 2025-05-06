
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Performance monitoring configuration
const PERFORMANCE_MONITORING_ENABLED = true;
const PERFORMANCE_DEBUG = false;

// Log performance data if debug is enabled
const logPerformance = (metric, value) => {
  if (PERFORMANCE_DEBUG) {
    console.log(`${metric}:`, value);
  }
  
  // Here you could also send to analytics service
  // if implemented in the future
};

// More efficient app mounting with better error handling
const mountApp = () => {
  // Mark the start of app mounting for performance measurement
  performance.mark('app-mount-start');
  
  const rootElement = document.getElementById("root");
  
  if (!rootElement) {
    console.error("Failed to find the root element");
    return;
  }
  
  try {
    // Create root with React 18 concurrency features
    const root = createRoot(rootElement);
    
    // Render with optimized settings
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    // Mark the end of successful mounting
    performance.mark('app-mount-end');
    performance.measure('app-mount', 'app-mount-start', 'app-mount-end');
    
    const mountingTime = performance.getEntriesByName('app-mount')[0].duration;
    logPerformance('App mounting time', mountingTime);
    
    // Set up web vitals reporting - optimized implementation
    if (PERFORMANCE_MONITORING_ENABLED && 'PerformanceObserver' in window) {
      // Optimize observers to use less resources
      setupPerformanceObservers();
    }
  } catch (error) {
    console.error("Error rendering React application:", error);
    
    // Provide clean fallback UI
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

// More efficient performance observer setup
const setupPerformanceObservers = () => {
  // Create a performance observer for CLS with optimized config
  const clsObserver = new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    entries.forEach(entry => {
      // Type assertion for layout-shift specific properties
      const layoutShiftEntry = entry as PerformanceEntry & { 
        hadRecentInput?: boolean, 
        value?: number 
      };
      
      if (layoutShiftEntry.hadRecentInput !== undefined && 
          layoutShiftEntry.value !== undefined && 
          !layoutShiftEntry.hadRecentInput) {
        
        const cls = layoutShiftEntry.value;
        logPerformance('CLS', cls);
        
        if (cls > 0.1) {
          console.warn('High CLS detected:', cls);
        }
      }
    });
  });
  
  // Start observing layout shifts with minimal overhead
  try {
    clsObserver.observe({ type: 'layout-shift', buffered: true });
  } catch (e) {
    console.info('Layout-shift observation not supported');
  }
  
  // LCP observer with improved efficiency
  const lcpObserver = new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    const lastEntry = entries[entries.length - 1];
    
    logPerformance('LCP', lastEntry.startTime);
    
    if (lastEntry.startTime > 2500) {
      console.warn('Poor LCP detected:', lastEntry.startTime);
    }
  });
  
  try {
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
  } catch (e) {
    console.info('LCP observation not supported');
  }
  
  // FID observer with better type assertion and efficiency
  const fidObserver = new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    entries.forEach(entry => {
      const fidEntry = entry as PerformanceEntry & { 
        processingStart?: number, 
        startTime: number 
      };
      
      if (fidEntry.processingStart !== undefined) {
        const fid = fidEntry.processingStart - fidEntry.startTime;
        logPerformance('FID', fid);
        
        if (fid > 100) {
          console.warn('Poor FID detected:', fid);
        }
      }
    });
  });
  
  try {
    fidObserver.observe({ type: 'first-input', buffered: true });
  } catch (e) {
    console.info('First-input observation not supported');
  }
  
  // Add INP measurement with fixed configuration
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
          logPerformance('High INP', inpEntry.duration);
        }
      });
    });
    
    // Fixed: Use only supported properties in PerformanceObserverInit
    inpObserver.observe({ type: 'event', buffered: true });
  } catch (e) {
    // INP measurement might not be supported in all browsers
    console.info('INP measurement not supported');
  }
};

// Use optimized approach for initial load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    // Use requestIdleCallback if available for non-blocking mounting
    if (window.requestIdleCallback) {
      requestIdleCallback(mountApp, { timeout: 1000 });
    } else {
      setTimeout(mountApp, 0);
    }
  });
} else {
  // DOM already loaded, mount with minimal delay
  setTimeout(mountApp, 0);
}

// Optimize resource hints
if (window.requestIdleCallback) {
  window.requestIdleCallback(() => {
    // Preconnect to critical domains during idle time
    const criticalDomains = [
      'https://fonts.gstatic.com',
      'https://fonts.googleapis.com'
    ];
    
    criticalDomains.forEach(domain => {
      // Check if preconnect already exists to avoid duplication
      const existingLink = document.querySelector(`link[rel="preconnect"][href="${domain}"]`);
      if (!existingLink) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      }
    });
  }, { timeout: 2000 });
}
