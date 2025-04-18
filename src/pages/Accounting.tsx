
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/accounting/HeroSection";
import { EndToEndSection } from "@/components/accounting/EndToEndSection";
import { HowWeWorkSection } from "@/components/accounting/HowWeWorkSection";
import { ServicesSection } from "@/components/accounting/ServicesSection";
import { CtaSection } from "@/components/accounting/CtaSection";
import { FaqSection } from "@/components/accounting/FaqSection";
import { CaseStudySection } from "@/components/accounting/CaseStudySection";
import { ExpertBlogSection } from "@/components/accounting/ExpertBlogSection";
import { motion } from "framer-motion";

const AccountingPage = () => {
  return (
    <Layout>
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
        <FaqSection />
        <CaseStudySection />
        <ExpertBlogSection />
      </motion.div>
    </Layout>
  );
};

export default AccountingPage;
