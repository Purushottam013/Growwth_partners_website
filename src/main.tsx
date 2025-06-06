
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Performance monitoring configuration
const PERFORMANCE_MONITORING_ENABLED = true;
const PERFORMANCE_DEBUG = false;

// Log performance data if debug is enabled
const logPerformance = (metric: string, value: number) => {
  if (PERFORMANCE_DEBUG) {
    console.log(`${metric}:`, value);
  }
};

// More efficient app mounting with better error handling
const mountApp = () => {
  performance.mark('app-mount-start');
  
  const rootElement = document.getElementById("root");
  
  if (!rootElement) {
    console.error("Failed to find the root element");
    return;
  }
  
  try {
    const root = createRoot(rootElement);
    
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    performance.mark('app-mount-end');
    performance.measure('app-mount', 'app-mount-start', 'app-mount-end');
    
    const mountingTime = performance.getEntriesByName('app-mount')[0].duration;
    logPerformance('App mounting time', mountingTime);
    
    if (PERFORMANCE_MONITORING_ENABLED && 'PerformanceObserver' in window) {
      setupPerformanceObservers();
    }
  } catch (error) {
    console.error("Error rendering React application:", error);
    
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

// Simplified performance observer setup
const setupPerformanceObservers = () => {
  try {
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      logPerformance('LCP', lastEntry.startTime);
    });
    
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
  } catch (e) {
    console.info('Performance observation not supported');
  }
};

// Use optimized approach for initial load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}
