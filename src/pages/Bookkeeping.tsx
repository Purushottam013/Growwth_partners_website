
import { Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/bookkeeping/HeroSection";
import { BestServicesSection } from "@/components/bookkeeping/BestServicesSection";
import { HowWeWorkSection } from "@/components/bookkeeping/HowWeWorkSection";
import { ServicesSection } from "@/components/bookkeeping/ServicesSection";
import { CtaSection } from "@/components/bookkeeping/CtaSection";
import { TrustedSection } from "@/components/accounting/TrustedSection";
import { AboutTestimonials } from "@/components/about/AboutTestimonials";
import { CaseStudySection } from "@/components/bookkeeping/CaseStudySection";
import { ExpertBlogSection } from "@/components/bookkeeping/ExpertBlogSection";
import { motion } from "framer-motion";
import { useCountry } from "@/contexts/CountryContext";
import { Seo } from "@/components/Seo";

const BookkeepingPage = () => {
  const { country } = useCountry();

  // Redirect non-Singapore users to their respective home pages
  if (country === 'uae') {
    return <Navigate to="/uae" replace />;
  }

  if (country === 'australia') {
    return <Navigate to="/australia" replace />;
  }

  return (
    <Layout>
      <Seo
        title="Bookkeeping Services in Singapore | Growwth Partners"
        description="Professional bookkeeping services in Singapore for startups & SMEs. Stay compliant and scale confidently with Growwth Partners' expert support."
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <HeroSection />
        <BestServicesSection />
        <HowWeWorkSection />
        <ServicesSection />
        <TrustedSection />
        <CtaSection />
        <AboutTestimonials />
        <CaseStudySection />
        <ExpertBlogSection />
      </motion.div>
    </Layout>
  );
};

export default BookkeepingPage;
