
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOManagerProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  schema?: object | object[];
  openGraph?: {
    title?: string;
    description?: string;
    image?: string;
    type?: string;
  };
  staticContent?: {
    heading: string;
    content: string;
    features?: string[];
  };
}

export const SEOManager: React.FC<SEOManagerProps> = ({
  title,
  description,
  keywords = [],
  canonical,
  schema,
  openGraph,
  staticContent
}) => {
  const { pathname } = useLocation();
  const currentUrl = canonical || `https://growwthpartners.com${pathname}`;

  // Generate unique page identifier to prevent conflicts
  const pageId = `seo-${pathname.replace(/\//g, '-')}-${Date.now()}`;

  useEffect(() => {
    // Clean up any existing static content to prevent duplicates
    const existingContent = document.querySelectorAll('.seo-static-content');
    existingContent.forEach(el => el.remove());

    if (staticContent) {
      // Create structured static content for crawlers
      const staticDiv = document.createElement('div');
      staticDiv.className = 'seo-static-content';
      staticDiv.style.cssText = 'position:absolute;left:-10000px;top:-10000px;width:1px;height:1px;overflow:hidden;';
      staticDiv.setAttribute('aria-hidden', 'true');
      staticDiv.setAttribute('data-page-id', pageId);

      const structuredHTML = `
        <article itemScope itemType="https://schema.org/WebPage">
          <h1 itemprop="headline">${staticContent.heading}</h1>
          <div itemprop="description">${description}</div>
          <div itemprop="mainContentOfPage">
            <p>${staticContent.content}</p>
            ${staticContent.features ? staticContent.features.map((feature, index) => `
              <section itemprop="text">
                <h3>Key Feature ${index + 1}</h3>
                <p>${feature}</p>
              </section>
            `).join('') : ''}
          </div>
          <meta itemprop="url" content="${currentUrl}" />
        </article>
      `;

      staticDiv.innerHTML = structuredHTML;
      document.body.appendChild(staticDiv);
    }

    return () => {
      const elementsToClean = document.querySelectorAll(`[data-page-id="${pageId}"]`);
      elementsToClean.forEach(el => el.remove());
    };
  }, [title, description, staticContent, pageId, currentUrl]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      
      <link rel="canonical" href={currentUrl} />
      
      {/* Robots and crawling directives */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large" />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={openGraph?.title || title} />
      <meta property="og:description" content={openGraph?.description || description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={openGraph?.type || 'website'} />
      <meta property="og:site_name" content="Growwth Partners" />
      {openGraph?.image && <meta property="og:image" content={openGraph.image} />}
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={openGraph?.title || title} />
      <meta name="twitter:description" content={openGraph?.description || description} />
      {openGraph?.image && <meta name="twitter:image" content={openGraph.image} />}
      
      {/* Additional meta tags */}
      <meta name="author" content="Growwth Partners" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      
      {/* Schema markup */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(schema) ? schema : [schema])}
        </script>
      )}
    </Helmet>
  );
};
