import { Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/accounting/HeroSection";
import { EndToEndSection } from "@/components/accounting/EndToEndSection";
import { HowWeWorkSection } from "@/components/accounting/HowWeWorkSection";
import { ServicesSection } from "@/components/accounting/ServicesSection";
import { CtaSection } from "@/components/accounting/CtaSection";
import { FaqSection } from "@/components/accounting/FaqSection";
import { CaseStudySection } from "@/components/accounting/CaseStudySection";
import { ExpertBlogSection } from "@/components/accounting/ExpertBlogSection";
import { AboutTestimonials } from "@/components/about/AboutTestimonials";
import { TrustedSection } from "@/components/accounting/TrustedSection";
import { motion } from "framer-motion";
import { useCountry } from "@/contexts/CountryContext";
import { Seo } from "@/components/Seo";

const AccountingPage = () => {
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
        title="Accounting Services in Singapore | Growwth Partners"
        description="Discover top-tier accounting solutions with Growwth Partners in Singapore. We provide accurate, efficient, and scalable financial services tailored to your business."
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <HeroSection />
        <EndToEndSection />
        <HowWeWorkSection />
        <ServicesSection />
        <CtaSection />
        <TrustedSection />
        <AboutTestimonials />
        <FaqSection />
        <CaseStudySection />
        <ExpertBlogSection />
      </motion.div>
    </Layout>
  );
};

export default AccountingPage;
