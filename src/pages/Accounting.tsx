
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/accounting/HeroSection";
import { TrustedSection } from "@/components/accounting/TrustedSection";
import { ServicesSection } from "@/components/accounting/ServicesSection";
import { HowWeWorkSection } from "@/components/accounting/HowWeWorkSection";
import { EndToEndSection } from "@/components/accounting/EndToEndSection";
import { CaseStudySection } from "@/components/accounting/CaseStudySection";
import { ExpertBlogSection } from "@/components/accounting/ExpertBlogSection";
import { FaqSection } from "@/components/accounting/FaqSection";
import { CtaSection } from "@/components/accounting/CtaSection";
import { motion } from "framer-motion";
import { useCountry } from "@/contexts/CountryContext";
import SEOhelper from "@/components/SEOhelper";

const AccountingPage = () => {
  const { country } = useCountry();
  
  const getLocationName = () => {
    switch (country) {
      case 'uae': return 'UAE';
      case 'australia': return 'Australia';
      default: return 'Singapore';
    }
  };

  const location = getLocationName();

  const accountingSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Accounting Services in ${location}`,
    "description": `Professional accounting and financial reporting services for businesses in ${location}`,
    "provider": {
      "@type": "Organization",
      "name": "Growwth Partners",
      "url": "https://growwthpartners.com"
    },
    "areaServed": location,
    "serviceType": "Accounting Services"
  };

  return (
    <Layout>
      <SEOhelper
        title={`Professional Accounting Services in ${location} | Growwth Partners`}
        description={`Expert accounting services in ${location}. Professional financial reporting, tax compliance, and bookkeeping solutions for startups and SMEs. Get started today.`}
        keywords={`accounting services, financial reporting, tax compliance, ${location.toLowerCase()}, bookkeeping, growwth partners`}
        structuredData={accountingSchema}
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <TrustedSection />
        <ServicesSection />
        <HowWeWorkSection />
        <EndToEndSection />
        <CaseStudySection />
        <ExpertBlogSection />
        <FaqSection />
        <CtaSection />
      </motion.div>
    </Layout>
  );
};

export default AccountingPage;
