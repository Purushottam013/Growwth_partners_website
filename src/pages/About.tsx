
import { Layout } from "@/components/Layout";
import { PlaceholderContent } from "@/components/PlaceholderContent";

const AboutPage = () => {
  return (
    <Layout>
      <PlaceholderContent 
        title="About Growwth Partners" 
        description="Learn about our company, our mission, and our commitment to helping businesses achieve financial success."
        imageBg="bg-gradient-to-r from-brand-blue to-brand-green"
      />
    </Layout>
  );
};

export default AboutPage;
