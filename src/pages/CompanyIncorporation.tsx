
import { Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/companyincorporation/HeroSection";
import { ExpandBusinessSection } from "@/components/companyincorporation/ExpandBusinessSection";
import { EasyStepsSection } from "@/components/companyincorporation/EasyStepsSection";
import { ServicesSection } from "@/components/companyincorporation/ServicesSection";
import { TrustedSection } from "@/components/accounting/TrustedSection";
import { AboutTestimonials } from "@/components/about/AboutTestimonials";
import { FaqSection } from "@/components/companyincorporation/FaqSection";
import { CaseStudySection } from "@/components/companyincorporation/CaseStudySection";
import { ExpertBlogSection } from "@/components/corporatesecretary/ExpertBlogSection";
import LaunchJourneySection from "@/components/companyincorporation/LaunchJourneySection";
import { useCountry } from "@/contexts/CountryContext";
import { Seo } from "@/components/Seo";

const CompanyIncorporationPage = () => {
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
        title="Company Incorporation in Singapore | Growwth Partners"
        description="Launch your Singapore company with hassle-free incorporation services from industry leaders. Full compliance, smooth process, effective results."
      />
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
