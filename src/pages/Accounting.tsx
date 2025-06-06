
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
import { SeoOptimizer } from "@/components/SeoOptimizer";
import { useSeoOptimization } from "@/hooks/useSeoOptimization";

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
  
  const seoData = useSeoOptimization({
    service: "accounting",
    location,
    title: `Professional Accounting Services in ${location} | Growwth Partners`,
    description: `Expert accounting services in ${location}. Professional financial reporting, tax compliance, and bookkeeping solutions for startups and SMEs. Get started today.`,
    keywords: ["accounting services", "financial reporting", "tax compliance", location.toLowerCase(), "bookkeeping", "growwth partners"]
  });

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

  const staticContentData = {
    heading: `Professional Accounting Services in ${location} - Growwth Partners`,
    features: [
      `Expert accounting services for businesses in ${location}`,
      "Comprehensive financial reporting and analysis",
      "Tax compliance and regulatory support",
      "Monthly financial statements and bookkeeping",
      "Cash flow management and forecasting",
      "Budget planning and variance analysis",
      "Audit preparation and support",
      "XERO and QuickBooks implementation",
      "Real-time financial dashboards and reporting"
    ],
    additionalContent: `Our accounting services in ${location} are designed to help businesses maintain accurate financial records, ensure compliance with local regulations, and make informed financial decisions. We work with startups, SMEs, and established businesses across various industries.`
  };

  return (
    <Layout>
      <SeoOptimizer
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        schema={accountingSchema}
        staticContent={staticContentData}
        content={`Professional accounting services in ${location} including financial reporting, tax compliance, bookkeeping, and cash flow management for businesses of all sizes.`}
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
