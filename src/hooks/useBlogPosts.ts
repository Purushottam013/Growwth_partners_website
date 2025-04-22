
import { useState, useEffect } from "react";
import { blogData } from "@/data/blog";

// Define types for blog posts
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  heroImage: string;
  excerpt: string;
  content: string;
  author: string;
  categories: string[];
  publishDate: string;
}

// Mock shared storage - in a real application, this would be replaced with API calls
// Using sessionStorage instead of localStorage makes it sharable across tabs but still temporary
const STORAGE_KEY = "shared-blog-posts";

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Load posts from storage
  useEffect(() => {
    const storedPosts = sessionStorage.getItem(STORAGE_KEY);
    const parsedPosts = storedPosts ? JSON.parse(storedPosts) : [];
    setPosts([...blogData.posts, ...parsedPosts]);
    setLoading(false);
  }, []);

  // Get all posts (combining static and dynamic)
  const getAllPosts = () => {
    return [...blogData.posts, ...posts.filter(p => !blogData.posts.some(bp => bp.slug === p.slug))];
  };

  // Get post by slug
  const getPostBySlug = (slug: string) => {
    // First check static data
    const staticPost = blogData.posts.find(p => p.slug === slug);
    if (staticPost) return staticPost;

    // Then check dynamic posts
    return posts.find(p => p.slug === slug);
  };

  // Add new post
  const addPost = (post: Omit<BlogPost, "id">) => {
    const newPost = {
      ...post,
      id: Date.now(), // Use timestamp as unique ID
    };

    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    
    // Update storage
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPosts));
    
    return newPost;
  };

  // Delete post
  const deletePost = (id: number) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
    
    // Update storage
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPosts));
  };

  return {
    posts: getAllPosts(),
    loading,
    getPostBySlug,
    addPost,
    deletePost,
    dynamicPosts: posts
  };
};
