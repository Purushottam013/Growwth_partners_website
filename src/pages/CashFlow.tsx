
import { Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/cashflow/HeroSection";
import { PrecisionSection } from "@/components/cashflow/PrecisionSection";
import { BenefitsSection } from "@/components/cashflow/BenefitsSection";
import { WhyChooseSection } from "@/components/cashflow/WhyChooseSection";
import { TrustedSection } from "@/components/accounting/TrustedSection";
import { CtaSection } from "@/components/accounting/CtaSection";
import { AboutTestimonials } from "@/components/about/AboutTestimonials";
import { FaqSection } from "@/components/cashflow/FaqSection";
import { CaseStudySection } from "@/components/cashflow/CaseStudySection";
import { ExpertBlogSection } from "@/components/cashflow/ExpertBlogSection";
import { motion } from "framer-motion";
import { useCountry } from "@/contexts/CountryContext";

const CashFlowPage = () => {
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <HeroSection />
        <PrecisionSection />
        <BenefitsSection />
        <WhyChooseSection />
        <TrustedSection />
        <CtaSection />
        <AboutTestimonials />
        <FaqSection />
        <CaseStudySection />
        <ExpertBlogSection />
      </motion.div>
    </Layout>
  );
};

export default CashFlowPage;
