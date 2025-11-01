-- Create the blog-images storage bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'blog-images',
  'blog-images',
  true,
  5242880, -- 5MB file size limit
  ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif']
);

-- Allow public read access (needed for displaying images on public blog)
CREATE POLICY "Public read access for blog images"
ON storage.objects FOR SELECT
USING (bucket_id = 'blog-images');

-- Allow public upload (will be called only from admin pages)
CREATE POLICY "Public upload access for blog images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'blog-images');

-- Allow public delete (for admin cleanup)
CREATE POLICY "Public delete access for blog images"
ON storage.objects FOR DELETE
USING (bucket_id = 'blog-images');