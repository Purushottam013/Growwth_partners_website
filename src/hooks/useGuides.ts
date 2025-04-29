
import { useState, useEffect } from "react";
import { guides as staticGuides, getGuidesByCategory } from "@/data/guides";

// Import the Guide type properly with 'export type'
export type { Guide } from "@/data/guides";

export const useGuides = (category?: string) => {
  const [guides, setGuides] = useState<import("@/data/guides").Guide[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate loading with a slight delay (no database connection)
    setLoading(true);
    
    const timer = setTimeout(() => {
      try {
        // Use the static data function to get guides by category
        const filteredGuides = getGuidesByCategory(category);
        setGuides(filteredGuides);
        setError(null);
      } catch (err: any) {
        console.error("Error fetching guides:", err);
        setError("Failed to load guides");
      } finally {
        setLoading(false);
      }
    }, 300); // Small delay to simulate loading
    
    return () => clearTimeout(timer);
  }, [category]);

  return { guides, loading, error };
};
