
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
  <div className="py-8 flex justify-center items-center">
    <div className="w-8 h-8 border-4 border-brand-orange border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const HomePage = () => {
  // Preload critical images and components for faster navigation
  useEffect(() => {
    // Preload hero image immediately
    const heroImage = new Image();
    heroImage.src = "/lovable-uploads/2e981926-f1aa-4635-a064-f9520c758a7f.png";
    
    // Preload components after initial render during idle time
    if ('requestIdleCallback' in window) {
      const idleCallback = window.requestIdleCallback(() => {
        // Silently preload the next critical components
        import("@/components/home/ServicesSection");
        import("@/components/home/AchievementsSection");
      }, { timeout: 1000 });
      
      return () => window.cancelIdleCallback(idleCallback);
    } else {
      // Fallback for browsers without requestIdleCallback
      const timeout = setTimeout(() => {
        import("@/components/home/ServicesSection");
        import("@/components/home/AchievementsSection");
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, []);

  const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Growwth Partners",
  url: "https://growwthpartners.com",
  logo: "https://growwthpartners.com/lovable-uploads/5f2bc1cf-2bab-424d-8245-eb52af504603.png",
  sameAs: [
    "https://www.linkedin.com/company/growwth-partners/",
    "https://www.youtube.com/@GrowwthPartners",
  ],
};

  return (
    <Layout>
     <Seo 
        title="Growwth Partners - Financial & Accounting Services"
        description="Expert financial, accounting, and bookkeeping services. Get started with our CFO, finance and accounting solutions to manage and grow your business efficiently."
        schema={organizationSchema}
      />
      
      <AnimatedElement
        animation="fade-in"
        duration={0.3}
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
