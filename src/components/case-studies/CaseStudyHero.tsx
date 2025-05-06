
import { AnimatedElement } from "@/components/ui/animated-element";
import { OptimizedImage } from "@/components/ui/optimized-image";

export const CaseStudyHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-brand-dark to-brand-dark/90 text-white py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src="/lovable-uploads/ec498240-208b-4a6f-b5a9-198b859df3b8.png"
          alt="Healthcare Technology"
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
            Healthcare Case Study
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Transforming Patient Engagement In Healthcare Through Better Financial Management And Analysis
          </h1>
        </AnimatedElement>
      </div>
    </section>
  );
};
