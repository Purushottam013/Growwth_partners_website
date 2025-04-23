
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
    if (path.startsWith(countryPrefix)) {
      return path;
    }
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;
    return countryPrefix ? `${countryPrefix}/${cleanPath}` : `/${cleanPath}`;
  };

  // Change country and always navigate to home page of that country
  const handleSetCountry = (newCountry: Country) => {
    if (newCountry === country) return;

    let newPath: string;
    if (newCountry === 'singapore') {
      newPath = '/';
    } else {
      newPath = `/${newCountry}`;
    }
    setCountry(newCountry);
    console.log(`Switching country from ${country} to ${newCountry}, navigating to: ${newPath}`);
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
