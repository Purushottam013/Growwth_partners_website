
import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SeoOptimizerProps {
  title?: string;
  description?: string;
  content?: string;
  keywords?: string[];
  canonical?: string;
  schema?: object | object[];
  autoGenerate?: boolean;
}

/**
 * Enhanced SEO component that automatically generates optimized metadata
 * following SEO best practices when autoGenerate is enabled
 */
export const SeoOptimizer: React.FC<SeoOptimizerProps> = ({
  title,
  description,
  content,
  keywords = [],
  canonical,
  schema,
  autoGenerate = false,
}) => {
  const { pathname } = useLocation();
  
  // Auto-generate SEO metadata based on content
  const generateSeoData = () => {
    if (!autoGenerate || !content) {
      return { title, description, keywords };
    }

    // Extract first 160 characters for meta description if not provided
    const autoDescription = description || content
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .substring(0, 160)
      .trim() + (content.length > 160 ? '...' : '');

    // Generate title from content if not provided
    const autoTitle = title || content
      .replace(/<[^>]*>/g, '')
      .split('.')[0]
      .substring(0, 60)
      .trim() + ' | Growwth Partners';

    // Extract keywords from content if not provided
    const autoKeywords = keywords.length > 0 ? keywords : extractKeywords(content);

    return {
      title: autoTitle,
      description: autoDescription,
      keywords: autoKeywords
    };
  };

  // Simple keyword extraction function
  const extractKeywords = (text: string): string[] => {
    const commonWords = ['the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'must', 'shall', 'can', 'this', 'that', 'these', 'those', 'a', 'an'];
    
    const words = text
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(word => word.length > 3 && !commonWords.includes(word));
    
    // Count frequency and return top 10 most common words
    const frequency: { [key: string]: number } = {};
    words.forEach(word => {
      frequency[word] = (frequency[word] || 0) + 1;
    });
    
    return Object.entries(frequency)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10)
      .map(([word]) => word);
  };

  const seoData = generateSeoData();
  
  // Handle canonical URL with country variants
  let href = canonical ?? `${window.location.origin}${pathname}`;
  
  // For legacy duplicate country routes, force canonical to preferred one
  if (pathname.includes("/uae/accounting-services-in-singapore")) {
    href = `${window.location.origin}/accounting-services-in-uae`;
  }
  if (pathname.includes("/uae/bookkeeping-services-in-singapore")) {
    href = `${window.location.origin}/bookkeeping-services-in-uae`;
  }
  if (pathname.includes("/uae/payroll-services-in-singapore")) {
    href = `${window.location.origin}/payroll-services-in-uae`;
  }
  if (pathname.includes("/uae/cash-flow-services-in-singapore")) {
    href = `${window.location.origin}/cash-flow-services-in-uae`;
  }
  if (pathname.includes("/uae/company-incorporation-services-in-singapore")) {
    href = `${window.location.origin}/company-incorporation-services-in-uae`;
  }
  if (pathname.includes("/uae/corporate-secretary-services-in-singapore")) {
    href = `${window.location.origin}/corporate-secretary-services-in-uae`;
  }
  if (pathname.includes("/uae/part-time-cfo")) {
    href = `${window.location.origin}/part-time-cfo-uae`;
  }
  if (pathname.includes("/australia/accounting-services-in-singapore")) {
    href = `${window.location.origin}/accounting-services-in-australia`;
  }
  if (pathname.includes("/australia/bookkeeping-services-in-singapore")) {
    href = `${window.location.origin}/bookkeeping-services-in-australia`;
  }
  if (pathname.includes("/australia/payroll-services-in-singapore")) {
    href = `${window.location.origin}/payroll-services-in-australia`;
  }
  if (pathname.includes("/australia/cash-flow-services-in-singapore")) {
    href = `${window.location.origin}/cash-flow-services-in-australia`;
  }
  if (pathname.includes("/australia/company-incorporation-services-in-singapore")) {
    href = `${window.location.origin}/company-incorporation-services-in-australia`;
  }
  if (pathname.includes("/australia/corporate-secretary-services-in-singapore")) {
    href = `${window.location.origin}/corporate-secretary-services-in-australia`;
  }
  if (pathname.includes("/australia/part-time-cfo")) {
    href = `${window.location.origin}/part-time-cfo-australia`;
  }

  return (
    <Helmet>
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      {seoData.keywords.length > 0 && (
        <meta name="keywords" content={seoData.keywords.join(', ')} />
      )}
      <link rel="canonical" href={href} />
      
      {/* Open Graph tags for social media */}
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:url" content={href} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Growwth Partners" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoData.title} />
      <meta name="twitter:description" content={seoData.description} />
      
      {/* Additional SEO best practices */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Growwth Partners" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(schema) ? schema : [schema])}
        </script>
      )}
    </Helmet>
  );
};
