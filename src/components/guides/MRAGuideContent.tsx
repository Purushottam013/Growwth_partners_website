
import { Guide } from "@/data/guides";
import { GuideHero } from "./GuideHero";
import { KeyTakeawaysSection } from "./KeyTakeawaysSection";
import { GuideFAQSection } from "./GuideFAQSection";
import { GuideSection, Section } from "./GuideSection";
import { GuideCtaSection } from "./GuideCtaSection";

interface MRAGuideContentProps {
  guide: Guide;
  onContactClick: () => void;
}

export const MRAGuideContent = ({ guide, onContactClick }: MRAGuideContentProps) => {
  const isSpecialGuide = true;

  return (
    <>
      {/* Hero Section */}
      <GuideHero guide={guide} />

      {/* Key Takeaways Section */}
      <KeyTakeawaysSection guide={guide} isSpecialGuide={isSpecialGuide} />

      {/* Introduction Section */}
      {guide.sections && guide.sections[0] && (
        <GuideSection section={guide.sections[0]} />
      )}

      {/* What is MRA Grant Section */}
      {guide.sections && guide.sections[1] && (
        <GuideSection section={guide.sections[1] as Section} />
      )}

      {/* Activities Eligible for MRA Grant */}
      {guide.sections && guide.sections[2] && (
        <GuideSection section={guide.sections[2] as Section} />
      )}

      {/* First FAQ Section */}
      {guide.faqs && guide.faqs.length > 0 && (
        <GuideFAQSection 
          faqs={guide.faqs} 
          startIndex={0} 
          endIndex={5}
        />
      )}

      {/* Process of MRA Grant Application */}
      {guide.sections && guide.sections[3] && (
        <GuideSection section={guide.sections[3] as Section} />
      )}

      {/* Second FAQ Section */}
      {guide.faqs && guide.faqs.length > 5 && (
        <GuideFAQSection 
          faqs={guide.faqs} 
          startIndex={5} 
          endIndex={10}
        />
      )}

      {/* Common Mistakes Section */}
      {guide.sections && guide.sections[4] && (
        <GuideSection section={guide.sections[4]} />
      )}

      {/* Summary Section */}
      {guide.sections && guide.sections[5] && (
        <GuideSection section={guide.sections[5]} />
      )}

      {/* Book a Free Call Section */}
      <GuideCtaSection onContactClick={onContactClick} />
    </>
  );
};
