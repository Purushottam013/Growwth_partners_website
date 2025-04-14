
import { Layout } from "@/components/Layout";
import { PlaceholderContent } from "@/components/PlaceholderContent";

const NewsPage = () => {
  return (
    <Layout>
      <PlaceholderContent 
        title="In The News" 
        description="Find out about our company's latest feature stories, press releases, and media coverage."
        imageBg="bg-gradient-to-r from-slate-700 to-slate-900"
      />
    </Layout>
  );
};

export default NewsPage;
