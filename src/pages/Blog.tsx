
import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate, useLocation } from "react-router-dom";
import { useCountry } from "@/contexts/CountryContext";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { ArrowRight } from "lucide-react";

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

  // Category list for filter buttons
  const allCategories = Array.from(
    posts.reduce((acc, post) => {
      post.categories.forEach((cat) => acc.add(cat));
      return acc;
    }, new Set<string>())
  );

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
      <div
        className="min-h-screen w-full"
        style={{
          background: "linear-gradient(180deg, #EBF1FE 0%, #ECE9E5 100%)",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <div className="container mx-auto px-4 py-12">
          {/* HERO SECTION */}
          <div className="rounded-xl overflow-hidden flex flex-col items-center text-center py-16 px-4 md:px-8 mb-12">
            <h1 className="font-poppins font-bold leading-[1.08] mb-4" style={{fontSize: "2.2rem"}}>
              <span className="block font-semibold text-gray-900">
                Business insights from
              </span>
              <span className="block font-extrabold text-black"
                style={{
                  fontSize: "2.4rem",
                  lineHeight: 1.15,
                  letterSpacing: "-0.01em"
                }}
              >
                Osome Blog
              </span>
            </h1>
            <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-700 font-medium">
              Our article provides comprehensive support for businesses operating in Singapore, offering clear guidance on regulatory processes and a wealth of articles covering financial management, accounting principles, and strategies for business expansion
            </p>
          </div>

          {/* (Optional) Category Filter Buttons */}
          {allCategories.length > 0 && (
            <div className="flex flex-wrap gap-3 justify-center mb-10">
              <button
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
                  activeCategory === "" ? "bg-black text-white" : "bg-white text-black hover:bg-gray-200"
                }`}
                onClick={() => setActiveCategory("")}
              >
                All
              </button>
              {allCategories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
                    activeCategory === category ? "bg-black text-white" : "bg-white text-black hover:bg-gray-200"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentPosts.map((post) => (
              <Card 
                key={post.slug}
                className="relative flex flex-col h-full bg-[#FAF8F4] rounded-[32px] shadow-xl border-0 p-0 transition-transform duration-200"
                style={{ boxShadow: '0 6px 36px 0 rgba(51, 51, 79, 0.07)' }}
              >
                {/* Post Image */}
                <div className="rounded-t-3xl bg-[#f1ede7] flex items-center justify-center h-56 overflow-hidden">
                  <img 
                    src={post.heroImage}
                    alt={post.title}
                    className="h-48 w-full object-cover rounded-t-3xl"
                    draggable={false}
                  />
                </div>
                {/* Author and Date */}
                <div className="flex flex-row gap-3 items-center px-8 py-2 text-[#797480] text-base font-semibold tracking-wide uppercase" style={{letterSpacing: 1}}>
                  {post.author && <span>{post.author}</span>}
                  {post.author && post.publishDate && <span className="text-[#C4C4C8]">•</span>}
                  <span>{post.publishDate}</span>
                </div>
                {/* Categories */}
                <div className="flex flex-wrap gap-2 px-8 pb-2">
                  {post.categories.map((cat) => (
                    <span
                      key={cat}
                      className="bg-[#EBF1FE] text-[#405094] text-xs font-semibold rounded-full px-3 py-1"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                {/* Title and Read More */}
                <div className="flex-1 px-8 pt-2 pb-8 flex flex-col">
                  <h2 className="text-[#22223F] font-bold leading-tight mb-6 text-[1.43rem] md:text-[1.69rem] xl:text-[1.88rem] font-sans" style={{lineHeight: 1.15}}>
                    {post.title}
                  </h2>
                  <div className="mt-auto">
                    <Button
                      variant="outline"
                      className="border-2 border-black bg-white text-black font-semibold text-base px-7 py-3 rounded-full shadow-md
                        hover:bg-black hover:text-white hover:scale-[1.04] transition-all duration-150 group"
                      onClick={() => handleReadMore(post.slug)}
                    >
                      Read More
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
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
