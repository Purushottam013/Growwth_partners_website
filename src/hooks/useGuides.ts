
import { useState, useEffect } from "react";
import { guideCategories, getGuidesByCategory } from "@/data/guides";

// Import the Guide type properly with 'export type'
export type { Guide } from "@/data/guides";

export const useGuides = (category?: string) => {
  const [guides, setGuides] = useState<import("@/data/guides").Guide[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Return all categories regardless of selected category
  const selectedCategory = category;

  useEffect(() => {
    setLoading(true);
    try {
      // Get guides by category
      const filteredGuides = getGuidesByCategory(category);
      setGuides(filteredGuides);
      setError(null);
    } catch (err) {
      setError("Failed to fetch guides");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [category]);

  return { guides, loading, error, categories: guideCategories, selectedCategory };
};
