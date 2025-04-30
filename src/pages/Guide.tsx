
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { BookOpen, Book, Briefcase, Users, Building, DollarSign, Percent } from "lucide-react";
import { useGuides } from "@/hooks/useGuides";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const GuidePage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const { categories } = useGuides(selectedCategory);

  // Function to get the appropriate icon for each category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Accounting":
        return <Book className="w-6 h-6" />;
      case "Corporate Secretary":
        return <Briefcase className="w-6 h-6" />;
      case "HR & Payroll":
        return <Users className="w-6 h-6" />;
      case "Incorporation":
        return <Building className="w-6 h-6" />;
      case "Fractional CFO":
        return <DollarSign className="w-6 h-6" />;
      case "Taxation & Compliance":
        return <Percent className="w-6 h-6" />;
      default:
        return <BookOpen className="w-6 h-6" />;
    }
  };

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
                  All Categories
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
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3 mb-2">
                    {getCategoryIcon(category)}
                    <Badge variant="soft" className="text-xs">Coming Soon</Badge>
                  </div>
                  <CardTitle className="text-lg font-semibold">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Expert guides on {category.toLowerCase()} are coming soon. Check back for comprehensive advice and resources.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <BookOpen className="w-16 h-16 text-brand-orange mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Coming Soon</h2>
            <p className="text-gray-600 text-lg mb-8">
              We're working on creating comprehensive business guides to help you navigate your business journey. 
              Check back soon for expert insights, strategies, and practical advice.
            </p>
          </div>
        </div>
      </section>
    </Layout>;
};
export default GuidePage;
