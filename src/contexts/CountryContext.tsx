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

  const getCountryServiceSlug = (base: string) => {
    if (country === "uae") return `${base}-services-in-uae`;
    if (country === "australia") return `${base}-services-in-australia`;
    return `${base}-services-in-singapore`;
  };

  const getCountryUrl = (path: string): string => {
    if (path.startsWith("/accounting")) return `/${getCountryServiceSlug("accounting")}`;
    if (path.startsWith("/bookkeeping")) return `/${getCountryServiceSlug("bookkeeping")}`;
    if (path.startsWith("/payroll")) return `/${getCountryServiceSlug("payroll")}`;
    if (path.startsWith("/cash-flow")) return `/${getCountryServiceSlug("cash-flow")}`;
    if (path.startsWith("/company-incorporation")) return `/${getCountryServiceSlug("company-incorporation")}`;
    if (path.startsWith("/corporate-secretary")) return `/${getCountryServiceSlug("corporate-secretary")}`;
    if (path.startsWith("/part-time-cfo")) {
      if (country === "uae") return `/part-time-cfo-uae`;
      if (country === "australia") return `/part-time-cfo-australia`;
      return `/part-time-cfo`;
    }
    if (["/about", "/blog", "/contact-us", "/success-stories", "/taxation", "/achievements", "/guide", "/news", "/privacy-policy", "/terms"].includes(path)) {
      if (country === "singapore") return path;
      return `/${country}${path}`;
    }
    return path;
  };

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
