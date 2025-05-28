
import { Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { GuideHero } from "@/components/guides/GuideHero";
import { useCountry } from "@/contexts/CountryContext";
import { useGuides } from "@/hooks/useGuides";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";

const GuidePage = () => {
  const { country } = useCountry();
  const { guides, loading, error } = useGuides();

  // Redirect non-Singapore users to their respective home pages
  if (country === 'uae') {
    return (
      <>
        <Seo
          title="Business Guides UAE | Growwth Partners"
          description="Comprehensive business guides and resources for UAE entrepreneurs. Get expert advice on company formation, VAT compliance, and business growth in the Emirates."
          canonical={`${window.location.origin}/uae/guide`}
        />
        <Navigate to="/uae" replace />
      </>
    );
  }

  if (country === 'australia') {
    return (
      <>
        <Seo
          title="Australian Business Guides | Growwth Partners"
          description="Essential business guides for Australian companies. Learn about compliance, taxation, and growth strategies specifically for the Australian market."
          canonical={`${window.location.origin}/australia/guide`}
        />
        <Navigate to="/australia" replace />
      </>
    );
  }

  if (loading) {
    return (
      <Layout>
        <Seo
          title="Loading Business Guides | Growwth Partners"
          description="Loading comprehensive business guides and resources from Singapore's leading financial experts."
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
        <Seo
          title="Business Guides Error | Growwth Partners"
          description="Error loading business guides. Please try again later or contact our support team."
        />
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-red-500">Error Loading Guides</h2>
          <p className="mt-4">{error}</p>
        </div>
      </Layout>
    );
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Business Guides Singapore",
    "description": "Comprehensive business guides covering accounting, compliance, and growth strategies for Singapore businesses",
    "publisher": {
      "@type": "Organization",
      "name": "Growwth Partners"
    }
  };

  return (
    <Layout>
      <Seo
        title="Essential Business Guides Singapore | Expert Financial Resources | Growwth Partners"
        description="Access comprehensive business guides covering accounting best practices, compliance requirements, and growth strategies for Singapore SMEs and startups. Written by award-winning financial experts."
        schema={organizationSchema}
      />
      <GuideHero />
      
      {/* Featured Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <FileText className="w-12 h-12 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{guides.length}+ Guides</h3>
              <p className="text-gray-600">Comprehensive business resources</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">10,000+</h3>
              <p className="text-gray-600">Businesses helped</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-12 h-12 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Award-Winning</h3>
              <p className="text-gray-600">Expert team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Expert Business Guides</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get actionable insights from Singapore's leading financial experts to grow your business efficiently and compliantly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <Card key={guide.id} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{guide.Title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {guide.Excerpt || "Expert insights and practical advice for your business"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      5 min read
                    </span>
                    <Link to={`/guide/${guide.slug}`}>
                      <Button variant="ghost" size="sm" className="text-brand-orange hover:text-brand-orange/80">
                        Read Guide <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GuidePage;
