
import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { blogData } from "@/data/blog";
import { useNavigate, useLocation } from "react-router-dom";
import { useCountry } from "@/contexts/CountryContext";

const BlogPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { getCountryUrl } = useCountry();
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("");
  const postsPerPage = 6;

  // Extract the category from URL if present
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    if (category) {
      setActiveCategory(category);
    }
  }, [location.search]);

  // Get all unique categories
  const allCategories = [...new Set(blogData.posts.flatMap(post => post.categories))];

  // Filter posts by category if one is selected
  const filteredPosts = activeCategory 
    ? blogData.posts.filter(post => post.categories.includes(activeCategory))
    : blogData.posts;

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Handle category filter
  const handleCategoryClick = (category: string) => {
    if (activeCategory === category) {
      // If clicking the active category, clear the filter
      setActiveCategory("");
      navigate(getCountryUrl("/blog"));
    } else {
      setActiveCategory(category);
      navigate(getCountryUrl(`/blog?category=${category}`));
    }
    setCurrentPage(1); // Reset to first page on filter change
  };

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open post in new tab
  const handleReadMore = (slug: string) => {
    window.open(getCountryUrl(`/blog/${slug}`), "_blank");
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="relative mb-10 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-brand-blue opacity-90"></div>
          <div className="relative py-16 px-8 text-white text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Explore our collection of articles, insights, and updates on financial management, accounting, and business growth.
            </p>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          <Button 
            variant={!activeCategory ? "default" : "outline"}
            className="mb-2"
            onClick={() => handleCategoryClick("")}
          >
            All
          </Button>
          {allCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className="mb-2"
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {currentPosts.map((post) => (
            <Card key={post.slug} className="flex flex-col h-full">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img 
                  src={post.heroImage} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.categories.map((category) => (
                    <Badge key={category} variant="outline" className="bg-slate-100">
                      {category}
                    </Badge>
                  ))}
                </div>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">By {post.author}</p>
                <p className="mt-2 line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" onClick={() => handleReadMore(post.slug)}>
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => handlePageChange(currentPage - 1)}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
              
              {Array.from({ length: totalPages }).map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    isActive={currentPage === index + 1}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => handlePageChange(currentPage + 1)}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
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
