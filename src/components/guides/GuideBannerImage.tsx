
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Guide } from "@/data/guides";

interface GuideBannerImageProps {
  guide: Guide;
  isSpecialGuide: boolean;
}

export const GuideBannerImage = ({ guide, isSpecialGuide }: GuideBannerImageProps) => {
  if (isSpecialGuide || !guide.Image) {
    return null;
  }

  return (
    <div className="mb-12 rounded-lg overflow-hidden">
      <OptimizedImage
        src={guide.Image}
        alt={guide.Title}
        className="w-full h-auto"
        fallbackSrc="/placeholder.svg"
        priority
        width={1200}
        height={630}
      />
    </div>
  );
};
