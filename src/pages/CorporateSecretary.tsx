
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/corporatesecretary/HeroSection";
import { EffortlessSection } from "@/components/corporatesecretary/EffortlessSection";
import { HowWeWorkSection } from "@/components/corporatesecretary/HowWeWorkSection";
import { ServicesSection } from "@/components/corporatesecretary/ServicesSection";
import { TrustedSection } from "@/components/accounting/TrustedSection";
import { AboutTestimonials } from "@/components/about/AboutTestimonials";
import { FaqSection } from "@/components/corporatesecretary/FaqSection";
import { CaseStudySection } from "@/components/corporatesecretary/CaseStudySection";
import { ExpertBlogSection } from "@/components/corporatesecretary/ExpertBlogSection";

const CorporateSecretaryPage = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <HeroSection />
        <EffortlessSection />
        <HowWeWorkSection />
        <ServicesSection />
        <TrustedSection />
        <AboutTestimonials />
        <FaqSection />
        <CaseStudySection />
        <ExpertBlogSection />
      </motion.div>
    </Layout>
  );
};

export default CorporateSecretaryPage;
