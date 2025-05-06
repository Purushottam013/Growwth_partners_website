
import { Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/taxation/HeroSection";
import { ComplianceSection } from "@/components/taxation/ComplianceSection";
import { ServiceStagesSection } from "@/components/taxation/ServiceStagesSection";
import { ProcessSection } from "@/components/taxation/ProcessSection";
import { TrustedSection } from "@/components/bookkeeping/TrustedSection";
import { CtaSection } from "@/components/accounting/CtaSection";
import { ContactTestimonials } from "@/components/contact/ContactTestimonials";
import { FaqSection } from "@/components/taxation/FaqSection";
import { ExpertBlogSection } from "@/components/taxation/ExpertBlogSection";
import { motion } from "framer-motion";
import { useCountry } from "@/contexts/CountryContext";

const TaxationPage = () => {
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
        <ComplianceSection />
        <ServiceStagesSection />
        <ProcessSection />
        <TrustedSection />
        <CtaSection />
        <ContactTestimonials />
        <FaqSection />
        <ExpertBlogSection />
      </motion.div>
    </Layout>
  );
};

export default TaxationPage;
