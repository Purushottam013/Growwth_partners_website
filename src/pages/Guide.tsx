
import { Layout } from "@/components/Layout";
import { useState } from "react";
import { useGuides } from "@/hooks/useGuides";
import { GuideCategories } from "@/components/guide/GuideCategories";
import { GuidesGrid } from "@/components/guide/GuidesGrid";

const GuidePage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { guides, loading } = useGuides(selectedCategory || undefined);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c"
            alt="Guide Hero"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Complete Business Guide Hub
            </h1>
            <p className="text-xl text-gray-300">
              Comprehensive resources and expert insights to help you navigate your business journey
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <GuideCategories
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />

      {/* Guides Grid Section */}
      {loading ? (
        <div className="py-20 text-center">Loading guides...</div>
      ) : (
        <GuidesGrid guides={guides} />
      )}
    </Layout>
  );
};

export default GuidePage;
