import { Guide } from "@/data/guides";
import { GuideHero } from "./GuideHero";
import { KeyTakeawaysSection } from "./KeyTakeawaysSection";
import { GuideFAQSection } from "./GuideFAQSection";
import { GuideSection } from "./GuideSection";
import { GuideCtaSection } from "./GuideCtaSection";

interface BookkeepingGuideContentProps {
  guide: Guide;
  onContactClick: () => void;
}

export const BookkeepingGuideContent = ({ guide, onContactClick }: BookkeepingGuideContentProps) => {
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

      {/* What is Bookkeeping Section */}
      {guide.sections && guide.sections[1] && (
        <GuideSection section={guide.sections[1]} />
      )}

      {/* First FAQ Section */}
      {guide.faqs && guide.faqs.length > 0 && (
        <GuideFAQSection 
          faqs={guide.faqs} 
          startIndex={0} 
          endIndex={4}
        />
      )}

      {/* Importance of Bookkeeping Section */}
      {guide.sections && guide.sections[2] && (
        <GuideSection section={guide.sections[2]} />
      )}

      {/* Basic Bookkeeping Terms Section */}
      {guide.sections && guide.sections[3] && (
        <GuideSection section={guide.sections[3]} />
      )}

      {/* Second FAQ Section */}
      {guide.faqs && guide.faqs.length > 4 && (
        <GuideFAQSection 
          faqs={guide.faqs} 
          startIndex={4} 
          endIndex={9}
        />
      )}

      {/* Comprehensive Steps Section */}
      {guide.sections && guide.sections[4] && (
        <GuideSection section={guide.sections[4]} />
      )}

      {/* Common Challenges Section */}
      {guide.sections && guide.sections[5] && (
        <GuideSection section={guide.sections[5]} />
      )}

      {/* Third FAQ Section */}
      {guide.faqs && guide.faqs.length > 9 && (
        <GuideFAQSection 
          faqs={guide.faqs} 
          startIndex={9} 
          endIndex={14}
        />
      )}

      {/* Summary Section */}
      {guide.sections && guide.sections[6] && (
        <GuideSection section={guide.sections[6]} />
      )}

      {/* Book a Free Consultation Section */}
      <GuideCtaSection onContactClick={onContactClick} />
    </>
  );
};
