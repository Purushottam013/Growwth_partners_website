
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Immediately invoke the mounting function
const mountApp = () => {
  const rootElement = document.getElementById("root");
  
  if (!rootElement) {
    console.error("Failed to find the root element");
    return;
  }
  
  try {
    const root = createRoot(rootElement);
    
    // Render without StrictMode in production to avoid double-renders
    root.render(<App />);
    
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

// Execute immediately if DOM is ready, otherwise wait for it
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountApp);
} else {
  mountApp();
}
