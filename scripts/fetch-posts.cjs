const { writeFileSync } = require('fs')
const { join }          = require('path')
require('dotenv').config()

const { createClient }  = require('@supabase/supabase-js')

// Initialize with the same URL & key, via env
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)

async function dumpPosts() {
  const outPath = join(__dirname, '..', 'src', 'generated', 'posts.json')
  
  try {
    // Create an abort signal with 15 second timeout
    const abortController = new AbortController()
    const timeoutId = setTimeout(() => abortController.abort(), 15000)
    
    // Fetch only necessary fields for SEO/metadata
    const { data: posts, error } = await supabase
      .from('blog_post')
      .select('id, title, slug, Hero_image, Categories, Author, Excerpt, publishdate, faqs')
      .abortSignal(abortController.signal)
    
    clearTimeout(timeoutId)

    if (error) {
      console.warn('⚠️  Supabase fetch error:', error)
      console.warn('⚠️  Writing empty posts array to allow build to continue')
      writeFileSync(outPath, JSON.stringify([], null, 2), 'utf-8')
      process.exit(0) // Exit successfully to allow build to proceed
    }

    writeFileSync(outPath, JSON.stringify(posts, null, 2), 'utf-8')
    console.log(`✅ Successfully fetched ${posts.length} posts for build-time SEO`)
  } catch (err) {
    console.warn('⚠️  Failed to fetch posts:', err.message)
    console.warn('⚠️  Writing empty posts array to allow build to continue')
    writeFileSync(outPath, JSON.stringify([], null, 2), 'utf-8')
    process.exit(0) // Exit successfully to allow build to proceed
  }
}

dumpPosts().catch(err => {
  console.error('⚠️  Unexpected error:', err)
  const outPath = join(__dirname, '..', 'src', 'generated', 'posts.json')
  writeFileSync(outPath, JSON.stringify([], null, 2), 'utf-8')
  process.exit(0) // Exit successfully to allow build to proceed
})