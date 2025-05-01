
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCountry } from "@/contexts/CountryContext";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, Share } from "lucide-react";

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { getCountryUrl } = useCountry();
  const { getPostBySlug, posts, loading: postsLoading } = useBlogPosts();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);

  useEffect(() => {
    if (!postsLoading && slug) {
      const foundPost = getPostBySlug(slug);
      setPost(foundPost || null);
      setLoading(false);
      
      // Find related posts based on categories
      if (foundPost && Array.isArray(foundPost.categories) && foundPost.categories.length > 0) {
        const related = posts
          .filter(p => 
            p.id !== foundPost.id && 
            Array.isArray(p.categories) && 
            p.categories.some((cat: string) => 
              foundPost.categories.includes(cat)
            )
          )
          .slice(0, 3);
        
        // If we don't have enough related posts by category, add recent posts
        if (related.length < 3) {
          const recentPosts = posts
            .filter(p => p.id !== foundPost.id && !related.some(r => r.id === p.id))
            .slice(0, 3 - related.length);
          
          setRelatedPosts([...related, ...recentPosts]);
        } else {
          setRelatedPosts(related);
        }
      } else if (foundPost) {
        // If no categories, just show recent posts
        setRelatedPosts(
          posts.filter(p => p.id !== foundPost.id).slice(0, 3)
        );
      }
    }
  }, [slug, postsLoading, getPostBySlug, posts]);

  const handleBackToBlog = () => {
    navigate(getCountryUrl("/blog"));
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post?.title || "Blog Post",
        url: window.location.href,
      }).catch(err => console.error("Error sharing:", err));
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(window.location.href)
        .then(() => alert("Link copied to clipboard!"))
        .catch(err => console.error("Error copying to clipboard:", err));
    }
  };

  if (loading || postsLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Skeleton loader */}
            <Skeleton className="h-10 w-32 mb-6" />
            <Skeleton className="h-64 rounded-xl mb-8" />
            <Skeleton className="h-12 w-3/4 mb-4" />
            <div className="flex gap-2 mb-6">
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-6 w-20" />
            </div>
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-6 w-3/4 mb-6" />
            <div className="grid gap-4">
              {Array(8).fill(0).map((_, i) => (
                <Skeleton key={i} className="h-4 w-full" />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
            <p className="mb-6">The blog post you're looking for doesn't exist.</p>
            <Button onClick={handleBackToBlog}>Back to Blog</Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gray-50 py-6">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={handleBackToBlog}
            className="mb-2 text-gray-600 hover:text-brand-orange transition-colors"
          >
            ← Back to Blog
          </Button>
        </div>
      </div>
      
      <article className="container mx-auto px-4 py-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Content wrapper */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Hero Image */}
            {post.heroImage && (
              <div className="relative w-full h-[300px] md:h-[400px] bg-gray-100 border-b border-gray-200">
                <OptimizedImage 
                  src={post.heroImage} 
                  alt={post.title}
                  className="w-full h-full"
                  fallbackSrc="/placeholder.svg"
                />
              </div>
            )}

            {/* Content Container */}
            <div className="p-6 md:p-10">
              {/* Categories */}
              {Array.isArray(post.categories) && post.categories.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.categories.map((category: string) => (
                    <Badge 
                      key={category} 
                      variant="outline" 
                      className="bg-indigo-50 text-indigo-700 border-indigo-200 px-3 py-1 rounded-full"
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-gray-900">
                {post.title}
              </h1>

              {/* Author & Date */}
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-8 pb-6 border-b border-gray-100">
                {post.author && (
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded-full mr-2 flex items-center justify-center text-sm font-medium text-gray-600">
                      {post.author.charAt(0)}
                    </div>
                    <span className="font-medium">{post.author}</span>
                  </div>
                )}
                
                {post.publishDate && (
                  <div className="flex items-center">
                    <span className="text-gray-400 mx-2">•</span>
                    <span className="text-gray-500">{post.publishDate}</span>
                  </div>
                )}
                
                {/* Share Button */}
                <button 
                  onClick={handleShare}
                  className="ml-auto flex items-center gap-1 text-gray-500 hover:text-brand-orange transition-colors"
                >
                  <Share className="w-4 h-4" />
                  <span>Share</span>
                </button>
              </div>

              {/* Main Content */}
              <div 
                className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 
                          prose-a:text-brand-orange prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                          prose-img:rounded-lg prose-img:mx-auto prose-img:shadow-sm
                          prose-blockquote:border-l-4 prose-blockquote:border-brand-orange prose-blockquote:text-gray-600 prose-blockquote:bg-gray-50 prose-blockquote:p-4
                          prose-strong:text-gray-900"
                dangerouslySetInnerHTML={{ __html: post.content || "" }}
              />

              {/* Author Card */}
              {post.author && (
                <div className="mt-12 pt-6 border-t border-gray-100">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-xl font-medium text-gray-600">
                        {post.author.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">About {post.author}</h3>
                        <p className="text-gray-600">
                          Finance & accounting expert at Growwth Partners
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Posts Section */}
          {relatedPosts.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.id} className="transition-all duration-300 hover:shadow-md">
                    <Link to={getCountryUrl(`/blog/${relatedPost.slug}`)}>
                      {relatedPost.heroImage && (
                        <div className="w-full h-48 overflow-hidden">
                          <OptimizedImage
                            src={relatedPost.heroImage}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover"
                            fallbackSrc="/placeholder.svg"
                          />
                        </div>
                      )}
                      <CardContent className="p-5">
                        <div className="mb-2 flex flex-wrap gap-1">
                          {Array.isArray(relatedPost.categories) && relatedPost.categories.length > 0 && (
                            <Badge variant="outline" className="text-xs bg-gray-50">
                              {relatedPost.categories[0]}
                            </Badge>
                          )}
                        </div>
                        <h3 className="font-bold text-lg mb-2 line-clamp-2">{relatedPost.title}</h3>
                        <p className="text-gray-600 text-sm line-clamp-3">
                          {relatedPost.excerpt || ""}
                        </p>
                        <div className="mt-4 flex items-center text-brand-orange font-medium text-sm">
                          Read more <ArrowRight className="ml-1 w-4 h-4" />
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </Layout>
  );
};

export default BlogPostPage;
