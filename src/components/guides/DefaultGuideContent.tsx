
import { Guide } from "@/data/guides";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { GuideHero } from "./GuideHero";
import { KeyTakeawaysSection } from "./KeyTakeawaysSection";
import { GuideBannerImage } from "./GuideBannerImage";
import { GuideFAQSection } from "./GuideFAQSection";
import { GuideSection, Section } from "./GuideSection";

interface DefaultGuideContentProps {
  guide: Guide;
  onContactClick: () => void;
}

export const DefaultGuideContent = ({ guide, onContactClick }: DefaultGuideContentProps) => {
  const isSpecialGuide = false;

  return (
    <>
      {/* Hero Section */}
      <GuideHero guide={guide} />

      {/* Banner Image */}
      <GuideBannerImage guide={guide} isSpecialGuide={isSpecialGuide} />

      {/* Key Takeaways Section */}
      <KeyTakeawaysSection guide={guide} isSpecialGuide={isSpecialGuide} />

      {/* Content Sections */}
      {guide.sections && guide.sections.length > 0 && (
        <div className="mb-16 space-y-12">
          {guide.sections.map((section, index) => (
            <GuideSection key={index} section={section as Section} />
          ))}
        </div>
      )}

      {/* FAQ Section */}
      {guide.faqs && guide.faqs.length > 0 && (
        <GuideFAQSection faqs={guide.faqs} />
      )}

      {/* CTA Section */}
      <div className="bg-gray-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Need Help With Your Business?</h2>
        <p className="text-gray-600 mb-6">
          Our team of experts is ready to provide you with personalized advice and solutions.
        </p>
        <Button onClick={onContactClick} className="bg-primary hover:bg-primary/90">
          Schedule A Consultation
        </Button>
      </div>
    </>
  );
};
