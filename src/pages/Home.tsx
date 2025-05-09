
import React, { lazy, Suspense, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { AnimatedElement } from "@/components/ui/animated-element";
import { TrustedSection } from "@/components/accounting/TrustedSection";

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
  // Preload critical components
  useEffect(() => {
    const preloadComponents = async () => {
      try {
        // Silently preload key components
        await import("@/components/home/ServicesSection");
        await import("@/components/home/AchievementsSection");
      } catch (error) {
        console.error("Error preloading components:", error);
      }
    };

    // Use requestIdleCallback for non-blocking preloading
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(preloadComponents, { timeout: 2000 });
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      setTimeout(preloadComponents, 1000);
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
        <TrustedSection />
        
        {/* Lazily load non-critical sections with error handling */}
        <ErrorBoundaryLight>
          <Suspense fallback={<SectionLoader />}>
            <ServicesSection />
          </Suspense>
        </ErrorBoundaryLight>
        
        <ErrorBoundaryLight>
          <Suspense fallback={<SectionLoader />}>
            <AchievementsSection />
          </Suspense>
        </ErrorBoundaryLight>
        
        <ErrorBoundaryLight>
          <Suspense fallback={<SectionLoader />}>
            <TestimonialsSection />
          </Suspense>
        </ErrorBoundaryLight>
        
        <ErrorBoundaryLight>
          <Suspense fallback={<SectionLoader />}>
            <CtaSection />
          </Suspense>
        </ErrorBoundaryLight>
      </AnimatedElement>
    </Layout>
  );
};

// Lightweight error boundary for individual sections
const ErrorBoundaryLight = ({ children }) => {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const errorHandler = (event) => {
      event.preventDefault();
      setHasError(true);
      console.error('Error caught by ErrorBoundaryLight:', event.error);
    };

    window.addEventListener('error', errorHandler);
    return () => window.removeEventListener('error', errorHandler);
  }, []);

  if (hasError) {
    return (
      <div className="py-10 text-center">
        <p className="text-gray-500">This section couldn't be loaded</p>
      </div>
    );
  }

  return children;
};

export default HomePage;
