
import { useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useGuides } from "@/hooks/useGuides";

const GuideSingle = () => {
  const { slug } = useParams();
  const { guides, loading } = useGuides();
  const guide = guides.find(g => g.slug === slug);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!guide) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-4">Guide not found</h1>
          <p>The guide you're looking for doesn't exist.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="container mx-auto px-4 py-8">
        <img
          src={guide.Image}
          alt={guide.Title}
          className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
        />
        <h1 className="text-4xl font-bold mb-4">{guide.Title}</h1>
        <div className="mb-8">
          <span className="px-3 py-1 text-sm font-medium text-brand-orange bg-brand-orange/10 rounded-full">
            {guide.Category}
          </span>
        </div>
        <div className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: guide.Content || '' }}
        />
      </article>
    </Layout>
  );
};

export default GuideSingle;
