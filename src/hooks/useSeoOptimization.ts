
import { useMemo } from "react";

interface SeoOptimizationOptions {
  content?: string;
  title?: string;
  description?: string;
  keywords?: string[];
  service?: string;
  location?: string;
}

export const useSeoOptimization = (options: SeoOptimizationOptions) => {
  const {
    content = "",
    title,
    description,
    keywords = [],
    service = "",
    location = "Singapore"
  } = options;

  const optimizedSeo = useMemo(() => {
    // Service-specific keyword patterns
    const serviceKeywords: { [key: string]: string[] } = {
      accounting: ["accounting services", "financial reporting", "tax compliance", "bookkeeping"],
      bookkeeping: ["bookkeeping services", "financial records", "transaction management", "small business accounting"],
      payroll: ["payroll services", "payroll processing", "employee management", "salary administration"],
      "part-time-cfo": ["part time CFO", "fractional CFO", "financial strategy", "CFO services"],
      "corporate-secretary": ["corporate secretary", "company compliance", "statutory filing", "governance"],
      "company-incorporation": ["company incorporation", "business registration", "company setup", "Singapore company"],
      "cash-flow": ["cash flow modeling", "financial modeling", "cash flow management", "financial planning"]
    };

    // Auto-generate title if not provided
    const optimizedTitle = title || `${service} in ${location} | Growwth Partners`;

    // Auto-generate description if not provided
    const optimizedDescription = description || 
      `Professional ${service.toLowerCase()} services in ${location}. Expert financial solutions for startups and SMEs. Get started with Growwth Partners today.`;

    // Combine provided keywords with service-specific ones
    const optimizedKeywords = [
      ...keywords,
      ...(serviceKeywords[service] || []),
      location,
      "growwth partners",
      "financial services",
      "business solutions"
    ].filter((keyword, index, array) => array.indexOf(keyword) === index); // Remove duplicates

    return {
      title: optimizedTitle,
      description: optimizedDescription,
      keywords: optimizedKeywords
    };
  }, [content, title, description, keywords, service, location]);

  return optimizedSeo;
};
