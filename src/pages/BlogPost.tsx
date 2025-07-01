import React, { useMemo } from "react";
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

// Import statically generated posts
import postsData from "@/generated/posts.json";

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

const posts: BlogPost[] = postsData as BlogPost[];

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { getCountryUrl } = useCountry();

  // Find the post synchronously at build time
  const post = useMemo(() => posts.find(p => p.slug === slug), [slug]);
  if (!post) {
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

  // Compute related posts
  const relatedPosts = useMemo(() => {
    const cats = post.categories || [];
    const byCategory = posts.filter(p => p.id !== post.id && p.categories?.some(c => cats.includes(c))).slice(0, 3);
    if (byCategory.length >= 3) return byCategory;
    const recent = posts.filter(p => p.id !== post.id && !byCategory.includes(p)).slice(0, 3 - byCategory.length);
    return [...byCategory, ...recent];
  }, [post]);

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
            <div className="relative w-full h-[320px] bg-gray-100">
              <OptimizedImage src={post.heroImage} alt={post.title} className="w-full h-full object-cover" />
            </div>
          )}

          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 px-6 py-8">
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
            <div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: post.content }} />
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

        {relatedPosts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map(rp => (
                <Card key={rp.id} className="hover:shadow-lg">
                  <Link to={getCountryUrl(`/blog/${rp.slug}`)}>
                    {rp.heroImage && <OptimizedImage src={rp.heroImage} alt={rp.title} className="w-full h-48 object-cover" />}
                    <CardContent>
                      <h3 className="font-bold text-lg mb-2">{rp.title}</h3>
                      <p className="text-gray-600 line-clamp-2">{rp.excerpt}</p>
                      <div className="mt-4 flex items-center text-indigo-600 font-medium">
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
