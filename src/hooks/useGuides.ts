
import { useState, useEffect } from "react";
import { guides as staticGuides, getGuidesByCategory, guideCategories } from "@/data/guides";

// Import the Guide type properly with 'export type'
export type { Guide } from "@/data/guides";

export const useGuides = (category?: string) => {
  const [guides, setGuides] = useState<import("@/data/guides").Guide[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Since we're removing the guides feature for now, we'll just return an empty array
    setGuides([]);
    setLoading(false);
    setError(null);
  }, [category]);

  return { guides, loading, error, categories: guideCategories };
};
