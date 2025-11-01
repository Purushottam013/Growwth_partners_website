-- Remove URL-encoded space (%20) from the beginning of Hero_image URLs
UPDATE blog_post 
SET "Hero_image" = REPLACE("Hero_image", '%20', '')
WHERE "Hero_image" LIKE '%20%';