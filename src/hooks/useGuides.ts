
import { useState, useEffect } from "react";
import { guideCategories, getGuidesByCategory } from "@/data/guides";

// Import the Guide type properly with 'export type'
export type { Guide } from "@/data/guides";

export const useGuides = (category?: string) => {
  const [guides, setGuides] = useState<import("@/data/guides").Guide[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Return all categories regardless of selected category
  const selectedCategory = category;
  const categories = guideCategories();

  useEffect(() => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate async loading for better UX
      setTimeout(() => {
        try {
          // Get guides by category
          const filteredGuides = getGuidesByCategory(category);
          setGuides(filteredGuides);
          setError(null);
          setLoading(false);
        } catch (err) {
          console.error("Error fetching guides:", err);
          setError("Failed to fetch guides");
          setLoading(false);
        }
      }, 300); // Small delay for better UX
    } catch (err) {
      setError("Failed to fetch guides");
      setLoading(false);
      console.error(err);
    }
  }, [category]);

  return { guides, loading, error, categories, selectedCategory };
};
