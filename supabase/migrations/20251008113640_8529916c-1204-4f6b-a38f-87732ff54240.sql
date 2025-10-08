-- Add faqs column to blog_post table to store FAQ data as JSON
ALTER TABLE public.blog_post 
ADD COLUMN faqs jsonb DEFAULT '[]'::jsonb;