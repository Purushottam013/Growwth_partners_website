
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { PlaceholderContent } from "@/components/PlaceholderContent";
import { HeroSection } from "@/components/partTimeCFO/HeroSection";
import FinancialInsights from "@/components/partTimeCFO/FinancialInsights";
import ServiceOverview from "@/components/partTimeCFO/ServiceOverview";
import WorkProcess from "@/components/partTimeCFO/WorkProcess";
import ExpertForm from "@/components/partTimeCFO/ExpertForm";
import ExpertArticles from "@/components/partTimeCFO/ExpertArticle";
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
        <ExpertArticles/>
        <CTASection/>
        <FAQAccordion/>
      </motion.div>
    </Layout>
  );
};

export default FractionalCFOPage;
