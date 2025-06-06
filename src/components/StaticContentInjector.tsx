
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface StaticContentInjectorProps {
  title: string;
  description: string;
  keywords: string[];
  heading: string;
  content: string;
  features?: string[];
  schema?: object;
  url?: string;
}

export const StaticContentInjector: React.FC<StaticContentInjectorProps> = ({
  title,
  description,
  keywords,
  heading,
  content,
  features = [],
  schema,
  url = window.location.href
}) => {
  useEffect(() => {
    // Remove any existing static content to prevent duplicates
    const existingContent = document.querySelectorAll('.seo-static-content');
    existingContent.forEach(el => el.remove());
    
    // Create unique content container
    const staticContent = document.createElement('div');
    staticContent.style.position = 'absolute';
    staticContent.style.left = '-9999px';
    staticContent.style.top = '-9999px';
    staticContent.style.visibility = 'hidden';
    staticContent.setAttribute('aria-hidden', 'true');
    staticContent.className = 'seo-static-content';
    staticContent.setAttribute('data-page', url);
    
    // Create structured content for better SEO
    const structuredContent = `
      <div itemScope itemType="https://schema.org/WebPage">
        <h1 itemprop="name">${heading}</h1>
        <meta itemprop="description" content="${description}" />
        <div itemprop="mainContentOfPage">
          <p>${description}</p>
          ${features.map((feature, index) => `
            <div itemprop="text">
              <h3>Feature ${index + 1}</h3>
              <p>${feature}</p>
            </div>
          `).join('')}
          <div itemprop="text">${content}</div>
        </div>
      </div>
    `;
    
    staticContent.innerHTML = structuredContent;
    document.body.appendChild(staticContent);
    
    return () => {
      const elements = document.querySelectorAll('.seo-static-content');
      elements.forEach(el => el.remove());
    };
  }, [heading, description, content, features, url]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      <link rel="canonical" href={url} />
      
      {/* Prevent duplicate indexing */}
      <meta name="google" content="notranslate" />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Growwth Partners" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Enhanced schema markup */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify({
            ...schema,
            "@context": "https://schema.org",
            "url": url,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": url
            }
          })}
        </script>
      )}
    </Helmet>
  );
};
