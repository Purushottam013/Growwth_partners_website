
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

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
      console.log('Fetching posts from Supabase...');
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('status', 'published')
        .order('publish_date', { ascending: false });

      if (error) {
        console.error('Error fetching posts:', error);
        throw error;
      }
      console.log('Posts fetched successfully:', data);
      return data as BlogPost[];
    }
  });

  const getPostBySlug = async (slug: string) => {
    console.log(`Fetching post with slug: ${slug}`);
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single();

    if (error) {
      console.error('Error fetching post by slug:', error);
      return null;
    }
    console.log('Post fetched successfully:', data);
    return data as BlogPost;
  };

  const addPost = useMutation({
    mutationFn: async (post: Omit<BlogPost, 'id'>) => {
      console.log('Adding new post:', post);
      const { data, error } = await supabase
        .from('posts')
        .insert([post])
        .select()
        .single();

      if (error) {
        console.error('Error adding post:', error);
        throw error;
      }
      console.log('Post added successfully:', data);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    }
  });

  const deletePost = useMutation({
    mutationFn: async (id: string) => {
      console.log(`Deleting post with id: ${id}`);
      const { error } = await supabase
        .from('posts')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting post:', error);
        throw error;
      }
      console.log('Post deleted successfully');
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
