import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface BlogPostListing {
  id: number;
  title: string;
  slug: string;
  heroImage: string;
  excerpt: string;
  author: string;
  categories: string[];
  publishDate: string;
}

export const useBlogPostsListing = () => {
  const [posts, setPosts] = useState<BlogPostListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = useCallback(async (retryCount = 0) => {
    setLoading(true);
    setError(null);
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    
    try {
      const { data, error: fetchError } = await supabase
        .from("blog_post")
        .select("id, title, slug, Categories, Author, Excerpt, publishdate")
        .order("id", { ascending: false })
        .abortSignal(controller.signal);
      
      clearTimeout(timeoutId);
      
      if (fetchError) throw fetchError;
      
      const transformed = data.map((post) => ({
        id: post.id,
        title: post.title,
        slug: post.slug || "",
        heroImage: "", // Excluded Hero_image to prevent timeout/storage issues
        excerpt: post.Excerpt || "",
        author: post.Author || "Jatin Detwani",
        categories: post.Categories ? post.Categories.split(",").map((c) => c.trim()) : [],
        publishDate: post.publishdate || "",
      }));
      
      // Try to cache, but don't fail if quota exceeded
      try {
        localStorage.setItem('blog_posts_listing_cache', JSON.stringify(transformed));
        localStorage.setItem('blog_posts_listing_timestamp', Date.now().toString());
      } catch (cacheError) {
        console.warn('Failed to cache blog posts:', cacheError);
        // Clear old cache to free space
        try {
          localStorage.removeItem('blog_posts_listing_cache');
          localStorage.removeItem('blog_posts_listing_timestamp');
        } catch (e) {
          // Ignore cleanup errors
        }
      }
      
      setPosts(transformed);
      setLoading(false);
      
    } catch (err: any) {
      clearTimeout(timeoutId);
      console.error("Error fetching blog posts:", err);
      
      if (retryCount < 3 && err.name !== 'AbortError') {
        const delay = 1000 * Math.pow(2, retryCount);
        console.log(`Retrying fetch in ${delay}ms... (attempt ${retryCount + 1}/3)`);
        await new Promise(resolve => setTimeout(resolve, delay));
        return fetchPosts(retryCount + 1);
      }
      
      const cached = localStorage.getItem('blog_posts_listing_cache');
      const timestamp = localStorage.getItem('blog_posts_listing_timestamp');
      const cacheAge = timestamp ? Date.now() - parseInt(timestamp) : Infinity;
      
      if (cached && cacheAge < 24 * 60 * 60 * 1000) {
        console.log('Using cached blog posts (age: ' + Math.round(cacheAge / 1000 / 60) + ' minutes)');
        setPosts(JSON.parse(cached));
        setError("Showing cached posts. Some content may be outdated.");
      } else {
        setError("Failed to load blog posts. Please check your connection and try again.");
      }
      
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return {
    posts,
    loading,
    error,
    refetch: fetchPosts,
  };
};
