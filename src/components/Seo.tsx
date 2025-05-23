
// src/components/Seo.tsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SeoProps {
  title: string;
  description: string;
  /** Optional override if you ever need a custom canonical */
  canonical?: string;
  schema?: object | object[];
}

/**
 * Ensures each page emits a canonical URL that maps to the preferred content route. 
 * By default, this is based on the current browser pathname, but you can override by passing the `canonical` prop.
 * 
 * IMPORTANT for SEO: For country-variant or redirected routes, always point canonical to the target canonical (e.g., /accounting-services-in-uae vs. /uae/accounting-services-in-singapore)
 */
export const Seo: React.FC<SeoProps> = ({
  title,
  description,
  canonical,
  schema,
}) => {
  const { pathname } = useLocation();
  // If this is an old non-canonical route, override with canonical or main
  // But by default use correct path as per the router config
  let href = canonical ?? `${window.location.origin}${pathname}`;
  // For legacy duplicate country routes, force canonical to preferred one. (simple check)
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
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={href} />
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(schema) ? schema : [schema])}
        </script>
      )}
    </Helmet>
  );
};
