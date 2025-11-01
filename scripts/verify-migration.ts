import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Verify migration results
 */
async function verifyMigration() {
  console.log('='.repeat(60));
  console.log('Migration Verification');
  console.log('='.repeat(60));

  try {
    // Check for remaining base64 hero images
    console.log('\n1. Checking for remaining base64 hero images...');
    const { data: base64Heroes, error: heroError } = await supabase
      .from('blog_post')
      .select('id, title, Hero_image')
      .like('Hero_image', 'data:image%');

    if (heroError) throw heroError;

    if (base64Heroes && base64Heroes.length > 0) {
      console.log(`  ⚠️  Found ${base64Heroes.length} post(s) with base64 hero images:`);
      base64Heroes.forEach(post => {
        console.log(`    - Post ${post.id}: ${post.title}`);
      });
    } else {
      console.log('  ✓ No base64 hero images found');
    }

    // Check for remaining base64 content images
    console.log('\n2. Checking for remaining base64 content images...');
    const { data: base64Content, error: contentError } = await supabase
      .from('blog_post')
      .select('id, title, Content')
      .like('Content', '%data:image%');

    if (contentError) throw contentError;

    if (base64Content && base64Content.length > 0) {
      console.log(`  ⚠️  Found ${base64Content.length} post(s) with base64 content images:`);
      base64Content.forEach(post => {
        const matches = post.Content?.match(/data:image/g);
        console.log(`    - Post ${post.id}: ${post.title} (${matches?.length || 0} image(s))`);
      });
    } else {
      console.log('  ✓ No base64 content images found');
    }

    // Check storage bucket
    console.log('\n3. Checking Supabase Storage...');
    const { data: heroFiles } = await supabase.storage
      .from('blog-images')
      .list('hero-images', { limit: 1000 });

    const { data: contentFiles } = await supabase.storage
      .from('blog-images')
      .list('content-images', { limit: 1000 });

    console.log(`  ✓ Hero images in storage: ${heroFiles?.length || 0}`);
    console.log(`  ✓ Content images in storage: ${contentFiles?.length || 0}`);
    console.log(`  ✓ Total images in storage: ${(heroFiles?.length || 0) + (contentFiles?.length || 0)}`);

    // Get all posts for summary
    console.log('\n4. Getting post statistics...');
    const { data: allPosts } = await supabase
      .from('blog_post')
      .select('id, Hero_image, Content');

    const postsWithHeroImages = allPosts?.filter(p => p.Hero_image && p.Hero_image.trim() !== '').length || 0;
    const postsWithStorageHeroImages = allPosts?.filter(p => 
      p.Hero_image && p.Hero_image.includes('supabase.co/storage')
    ).length || 0;

    console.log(`  ✓ Total posts: ${allPosts?.length || 0}`);
    console.log(`  ✓ Posts with hero images: ${postsWithHeroImages}`);
    console.log(`  ✓ Posts using storage hero images: ${postsWithStorageHeroImages}`);

    // Final verdict
    console.log('\n' + '='.repeat(60));
    console.log('Verification Summary');
    console.log('='.repeat(60));

    const allClear = 
      (!base64Heroes || base64Heroes.length === 0) &&
      (!base64Content || base64Content.length === 0);

    if (allClear) {
      console.log('\n✅ Migration verified successfully!');
      console.log('   All base64 images have been migrated to Supabase Storage.');
      console.log('\nNext steps:');
      console.log('  1. Test blog posts on frontend');
      console.log('  2. Check browser Network tab for image loading');
      console.log('  3. Monitor Supabase Storage Dashboard');
    } else {
      console.log('\n⚠️  Migration incomplete or has issues.');
      console.log('   Some posts still contain base64 images.');
      console.log('\nRecommendations:');
      console.log('  1. Review the posts listed above');
      console.log('  2. Re-run migration for specific posts if needed');
      console.log('  3. Check migration logs for errors');
    }

    // Storage dashboard link
    console.log('\n📊 View in Supabase Dashboard:');
    console.log('   https://supabase.com/dashboard/project/oqtgbspxeoukwahhacld/storage/buckets/blog-images');

  } catch (error) {
    console.error('\n❌ Verification failed:', error);
    process.exit(1);
  }
}

// Run verification
verifyMigration().catch(console.error);
