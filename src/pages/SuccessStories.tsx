
import { Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { PlaceholderContent } from "@/components/PlaceholderContent";
import { useCountry } from "@/contexts/CountryContext";

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
      <PlaceholderContent 
        title="Success Stories" 
        description="Discover how we've helped businesses overcome financial challenges and achieve sustainable growth."
        imageBg="bg-gradient-to-r from-green-500 to-brand-green"
      />
    </Layout>
  );
};

export default SuccessStoriesPage;
