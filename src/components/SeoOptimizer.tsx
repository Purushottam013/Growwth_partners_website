
import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { StaticContentInjector } from "./StaticContentInjector";

interface SeoOptimizerProps {
  title?: string;
  description?: string;
  content?: string;
  keywords?: string[];
  canonical?: string;
  schema?: object | object[];
  autoGenerate?: boolean;
  staticContent?: {
    heading: string;
    features?: string[];
    additionalContent?: string;
  };
  priority?: 'high' | 'medium' | 'low';
}

/**
 * Enhanced SEO component that prevents duplicate content issues
 * and ensures unique metadata for each page
 */
export const SeoOptimizer: React.FC<SeoOptimizerProps> = ({
  title,
  description,
  content,
  keywords = [],
  canonical,
  schema,
  autoGenerate = false,
  staticContent,
  priority = 'medium',
}) => {
  const { pathname } = useLocation();
  
  // Generate unique SEO data to prevent duplicates
  const generateUniqueSeoData = () => {
    const baseTitle = title || 'Growwth Partners';
    const baseDescription = description || 'Expert financial services';
    
    // Ensure titles are unique by adding specific identifiers
    const uniqueTitle = baseTitle.includes('|') ? baseTitle : `${baseTitle} | Growwth Partners`;
    
    // Ensure descriptions are unique and location-specific
    const uniqueDescription = baseDescription.length > 50 ? baseDescription : 
      `${baseDescription} - Professional services tailored for your business needs`;

    // Generate unique keywords based on page context
    const contextualKeywords = [...keywords];
    if (pathname.includes('accounting')) contextualKeywords.push('professional accounting');
    if (pathname.includes('bookkeeping')) contextualKeywords.push('business bookkeeping');
    if (pathname.includes('uae')) contextualKeywords.push('UAE business services');
    if (pathname.includes('australia')) contextualKeywords.push('Australia financial services');
    if (!pathname.includes('uae') && !pathname.includes('australia')) {
      contextualKeywords.push('Singapore financial experts');
    }

    return {
      title: uniqueTitle,
      description: uniqueDescription,
      keywords: [...new Set(contextualKeywords)] // Remove duplicates
    };
  };

  const seoData = generateUniqueSeoData();
  
  // Generate canonical URL with proper country handling
  const generateCanonicalUrl = (): string => {
    if (canonical) return canonical;
    
    const baseUrl = window.location.origin;
    let canonicalPath = pathname;
    
    // Ensure canonical URLs point to the preferred version
    if (pathname.includes("/uae/accounting-services-in-singapore")) {
      canonicalPath = "/accounting-services-in-uae/";
    } else if (pathname.includes("/uae/bookkeeping-services-in-singapore")) {
      canonicalPath = "/bookkeeping-services-in-uae/";
    } else if (pathname.includes("/uae/payroll-services-in-singapore")) {
      canonicalPath = "/payroll-services-in-uae/";
    } else if (pathname.includes("/uae/cash-flow-services-in-singapore")) {
      canonicalPath = "/cash-flow-services-in-uae/";
    } else if (pathname.includes("/uae/company-incorporation-services-in-singapore")) {
      canonicalPath = "/company-incorporation-services-in-uae/";
    } else if (pathname.includes("/uae/corporate-secretary-services-in-singapore")) {
      canonicalPath = "/corporate-secretary-services-in-uae/";
    } else if (pathname.includes("/uae/part-time-cfo")) {
      canonicalPath = "/part-time-cfo-uae/";
    } else if (pathname.includes("/australia/accounting-services-in-singapore")) {
      canonicalPath = "/accounting-services-in-australia/";
    } else if (pathname.includes("/australia/bookkeeping-services-in-singapore")) {
      canonicalPath = "/bookkeeping-services-in-australia/";
    } else if (pathname.includes("/australia/payroll-services-in-singapore")) {
      canonicalPath = "/payroll-services-in-australia/";
    } else if (pathname.includes("/australia/cash-flow-services-in-singapore")) {
      canonicalPath = "/cash-flow-services-in-australia/";
    } else if (pathname.includes("/australia/company-incorporation-services-in-singapore")) {
      canonicalPath = "/company-incorporation-services-in-australia/";
    } else if (pathname.includes("/australia/corporate-secretary-services-in-singapore")) {
      canonicalPath = "/corporate-secretary-services-in-australia/";
    } else if (pathname.includes("/australia/part-time-cfo")) {
      canonicalPath = "/part-time-cfo-australia/";
    }
    
    return `${baseUrl}${canonicalPath}`;
  };

  const canonicalUrl = generateCanonicalUrl();

  // If static content is provided, use StaticContentInjector
  if (staticContent) {
    return (
      <StaticContentInjector
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        heading={staticContent.heading}
        content={content || seoData.description}
        features={staticContent.features}
        schema={Array.isArray(schema) ? schema[0] : schema}
        url={canonicalUrl}
      />
    );
  }

  return (
    <Helmet>
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      {seoData.keywords.length > 0 && (
        <meta name="keywords" content={seoData.keywords.join(', ')} />
      )}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Prevent duplicate content with robots meta */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      
      {/* Open Graph tags for social media */}
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Growwth Partners" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoData.title} />
      <meta name="twitter:description" content={seoData.description} />
      
      {/* Additional SEO best practices */}
      <meta name="author" content="Growwth Partners" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Priority hints for better loading */}
      {priority === 'high' && <meta name="priority" content="high" />}
      
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(schema) ? schema : [schema])}
        </script>
      )}
    </Helmet>
  );
};
