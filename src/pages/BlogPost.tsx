
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogData } from "@/data/blog";
import { useCountry } from "@/contexts/CountryContext";
import ReactMarkdown from "react-markdown";

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { getCountryUrl } = useCountry();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // First check in the static data
    const foundPost = blogData.posts.find(p => p.slug === slug);
    
    if (foundPost) {
      setPost(foundPost);
      setLoading(false);
      return;
    }
    
    // If not found in static data, check localStorage
    const localPosts = JSON.parse(localStorage.getItem("blog-posts") || "[]");
    const localPost = localPosts.find((p: any) => p.slug === slug);
    
    if (localPost) {
      setPost(localPost);
    }
    
    setLoading(false);
  }, [slug]);

  const handleBackToBlog = () => {
    navigate(getCountryUrl("/blog"));
  };

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 flex justify-center">
          <div className="animate-pulse w-full max-w-3xl">
            <div className="h-64 bg-gray-200 rounded-lg mb-6"></div>
            <div className="h-10 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="mb-6">The blog post you're looking for doesn't exist.</p>
          <Button onClick={handleBackToBlog}>Back to Blog</Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <Button 
          variant="outline" 
          onClick={handleBackToBlog}
          className="mb-6"
        >
          ← Back to Blog
        </Button>
        
        <article className="max-w-4xl mx-auto">
          {/* Hero Image */}
          <div className="rounded-lg overflow-hidden mb-8 h-[400px]">
            <img 
              src={post.heroImage} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((category: string) => (
              <Badge key={category} variant="outline" className="bg-slate-100">
                {category}
              </Badge>
            ))}
          </div>
          
          {/* Title */}
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          
          {/* Author & Date */}
          <div className="text-muted-foreground mb-8">
            By {post.author} {post.publishDate && `• ${post.publishDate}`}
          </div>
          
          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default BlogPostPage;
