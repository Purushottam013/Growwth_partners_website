
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

const FractionalCFOPage = () => {
  return (
    <Layout>
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
