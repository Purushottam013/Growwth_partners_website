
import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

// Define types for blog posts (match Supabase table columns)
export interface BlogPost {
  id: number;
  title: string;
  slug?: string;
  heroImage?: string;
  excerpt?: string;
  content?: string;
  author?: string;
  categories?: string[] | string;  // Modified to handle both string array and string
  publishDate?: string;
}

// Helper to serialize/deserialize categories
const serializeCategories = (categories: string[]) => categories.join(",");
const deserializeCategories = (catString?: string) =>
  catString ? catString.split(",").map((c) => c.trim()) : [];

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Supabase Fetch All
  const fetchPosts = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("blog_post")
      .select("*")
      .order("id", { ascending: false });

    if (!error && data) {
      setPosts(
        data.map((post) => ({
          id: post.id,
          title: post.title,
          slug: post.slug || "",
          heroImage: post.Hero_image || "",
          excerpt: post.Excerpt || "",
          content: post.Content || "",
          author: post.Author || "",
          categories: deserializeCategories(post.Categories || ""),
          publishDate: post.publishdate || "" // Fixed: using lowercase publishdate from database
        }))
      );
    }
    setLoading(false);
  }, []);

  // Fetch on mount
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  // Get post by slug
  const getPostBySlug = (slug: string) => {
    return posts.find((p) => p.slug === slug);
  };

  // Create post
  const addPost = async (post: Omit<BlogPost, "id">) => {
    setLoading(true);
    const { data, error } = await supabase
      .from("blog_post")
      .insert([
        {
          title: post.title,
          slug: post.slug,
          Hero_image: post.heroImage ?? "",
          Excerpt: post.excerpt ?? "",
          Content: post.content ?? "",
          Author: post.author ?? "",
          Categories: Array.isArray(post.categories) 
            ? serializeCategories(post.categories) 
            : post.categories ?? "",
          publishdate: post.publishDate || new Date().toLocaleDateString("en-US", { // Fixed: using lowercase publishdate for database
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        },
      ])
      .select()
      .single();
    if (!error && data) {
      await fetchPosts();
      return data;
    }
    setLoading(false);
    throw error;
  };

  // Delete post
  const deletePost = async (id: number) => {
    setLoading(true);
    const { error } = await supabase.from("blog_post").delete().eq("id", id);
    if (!error) {
      await fetchPosts();
      return true;
    }
    setLoading(false);
    return false;
  };

  // Update post
  const updatePost = async (id: number, updatedPost: Partial<BlogPost>) => {
    setLoading(true);
    const toUpdate: any = { ...updatedPost };
    if (updatedPost.categories) {
      toUpdate.Categories = Array.isArray(updatedPost.categories) 
        ? serializeCategories(updatedPost.categories) 
        : updatedPost.categories;
      delete toUpdate.categories;
    }
    if (updatedPost.heroImage) {
      toUpdate.Hero_image = updatedPost.heroImage;
      delete toUpdate.heroImage;
    }
    if (updatedPost.excerpt) {
      toUpdate.Excerpt = updatedPost.excerpt;
      delete toUpdate.excerpt;
    }
    if (updatedPost.content) {
      toUpdate.Content = updatedPost.content;
      delete toUpdate.content;
    }
    if (updatedPost.author) {
      toUpdate.Author = updatedPost.author;
      delete toUpdate.author;
    }
    if (updatedPost.publishDate) {
      toUpdate.publishdate = updatedPost.publishDate; // Fixed: using lowercase publishdate for database
      delete toUpdate.publishDate;
    }
    const { data, error } = await supabase
      .from("blog_post")
      .update(toUpdate)
      .eq("id", id)
      .select()
      .single();
    if (!error && data) {
      await fetchPosts();
      return data;
    }
    setLoading(false);
    return null;
  };

  // Get all posts
  const getAllPosts = () => posts;

  // Get dynamic posts (optional, currently always show all)
  const getDynamicPosts = () => posts;

  return {
    posts: getAllPosts(),
    loading,
    getPostBySlug,
    addPost,
    deletePost,
    updatePost,
    dynamicPosts: getDynamicPosts(),
    refetch: fetchPosts,
  };
};
