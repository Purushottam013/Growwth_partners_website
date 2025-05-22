
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Guide } from "@/data/guides";
import { DefaultGuideContent } from "@/components/guides/DefaultGuideContent";
import { BookkeepingGuideContent } from "@/components/guides/BookkeepingGuideContent";
import { MRAGuideContent } from "@/components/guides/MRAGuideContent";
import { Seo } from "@/components/Seo";

interface GuideDetailProps {
  guide: Guide;
  onContactClick: () => void;
}

const GuideDetail = ({ guide, onContactClick }: GuideDetailProps) => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  // Determine which guide content component to use based on the slug
  const renderGuideContent = () => {
    if (guide.slug === "bookkeeping-practices-guide") {
      return <BookkeepingGuideContent guide={guide} onContactClick={onContactClick} />;
    } else if (guide.slug === "mra-grant-singapore") {
      return <MRAGuideContent guide={guide} onContactClick={onContactClick} />;
    } else {
      return <DefaultGuideContent guide={guide} onContactClick={onContactClick} />;
    }
  };

  const isSpecialGuide = guide.slug === "mra-grant-singapore" || guide.slug === "bookkeeping-practices-guide";

  return (
    <Layout>
      <Seo
        title={`${guide.Title} | Growwth Partners`}
        description={guide.Excerpt || "Expert advice and resources from Growwth Partners."}
      />
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className={`mx-auto ${isSpecialGuide ? "w-[90%]" : "max-w-4xl"}`}>
            {renderGuideContent()}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GuideDetail;
