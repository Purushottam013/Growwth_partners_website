
import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useGuides } from "@/hooks/useGuides";
import { useCountry } from "@/contexts/CountryContext";
import GuideDetail from "./GuideDetail";
import SEOhelper from "@/components/SEOhelper";

const GuideSinglePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { guides, loading, error } = useGuides();
  const guide = guides.find((g) => g.slug === slug);
  const { country } = useCountry();

  // Redirect non-Singapore users to their respective home pages
  if (country === 'uae') {
    const uaeSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Guide Not Available in UAE",
      "description": "This guide is not available for UAE visitors. Please visit our UAE homepage for relevant services."
    };

    return (
      <>
        <SEOhelper
          title="Guide Not Available in UAE | Growwth Partners"
          description="Guides are not available for UAE visitors. Redirecting to UAE homepage."
          canonicalUrl={`${window.location.origin}/uae`}
          keywords="uae, guides unavailable, growwth partners"
          structuredData={uaeSchema}
        />
        <Navigate to="/uae" replace />
      </>
    );
  }
  
  if (country === 'australia') {
    const australiaSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Guide Not Available in Australia",
      "description": "This guide is not available for Australian visitors. Please visit our Australia homepage for relevant services."
    };

    return (
      <>
        <SEOhelper
          title="Guide Not Available in Australia | Growwth Partners"
          description="Guides are not available for Australian visitors. Redirecting to Australia homepage."
          canonicalUrl={`${window.location.origin}/australia`}
          keywords="australia, guides unavailable, growwth partners"
          structuredData={australiaSchema}
        />
        <Navigate to="/australia" replace />
      </>
    );
  }
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContactClick = () => {
    window.location.href = "/contact";
  };

  if (loading) {
    const loadingSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Loading Guide",
      "description": "Loading business guide content..."
    };

    return (
      <Layout>
        <SEOhelper
          title="Guides Loading | Growwth Partners"
          description="Loading expert financial, compliance, and business guides from Growwth Partners."
          keywords="guides, loading, growwth partners, business resources"
          canonicalUrl={`${window.location.origin}/guide/${slug || ''}`}
          structuredData={loadingSchema}
        />
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </Layout>
    );
  }

  if (error) {
    const errorSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Guide Loading Error",
      "description": `Error loading guide: ${error}`
    };

    return (
      <Layout>
        <SEOhelper
          title="Error loading Guide | Growwth Partners"
          description={error}
          keywords="error, guide loading, growwth partners"
          canonicalUrl={`${window.location.origin}/guide/${slug || ''}`}
          structuredData={errorSchema}
        />
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-red-500">Error</h2>
          <p className="mt-4">{error}</p>
        </div>
      </Layout>
    );
  }

  if (!guide) {
    const notFoundSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Guide Not Found",
      "description": "The requested business guide could not be found."
    };

    return (
      <Layout>
        <SEOhelper
          title="Guide Not Found | Growwth Partners"
          description="Sorry, the requested guide could not be found. Please browse our other expert guides and business resources."
          canonicalUrl={`${window.location.origin}/guide`}
          keywords="guide not found, 404, growwth partners, business guides"
          structuredData={notFoundSchema}
        />
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold">Guide Not Found</h2>
          <p className="mt-4">The guide you're looking for doesn't exist.</p>
        </div>
      </Layout>
    );
  }

  return (
    <>
      {/* SEO is now handled in GuideDetail */}
      <GuideDetail guide={guide} onContactClick={handleContactClick} />
    </>
  );
};

export default GuideSinglePage;
