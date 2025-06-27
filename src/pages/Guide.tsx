import { Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCountry } from "@/contexts/CountryContext";
import { useGuides } from "@/hooks/useGuides";
import { ArrowRight, Clock, Download } from "lucide-react";
import { motion } from "framer-motion";
import SEOhelper from "@/components/SEOhelper";

const GuidePage = () => {
  const { country, getCountryUrl } = useCountry();
  const { guides, loading, error } = useGuides();

  // Redirect non-Singapore users to their respective home pages
  if (country === 'uae') {
    return <Navigate to="/uae" replace />;
  }

  if (country === 'australia') {
    return <Navigate to="/australia" replace />;
  }

  const guideSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Business Guides & Resources - Growwth Partners",
    "description": "Comprehensive guides on financial management, accounting principles, compliance requirements, and business strategies for Singapore companies.",
    "publisher": {
      "@type": "Organization",
      "name": "Growwth Partners",
      "url": "https://growwthpartners.com"
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "Business Guides",
      "description": "Expert guides covering accounting, financial reporting, compliance, and business growth strategies",
      "itemListElement": [
        {
          "@type": "Article",
          "name": "Financial Reporting Standards Guide",
          "description": "Complete guide to financial reporting standards and compliance requirements in Singapore"
        },
        {
          "@type": "Article",
          "name": "Bookkeeping Best Practices",
          "description": "Essential bookkeeping practices for small and medium enterprises"
        }
      ]
    }
  };

  if (loading) {
    return (
      <Layout>
        <SEOhelper
          title="Business Guides & Resources | Growwth Partners"
          description="Comprehensive guides on financial management, accounting principles, compliance requirements, and business strategies for Singapore companies."
          keywords="business guides, financial management, accounting guides, singapore compliance, business resources"
          canonicalUrl={`${window.location.origin}/guide`}
          structuredData={guideSchema}
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
        <SEOhelper
          title="Business Guides & Resources | Growwth Partners"
          description="Comprehensive guides on financial management, accounting principles, compliance requirements, and business strategies for Singapore companies."
          keywords="business guides, financial management, accounting guides, singapore compliance, business resources"
          canonicalUrl={`${window.location.origin}/guide`}
          structuredData={guideSchema}
        />
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-red-500">Error</h2>
          <p className="mt-4">{error}</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEOhelper
        title="Business Guides & Resources | Growwth Partners"
        description="Comprehensive guides on financial management, accounting principles, compliance requirements, and business strategies for Singapore companies."
        keywords="business guides, financial management, accounting guides, singapore compliance, business resources"
        canonicalUrl={`${window.location.origin}/guide`}
        structuredData={guideSchema}
      />
      
      <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/grid-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Business Guides & Resources
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Comprehensive guides covering financial management, accounting principles, compliance requirements, and strategic business insights to help your company thrive in Singapore's dynamic market.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                  {guide.bannerImage && (
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <img 
                        src={guide.bannerImage} 
                        alt={guide.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardHeader className="flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {guide.category}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {guide.readTime || "5 min read"}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 line-clamp-2">
                      {guide.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 line-clamp-3">
                      {guide.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="pt-0">
                    <div className="flex gap-2 w-full">
                      <Button 
                        asChild 
                        className="flex-1 bg-blue-600 hover:bg-blue-700"
                      >
                        <a href={getCountryUrl(`/guide/${guide.slug}`)}>
                          <span>Read Guide</span>
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                      {guide.downloadUrl && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          asChild
                        >
                          <a href={guide.downloadUrl} download>
                            <Download className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GuidePage;
