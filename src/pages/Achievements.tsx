
import { Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { PlaceholderContent } from "@/components/PlaceholderContent";
import { useCountry } from "@/contexts/CountryContext";

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
    </Layout>
  );
};

export default AchievementsPage;
