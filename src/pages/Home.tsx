
import React, { lazy, Suspense } from "react";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { PartnersSection } from "@/components/home/PartnersSection";

// Add framer-motion for animations
import { motion } from "framer-motion";

// Lazy load less critical sections
const TrustedPartnerSection = lazy(() => import("@/components/home/TrustedPartnerSection").then(mod => ({ default: mod.TrustedPartnerSection })));
const ServicesSection = lazy(() => import("@/components/home/ServicesSection").then(mod => ({ default: mod.ServicesSection })));
const AchievementsSection = lazy(() => import("@/components/home/AchievementsSection").then(mod => ({ default: mod.AchievementsSection })));
const TestimonialsSection = lazy(() => import("@/components/home/TestimonialsSection").then(mod => ({ default: mod.TestimonialsSection })));
const CtaSection = lazy(() => import("@/components/home/CtaSection").then(mod => ({ default: mod.CtaSection })));

// Fallback component for suspense
const SectionLoader = () => (
  <div className="py-12 flex justify-center items-center">
    <div className="animate-pulse bg-gray-200 h-48 w-full max-w-4xl rounded-lg"></div>
  </div>
);

const HomePage = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden" // Prevent any horizontal overflow
      >
        {/* Critical path rendering - load immediately */}
        <HeroSection />
        <PartnersSection />
        
        {/* Lazily load non-critical sections */}
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
      </motion.div>
    </Layout>
  );
};

export default HomePage;
