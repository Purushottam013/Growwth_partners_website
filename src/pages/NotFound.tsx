
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useCountry } from "@/contexts/CountryContext";
import { Layout } from "@/components/Layout";
import { AlertTriangle } from "lucide-react";
import { Seo } from "@/components/Seo";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { getCountryUrl } = useCountry();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleGoHome = () => {
    navigate(getCountryUrl(""));
  };

  return (
    <Layout>
      <Seo
        title="404 Not Found | Growwth Partners"
        description="The page you are looking for cannot be found on Growwth Partners. Go back to our homepage or explore our financial & accounting services."
      />
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="flex justify-center mb-4">
            <AlertTriangle size={64} className="text-red-500" />
          </div>
          <h1 className="text-7xl font-bold mb-4 text-brand-orange">404</h1>
          <p className="text-2xl text-gray-700 mb-6">Oops! Page not found</p>
          <p className="text-gray-600 mb-4">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          <p className="text-sm text-gray-500 mb-8 p-3 bg-gray-100 rounded-md">
            Attempted to access: <span className="font-mono text-red-500">{location.pathname}</span>
          </p>
          <Button 
            onClick={handleGoHome}
            className="bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-3"
          >
            Return to Home
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
