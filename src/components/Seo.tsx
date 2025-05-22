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

export const Seo: React.FC<SeoProps> = ({
  title,
  description,
  canonical,
  schema,
}) => {
  const { pathname } = useLocation();
  const href = canonical ?? `${window.location.origin}${pathname}`;

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
