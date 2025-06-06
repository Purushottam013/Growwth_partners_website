
import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useGuides } from "@/hooks/useGuides";
import { useCountry } from "@/contexts/CountryContext";
import GuideDetail from "./GuideDetail";
import { SeoOptimizer } from "@/components/SeoOptimizer";

const GuideSinglePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { guides, loading, error } = useGuides();
  const guide = guides.find((g) => g.slug === slug);
  const { country } = useCountry();

  // Redirect non-Singapore users to their respective home pages
  if (country === 'uae') {
    return (
      <>
        <SeoOptimizer
          title="Guide Not Available in UAE | Growwth Partners"
          description="Guides are not available for UAE visitors. Redirecting to UAE homepage."
          canonical={`${window.location.origin}/uae`}
          keywords={["uae", "guides unavailable", "growwth partners"]}
        />
        <Navigate to="/uae" replace />
      </>
    );
  }
  
  if (country === 'australia') {
    return (
      <>
        <SeoOptimizer
          title="Guide Not Available in Australia | Growwth Partners"
          description="Guides are not available for Australian visitors. Redirecting to Australia homepage."
          canonical={`${window.location.origin}/australia`}
          keywords={["australia", "guides unavailable", "growwth partners"]}
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
    return (
      <Layout>
        <SeoOptimizer
          title="Guides Loading | Growwth Partners"
          description="Loading expert financial, compliance, and business guides from Growwth Partners."
          keywords={["guides", "loading", "growwth partners", "business resources"]}
        />
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <SeoOptimizer
          title="Error loading Guide | Growwth Partners"
          description={error}
          keywords={["error", "guide loading", "growwth partners"]}
        />
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-red-500">Error</h2>
          <p className="mt-4">{error}</p>
        </div>
      </Layout>
    );
  }

  if (!guide) {
    return (
      <Layout>
        <SeoOptimizer
          title="Guide Not Found | Growwth Partners"
          description="Sorry, the requested guide could not be found. Please browse our other expert guides and business resources."
          canonical={`${window.location.origin}/guide`}
          keywords={["guide not found", "404", "growwth partners", "business guides"]}
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
      {/* Seo now in GuideDetail */}
      <GuideDetail guide={guide} onContactClick={handleContactClick} />
    </>
  );
};

export default GuideSinglePage;
