
import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useGuides } from "@/hooks/useGuides";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { useCountry } from "@/contexts/CountryContext";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import SEOhelper from "@/components/SEOhelper";

const GUIDES_PER_PAGE = 3;

const GuidePage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const { country } = useCountry();

  const GuideSchema = {
          "@context": "https://schema.org",
          "@type": "Guide",
          "name": "Growwth Partners Guide",
          "description": "Stay updated with expert insights and Guide on payroll, finance, and SME growth in Singapore from Growwth Partners",
          "url": "https://growwthpartners.com/guide/",
          "publisher": {
            "@type": "Organization",
            "name": "Growwth Partners",
            "url": "https://growwthpartners.com"
          }
        }
  
  // Redirect non-Singapore users to their respective home pages
  if (country === 'uae') {
    return <Navigate to="/uae" replace />;
  }
  
  if (country === 'australia') {
    return <Navigate to="/australia" replace />;
  }
  
  const {
    guides,
    categories,
    loading,
    error
  } = useGuides(selectedCategory);

  // Reset pagination when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);
  
  useEffect(() => {
    // Scroll to top when the component mounts or category changes
    window.scrollTo(0, 0);
  }, [selectedCategory]);

  // Calculate pagination
  const totalPages = Math.ceil(guides.length / GUIDES_PER_PAGE);
  const startIndex = (currentPage - 1) * GUIDES_PER_PAGE;
  const endIndex = startIndex + GUIDES_PER_PAGE;
  const currentGuides = guides.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <Layout>
      <SEOhelper
        title="Guides & Resources | Growwth Partners"
        description="Explore in-depth guides on payroll compliance, accounting best practices, and scaling your business with Growwth Partners' expertise."
        keywords="business guides, accounting resources, singapore compliance, financial best practices, startup guides"
        canonicalUrl={`${window.location.origin}/guide`}
        structuredData={GuideSchema}

      />

      <section className="relative w-full flex justify-center">
        <div className="w-3/4 h-[250px] md:h-[300px] lg:h-[350px]">
          <OptimizedImage 
            src="/lovable-uploads/e724df8b-078f-4892-9a47-ab21bdd069b1.png" 
            alt="Guides" 
            className="w-full h-full py-8 object-contain" 
            style={{ maxHeight: "380px" }}
            priority={true}
          />
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Tabs defaultValue={selectedCategory || "all"} className="w-full">
              <TabsList className="w-full flex justify-center mb-6 p-1">
                <TabsTrigger 
                  value="all" 
                  className="px-4 py-2 mx-2" 
                  onClick={() => setSelectedCategory(undefined)}
                >
                  All
                </TabsTrigger>
                
                {categories.map(category => (
                  <TabsTrigger 
                    key={category} 
                    value={category} 
                    className="px-4 py-2 mx-2 whitespace-nowrap" 
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Guides Grid */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Available Guides</h2>
            
            {loading && (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
              </div>
            )}
            
            {error && (
              <div className="text-center text-red-500 py-8">
                {error}
              </div>
            )}
            
            {!loading && guides.length === 0 && (
              <div className="text-center py-8">
                <p>No guides available in this category.</p>
              </div>
            )}
            
            {!loading && guides.length > 0 && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {currentGuides.map((guide) => (
                    <Link to={`/guide/${guide.slug}`} key={guide.id}>
                      <Card className="overflow-hidden border hover:shadow-lg transition-all duration-300 h-full cursor-pointer">
                        <div className="aspect-video overflow-hidden bg-gray-100">
                          <OptimizedImage 
                            src={guide.Image} 
                            alt={guide.Title} 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <CardHeader>
                          <p className="text-sm text-primary mb-1">{guide.Category}</p>
                          <CardTitle className="text-lg font-semibold line-clamp-2">{guide.Title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 line-clamp-3">{guide.Excerpt}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
                
                {/* Pagination */}
                {totalPages > 1 && (
                  <Pagination className="mt-12">
                    <PaginationContent>
                      {currentPage > 1 && (
                        <PaginationItem>
                          <PaginationPrevious 
                            onClick={() => handlePageChange(currentPage - 1)} 
                          />
                        </PaginationItem>
                      )}
                      
                      {[...Array(totalPages)].map((_, i) => (
                        <PaginationItem key={i}>
                          <PaginationLink 
                            onClick={() => handlePageChange(i + 1)}
                            isActive={currentPage === i + 1}
                          >
                            {i + 1}
                          </PaginationLink>
                        </PaginationItem>
                      ))}
                      
                      {currentPage < totalPages && (
                        <PaginationItem>
                          <PaginationNext 
                            onClick={() => handlePageChange(currentPage + 1)} 
                          />
                        </PaginationItem>
                      )}
                    </PaginationContent>
                  </Pagination>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GuidePage;
