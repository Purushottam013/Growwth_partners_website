import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useGuides } from "@/hooks/useGuides";
import { useCountry } from "@/contexts/CountryContext";
import GuideDetail from "./GuideDetail";
import { Seo } from "@/components/Seo";

const GuideSinglePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { guides, loading, error } = useGuides();
  const guide = guides.find((g) => g.slug === slug);
  const { country } = useCountry();

  // Redirect non-Singapore users to their respective home pages
  if (country === 'uae') {
    return <Navigate to="/uae" replace />;
  }
  
  if (country === 'australia') {
    return <Navigate to="/australia" replace />;
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
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
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
        <Seo
          title="Guide Not Found | Growwth Partners"
          description="Sorry, the requested guide could not be found. Please browse our other expert guides and business resources."
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
      <Seo
        title={`${guide.Title} | Growwth Partners`}
        description={guide.Excerpt || "Expert advice and resources from Growwth Partners."}
      />
      <GuideDetail guide={guide} onContactClick={handleContactClick} />
    </>
  );
};

export default GuideSinglePage;
