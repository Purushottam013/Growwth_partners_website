
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
    // Ensure content is available for crawlers immediately
    const staticContent = document.createElement('div');
    staticContent.style.position = 'absolute';
    staticContent.style.left = '-9999px';
    staticContent.style.top = '-9999px';
    staticContent.style.visibility = 'hidden';
    staticContent.setAttribute('aria-hidden', 'true');
    staticContent.className = 'seo-static-content';
    
    staticContent.innerHTML = `
      <h1>${heading}</h1>
      <p>${description}</p>
      ${features.map(feature => `<p>${feature}</p>`).join('')}
      <div>${content}</div>
    `;
    
    // Remove existing static content
    const existing = document.querySelector('.seo-static-content');
    if (existing) {
      existing.remove();
    }
    
    document.body.appendChild(staticContent);
    
    return () => {
      const element = document.querySelector('.seo-static-content');
      if (element) {
        element.remove();
      }
    };
  }, [heading, description, content, features]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      
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
      
      {/* Schema.org structured data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};
