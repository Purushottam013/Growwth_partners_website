
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type Country = 'singapore' | 'uae' | 'australia';

interface CountryContextType {
  country: Country;
  setCountry: (country: Country) => void;
  getCountryPrefix: () => string;
  getCountryUrl: (path: string) => string;
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export const CountryProvider = ({ children }: { children: React.ReactNode }) => {
  const [country, setCountry] = useState<Country>('singapore');
  const location = useLocation();
  const navigate = useNavigate();

  // Initialize country based on URL path
  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith('/uae')) {
      setCountry('uae');
    } else if (path.startsWith('/australia')) {
      setCountry('australia');
    } else {
      setCountry('singapore');
    }
  }, [location.pathname]);

  // Get URL prefix based on country
  const getCountryPrefix = (): string => {
    switch (country) {
      case 'uae':
        return '/uae';
      case 'australia':
        return '/australia';
      default:
        return '';
    }
  };

  // Get full URL with country prefix
  const getCountryUrl = (path: string): string => {
    const countryPrefix = getCountryPrefix();
    
    // If path already includes country prefix, return as is
    if (path.startsWith(countryPrefix)) {
      return path;
    }
    
    // If path starts with /, remove it to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;
    
    // Combine prefix with path
    return countryPrefix ? `${countryPrefix}/${cleanPath}` : `/${cleanPath}`;
  };

  // Change country and navigate to equivalent page in new country without scrolling
  const handleSetCountry = (newCountry: Country) => {
    if (newCountry === country) return;
    
    // Construct new URL
    let currentPath = location.pathname;
    let newPath = '';
    
    // Remove current country prefix if any
    if (country !== 'singapore') {
      const currentPrefix = getCountryPrefix();
      if (currentPath.startsWith(currentPrefix)) {
        currentPath = currentPath.replace(currentPrefix, '');
      }
    }
    
    // For Singapore, we need to handle the root path differently
    if (newCountry === 'singapore') {
      newPath = currentPath || '/';
    } else {
      // For other countries, add the country prefix
      newPath = `/${newCountry}${currentPath || ''}`;
    }
    
    // Set the country first
    setCountry(newCountry);
    
    // Navigate to new path without scrolling to top
    navigate(newPath, { replace: true });
  };

  return (
    <CountryContext.Provider
      value={{
        country,
        setCountry: handleSetCountry,
        getCountryPrefix,
        getCountryUrl
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export const useCountry = (): CountryContextType => {
  const context = useContext(CountryContext);
  if (context === undefined) {
    throw new Error('useCountry must be used within a CountryProvider');
  }
  return context;
};
