
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCountry } from "@/contexts/CountryContext";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { Share, Calendar, User, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { BlogShareButtons } from "@/components/blog/BlogShareButtons";
import { BlogRelatedPosts } from "@/components/blog/BlogRelatedPosts";
import { BlogAuthorCard } from "@/components/blog/BlogAuthorCard";
import { motion } from "framer-motion";

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { getCountryUrl } = useCountry();
  const { getPostBySlug, posts, loading: postsLoading } = useBlogPosts();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (!postsLoading && slug) {
      const foundPost = getPostBySlug(slug);
      setPost(foundPost || null);
      setLoading(false);
    }
  }, [slug, postsLoading, getPostBySlug]);

  const handleBackToBlog = () => {
    navigate(getCountryUrl("/blog"));
  };

  if (loading || postsLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <BlogPostSkeleton />
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
            <p className="mb-6 text-gray-600">The blog post you're looking for doesn't exist.</p>
            <Button onClick={handleBackToBlog}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </motion.div>
        </div>
      </Layout>
    );
  }

  // Find related posts based on categories
  const relatedPosts = posts
    .filter(
      (p) => 
        p.id !== post.id && 
        Array.isArray(p.categories) && 
        Array.isArray(post.categories) && 
        p.categories.some((cat: string) => post.categories.includes(cat))
    )
    .slice(0, 3);

  return (
    <Layout>
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-10 md:py-16">
          <div className="max-w-5xl mx-auto">
            {/* Back button and share options */}
            <div className="flex justify-between items-center mb-8">
              <Button 
                variant="ghost" 
                onClick={handleBackToBlog}
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
              
              <BlogShareButtons post={post} />
            </div>
            
            <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {/* Hero image container */}
              <div className="relative overflow-hidden h-64 md:h-96 bg-gray-100">
                {post.heroImage ? (
                  <>
                    {!imageLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="animate-pulse w-12 h-12 rounded-full bg-gray-200"></div>
                      </div>
                    )}
                    <OptimizedImage
                      src={post.heroImage}
                      alt={post.title}
                      className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                      onLoad={() => setImageLoaded(true)}
                      fallbackSrc="/placeholder.svg"
                    />
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full bg-gray-100">
                    <span className="text-gray-400">No image available</span>
                  </div>
                )}
              </div>
              
              <div className="p-6 md:p-10">
                {/* Categories */}
                {Array.isArray(post.categories) && post.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.categories.map((category: string) => (
                      <Badge 
                        key={category} 
                        className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 rounded-full px-3 py-1"
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">
                  {post.title}
                </h1>
                
                {/* Publish info */}
                <div className="flex flex-wrap gap-4 items-center text-sm text-gray-600 mb-8">
                  {post.author && (
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      <span>{post.author}</span>
                    </div>
                  )}
                  
                  {post.publishDate && (
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{post.publishDate}</span>
                    </div>
                  )}
                </div>
                
                <Separator className="mb-8" />
                
                {/* Content */}
                <div 
                  className="prose prose-lg md:prose-xl max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-blue-600 prose-img:rounded-lg prose-blockquote:border-l-indigo-500"
                  dangerouslySetInnerHTML={{ __html: post.content || "" }}
                />
                
                <Separator className="my-10" />
                
                {/* Author card */}
                <BlogAuthorCard author={post.author || "Jatin Detwani"} />
              </div>
            </article>
            
            {/* Related posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-16">
                <BlogRelatedPosts posts={relatedPosts} />
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Skeleton loader component
const BlogPostSkeleton = () => (
  <div className="max-w-5xl mx-auto">
    <div className="h-8 w-32 bg-gray-200 rounded mb-12"></div>
    
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <div className="h-64 md:h-96 bg-gray-200 animate-pulse"></div>
      
      <div className="p-6 md:p-10">
        <div className="flex gap-2 mb-6">
          <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
          <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
        </div>
        
        <div className="h-12 md:h-14 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-12 md:h-14 bg-gray-200 rounded w-2/4 mb-8"></div>
        
        <div className="flex gap-4 mb-8">
          <div className="h-5 w-32 bg-gray-200 rounded"></div>
          <div className="h-5 w-32 bg-gray-200 rounded"></div>
        </div>
        
        <div className="space-y-4 mb-10">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
        </div>
      </div>
    </div>
  </div>
);

export default BlogPostPage;
