import React, { lazy, Suspense, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { AnimatedElement } from "@/components/ui/animated-element";
import { TrustedSection } from "@/components/accounting/TrustedSection";
import SEOhelper from "@/components/SEOhelper";

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

// Minimal fallback for better mobile experience
const SectionLoader = () => (
  <div className="py-4 flex justify-center items-center">
    <div className="w-6 h-6 border-2 border-brand-orange border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Index = () => {
  // Aggressive preloading for mobile performance
  useEffect(() => {
    // Start preloading immediately on mobile
    const preloadComponents = () => {
      import("@/components/home/ServicesSection");
      import("@/components/home/AchievementsSection");
    };
    
    // Immediate preload for better mobile experience
    preloadComponents();
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
    description: "Expert financial, accounting, and bookkeeping services for businesses in Singapore, UAE, and Australia.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Singapore"
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "English"
    }
  };

  const staticContentData = {
    heading: "Growwth Partners - Expert Financial & Accounting Services",
    features: [
      "Professional accounting services in Singapore, UAE, and Australia",
      "Expert CFO and financial consulting for startups and SMEs",
      "Comprehensive bookkeeping and payroll management",
      "Company incorporation and corporate secretary services",
      "Award-winning financial advisory team with 15+ years experience",
      "95% client retention rate with $50M+ managed annually",
      "Customized financial solutions for business growth"
    ],
    additionalContent: "At Growwth Partners, we provide more than just accounting and bookkeeping services. Our customized financial solutions ensure that each client receives personalized attention and expert advice tailored to their unique business needs."
  };

  return (
    <Layout>
      <SEOhelper 
        title="Growwth Partners - Financial & Accounting Services"
        description="Expert financial, accounting, and bookkeeping services. Get started with our CFO, finance and accounting solutions to manage and grow your business efficiently."
        structuredData={organizationSchema}
        keywords="financial services, accounting singapore, cfo services, bookkeeping, business growth"
      />
      
      <AnimatedElement
        animation="fade-in"
        duration={0.2}
        className="overflow-hidden"
      >
        {/* Critical content - loads immediately */}
        <HeroSection />
        <TrustedSection />
        
        {/* Lazy loaded sections with minimal loading indicators */}
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

export default Index;
