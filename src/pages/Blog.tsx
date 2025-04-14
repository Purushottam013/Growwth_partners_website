
import { Layout } from "@/components/Layout";
import { PlaceholderContent } from "@/components/PlaceholderContent";

const BlogPage = () => {
  return (
    <Layout>
      <PlaceholderContent 
        title="Blog" 
        description="Explore our collection of articles, insights, and updates on financial management, accounting, and business growth."
        imageBg="bg-gradient-to-r from-cyan-500 to-brand-blue"
      />
    </Layout>
  );
};

export default BlogPage;
