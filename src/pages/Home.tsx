
import React, { lazy, Suspense, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { AnimatedElement } from "@/components/ui/animated-element";

// More effective code splitting with smaller chunks
const TrustedPartnerSection = lazy(() => 
  import("@/components/home/TrustedPartnerSection")
    .then(mod => ({ default: mod.TrustedPartnerSection }))
);

const ServicesSection = lazy(() => 
  import("@/components/home/ServicesSection")
    .then(mod => ({ default: mod.ServicesSection }))
);

const AchievementsSection = lazy(() => 
  import("@/components/home/AchievementsSection")
    .then(mod => ({ default: mod.AchievementsSection }))
);

const TestimonialsSection = lazy(() => 
  import("@/components/home/TestimonialsSection")
    .then(mod => ({ default: mod.TestimonialsSection }))
);

const CtaSection = lazy(() => 
  import("@/components/home/CtaSection")
    .then(mod => ({ default: mod.CtaSection }))
);

// Improved fallback component for suspense
const SectionLoader = () => (
  <div className="py-12 flex justify-center items-center">
    <div className="animate-pulse bg-gray-200 h-48 w-full max-w-4xl rounded-lg"></div>
  </div>
);

const HomePage = () => {
  // Preload components for smoother user experience
  useEffect(() => {
    // Preload components after initial render during idle time
    if ('requestIdleCallback' in window) {
      const idleCallback = window.requestIdleCallback(() => {
        // Silently preload the next critical components
        import("@/components/home/ServicesSection");
        import("@/components/home/TrustedPartnerSection");
      }, { timeout: 2000 });
      
      return () => window.cancelIdleCallback(idleCallback);
    }
  }, []);

  return (
    <Layout>
      <AnimatedElement
        animation="fade-in"
        duration={0.5}
        className="overflow-hidden"
      >
        {/* Critical path rendering - load immediately */}
        <HeroSection />
        <PartnersSection />
        
        {/* Lazily load non-critical sections with improved suspense boundary */}
        <Suspense fallback={<SectionLoader />}>
          <TrustedPartnerSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ServicesSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <AchievementsSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <TestimonialsSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <CtaSection />
        </Suspense>
      </AnimatedElement>
    </Layout>
  );
};

export default HomePage;
