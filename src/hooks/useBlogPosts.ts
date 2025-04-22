
import { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  hero_image: string;
  excerpt: string;
  content: string;
  author: string;
  categories: string[];
  publish_date: string;
  status: 'draft' | 'published';
}

export const useBlogPosts = () => {
  const queryClient = useQueryClient();

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('status', 'published')
        .order('publish_date', { ascending: false });

      if (error) throw error;
      return data as BlogPost[];
    }
  });

  const getPostBySlug = async (slug: string) => {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single();

    if (error) return null;
    return data as BlogPost;
  };

  const addPost = useMutation({
    mutationFn: async (post: Omit<BlogPost, 'id'>) => {
      const { data, error } = await supabase
        .from('posts')
        .insert([post])
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    }
  });

  const deletePost = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('posts')
        .delete()
        .eq('id', id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    }
  });

  return {
    posts,
    loading: isLoading,
    getPostBySlug,
    addPost: addPost.mutate,
    deletePost: deletePost.mutate,
  };
};
