-- One-time data fix: Remove leading/trailing spaces from Hero_image URLs
UPDATE blog_post 
SET "Hero_image" = TRIM("Hero_image") 
WHERE "Hero_image" IS NOT NULL 
  AND ("Hero_image" LIKE ' %' OR "Hero_image" LIKE '% ');