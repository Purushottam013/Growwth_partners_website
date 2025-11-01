-- Remove %20 from the beginning of image src URLs in Content field
UPDATE blog_post 
SET "Content" = REGEXP_REPLACE(
  "Content", 
  'src="%20',
  'src="',
  'g'
)
WHERE "Content" LIKE '%src="%20%';