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
  const { data: posts, error } = await supabase
    .from('blog_post')
    .select('*');


  if (error) {
    console.error('⚠️  Supabase fetch error:', error)
    process.exit(1)
  }

  const outPath = join(__dirname, '..', 'src', 'generated', 'posts.json')
  writeFileSync(outPath, JSON.stringify(posts, null, 2), 'utf-8')

}

dumpPosts().catch(err => {
  console.error(err)
  process.exit(1)
})