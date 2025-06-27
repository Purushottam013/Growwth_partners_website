import { Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { PlaceholderContent } from "@/components/PlaceholderContent";
import { useCountry } from "@/contexts/CountryContext";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Construction } from "lucide-react";
import SEOhelper from "@/components/SEOhelper";

const SuccessStoriesPage = () => {
  const { country } = useCountry();

  // Redirect non-Singapore users to their respective home pages
  if (country === 'uae') {
    return <Navigate to="/uae" replace />;
  }

  if (country === 'australia') {
    return <Navigate to="/australia" replace />;
  }

  return (
    <Layout>
      <SEOhelper
        title="Success Stories | Growwth Partners"
        description="See how startups and SMEs have transformed their payroll and financial operations with Growwth Partners in our client success stories."
        keywords="success stories, client testimonials, case studies, business growth, singapore"
      />
      <PlaceholderContent 
        title="Success Stories" 
        description="Discover how we've helped businesses overcome financial challenges and achieve sustainable growth."
        imageBg="bg-gradient-to-r from-green-500 to-brand-green"
      />
      <div className="container-custom mb-16">
        <Alert className="bg-amber-50 border-amber-200">
          <Construction className="h-5 w-5 text-amber-500" />
          <AlertDescription className="text-amber-800">
            This page is currently under construction. Our success stories are being compiled and will be available soon.
          </AlertDescription>
        </Alert>
      </div>
    </Layout>
  );
};

export default SuccessStoriesPage;
