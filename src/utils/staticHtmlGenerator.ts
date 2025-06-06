
interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
  url: string;
  schema?: object;
}

interface StaticContentConfig {
  heading: string;
  description: string;
  features?: string[];
  content?: string;
}

export const generateStaticHtml = (metadata: PageMetadata, content: StaticContentConfig): string => {
  const keywordsString = metadata.keywords.join(', ');
  const schemaScript = metadata.schema ? 
    `<script type="application/ld+json">${JSON.stringify(metadata.schema)}</script>` : '';

  return `
    <!-- SEO Meta Tags -->
    <meta name="description" content="${metadata.description}" />
    <meta name="keywords" content="${keywordsString}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${metadata.url}" />
    
    <!-- Open Graph -->
    <meta property="og:title" content="${metadata.title}" />
    <meta property="og:description" content="${metadata.description}" />
    <meta property="og:url" content="${metadata.url}" />
    <meta property="og:type" content="website" />
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${metadata.title}" />
    <meta name="twitter:description" content="${metadata.description}" />
    
    ${schemaScript}
    
    <!-- Static Content for SEO -->
    <div style="position: absolute; left: -9999px; top: -9999px; visibility: hidden;">
      <h1>${content.heading}</h1>
      <p>${content.description}</p>
      ${content.features ? content.features.map(feature => `<p>${feature}</p>`).join('') : ''}
      ${content.content ? `<div>${content.content}</div>` : ''}
    </div>
  `;
};

export const injectStaticContent = (htmlContent: string) => {
  const headEndIndex = document.head ? 0 : -1;
  
  if (headEndIndex !== -1 && typeof document !== 'undefined') {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    
    // Inject meta tags
    const metaTags = tempDiv.querySelectorAll('meta, link, script');
    metaTags.forEach(tag => {
      if (!document.querySelector(`[name="${tag.getAttribute('name')}"], [property="${tag.getAttribute('property')}"]`)) {
        document.head.appendChild(tag.cloneNode(true));
      }
    });
    
    // Inject hidden content for crawlers
    const hiddenContent = tempDiv.querySelector('div[style*="position: absolute"]');
    if (hiddenContent && !document.querySelector('.seo-static-content')) {
      hiddenContent.classList.add('seo-static-content');
      document.body.appendChild(hiddenContent.cloneNode(true));
    }
  }
};
