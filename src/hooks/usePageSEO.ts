
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useCountry } from '@/contexts/CountryContext';

interface PageSEOConfig {
  baseTitle: string;
  baseDescription: string;
  keywords?: string[];
  service?: string;
  pageType?: 'home' | 'service' | 'about' | 'contact' | 'blog' | 'other';
}

export const usePageSEO = (config: PageSEOConfig) => {
  const { country } = useCountry();
  const { pathname } = useLocation();

  const locationName = useMemo(() => {
    switch (country) {
      case 'uae': return 'UAE';
      case 'australia': return 'Australia';
      default: return 'Singapore';
    }
  }, [country]);

  const seoData = useMemo(() => {
    const { baseTitle, baseDescription, keywords = [], service, pageType = 'other' } = config;

    // Generate unique title with location and timestamp hash
    const uniqueId = pathname.split('/').filter(Boolean).join('-') || 'home';
    const locationSuffix = country !== 'singapore' ? ` in ${locationName}` : '';
    
    let finalTitle = baseTitle;
    if (!finalTitle.includes('|')) {
      finalTitle = `${baseTitle}${locationSuffix} | Growwth Partners`;
    }

    // Ensure description is unique and location-specific
    let finalDescription = baseDescription;
    if (!finalDescription.includes(locationName) && country !== 'singapore') {
      finalDescription = `${baseDescription} Located in ${locationName}, we provide specialized services for local businesses.`;
    }

    // Add location and service-specific keywords
    const enhancedKeywords = [
      ...keywords,
      'growwth partners',
      locationName.toLowerCase(),
      'financial services'
    ];

    if (service) {
      enhancedKeywords.push(service, `${service} ${locationName.toLowerCase()}`);
    }

    // Add page type specific keywords
    switch (pageType) {
      case 'home':
        enhancedKeywords.push('financial consulting', 'business solutions');
        break;
      case 'service':
        enhancedKeywords.push('professional services', 'business support');
        break;
      case 'about':
        enhancedKeywords.push('company information', 'team', 'expertise');
        break;
    }

    // Remove duplicates and empty values
    const uniqueKeywords = [...new Set(enhancedKeywords.filter(Boolean))];

    return {
      title: finalTitle,
      description: finalDescription,
      keywords: uniqueKeywords,
      canonical: `${window.location.origin}${pathname}`,
      locationName
    };
  }, [config, country, locationName, pathname]);

  return seoData;
};
