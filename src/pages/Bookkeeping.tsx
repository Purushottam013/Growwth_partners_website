
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/bookkeeping/HeroSection";
import { TrustedSection } from "@/components/bookkeeping/TrustedSection";
import { ServicesSection } from "@/components/bookkeeping/ServicesSection";
import { BestServicesSection } from "@/components/bookkeeping/BestServicesSection";
import { HowWeWorkSection } from "@/components/bookkeeping/HowWeWorkSection";
import { CaseStudySection } from "@/components/bookkeeping/CaseStudySection";
import { ExpertBlogSection } from "@/components/bookkeeping/ExpertBlogSection";
import { CtaSection } from "@/components/bookkeeping/CtaSection";
import { motion } from "framer-motion";
import { useCountry } from "@/contexts/CountryContext";
import { SeoOptimizer } from "@/components/SeoOptimizer";
import { useSeoOptimization } from "@/hooks/useSeoOptimization";

const BookkeepingPage = () => {
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
    service: "bookkeeping",
    location,
    title: `Professional Bookkeeping Services in ${location} | Growwth Partners`,
    description: `Expert bookkeeping services in ${location}. Accurate financial records, transaction management, and real-time reporting for small businesses and startups.`,
    keywords: ["bookkeeping services", "financial records", "transaction management", location.toLowerCase(), "small business accounting", "growwth partners"]
  });

  const bookkeepingSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Bookkeeping Services in ${location}`,
    "description": `Professional bookkeeping and financial record management services for businesses in ${location}`,
    "provider": {
      "@type": "Organization",
      "name": "Growwth Partners",
      "url": "https://growwthpartners.com"
    },
    "areaServed": location,
    "serviceType": "Bookkeeping Services"
  };

  const staticContentData = {
    heading: `Expert Bookkeeping Services in ${location} - Growwth Partners`,
    features: [
      `Professional bookkeeping services for businesses in ${location}`,
      "Daily transaction recording and categorization",
      "Accounts payable and receivable management",
      "Bank reconciliation and cash flow tracking",
      "Monthly financial statements preparation",
      "Tax preparation support and documentation",
      "Cloud-based accounting software setup",
      "Real-time financial reporting and dashboards",
      "Compliance with local accounting standards"
    ],
    additionalContent: `Our bookkeeping services in ${location} help businesses maintain accurate financial records, track expenses, and ensure compliance with local regulations. We use modern cloud-based tools to provide real-time access to your financial data.`
  };

  return (
    <Layout>
      <SeoOptimizer
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        schema={bookkeepingSchema}
        staticContent={staticContentData}
        content={`Professional bookkeeping services in ${location} including transaction recording, financial statements, bank reconciliation, and compliance support for small businesses and startups.`}
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <TrustedSection />
        <ServicesSection />
        <BestServicesSection />
        <HowWeWorkSection />
        <CaseStudySection />
        <ExpertBlogSection />
        <CtaSection />
      </motion.div>
    </Layout>
  );
};

export default BookkeepingPage;
