import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

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

/**
 * Restore blog posts from backup file
 */
async function restoreFromBackup(backupFilePath: string) {
  console.log('='.repeat(60));
  console.log('Restore Blog Posts from Backup');
  console.log('='.repeat(60));
  console.log(`\nBackup file: ${backupFilePath}\n`);

  try {
    // Read backup file
    console.log('Reading backup file...');
    const backupData = JSON.parse(readFileSync(backupFilePath, 'utf-8'));
    console.log(`✓ Found ${backupData.length} posts in backup\n`);

    // Restore each post
    let successful = 0;
    let failed = 0;

    for (const post of backupData) {
      try {
        console.log(`Restoring post ${post.id}: "${post.title.substring(0, 50)}..."`);
        
        const { error } = await supabase
          .from('blog_post')
          .update({
            Hero_image: post.Hero_image,
            Content: post.Content,
          })
          .eq('id', post.id);

        if (error) {
          throw error;
        }

        console.log(`  ✓ Restored successfully`);
        successful++;
      } catch (error) {
        console.error(`  ✗ Failed to restore:`, error);
        failed++;
      }
    }

    // Summary
    console.log('\n' + '='.repeat(60));
    console.log('Restore Summary');
    console.log('='.repeat(60));
    console.log(`\nTotal posts: ${backupData.length}`);
    console.log(`Successfully restored: ${successful}`);
    console.log(`Failed: ${failed}`);

    if (successful > 0) {
      console.log('\n✓ Restoration complete!');
      console.log('\nNote: Uploaded images in Supabase Storage will remain.');
      console.log('You can manually delete them from the Storage Dashboard if needed.');
    }

  } catch (error) {
    console.error('\n❌ Restoration failed:', error);
    process.exit(1);
  }
}

/**
 * Main function
 */
async function main() {
  const backupDir = join(__dirname, 'backups');
  
  // Get backup file from command line argument or use latest
  let backupFile: string;
  
  if (process.argv[2]) {
    backupFile = process.argv[2];
  } else {
    // Find latest backup file
    console.log('No backup file specified, looking for latest backup...\n');
    const files = readdirSync(backupDir)
      .filter(f => f.startsWith('posts-backup-') && f.endsWith('.json'))
      .sort()
      .reverse();
    
    if (files.length === 0) {
      console.error('❌ No backup files found in', backupDir);
      console.log('\nUsage: npm run restore:backup [path-to-backup-file]');
      process.exit(1);
    }
    
    backupFile = join(backupDir, files[0]);
    console.log(`Using latest backup: ${files[0]}\n`);
  }

  await restoreFromBackup(backupFile);
}

// Run restore
main().catch(console.error);
