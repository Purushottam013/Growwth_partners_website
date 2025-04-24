
import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardFooter, CardTitle } from "@/components/ui/card";
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

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    if (category) {
      setActiveCategory(category);
    }
  }, [location.search]);

  const allCategories = blogData.categories;

  const filteredPosts = activeCategory
    ? posts.filter((post) => post.categories.includes(activeCategory))
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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
              {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-10 w-24 bg-gray-200 rounded mb-2"></div>)}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array(6).fill(0).map((_, i) => <div key={i} className="h-80 bg-gray-200 rounded-lg"></div>)}
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div
          className="relative mb-10 rounded-xl overflow-hidden shadow-lg"
          style={{
            background: "#EBF1FE",
          }}
        >
          <div className="relative py-16 px-8 text-gray-900 text-center">
            <h1
              className="text-2xl sm:text-4xl md:text-5xl font-semibold md:font-bold leading-tight mb-4 tracking-tight"
              style={{
                fontFamily: `"Suisse Int'l", "Helvetica Neue", Arial, sans-serif`,
                fontWeight: 500
              }}
            >
              <span className="block">
                Business insights from
              </span>
              <span className="block mt-1 font-extrabold text-3xl sm:text-5xl tracking-tight" style={{ fontFamily: `"Suisse Int'l", "Helvetica Neue", Arial, sans-serif`, color:'#FB8136' }}>
              <span style={{ color: "#FB8136" }}>Growwth</span>{" "}
              <span style={{ color: "#000000" }}>Blog</span>
              </span>

            </h1>
            <p className="text-base md:text-lg max-w-2xl mx-auto font-normal mt-2 text-gray-800">
              Our article provides comprehensive support for businesses operating in Singapore, offering clear guidance on regulatory processes and a wealth of articles covering financial management, accounting principles, and strategies for business expansion
            </p>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          <Button
            variant={!activeCategory ? "default" : "outline"}
            className="mb-2 shadow-sm transition-all hover:shadow rounded-xl"
            onClick={() => handleCategoryClick("")}
          >
            All
          </Button>
          {allCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className="mb-2 shadow-sm transition-all hover:shadow rounded-xl"
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
              className="flex flex-col h-[352px] md:h-[385px] lg:h-[440px] overflow-hidden shadow-lg border border-gray-200 rounded-xl bg-[#EBF1FE]"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.heroImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-6 pt-4 pb-0 flex flex-row items-center gap-2 text-sm text-gray-600">
                <Calendar size={16} className="mr-2" />
                <span>
                  {post.publishDate}
                </span>
                <span className="mx-2">|</span>
                <span className="ml-1">By Jatin Detwani</span>
              </div>
              <CardHeader className="pb-1">
                <CardTitle className="line-clamp-2 text-xl font-bold">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardFooter className="mt-auto px-6 pb-6">
                <Button
                  variant="outline"
                  className="w-fit px-5 flex items-center gap-2 border-black border-2 hover:bg-black hover:text-white hover:border-black transition font-semibold capitalize rounded-2xl"
                  onClick={() => handleReadMore(post.slug)}
                >
                  Read More
                  <ArrowRight size={18} className="ml-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {currentPosts.length === 0 && (
          <div className="text-center py-12 border rounded-lg bg-gray-50">
            <p className="text-lg text-gray-600">
              No posts found for this category
            </p>
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
                  className={
                    currentPage === 1
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer hover:bg-gray-100"
                  }
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
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer hover:bg-gray-100"
                  }
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
