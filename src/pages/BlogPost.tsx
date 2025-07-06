import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import SEOhelper from "@/components/SEOhelper";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock } from "lucide-react";
import { format } from "date-fns";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  publishdate: string;
  Author: string;
  Categories: string;
  Hero_image: string;
}

const BlogPost = () => {
  const { slug } = useParams();

  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blog-post', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_post')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) throw error;
      return data as BlogPost;
    },
    enabled: !!slug,
  });

  const { data: similarPosts, isLoading: isSimilarPostsLoading, error: similarPostsError } = useQuery({
    queryKey: ['similar-posts', slug],
    queryFn: async () => {
      if (!post) return [];

      const { data, error } = await supabase
        .from('blog_post')
        .select('*')
        .neq('slug', slug)
        .limit(6);

      if (error) throw error;
      return data as BlogPost[];
    },
    enabled: !!post,
  });

  if (isLoading) return <div className="container-custom py-20 text-center">Loading...</div>;
  if (error) return <div className="container-custom py-20 text-center">Error loading post</div>;
  if (!post) return <div className="container-custom py-20 text-center">Post not found</div>;

  const categories = post.Categories ? post.Categories.split(',').map(cat => cat.trim()) : [];
  const publishDate = post.publishdate ? new Date(post.publishdate) : new Date();

  return (
    <div className="min-h-screen bg-white">
      <SEOhelper
        title={post.title}
        description={post.excerpt || post.title}
        keywords={categories.join(', ')}
      />

      {/* Hero Image */}
      {post.Hero_image && (
        <div className="w-full h-[400px] overflow-hidden bg-gray-100">
          <img 
            src={post.Hero_image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Spacer to prevent overlap */}
      <div className="h-6"></div>

      {/* Title and Meta Information Card */}
      <div className="container-custom">
        <div className="max-w-4xl mx-6 bg-white rounded-lg shadow-lg p-8 -mt-20 relative z-10 border">
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((category, index) => (
              <Badge key={index} variant="secondary" className="bg-brand-orange/10 text-brand-orange">
                {category}
              </Badge>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.Author || 'Growwth Partners'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{format(publishDate, 'MMMM d, yyyy')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>5 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-brand-orange prose-strong:text-gray-900">
            <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
          </div>
        </div>
      </div>

      {/* Similar Posts */}
      {similarPosts && similarPosts.length > 0 && (
        <div className="bg-gray-50 py-16">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {similarPosts.slice(0, 3).map((relatedPost) => (
                <div key={relatedPost.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  {relatedPost.Hero_image && (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={relatedPost.Hero_image} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 line-clamp-2">
                      <a href={`/blog/${relatedPost.slug}`} className="hover:text-brand-orange transition-colors">
                        {relatedPost.title}
                      </a>
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {relatedPost.excerpt}
                    </p>
                    <div className="text-xs text-gray-500">
                      {relatedPost.publishdate && format(new Date(relatedPost.publishdate), 'MMM d, yyyy')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPost;
