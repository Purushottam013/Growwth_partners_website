
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/companyincorporation/HeroSection";
import { ExpandBusinessSection } from "@/components/companyincorporation/ExpandBusinessSection";
import { EasyStepsSection } from "@/components/companyincorporation/EasyStepsSection";
import { ServicesSection } from "@/components/companyincorporation/ServicesSection";
import { TrustedSection } from "@/components/accounting/TrustedSection";
import { AboutTestimonials } from "@/components/about/AboutTestimonials";
import { FaqSection } from "@/components/companyincorporation/FaqSection";
import { CaseStudySection } from "@/components/corporatesecretary/CaseStudySection";
import { ExpertBlogSection } from "@/components/corporatesecretary/ExpertBlogSection";
import LaunchJourneySection from "@/components/companyincorporation/LaunchJourneySection";

const CompanyIncorporationPage = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <HeroSection />
        <ExpandBusinessSection />
        <EasyStepsSection />
        <ServicesSection />
        <TrustedSection />

        <LaunchJourneySection />

        <AboutTestimonials />
        <FaqSection />
        <CaseStudySection />
        <ExpertBlogSection />
      </motion.div>
    </Layout>
  );
};

export default CompanyIncorporationPage;
