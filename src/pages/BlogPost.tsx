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
import { ArrowRight, Share, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

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

  const handleWriteToAuthor = () => {
    window.location.href = "mailto:jatin@growwthpartners.com?subject=Regarding your blog post: " + (post?.title || "");
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
            <Button onClick={() => navigate(getCountryUrl("/blog"))}>Back to Blog</Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
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
            <div>
              {/* Gradient Info Section */}
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 px-6 py-8">
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
                <h1 className="text-3xl md:text-4xl font-bold mb-5 leading-tight text-gray-900">
                  {post.title}
                </h1>

                {/* Author and Share */}
                <div className="flex flex-wrap items-center justify-between">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="w-8 h-8 bg-indigo-200 rounded-full flex items-center justify-center text-sm font-medium text-indigo-700 mr-3">
                      J
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">Jatin Detwani</p>
                      <p className="text-sm text-gray-500">{post.publishDate || "2025-04-24"}</p>
                    </div>
                  </div>
                  <button 
                    onClick={handleShare}
                    className="flex items-center gap-1 text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <Share className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>
              </div>

              <Separator className="mx-auto my-4 w-[95%]" />

              <div className="p-6 md:p-10">
                {/* Main Content */}
                <div 
                  className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 
                            prose-a:text-brand-orange prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                            prose-img:rounded-lg prose-img:mx-auto prose-img:shadow-sm
                            prose-blockquote:border-l-4 prose-blockquote:border-brand-orange prose-blockquote:text-gray-600 prose-blockquote:bg-gray-50 prose-blockquote:p-4
                            prose-strong:text-gray-900"
                  dangerouslySetInnerHTML={{ __html: post.content || "" }}
                />

                {/* Author Bio Card */}
                {post.author && (
                  <div className="mt-12 pt-6 border-t border-gray-100">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-xl font-medium text-gray-600 shrink-0 mx-auto md:mx-0">
                          {post.author.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-1 text-center w-full">Author's Bio</h3>
                          <h4 className="font-bold text-center md:text-left">Jatin Detwani<br /><span className="font-bold text-indigo-600">Founder</span></h4>
                          <p className="text-gray-700 mb-4 mt-3">
                            <strong>Diverse Background:</strong> Extensive expertise advising technology firms,
                            multinationals, PE/C investors, family-owned businesses, and startups worldwide.
                            <br /><br />
                            <strong>Global Presence:</strong> Worked in India, Singapore, France, the UK,
                            Luxembourg, providing a broad perspective on business landscapes.
                          </p>
                          <div className="flex justify-center md:justify-start">
                            <Button 
                              onClick={handleWriteToAuthor}
                              className="flex items-center gap-2 bg-brand-orange hover:bg-brand-orange/90"
                            >
                              <Mail className="w-4 h-4" />
                              Write To Jatin
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Related Services/Solutions Section */}
          <section className="mt-16 mb-12 mx-auto w-[90%]">
            <h2 className="text-2xl font-bold mb-8 text-center">Related Services/Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Accounting Services */}
              <Link to={getCountryUrl("/accounting")} className="block h-full transition-transform duration-300 hover:-translate-y-1">
                <Card className="h-full shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="pt-10 pb-6 px-5">
                    <h3 className="text-lg font-bold text-[#6A7280] hover:text-[#F87315] transition-colors duration-300 mb-2">Accounting Services in Singapore</h3>
                    <p className="text-gray-600 mt-3 text-sm">
                      Leverage our generative AI development services to streamline workflows, boost
                      productivity and drive innovation, while ensuring seamless integration with your
                      existing systems.
                    </p>
                    <div className="mt-4 flex items-center text-brand-orange font-medium text-sm">
                      Learn more <ArrowRight className="ml-1 w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
              
              {/* Card 2: Part Time CFO Services */}
              <Link to={getCountryUrl("/fractional-cfo")} className="block h-full transition-transform duration-300 hover:-translate-y-1">
                <Card className="h-full shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="pt-10 pb-6 px-5">
                    <h3 className="text-lg font-bold text-[#6A7280] hover:text-[#F87315] transition-colors duration-300 mb-2">Part Time CFO Services in Singapore</h3>
                    <p className="text-gray-600 mt-3 text-sm">
                      Optimize your business potential with our comprehensive generative AI consulting
                      services, designed to guide you in leveraging GenAI for operational excellence and
                      product innovation, while also upholding ethical AI principles.
                    </p>
                    <div className="mt-4 flex items-center text-brand-orange font-medium text-sm">
                      Learn more <ArrowRight className="ml-1 w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
              
              {/* Card 3: Bookkeeping Services */}
              <Link to={getCountryUrl("/bookkeeping")} className="block h-full transition-transform duration-300 hover:-translate-y-1">
                <Card className="h-full shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="pt-10 pb-6 px-5">
                    <h3 className="text-lg font-bold text-[#6A7280] hover:text-[#F87315] transition-colors duration-300 mb-2">Bookkeeping Services in Singapore</h3>
                    <p className="text-gray-600 mt-3 text-sm">
                      Unlock AI's full potential for your business through our comprehensive AI development
                      services, designed to tackle intricate tech challenges, streamline business workflows,
                      and achieve operational excellence.
                    </p>
                    <div className="mt-4 flex items-center text-brand-orange font-medium text-sm">
                      Learn more <ArrowRight className="ml-1 w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </section>

          {/* Related Posts Section */}
          {relatedPosts.length > 0 && (
            <section className="mt-16 mx-auto w-[90%]">
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
                        <h3 className="font-bold text-lg mb-2 line-clamp-2 text-[#6A7280] hover:text-[#F87315] transition-colors">{relatedPost.title}</h3>
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
