
import { OptimizedImage } from "@/components/ui/optimized-image";
import { AnimatedElement } from "@/components/ui/animated-element";

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
    <AnimatedElement 
      animation="slide-up"
      className={`prose max-w-none ${className}`} 
      delay={0.2}
      duration={0.5}
    >
      <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: section.content }} />
      
      {section.image && (
        <div className="flex justify-center my-6">
          <OptimizedImage
            src={section.image}
            alt={section.title || "Section image"}
            className="w-[81%] h-auto rounded-lg shadow-lg"
            fallbackSrc="/placeholder.svg"
            width={800}
            height={450}
            lazyBoundary="200px"
            sizes="(max-width: 640px) 95vw, (max-width: 1024px) 81vw, 648px"
          />
        </div>
      )}
    </AnimatedElement>
  );
};
