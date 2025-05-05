
import { Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { PlaceholderContent } from "@/components/PlaceholderContent";
import { useCountry } from "@/contexts/CountryContext";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Construction } from "lucide-react";

const NewsPage = () => {
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
      <PlaceholderContent 
        title="In The News" 
        description="Stay updated with Growwth's latest developments, media coverage, and industry insights that showcase our impact in the financial services sector."
        imageBg="bg-gradient-to-r from-slate-700 to-slate-900"
        features={[
          {
            title: "Digital Innovation",
            description: "Featured in Tech Asia for our groundbreaking AI-powered financial advisory platform, revolutionizing how businesses access expert financial guidance"
          },
          {
            title: "Market Leadership",
            description: "Recognized by Singapore Business Review for our contributions to empowering SMEs with accessible, professional financial services"
          },
          {
            title: "Industry Impact",
            description: "Highlighted in The Business Times for our role in helping Singapore startups optimize their financial operations and achieve sustainable growth"
          }
        ]}
      />
      
      <div className="container-custom mb-16">
        <Alert className="bg-amber-50 border-amber-200">
          <Construction className="h-5 w-5 text-amber-500" />
          <AlertDescription className="text-amber-800">
            Our news and media section is being updated with our latest press coverage. Please check back soon for the latest news about Growwth Partners.
          </AlertDescription>
        </Alert>
      </div>
    </Layout>
  );
};

export default NewsPage;
