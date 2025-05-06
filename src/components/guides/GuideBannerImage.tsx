
import { Guide } from "@/data/guides";
import { AnimatedElement } from "@/components/ui/animated-element";

interface GuideBannerImageProps {
  guide: Guide;
  isSpecialGuide: boolean;
}

export const GuideBannerImage = ({ guide, isSpecialGuide }: GuideBannerImageProps) => {
  if (isSpecialGuide || !guide.Image) {
    return null;
  }

  return (
    <AnimatedElement 
      animation="fade-in" 
      className="mb-12 rounded-lg overflow-hidden"
      duration={0.8}
    >
      <img
        src={guide.Image}
        alt={guide.Title}
        className="w-full h-auto"
        width={1200}
        height={630}
      />
    </AnimatedElement>
  );
};
