
import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { blogData } from "@/data/blog";
import { useNavigate, useLocation } from "react-router-dom";
import { useCountry } from "@/contexts/CountryContext";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { Calendar, ArrowRight } from "lucide-react";

const BlogPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { getCountryUrl } = useCountry();
  const { posts, loading } = useBlogPosts();
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

  // Use the categories directly from blogData
  const allCategories = blogData.categories;

  // Filter posts by category if one is selected
  const filteredPosts = activeCategory 
    ? posts.filter(post => post.categories.includes(activeCategory))
    : posts;

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
        {/* Hero Section */}
        <div
          className="relative mb-10 rounded-xl overflow-hidden shadow-lg"
          style={{
            background: "linear-gradient(100deg,#EBF1FE 0%, #dbeafe 100%)",
          }}
        >
          {/* Overlay for legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-brand-blue opacity-80"></div>
          <div className="relative py-16 px-8 text-gray-900 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              <span>
                Business insights from
                <br className="block md:hidden" />
              </span>
              <div className="inline md:inline-block md:ml-3">
                <span className="block font-bold md:inline">
                  <span className="font-medium tracking-tight">Osome</span>&nbsp;
                  <span className="font-extrabold text-black">
                    Blog
                  </span>
                </span>
              </div>
            </h1>
            <p className="text-base md:text-lg max-w-2xl mx-auto font-normal mt-2 text-gray-800">
              Our article provides comprehensive support for businesses operating in Singapore, offering clear guidance on regulatory processes and a wealth of articles covering financial management, accounting principles, and strategies for business expansion
            </p>
          </div>
        </div>

        {/* Categories Bar */}
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

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {currentPosts.map((post) => (
            <Card 
              key={post.slug}
              className="flex flex-col h-full overflow-hidden shadow-lg border border-gray-200 rounded-xl bg-[#EBF1FE]"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.heroImage} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-6 pt-4 flex items-center text-sm text-gray-600 gap-1">
                <Calendar size={16} className="mr-2" />
                <span>{post.publishDate}</span>
                <span className="mx-2">|</span>
                <span className="ml-1">By {post.author}</span>
              </div>
              <CardHeader className="pb-1">
                <CardTitle className="line-clamp-2 text-lg font-bold">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardFooter className="pt-0 pb-4">
                <Button
                  variant="outline"
                  className="w-fit px-5 left-0 flex items-center gap-2 border-black border-2
                    hover:bg-black hover:text-white hover:border-black transition
                    font-semibold capitalize"
                  onClick={() => handleReadMore(post.slug)}
                >
                  Read More
                  <ArrowRight size={18} className="ml-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Show message if no posts match the filter */}
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

        {/* Pagination */}
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
