
import { OptimizedImage } from "@/components/ui/optimized-image";

// Extended Section type with optional image property
export interface Section {
  title: string;
  content: string;
  image?: string;
}

interface GuideSectionProps {
  section: Section;
  className?: string;
}

export const GuideSection = ({ section, className = "mb-12" }: GuideSectionProps) => {
  return (
    <div className={`prose max-w-none ${className}`}>
      <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: section.content }} />
      
      {section.image && (
        <div className="flex justify-center my-6">
          <OptimizedImage
            src={section.image}
            alt={section.title || "Section image"}
            className="w-[81%] h-auto rounded-lg shadow-lg"
            fallbackSrc="/placeholder.svg"
          />
        </div>
      )}
    </div>
  );
};
