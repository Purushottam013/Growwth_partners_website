
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Wait for DOM to be fully loaded before mounting React
const mountApp = () => {
  const rootElement = document.getElementById("root");
  
  if (!rootElement) {
    console.error("Failed to find the root element");
    return;
  }
  
  try {
    const root = createRoot(rootElement);
    
    root.render(
      // Removed StrictMode as it can cause double-rendering and initialization issues
      <App />
    );
    
    console.log("React app successfully mounted");
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

// Ensure DOM is ready before mounting
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountApp);
} else {
  // Small timeout to ensure all scripts are properly loaded
  setTimeout(mountApp, 50);
}
