
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BlogPost } from "@/hooks/useBlogPosts";
import { useCountry } from "@/contexts/CountryContext";
import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface BlogRelatedPostsProps {
  posts: BlogPost[];
}

export const BlogRelatedPosts = ({ posts }: BlogRelatedPostsProps) => {
  const { getCountryUrl } = useCountry();
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  const handleImageLoaded = (postId: number) => {
    setLoadedImages(prev => ({ ...prev, [postId]: true }));
  };

  if (!posts.length) return null;

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Link 
              to={getCountryUrl(`/blog/${post.slug}`)} 
              className="block h-full"
            >
              <Card className="overflow-hidden h-full hover:shadow-md transition-shadow duration-300">
                <div className="relative h-48 bg-gray-100">
                  {!loadedImages[post.id] && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="animate-pulse w-8 h-8 rounded-full bg-gray-200"></div>
                    </div>
                  )}
                  <OptimizedImage
                    src={post.heroImage || "/placeholder.svg"}
                    alt={post.title}
                    className={`h-full w-full object-cover transition-opacity duration-300 ${loadedImages[post.id] ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => handleImageLoaded(post.id)}
                    fallbackSrc="/placeholder.svg"
                  />
                </div>
                
                <CardContent className="p-5">
                  {Array.isArray(post.categories) && post.categories.length > 0 && (
                    <div className="mb-3">
                      <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 rounded-full px-2 py-0.5 text-xs">
                        {post.categories[0]}
                      </Badge>
                    </div>
                  )}
                  
                  <h4 className="font-semibold text-lg mb-2 line-clamp-2">{post.title}</h4>
                  
                  {post.excerpt && (
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                  )}
                  
                  <div className="flex items-center text-sm text-indigo-600 font-medium mt-auto">
                    <span>Read more</span>
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
