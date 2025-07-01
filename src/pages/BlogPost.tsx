import React, { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCountry } from "@/contexts/CountryContext";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, Share, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import SEOhelper from "@/components/SEOhelper";
import { supabase } from "@/integrations/supabase/client";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  heroImage?: string;
  publishDate?: string;
  author?: string;
  authorBio?: string;
  categories?: string[];
}

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { getCountryUrl } = useCountry();
  
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch current post and related posts
  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      try {
        setLoading(true);
        
        // Fetch the current post
        const { data: currentPost, error: postError } = await supabase
          .from('blog_post')
          .select('*')
          .eq('slug', slug)
          .single();

        if (postError) {
          console.error('Error fetching post:', postError);
          setError('Post not found');
          return;
        }

        // Transform the data to match our interface
        const transformedPost: BlogPost = {
          id: currentPost.id.toString(),
          slug: currentPost.slug || '',
          title: currentPost.title || '',
          excerpt: currentPost.Excerpt || '',
          content: currentPost.Content || '',
          heroImage: currentPost.Hero_image || '',
          publishDate: currentPost.publishdate || '',
          author: currentPost.Author || 'Jatin Detwani',
          authorBio: '', // Add this to your database if needed
          categories: currentPost.Categories ? currentPost.Categories.split(',').map((c: string) => c.trim()) : []
        };

        setPost(transformedPost);

        // Fetch related posts
        const { data: allPosts, error: relatedError } = await supabase
          .from('blog_post')
          .select('*')
          .neq('id', currentPost.id)
          .limit(6);

        if (!relatedError && allPosts) {
          const transformedRelatedPosts: BlogPost[] = allPosts.map(p => ({
            id: p.id.toString(),
            slug: p.slug || '',
            title: p.title || '',
            excerpt: p.Excerpt || '',
            content: p.Content || '',
            heroImage: p.Hero_image || '',
            publishDate: p.publishdate || '',
            author: p.Author || 'Jatin Detwani',
            authorBio: '',
            categories: p.Categories ? p.Categories.split(',').map((c: string) => c.trim()) : []
          }));

          // Filter related posts by category if available
          const currentCategories = transformedPost.categories || [];
          const byCategory = transformedRelatedPosts.filter(p => 
            p.categories?.some(c => currentCategories.includes(c))
          ).slice(0, 3);
          
          if (byCategory.length >= 3) {
            setRelatedPosts(byCategory);
          } else {
            const recent = transformedRelatedPosts.filter(p => 
              !byCategory.includes(p)
            ).slice(0, 3 - byCategory.length);
            setRelatedPosts([...byCategory, ...recent]);
          }
        }

      } catch (err) {
        console.error('Error fetching blog post:', err);
        setError('Failed to load blog post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Skeleton className="h-8 w-3/4 mb-4" />
            <Skeleton className="h-4 w-1/2 mb-8" />
            <Skeleton className="h-64 w-full mb-8" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="mb-6">The blog post you're looking for doesn't exist.</p>
          <Button onClick={() => navigate(getCountryUrl("/blog"))}>Back to Blog</Button>
        </div>
      </Layout>
    );
  }

  const canonicalUrl = getCountryUrl(`/blog/${post.slug}`);

  return (
    <Layout>
      <SEOhelper
        title={post.title}
        description={
          post.excerpt && post.excerpt.length > 0
            ? post.excerpt
            : ((post.content ?? "").replace(/<[^>]+>/g, "").substring(0, 157) + '…')
        }
        keywords={(post.categories || []).join(', ')}
        canonicalUrl={canonicalUrl}
        ogType="article"
        ogImage={post.heroImage || '/default-og-image.png'}
        twitterCard="summary_large_image"
        structuredData={
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt || post.excerpt,
            image: post.heroImage,
            datePublished: post.publishDate,
            author: { "@type": "Person", name: post.author || 'Jatin Detwani' },
            publisher: { "@type": "Organization", name: "Growwth Partners", url: getCountryUrl('/') },
            url: canonicalUrl
          }
        }
      />

      <article className="container mx-auto px-4 py-6 md:py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {post.heroImage && (
            <>
              <div className="relative w-full h-[400px] bg-gray-100">
                <OptimizedImage 
                  src={post.heroImage} 
                  alt={post.title} 
                  className="w-full h-full object-cover" 
                  priority={true}
                />
              </div>
              <div className="h-6"></div>
            </>
          )}

          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 px-6 py-8 mx-6 rounded-lg">
            {(post.categories || []).length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.categories!.map(cat => (
                  <Badge key={cat} variant="outline" className="bg-indigo-50 text-indigo-700">{cat}</Badge>
                ))}
              </div>
            )}
            <h1 className="text-3xl md:text-4xl font-bold mb-5 text-gray-900">{post.title}</h1>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-indigo-200 rounded-full flex items-center justify-center mr-3">J</div>
                <div>
                  <p className="font-bold text-gray-800">{post.author || 'Jatin Detwani'}</p>
                  <p className="text-sm text-gray-500">{post.publishDate || ''}</p>
                </div>
              </div>
              <button onClick={() => {
                  if (navigator.share) navigator.share({ title: post.title, url: canonicalUrl });
                  else navigator.clipboard.writeText(canonicalUrl);
                }}
                className="flex items-center gap-1 text-gray-600 hover:text-indigo-600"
              >
                <Share className="w-4 h-4" /> Share
              </button>
            </div>
          </div>

          <div className="p-6 md:p-10">
            <Separator className="w-full bg-indigo-200 h-0.5 mb-8" />
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
            <Separator className="w-full bg-indigo-200 h-0.5 my-8" />
            {post.authorBio && (
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">About the Author</h3>
                <p className="text-gray-700">{post.authorBio}</p>
                <Button onClick={() => window.open(`mailto:jd@growwthpartners.com?subject=${encodeURIComponent('Regarding: ' + post.title)}`, '_blank')} className="mt-4">Write To Author</Button>
              </div>
            )}
          </div>
        </div>

        {/* Related Services/Solutions Section with wider cards */}
        <section className="mt-16 mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Related Services/Solutions</h2>
          <div className="w-[90%] max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Accounting Services */}
              <Link to={getCountryUrl("/accounting")} className="block h-full">
                <Card className="h-full shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-gray-50 p-6 cursor-pointer">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-bold text-[#6A7280] mb-3">Accounting Services in Singapore</h3>
                    <p className="text-gray-600 mt-3">
                      Leverage our generative AI development services to streamline workflows, boost
                      productivity and drive innovation, while ensuring seamless integration with your
                      existing systems.
                    </p>
                    <div className="mt-5 flex items-center text-brand-orange font-medium text-sm">
                      Learn more <ArrowRight className="ml-1 w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
              
              {/* Card 2: Part Time CFO Services */}
              <Link to={getCountryUrl("/fractional-cfo")} className="block h-full">
                <Card className="h-full shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-gray-50 p-6 cursor-pointer">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-bold text-[#6A7280] mb-3">Part Time CFO Services in Singapore</h3>
                    <p className="text-gray-600 mt-3">
                      Optimize your business potential with our comprehensive generative AI consulting
                      services, designed to guide you in leveraging GenAI for operational excellence and
                      product innovation, while also upholding ethical AI principles.
                    </p>
                    <div className="mt-5 flex items-center text-brand-orange font-medium text-sm">
                      Learn more <ArrowRight className="ml-1 w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
              
              {/* Card 3: Bookkeeping Services */}
              <Link to={getCountryUrl("/bookkeeping")} className="block h-full">
                <Card className="h-full shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-gray-50 p-6 cursor-pointer">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-bold text-[#6A7280] mb-3">Bookkeeping Services in Singapore</h3>
                    <p className="text-gray-600 mt-3">
                      Unlock AI's full potential for your business through our comprehensive AI development
                      services, designed to tackle intricate tech challenges, streamline business workflows,
                      and achieve operational excellence.
                    </p>
                    <div className="mt-5 flex items-center text-brand-orange font-medium text-sm">
                      Learn more <ArrowRight className="ml-1 w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {relatedPosts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map(rp => (
                <Card key={rp.id} className="hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                  <Link to={getCountryUrl(`/blog/${rp.slug}`)} className="flex flex-col h-full">
                    <div className="relative h-48 overflow-hidden rounded-t-lg bg-gray-100 flex-shrink-0">
                      <OptimizedImage 
                        src={rp.heroImage || 'https://as2.ftcdn.net/v2/jpg/10/28/35/13/1000_F_1028351361_FZ2vwpQEZZjEDQxp70ICUoC7Qmb9nuZi.jpg'} 
                        alt={rp.title} 
                        className="w-full h-full object-cover" 
                        width={400}
                        height={192}
                      />
                    </div>
                    <CardContent className="p-4 flex flex-col flex-grow">
                      <h3 className="font-bold text-lg mb-2 line-clamp-2">{rp.title}</h3>
                      <p className="text-gray-600 line-clamp-3 flex-grow mb-4">{rp.excerpt}</p>
                      <div className="mt-auto flex items-center text-indigo-600 font-medium">
                        Read more <ArrowRight className="ml-1 w-4 h-4" />
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </section>
        )}
      </article>
    </Layout>
  );
};

export default BlogPostPage;
