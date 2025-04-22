import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useNavigate, useLocation } from "react-router-dom";
import { useCountry } from "@/contexts/CountryContext";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { Calendar } from "lucide-react";

const BlogPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { getCountryUrl } = useCountry();
  const { posts, loading } = useBlogPosts();
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("");
  const postsPerPage = 6;

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    if (category) {
      setActiveCategory(category);
    }
  }, [location.search]);

  const allCategories = Array.from(new Set(posts.flatMap(post => post.categories)));

  const filteredPosts = activeCategory 
    ? posts.filter(post => post.categories.includes(activeCategory))
    : posts;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handleCategoryClick = (category: string) => {
    if (activeCategory === category) {
      setActiveCategory("");
      navigate(getCountryUrl("/blog"));
    } else {
      setActiveCategory(category);
      navigate(getCountryUrl(`/blog?category=${category}`));
    }
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReadMore = (slug: string) => {
    window.open(getCountryUrl(`/blog/${slug}`), "_blank");
  };

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-64 bg-gray-200 rounded-xl mb-10"></div>
            <div className="flex flex-wrap gap-2 justify-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-10 w-24 bg-gray-200 rounded mb-2"></div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array(6).fill(0).map((_, i) => (
                <div key={i} className="h-80 bg-gray-200 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="relative mb-10 rounded-xl overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-brand-blue opacity-90"></div>
          <div className="relative py-16 px-8 text-white text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Explore our collection of articles, insights, and updates on financial management, accounting, and business growth.
            </p>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          <Button 
            variant={!activeCategory ? "default" : "outline"}
            className="mb-2 shadow-sm transition-all hover:shadow"
            onClick={() => handleCategoryClick("")}
          >
            All
          </Button>
          {allCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className="mb-2 shadow-sm transition-all hover:shadow"
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {currentPosts.map((post) => (
            <Card 
              key={post.slug} 
              className="flex flex-col h-full overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-200"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.heroImage} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-2 right-2 flex flex-wrap gap-1 max-w-[80%]">
                  {post.categories.slice(0, 2).map((category) => (
                    <Badge key={category} variant="secondary" className="bg-white text-gray-800 shadow-sm">
                      {category}
                    </Badge>
                  ))}
                  {post.categories.length > 2 && (
                    <Badge variant="secondary" className="bg-white text-gray-800 shadow-sm">
                      +{post.categories.length - 2}
                    </Badge>
                  )}
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="line-clamp-2 text-xl font-bold hover:text-blue-600 transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow pb-2">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar size={16} className="mr-1" />
                  <span>{post.publishDate}</span>
                  <span className="mx-2">•</span>
                  <span>By {post.author}</span>
                </div>
                <p className="line-clamp-3 text-gray-600">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="pt-0 pb-4">
                <Button 
                  variant="outline" 
                  className="w-full hover:bg-blue-50"
                  onClick={() => handleReadMore(post.slug)}
                >
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {currentPosts.length === 0 && (
          <div className="text-center py-12 border rounded-lg bg-gray-50">
            <p className="text-lg text-gray-600">No posts found for this category</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => handleCategoryClick("")}
            >
              View All Posts
            </Button>
          </div>
        )}

        {totalPages > 1 && (
          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => handlePageChange(currentPage - 1)}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer hover:bg-gray-100"}
                />
              </PaginationItem>
              
              {Array.from({ length: totalPages }).map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    isActive={currentPage === index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className="hover:bg-gray-100"
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => handlePageChange(currentPage + 1)}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer hover:bg-gray-100"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </Layout>
  );
};

export default BlogPage;
