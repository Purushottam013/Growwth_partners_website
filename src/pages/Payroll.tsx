
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/payroll/HeroSection";
import { IntroSection } from "@/components/payroll/IntroSection";
import { ServicesSection } from "@/components/payroll/ServicesSection";
import { TrustedSection } from "@/components/accounting/TrustedSection";
import { CtaSection } from "@/components/accounting/CtaSection";
import { AboutTestimonials } from "@/components/about/AboutTestimonials";
import { FaqSection } from "@/components/accounting/FaqSection";
import { CaseStudySection } from "@/components/bookkeeping/CaseStudySection";
import { ExpertBlogSection } from "@/components/accounting/ExpertBlogSection";
import { motion } from "framer-motion";

const PayrollPage = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <IntroSection />
        <ServicesSection />
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

export default PayrollPage;
