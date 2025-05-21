
import { Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/taxation/HeroSection";
import { ComplianceSection } from "@/components/taxation/ComplianceSection";
import { ServiceStagesSection } from "@/components/taxation/ServiceStagesSection";
import { ProcessSection } from "@/components/taxation/ProcessSection";
import { TrustedSection } from "@/components/accounting/TrustedSection";
import { CtaSection } from "@/components/accounting/CtaSection";
import { ContactTestimonials } from "@/components/contact/ContactTestimonials";
import { FaqSection } from "@/components/taxation/FaqSection";
import { ExpertBlogSection } from "@/components/taxation/ExpertBlogSection";
import { motion } from "framer-motion";
import { useCountry } from "@/contexts/CountryContext";
import { Seo } from "@/components/Seo";

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
         <Seo
              title="Taxation & Compliance Services in Singapore | Growwth Partners"
              description="Professional bookkeeping services in Singapore for startups & SMEs. Stay compliant and scale confidently with Growwth Partners' expert support."
      />  

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
