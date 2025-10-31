// src/pages/BlogPostPage.tsx
import React, { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, Share, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import SEOhelper from "@/components/SEOhelper";
import { useCountry } from "@/contexts/CountryContext";
import { supabase } from "@/integrations/supabase/client";
import postsData from "@/generated/posts.json";
import { FAQSection } from "@/components/blog/FAQSection";
import { Head } from "vite-react-ssg";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  heroImage?: string;
  publishDate?: string;
  author?: string;
  authorBio?: string;
  categories?: string[];
  faqs?: Array<{ question: string; answer: string }>;
}

// static JSON is only used here for build-time SEO metadata
const staticPosts: Omit<BlogPost, "id">[] = (postsData as any[]).map((p) => ({
  slug: p.slug,
  title: p.title,
  excerpt: p.excerpt,
  content: p.content || "", // Add content property with default empty string
  heroImage: p.heroImage,
  publishDate: p.publishDate,
  author: p.author,
  authorBio: p.authorBio,
  categories: p.categories,
  faqs: p.faqs || [],
}));

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { getCountryUrl } = useCountry();

  // 1) Build-time SEO lookup
  const seoPost = useMemo(() => staticPosts.find((p) => p.slug === slug), [slug]);
  const canonicalUrl = `https://growwthpartners.com/blog/${slug}`;

  // 2) Runtime fetch for actual content and related posts
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      try {
        setLoading(true);

        // Fetch the current post
        const { data: currentPost, error: postError } = await supabase
          .from("blog_post")
          .select("*")
          .eq("slug", slug)
          .single();

        if (postError) {
          console.error("Error fetching post:", postError);
          setError("Post not found");
          return;
        }

        // Transform the data to match our interface
        const transformedPost: BlogPost = {
          id: currentPost.id.toString(),
          slug: currentPost.slug || "",
          title: currentPost.title || "",
          excerpt: currentPost.Excerpt || "",
          content: currentPost.Content || "",
          heroImage: currentPost.Hero_image || "",
          publishDate: currentPost.publishdate || "",
          author: currentPost.Author || "Jatin Detwani",
          authorBio: "", // Add this to your database if needed
          categories: currentPost.Categories ? currentPost.Categories.split(",").map((c: string) => c.trim()) : [],
          faqs: Array.isArray(currentPost.faqs) ? currentPost.faqs as Array<{ question: string; answer: string }> : [],
        };

        setPost(transformedPost);

        // Fetch related posts
        const { data: allPosts, error: relatedError } = await supabase
          .from("blog_post")
          .select("*")
          .neq("id", currentPost.id)
          .limit(6);

        if (!relatedError && allPosts) {
          const transformedRelatedPosts: BlogPost[] = allPosts.map((p) => ({
            id: p.id.toString(),
            slug: p.slug || "",
            title: p.title || "",
            excerpt: p.Excerpt || "",
            content: p.Content || "",
            heroImage: p.Hero_image || "",
            publishDate: p.publishdate || "",
            author: p.Author || "Jatin Detwani",
            authorBio: "",
            categories: p.Categories ? p.Categories.split(",").map((c: string) => c.trim()) : [],
          }));

          // Filter related posts by category if available
          const currentCategories = transformedPost.categories || [];
          const byCategory = transformedRelatedPosts
            .filter((p) => p.categories?.some((c) => currentCategories.includes(c)))
            .slice(0, 3);

          if (byCategory.length >= 3) {
            setRelatedPosts(byCategory);
          } else {
            const recent = transformedRelatedPosts
              .filter((p) => !byCategory.includes(p))
              .slice(0, 3 - byCategory.length);
            setRelatedPosts([...byCategory, ...recent]);
          }
        }
      } catch (err) {
        console.error("Error fetching blog post:", err);
        setError("Failed to load blog post");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  return (
    <Layout>
      {/* 🚀 Always bake SEO tags at build time */}
      {seoPost && (
        <SEOhelper
          title={seoPost.title}
          description={seoPost.excerpt}
          keywords={(seoPost.categories || []).join(", ")}
          canonicalUrl={canonicalUrl}
          ogType="article"
          ogImage={seoPost.heroImage || "/default-og-image.png"}
          twitterCard="summary_large_image"
          structuredData={
            seoPost.faqs && seoPost.faqs.length > 0
              ? {
                  "@context": "https://schema.org",
                  "@graph": [
                    {
                      "@type": "Article",
                      headline: seoPost.title,
                      description: seoPost.excerpt,
                      image: seoPost.heroImage || "",
                      datePublished: seoPost.publishDate,
                      author: { "@type": "Person", name: seoPost.author || "" },
                      publisher: {
                        "@type": "Organization",
                        name: "Growwth Partners",
                        url: getCountryUrl("/"),
                      },
                      url: canonicalUrl,
                    },
                    {
                      "@type": "FAQPage",
                      mainEntity: seoPost.faqs
                        .filter((faq) => faq.question && faq.answer)
                        .map((faq) => ({
                          "@type": "Question",
                          name: faq.question,
                          acceptedAnswer: {
                            "@type": "Answer",
                            text: faq.answer,
                          },
                        })),
                    },
                    {
                      "@type": "LocalBusiness",
                      name: "Growwth Partners",
                      description: "Professional accounting, bookkeeping, Payroll, taxation and compliance,cash flow modeling and CFO services in Singapore",
                      url: "https://growwthpartners.com",
                      address: {
                        "@type": "PostalAddress",
                         "streetAddress": "65 Chulia Street",
                          "addressLocality": "Singapore",
                          "addressRegion": "#46-00 OCBC Centre, Singapore 049513",
                          "postalCode": "049513",
                          "addressCountry": "SG"
                      },
                      contactPoint: {
                        "@type": "ContactPoint",
                        email: "jd@growwthpartners.com",
                        telephone: "+65 8893 0720",
                        contactType: "Business Service",
                      },
                    },
                    ...(seoPost.categories && seoPost.categories.length > 0
                      ? seoPost.categories.map((category) => ({
                          "@type": "Service",
                          name: category,
                          provider: {
                            "@type": "Organization",
                            name: "Growwth Partners",
                            url: "https://growwthpartners.com",
                          },
                          description: `${category} services provided by Growwth Partners`,
                        }))
                      : []),
                  ],
                }
              : {
                  "@context": "https://schema.org",
                  "@graph": [
                    {
                      "@type": "Article",
                      headline: seoPost.title,
                      description: seoPost.excerpt,
                      image: seoPost.heroImage || "",
                      datePublished: seoPost.publishDate,
                      author: { "@type": "Person", name: seoPost.author || "" },
                      publisher: {
                        "@type": "Organization",
                        name: "Growwth Partners",
                        url: getCountryUrl("/"),
                      },
                      url: canonicalUrl,
                    },
                    {
                      "@type": "LocalBusiness",
                      name: "Growwth Partners",
                      description: "Professional accounting, bookkeeping, Payroll, taxation and compliance,cash flow modeling and CFO services in Singapore",
                      url: "https://growwthpartners.com",
                      address: {
                        "@type": "PostalAddress",
                         "streetAddress": "65 Chulia Street",
                          "addressLocality": "Singapore",
                          "addressRegion": "#46-00 OCBC Centre, Singapore 049513",
                          "postalCode": "049513",
                          "addressCountry": "SG"
                      },
                      contactPoint: {
                        "@type": "ContactPoint",
                        email: "jd@growwthpartners.com",
                        telephone: "+65 8893 0720",
                        contactType: "Business Service",
                      },
                    },
                    ...(seoPost.categories && seoPost.categories.length > 0
                      ? seoPost.categories.map((category) => ({
                          "@type": "Service",
                          name: category,
                          provider: {
                            "@type": "Organization",
                            name: "Growwth Partners",
                            url: "https://growwthpartners.com",
                          },
                          description: `${category} services provided by Growwth Partners`,
                        }))
                      : []),
                  ],
                }
          }
        />
      )}

      {/* 3) Then render loading / error / content UIs */}
      {loading ? (
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-4">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-64 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      ) : error || !post ? (
        <>
          <Head>
            <title>404 - Blog Post Not Found | Growwth Partners</title>
            <meta name="robots" content="noindex, nofollow" />
            <meta name="description" content="The blog post you're looking for doesn't exist." />
          </Head>
          <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
            <p className="mb-6">The blog post you're looking for doesn't exist.</p>
            <Button onClick={() => navigate(getCountryUrl("/blog"))}>Back to Blog</Button>
          </div>
        </>
      ) : (
        <article className="container mx-auto px-4 py-6 md:py-12">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            {post.heroImage && (
              <div className="w-full h-64 md:h-96 bg-gray-100 flex items-center justify-center overflow-hidden rounded-2xl">
  <OptimizedImage
    src={post.heroImage}
    alt={post.title}
    className="w-full h-full object-contain"
    style={{ maxWidth: "992px" }}
  />
</div>
            )}
            <div className="px-6 pb-6 pt-0 mt-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories?.map((cat) => (
                  <Badge key={cat} className="bg-indigo-100 text-indigo-800">
                    {cat}
                  </Badge>
                ))}
              </div>
              <h1 className="text-3xl font-extrabold mb-4">{post.title}</h1>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-700 font-bold">
                    J
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{post.author}</p>
                    <p className="text-sm text-gray-500">{post.publishDate}</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={() =>
                      navigator.share
                        ? navigator.share({
                            title: post.title,
                            url: canonicalUrl,
                          })
                        : navigator.clipboard.writeText(canonicalUrl)
                    }
                    className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600"
                  >
                    <Share className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        `mailto:jd@growwthpartners.com?subject=${encodeURIComponent("Regarding: " + post.title)}`,
                        "_blank",
                      )
                    }
                    className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Contact</span>
                  </button>
                </div>
              </div>

              <div className="prose prose-lg mx-auto mb-8" dangerouslySetInnerHTML={{ __html: post.content }} />

              {post.authorBio && (
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                  <h3 className="text-xl font-semibold mb-2">About the Author</h3>
                  <p className="text-gray-700 mb-4">{post.authorBio}</p>
                  <Button
                    className="bg-indigo-600 text-white hover:bg-indigo-700"
                    onClick={() =>
                      window.open(
                        `mailto:jd@growwthpartners.com?subject=${encodeURIComponent("Regarding: " + post.title)}`,
                        "_blank",
                      )
                    }
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Write to Author
                  </Button>
                </div>
              )}

              <FAQSection faqs={post.faqs || []} postTitle={post.title} />
            </div>
          </div>

          {/* Related Services/Solutions */}
          <section className="mt-12 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Related Services &amp; Solutions</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="p-6 hover:shadow-xl transition">
                <CardContent>
                  <h3 className="text-lg font-bold mb-2">Accounting Services in Singapore</h3>
                  <p className="text-gray-600 mb-4">
                    Leverage our generative AI development services to streamline workflows, boost productivity and
                    drive innovation, while ensuring seamless integration with your existing systems.
                  </p>
                  <Link
                    to={getCountryUrl("/accounting")}
                    className="font-medium inline-flex items-center text-orange-500"
                  >
                    Learn more <ArrowRight className="ml-1 w-4 h-4 text-orange-500" />
                  </Link>
                </CardContent>
              </Card>
              <Card className="p-6 hover:shadow-xl transition">
                <CardContent>
                  <h3 className="text-lg font-bold mb-2">Part-Time CFO Services</h3>
                  <p className="text-gray-600 mb-4">
                    Optimize your business potential with our comprehensive generative AI consulting services, designed
                    to guide you in leveraging GenAI for operational excellence and product innovation, while also
                    upholding ethical AI principles.
                  </p>
                  <Link
                    to={getCountryUrl("/part-time-cfo")}
                    className=" font-medium inline-flex items-center text-orange-500"
                  >
                    Learn more <ArrowRight className="ml-1 w-4 h-4 text-orange-500" />
                  </Link>
                </CardContent>
              </Card>
              <Card className="p-6 hover:shadow-xl transition">
                <CardContent>
                  <h3 className="text-lg font-bold mb-2">Bookkeeping Services in Singapore</h3>
                  <p className="text-gray-600 mb-4">
                    Unlock AI's full potential for your business through our comprehensive AI development services,
                    designed to tackle intricate tech challenges, streamline business workflows, and achieve operational
                    excellence.
                  </p>
                  <Link
                    to={getCountryUrl("/bookkeeping")}
                    className=" font-medium inline-flex items-center text-orange-500"
                  >
                    Learn more <ArrowRight className="ml-1 w-4 h-4 text-orange-500" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-bold mb-6 text-center">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((rp) => (
                  <Card key={rp.id} className="hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                    <Link to={getCountryUrl(`/blog/${rp.slug}`)} className="flex flex-col h-full">
                      <div className="relative h-48 overflow-hidden rounded-t-lg bg-gray-100">
                        <OptimizedImage
                          src={
                            rp.heroImage ||
                            "https://as2.ftcdn.net/v2/jpg/10/28/35/13/1000_F_1028351361_FZ2vwpQEZZjEDQxp70ICUoC7Qmb9nuZi.jpg"
                          }
                          alt={rp.title}
                          className="w-full h-full object-cover"
                          width={400}
                          height={192}
                        />
                      </div>
                      <CardContent className="p-4 flex flex-col flex-grow">
                        <h3 className="font-bold text-lg mb-2 line-clamp-2">{rp.title}</h3>
                        <p className="text-gray-600 line-clamp-3 flex-grow mb-4">{rp.excerpt}</p>
                        <div className="mt-auto flex items-center text-indigo-600 font-medium">
                          Read more <ArrowRight className="ml-1 w-4 h-4" />
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </article>
      )}
    </Layout>
  );
};

export default BlogPostPage;
