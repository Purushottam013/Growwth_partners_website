
import { AnimatedElement } from "@/components/ui/animated-element";
import { OptimizedImage } from "@/components/ui/optimized-image";

export const DataDrivenHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-brand-dark to-brand-dark/90 text-white py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src="/lovable-uploads/7d860845-9712-4572-8fd0-54a5aaa42712.png"
          alt="Data-Driven Business Growth"
          className="w-full h-full object-cover opacity-20"
          width={1920}
          height={1080}
          priority
        />
      </div>
      <div className="container-custom relative z-10">
        <AnimatedElement
          animation="fade-in"
          duration={0.6}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1 bg-brand-orange/20 text-brand-orange rounded-full text-sm font-semibold mb-6">
            Fractional CFO Case Study
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Achieving Remarkable Growth: A Data-Driven Success Story
          </h1>
        </AnimatedElement>
      </div>
    </section>
  );
};
