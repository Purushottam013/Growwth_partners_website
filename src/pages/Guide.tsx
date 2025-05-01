
import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useGuides } from "@/hooks/useGuides";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const GuidePage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const {
    guides,
    categories,
    selectedCategory: activeCategory
  } = useGuides(selectedCategory);
  
  return <Layout>
      <section className="relative w-full flex justify-center">
        <img src="/lovable-uploads/e724df8b-078f-4892-9a47-ab21bdd069b1.png" alt="Guides" className="w-4/6 h-auto py-8" />
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Tabs defaultValue="all" className="w-full">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {guides.map((guide, index) => (
                <Link to={`/guide/${guide.slug}`} key={guide.id}>
                  <Card className="overflow-hidden border hover:shadow-lg transition-all duration-300 h-full cursor-pointer">
                    <div className="aspect-video overflow-hidden bg-gray-100">
                      <img 
                        src={index === 0 
                          ? "/lovable-uploads/f2073f22-e161-45c6-9d26-1c99e770e553.png" 
                          : "/lovable-uploads/a1793127-4e29-402b-b80a-6163df4177cb.png"} 
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
          </div>
        </div>
      </section>
    </Layout>;
};

export default GuidePage;
