
import { Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { PlaceholderContent } from "@/components/PlaceholderContent";
import { useCountry } from "@/contexts/CountryContext";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Construction } from "lucide-react";
import { SeoOptimizer } from "@/components/SeoOptimizer";

const AchievementsPage = () => {
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
      <SeoOptimizer 
        title="Achievements & Awards | Growwth Partners"
        description="Explore Growwth Partners' industry awards, recognitions, and our ongoing commitment to excellence in CFO, accounting, and financial innovation."
        keywords={["growwth partners awards", "financial services recognition", "best cfo services", "singapore awards", "accounting excellence"]}
      />
      <PlaceholderContent 
        title="Achievements & Awards" 
        description="Discover our track record of excellence and recognition in financial services, highlighting our commitment to delivering outstanding solutions and maintaining the highest standards of service quality."
        imageBg="bg-gradient-to-r from-amber-500 to-brand-orange"
        features={[
          {
            title: "Industry Recognition",
            description: "Winner of the Best Fractional CFO Services Award 2024 at the Golden Globe Tigers Awards for Excellence in Banking, Financial Services and Insurance (BFSI)"
          },
          {
            title: "Technology Excellence",
            description: "Achieved Xero Silver Champion Partner status, demonstrating our expertise in cloud accounting and financial technology solutions"
          },
          {
            title: "Innovation Leadership",
            description: "Successfully launched Ryzup.ai, our innovative AI-powered financial advisory platform, revolutionizing access to strategic financial guidance"
          }
        ]}
      />

      <div className="container-custom mb-16">
        <Alert className="bg-amber-50 border-amber-200">
          <Construction className="h-5 w-5 text-amber-500" />
          <AlertDescription className="text-amber-800">
            We're currently expanding our achievements showcase. Check back soon for a more detailed view of our awards and recognition.
          </AlertDescription>
        </Alert>
      </div>
    </Layout>
  );
};

export default AchievementsPage;
