
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface Guide {
  id: number;
  Title: string;
  slug: string;
  Image: string;
  Category: string;
  Excerpt: string;
  Content: string;
}

export const useGuides = (category?: string) => {
  const [guides, setGuides] = useState<Guide[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchGuides = async () => {
    try {
      setLoading(true);
      let query = supabase.from("guide_post").select("*");
      
      if (category) {
        query = query.eq("Category", category);
      }

      const { data, error: supabaseError } = await query;

      if (supabaseError) throw supabaseError;
      console.log("Fetched guides:", data);
      setGuides(data || []);
      setError(null);
    } catch (err: any) {
      console.error("Error fetching guides:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGuides();
  }, [category]);

  return { guides, loading, error, refetch: fetchGuides };
};
