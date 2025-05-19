
import { Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/partTimeCFO/HeroSection";
import FinancialInsights from "@/components/partTimeCFO/FinancialInsights";
import ServiceOverview from "@/components/partTimeCFO/ServiceOverview";
import WorkProcess from "@/components/partTimeCFO/WorkProcess";
import ExpertForm from "@/components/partTimeCFO/ExpertForm";
import CaseStudySection from "@/components/partTimeCFO/CaseStudySection";
import { ContactTestimonials } from "@/components/contact/ContactTestimonials";
import CTASection from "@/components/partTimeCFO/CTASection";
import FAQAccordion from "@/components/partTimeCFO/FAQAccordion";
import { useCountry } from "@/contexts/CountryContext";
import { Seo } from "@/components/Seo";

const FractionalCFOPage = () => {
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
        title="Part Time CFO Services in Singapore | Growwth Partners"
        description="Get strategic guidance and real results with part-time CFO, finance strategy, and fractional leadership services for Singapore's high-growth companies."
      />
       <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <HeroSection/>
        <FinancialInsights/>
        <ServiceOverview/>
        <WorkProcess/>
        <CaseStudySection/>
        <ContactTestimonials/>
        <CTASection/>
        <FAQAccordion/>
      </motion.div>
    </Layout>
  );
};

export default FractionalCFOPage;
