
import { useState, useEffect } from "react";
import { guides as staticGuides, getGuidesByCategory } from "@/data/guides";

// Import the Guide type properly with 'export type'
export type { Guide } from "@/data/guides";

export const useGuides = (category?: string) => {
  const [guides, setGuides] = useState<import("@/data/guides").Guide[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate a database fetch with a slight delay
    setLoading(true);
    
    setTimeout(() => {
      try {
        const filteredGuides = getGuidesByCategory(category);
        setGuides(filteredGuides);
        setError(null);
      } catch (err: any) {
        console.error("Error fetching guides:", err);
        setError("Failed to fetch guides");
      } finally {
        setLoading(false);
      }
    }, 300); // Small delay to simulate fetch
    
  }, [category]);

  return { guides, loading, error };
};
