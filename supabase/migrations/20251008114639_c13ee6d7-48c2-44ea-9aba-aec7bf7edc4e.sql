-- Drop existing restrictive policies
DROP POLICY IF EXISTS "Allow authenticated users to insert blog posts" ON public.blog_post;
DROP POLICY IF EXISTS "Allow authenticated users to update blog posts" ON public.blog_post;
DROP POLICY IF EXISTS "Allow authenticated users to delete blog posts" ON public.blog_post;

-- Create new policies allowing public access for all operations
CREATE POLICY "Allow public insert access to blog posts"
ON public.blog_post
FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Allow public update access to blog posts"
ON public.blog_post
FOR UPDATE
TO public
USING (true)
WITH CHECK (true);

CREATE POLICY "Allow public delete access to blog posts"
ON public.blog_post
FOR DELETE
TO public
USING (true);