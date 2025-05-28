
import { Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { PlaceholderContent } from "@/components/PlaceholderContent";
import { useCountry } from "@/contexts/CountryContext";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Construction } from "lucide-react";
import { Seo } from "@/components/Seo";

const BlogPage = () => {
  const { country } = useCountry();

  // Redirect non-Singapore users to their respective home pages
  if (country === 'uae') {
    return (
      <>
        <Seo
          title="Financial Insights Blog UAE | Growwth Partners"
          description="Expert financial insights and business advice specifically for UAE entrepreneurs and businesses. Stay updated with the latest financial trends and regulations."
          canonical={`${window.location.origin}/uae/blog`}
        />
        <Navigate to="/uae" replace />
      </>
    );
  }

  if (country === 'australia') {
    return (
      <>
        <Seo
          title="Business Finance Blog Australia | Growwth Partners"
          description="Financial expertise and business insights tailored for Australian companies. Get the latest updates on Australian business regulations and growth strategies."
          canonical={`${window.location.origin}/australia/blog`}
        />
        <Navigate to="/australia" replace />
      </>
    );
  }

  return (
    <Layout>
      <Seo
        title="Financial Insights & Business Blog | Expert Advice | Growwth Partners Singapore"
        description="Get expert financial insights, accounting tips, and business growth strategies from Singapore's leading financial advisors. Updated weekly with actionable advice for SMEs and startups."
        canonical={`${window.location.origin}/blog`}
      />
      <PlaceholderContent 
        title="Financial Insights & Expert Advice" 
        description="Discover actionable financial strategies, expert insights on Singapore business regulations, and proven growth tactics from our award-winning team of financial advisors."
        imageBg="bg-gradient-to-r from-blue-600 to-brand-blue"
        features={[
          {
            title: "Weekly Financial Tips",
            description: "Get practical advice on cash flow management, tax optimization, and financial planning specifically for Singapore businesses"
          },
          {
            title: "Regulatory Updates",
            description: "Stay informed about changes in Singapore's accounting standards, tax regulations, and compliance requirements"
          },
          {
            title: "Growth Strategies",
            description: "Learn from real case studies and proven strategies that have helped hundreds of SMEs and startups scale successfully"
          }
        ]}
      />
      <div className="container-custom mb-16">
        <Alert className="bg-amber-50 border-amber-200">
          <Construction className="h-5 w-5 text-amber-500" />
          <AlertDescription className="text-amber-800">
            Our expert blog is being developed with valuable financial insights and business advice. Check back soon for the latest updates from our team of financial experts.
          </AlertDescription>
        </Alert>
      </div>
    </Layout>
  );
};

export default BlogPage;
