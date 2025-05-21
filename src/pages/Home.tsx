
import React, { lazy, Suspense, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { AnimatedElement } from "@/components/ui/animated-element";
import { TrustedSection } from "@/components/accounting/TrustedSection";
import { Seo } from "@/components/Seo";

// More effective code splitting with smaller chunks
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
      }, { timeout: 2000 });
      
      return () => window.cancelIdleCallback(idleCallback);
    }
  }, []);

  return (
    <Layout>
     <Seo 
        title="Growwth Partners - Financial & Accounting Services"
        description="Expert financial, accounting, and bookkeeping services. Get started with our CFO, finance and accounting solutions to manage and grow your business efficiently."
      />
      
      <AnimatedElement
        animation="fade-in"
        duration={0.5}
        className="overflow-hidden"
      >
        {/* Critical path rendering - load immediately */}
        <HeroSection />
        <TrustedSection />
        
        {/* Lazily load non-critical sections with improved suspense boundary */}
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
