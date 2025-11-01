import { createClient } from '@supabase/supabase-js';
import { writeFileSync } from 'fs';
import { join } from 'path';
import { nanoid } from 'nanoid';

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

interface BlogPost {
  id: number;
  title: string;
  Hero_image: string | null;
  Content: string | null;
}

interface MigrationResult {
  postId: number;
  postTitle: string;
  success: boolean;
  heroMigrated: boolean;
  contentImagesMigrated: number;
  error?: string;
}

const isDryRun = process.argv.includes('--dry-run');

/**
 * Convert base64 data URI to Blob
 */
function base64ToBlob(base64String: string): { blob: Blob; mimeType: string } {
  // Extract MIME type and base64 data
  const matches = base64String.match(/^data:([^;]+);base64,(.+)$/);
  if (!matches) {
    throw new Error('Invalid base64 data URI');
  }

  const mimeType = matches[1];
  const base64Data = matches[2];
  
  // Convert base64 to binary
  const binaryString = atob(base64Data);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  
  return { blob: new Blob([bytes], { type: mimeType }), mimeType };
}

/**
 * Compress and convert image to WebP
 */
async function compressImage(blob: Blob, maxWidth: number = 1200, quality: number = 0.85): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    img.onload = () => {
      let width = img.width;
      let height = img.height;

      if (width > maxWidth) {
        height = (height * maxWidth) / width;
        width = maxWidth;
      }

      canvas.width = width;
      canvas.height = height;
      ctx?.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        (compressedBlob) => {
          if (compressedBlob) {
            resolve(compressedBlob);
          } else {
            reject(new Error('Failed to compress image'));
          }
        },
        'image/webp',
        quality
      );
    };

    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = URL.createObjectURL(blob);
  });
}

/**
 * Upload base64 image to Supabase Storage
 */
async function uploadBase64ToStorage(
  base64String: string,
  folder: string,
  postId: number,
  imageType: string
): Promise<string> {
  try {
    // Convert base64 to blob
    const { blob } = base64ToBlob(base64String);
    
    // Generate unique filename
    const timestamp = Date.now();
    const randomId = nanoid(10);
    const fileName = `${folder}/${postId}_${imageType}_${timestamp}_${randomId}.webp`;

    if (isDryRun) {
      console.log(`  [DRY RUN] Would upload: ${fileName} (${(blob.size / 1024).toFixed(2)}KB)`);
      return `https://dry-run-url.com/${fileName}`;
    }

    // Upload to Supabase Storage
    const { data, error } = await supabase.storage
      .from('blog-images')
      .upload(fileName, blob, {
        contentType: 'image/webp',
        cacheControl: '3600',
        upsert: false,
      });

    if (error) {
      throw new Error(`Upload failed: ${error.message}`);
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('blog-images')
      .getPublicUrl(fileName);

    console.log(`  ✓ Uploaded: ${fileName} (${(blob.size / 1024).toFixed(2)}KB)`);
    return publicUrl;
  } catch (error) {
    console.error(`  ✗ Upload error:`, error);
    throw error;
  }
}

/**
 * Extract base64 images from HTML content
 */
function extractBase64ImagesFromHTML(html: string): Array<{ original: string; base64: string }> {
  const base64Images: Array<{ original: string; base64: string }> = [];
  const imgRegex = /<img[^>]+src="(data:image\/[^"]+)"[^>]*>/g;
  
  let match;
  while ((match = imgRegex.exec(html)) !== null) {
    base64Images.push({
      original: match[0],
      base64: match[1],
    });
  }
  
  return base64Images;
}

/**
 * Migrate a single blog post
 */
async function migratePost(post: BlogPost): Promise<MigrationResult> {
  const result: MigrationResult = {
    postId: post.id,
    postTitle: post.title,
    success: false,
    heroMigrated: false,
    contentImagesMigrated: 0,
  };

  console.log(`\nMigrating post ${post.id}: "${post.title.substring(0, 50)}..."`);

  try {
    let updatedHeroImage = post.Hero_image;
    let updatedContent = post.Content;

    // Migrate hero image
    if (post.Hero_image && post.Hero_image.startsWith('data:image')) {
      console.log(`  Migrating hero image...`);
      const storageUrl = await uploadBase64ToStorage(
        post.Hero_image,
        'hero-images',
        post.id,
        'hero'
      );
      updatedHeroImage = storageUrl;
      result.heroMigrated = true;
    } else if (post.Hero_image) {
      console.log(`  Hero image already migrated or is external URL`);
    }

    // Migrate content images
    if (post.Content) {
      const contentImages = extractBase64ImagesFromHTML(post.Content);
      
      if (contentImages.length > 0) {
        console.log(`  Migrating ${contentImages.length} content image(s)...`);
        
        for (let i = 0; i < contentImages.length; i++) {
          const storageUrl = await uploadBase64ToStorage(
            contentImages[i].base64,
            'content-images',
            post.id,
            `content_${i}`
          );
          
          // Replace in HTML
          updatedContent = updatedContent!.replace(
            contentImages[i].base64,
            storageUrl
          );
          
          result.contentImagesMigrated++;
        }
      } else {
        console.log(`  No content images to migrate`);
      }
    }

    // Update database
    if (!isDryRun && (result.heroMigrated || result.contentImagesMigrated > 0)) {
      const { error } = await supabase
        .from('blog_post')
        .update({
          Hero_image: updatedHeroImage,
          Content: updatedContent,
        })
        .eq('id', post.id);

      if (error) {
        throw new Error(`Database update failed: ${error.message}`);
      }
      console.log(`  ✓ Database updated`);
    } else if (isDryRun) {
      console.log(`  [DRY RUN] Would update database`);
    }

    result.success = true;
    console.log(`  ✓ Post migrated successfully`);
  } catch (error) {
    result.success = false;
    result.error = error instanceof Error ? error.message : String(error);
    console.error(`  ✗ Migration failed:`, result.error);
  }

  return result;
}

/**
 * Main migration function
 */
async function main() {
  console.log('='.repeat(60));
  console.log('Blog Images Migration to Supabase Storage');
  console.log('='.repeat(60));
  
  if (isDryRun) {
    console.log('\n🔍 DRY RUN MODE - No changes will be made\n');
  }

  try {
    // Create backup directory
    const backupDir = join(__dirname, 'backups');
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupFile = join(backupDir, `posts-backup-${timestamp}.json`);

    // Fetch all blog posts
    console.log('Fetching all blog posts...');
    const { data: posts, error } = await supabase
      .from('blog_post')
      .select('id, title, Hero_image, Content')
      .order('id');

    if (error) {
      throw new Error(`Failed to fetch posts: ${error.message}`);
    }

    console.log(`✓ Found ${posts.length} posts\n`);

    // Create backup
    if (!isDryRun) {
      console.log(`Creating backup: ${backupFile}`);
      writeFileSync(backupFile, JSON.stringify(posts, null, 2));
      console.log(`✓ Backup created\n`);
    }

    // Migrate each post
    const results: MigrationResult[] = [];
    
    for (const post of posts) {
      const result = await migratePost(post);
      results.push(result);
    }

    // Generate summary
    console.log('\n' + '='.repeat(60));
    console.log('Migration Summary');
    console.log('='.repeat(60));
    
    const successful = results.filter(r => r.success).length;
    const failed = results.filter(r => !r.success).length;
    const heroImagesMigrated = results.filter(r => r.heroMigrated).length;
    const contentImagesMigrated = results.reduce((sum, r) => sum + r.contentImagesMigrated, 0);

    console.log(`\nTotal posts processed: ${posts.length}`);
    console.log(`Successfully migrated: ${successful}`);
    console.log(`Failed: ${failed}`);
    console.log(`\nHero images migrated: ${heroImagesMigrated}`);
    console.log(`Content images migrated: ${contentImagesMigrated}`);

    if (failed > 0) {
      console.log('\n❌ Failed posts:');
      results.filter(r => !r.success).forEach(r => {
        console.log(`  - Post ${r.postId}: ${r.postTitle}`);
        console.log(`    Error: ${r.error}`);
      });
    }

    if (!isDryRun) {
      console.log(`\n✓ Backup saved to: ${backupFile}`);
      console.log('\nTo verify, check:');
      console.log('  1. Supabase Storage Dashboard');
      console.log('  2. Run: npm run verify:migration');
      console.log('  3. Test blog posts on frontend');
    } else {
      console.log('\n🔍 This was a dry run. Run without --dry-run to apply changes.');
    }

  } catch (error) {
    console.error('\n❌ Migration failed:', error);
    process.exit(1);
  }
}

// Run migration
main().catch(console.error);
