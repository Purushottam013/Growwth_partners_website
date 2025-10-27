
import { Guide } from "@/data/guides";
import { AnimatedElement } from "@/components/ui/animated-element";
import { OptimizedImage } from "@/components/ui/optimized-image";

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
      <OptimizedImage
        src={guide.Image}
        alt={guide.Title}
        className="w-full h-auto"
        width={1200}
        height={630}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
      />
    </AnimatedElement>
  );
};
