
import { Button } from "@/components/ui/button";

interface GuideCategoriesProps {
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
}

export const GuideCategories = ({ selectedCategory, onCategorySelect }: GuideCategoriesProps) => {
  // Categories from our static guides data
  const categories = [
    'Corporate Secretary',
    'Fractional CFO',
    'HR & Payroll',
    'Incorporation',
    'Taxation & Compliance',
    'Accounting'
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Browse by Category</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => onCategorySelect(null)}
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => onCategorySelect(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};
