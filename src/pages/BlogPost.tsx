
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCountry } from "@/contexts/CountryContext";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import ReactMarkdown from "react-markdown";

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { getCountryUrl } = useCountry();
  const { getPostBySlug, loading: postsLoading } = useBlogPosts();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

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

  // Custom markdown renderer components
  const renderers = {
    // Fixed the image renderer type to accept all HTML image props
    img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
      // Ensure we have a src, or return null if not provided
      if (!props.src) return null;
      
      return (
        <div className="my-6">
          <img 
            src={props.src} 
            alt={props.alt || "Blog image"} 
            className="mx-auto rounded-lg shadow-md max-h-[500px] w-auto"
          />
        </div>
      );
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10 md:py-20">
        <Button 
          variant="outline" 
          onClick={handleBackToBlog}
          className="mb-4 md:mb-8"
        >
          ← Back to Blog
        </Button>
        <article className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-5 md:p-12 relative">
          {/* Categories as colored chips */}
          {Array.isArray(post.categories) && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6 items-center">
              {post.categories.map((category: string) => (
                <Badge key={category} variant="outline" className="bg-indigo-100 text-indigo-700 border-indigo-300 px-4 py-1 text-sm rounded-2xl font-medium whitespace-nowrap">
                  {category}
                </Badge>
              ))}
            </div>
          )}
          {/* Hero Image */}
          {post.heroImage && (
            <div className="rounded-xl overflow-hidden mb-8 h-60 md:h-96 flex items-center justify-center bg-gray-50 border border-gray-200">
              <img 
                src={post.heroImage} 
                alt={post.title}
                className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                style={{ maxHeight: 400, borderRadius: 18 }}
              />
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3 leading-tight">
            {post.title}
          </h1>

          {/* Author & Date */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-10">
            <div>
              <span className="font-semibold">{post.author || "Jatin Detwani"}</span>
              {post.publishDate && <span className="ml-2 text-gray-400">• {post.publishDate}</span>}
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-8 prose-img:rounded-lg prose-img:shadow prose-img:mx-auto">
            <ReactMarkdown 
              components={{
                img: ({node, ...props}) => renderers.img(props)
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default BlogPostPage;
