
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/bookkeeping/HeroSection";
import { BestServicesSection } from "@/components/bookkeeping/BestServicesSection";
import { HowWeWorkSection } from "@/components/bookkeeping/HowWeWorkSection";
import { ServicesSection } from "@/components/bookkeeping/ServicesSection";
import { CtaSection } from "@/components/bookkeeping/CtaSection";
import { TrustedSection } from "@/components/accounting/TrustedSection";
import { AboutTestimonials } from "@/components/about/AboutTestimonials";
import { CaseStudySection } from "@/components/bookkeeping/CaseStudySection";
import { ExpertBlogSection } from "@/components/bookkeeping/ExpertBlogSection";
import { motion } from "framer-motion";

const BookkeepingPage = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <HeroSection />
        <BestServicesSection />
        <HowWeWorkSection />
        <ServicesSection />
        <TrustedSection />
        <CtaSection />
        <AboutTestimonials />
        <CaseStudySection />
        <ExpertBlogSection />
      </motion.div>
    </Layout>
  );
};

export default BookkeepingPage;
