
import { useState, useEffect } from "react";
import { blogData, blogOperations } from "@/data/blog";

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

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Load posts on mount
  useEffect(() => {
    setPosts(blogOperations.getPosts());
    setLoading(false);
  }, []);

  // Get all posts
  const getAllPosts = () => {
    return posts;
  };

  // Get post by slug
  const getPostBySlug = (slug: string) => {
    return posts.find(p => p.slug === slug);
  };

  // Add new post
  const addPost = (post: Omit<BlogPost, "id">) => {
    const newPost = blogOperations.createPost(post);
    setPosts(blogOperations.getPosts());
    return newPost;
  };

  // Delete post
  const deletePost = (id: number) => {
    const success = blogOperations.deletePost(id);
    if (success) {
      setPosts(blogOperations.getPosts());
    }
    return success;
  };

  // Update post
  const updatePost = (id: number, updatedPost: Partial<BlogPost>) => {
    const updated = blogOperations.updatePost(id, updatedPost);
    if (updated) {
      setPosts(blogOperations.getPosts());
    }
    return updated;
  };

  // Get dynamically created posts (excluding default posts)
  const getDynamicPosts = () => {
    // Get default post IDs to exclude them
    const defaultPostIds = blogData.defaultPosts.map(post => post.id);
    return posts.filter(post => !defaultPostIds.includes(post.id));
  };

  return {
    posts: getAllPosts(),
    loading,
    getPostBySlug,
    addPost,
    deletePost,
    updatePost,
    dynamicPosts: getDynamicPosts() // Add dynamicPosts property for BlogPostList
  };
};
