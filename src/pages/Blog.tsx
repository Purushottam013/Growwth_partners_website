
import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate, useLocation } from "react-router-dom";
import { useCountry } from "@/contexts/CountryContext";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { ArrowRight } from "lucide-react";

const DESIGN_IMAGE = "/lovable-uploads/8da3cb28-a1e1-47c6-ab1f-54e65b0395db.png";

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

  // Filter posts by category if one is selected
  const filteredPosts = activeCategory 
    ? posts.filter(post => post.categories.includes(activeCategory))
    : posts;

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

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
      <div className="blog-gradient-bg min-h-screen">
        <div className="container mx-auto px-4 py-12">
          {/* HERO SECTION */}
          <div className="rounded-xl overflow-hidden flex flex-col items-center text-center py-16 px-4 md:px-8 mb-12">
            <h1 className="custom-hero-title font-bold text-gray-900 leading-[1.1] mb-4">
              Business insights from<br />
              <span className="block font-extrabold text-black">
                Osome Blog
              </span>
            </h1>
            <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-700 font-medium">
              Our article provides comprehensive support for businesses operating in Singapore, offering clear guidance on regulatory processes and a wealth of articles covering financial management, accounting principles, and strategies for business expansion
            </p>
          </div>
          
          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentPosts.map((post) => (
              <Card 
                key={post.slug}
                className="relative flex flex-col h-full bg-[#FAF8F4] rounded-[32px] shadow-xl border-0 p-0 transition-transform duration-200"
                style={{ boxShadow: '0 6px 36px 0 rgba(51, 51, 79, 0.07)' }}
              >
                {/* DESIGN IMAGE */}
                <div className="rounded-t-3xl bg-[#f1ede7] flex items-center justify-center h-56 overflow-hidden">
                  <img 
                    src={DESIGN_IMAGE}
                    alt=""
                    className="h-40"
                    draggable={false}
                    style={{ objectFit: 'contain', margin: '0 auto' }}
                  />
                </div>
                {/* Date and Author */}
                <div className="flex justify-start items-center px-8 py-2 text-[#797480] text-base font-semibold tracking-wide uppercase" style={{letterSpacing: 1}}>
                  {post.author && (
                    <span className="mr-2">{post.author}</span>
                  )}
                  {post.author && post.publishDate && <span className="mx-2 text-[#C4C4C8]">•</span>}
                  <span>{post.publishDate}</span>
                </div>
                {/* Title */}
                <div className="flex-1 px-8 pt-2 pb-8 flex flex-col">
                  <h2 className="text-[#22223F] font-bold leading-tight mb-8 text-[2rem] md:text-[2.3rem] xl:text-[2.3rem] font-sans" style={{lineHeight: 1.15}}>
                    {post.title}
                  </h2>
                  <div className="mt-auto">
                    <Button
                      variant="outline"
                      className="blog-read-btn border-0 bg-[#212134]/[.90] text-white font-semibold text-lg px-7 py-3 rounded-full shadow-md hover:bg-black hover:text-white hover:scale-[1.04] transition-colors duration-150"
                      onClick={() => handleReadMore(post.slug)}
                    >
                      Read <ArrowRight className="ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Show message if no posts match the filter */}
          {currentPosts.length === 0 && (
            <div className="text-center py-12 border rounded-lg bg-gray-50">
              <p className="text-lg text-gray-600">No posts found for this category</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  className={`w-9 h-9 rounded-full flex items-center justify-center ${
                    currentPage === index + 1
                      ? "bg-black text-white"
                      : "bg-white text-black hover:bg-gray-100"
                  } transition`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
