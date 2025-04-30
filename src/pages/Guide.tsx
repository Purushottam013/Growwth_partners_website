
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { useGuides } from "@/hooks/useGuides";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const GuidePage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const { categories } = useGuides(selectedCategory);

  return <Layout>
      <section className="relative w-full flex justify-center">
        <img src="/lovable-uploads/e724df8b-078f-4892-9a47-ab21bdd069b1.png" alt="Guides" className="w-4/5 h-auto py-8" />
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="w-full overflow-x-auto flex justify-start mb-6 p-1">
                <TabsTrigger 
                  value="all" 
                  className="px-4 py-2"
                  onClick={() => setSelectedCategory(undefined)}
                >
                  All
                </TabsTrigger>
                
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    className="px-4 py-2 whitespace-nowrap"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Card key={category} className="overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{category}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>;
};
export default GuidePage;
