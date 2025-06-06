
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
import { SEOManager } from "@/components/SEOManager";
import { usePageSEO } from "@/hooks/usePageSEO";

const BookkeepingPage = () => {
  const seoData = usePageSEO({
    baseTitle: "Professional Bookkeeping Services",
    baseDescription: "Expert bookkeeping services for accurate financial records, transaction management, and real-time reporting for small businesses and startups.",
    keywords: [
      "bookkeeping services", 
      "financial records", 
      "transaction management", 
      "small business accounting", 
      "financial reporting",
      "accounts payable",
      "accounts receivable",
      "bank reconciliation"
    ],
    service: "bookkeeping",
    pageType: "service"
  });

  const bookkeepingSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Professional Bookkeeping Services in ${seoData.locationName}`,
    "description": seoData.description,
    "provider": {
      "@type": "Organization",
      "name": "Growwth Partners",
      "url": "https://growwthpartners.com"
    },
    "areaServed": seoData.locationName,
    "serviceType": "Bookkeeping Services",
    "offers": {
      "@type": "Offer",
      "description": "Comprehensive bookkeeping solutions for businesses"
    }
  };

  const staticContentData = {
    heading: `Expert Bookkeeping Services in ${seoData.locationName} - Growwth Partners`,
    content: `Our professional bookkeeping services in ${seoData.locationName} help businesses maintain accurate financial records, track expenses, and ensure compliance with local regulations. We use modern cloud-based tools to provide real-time access to your financial data and support your business growth.`,
    features: [
      `Professional bookkeeping services tailored for businesses in ${seoData.locationName}`,
      "Daily transaction recording and categorization with accuracy guarantee",
      "Comprehensive accounts payable and receivable management",
      "Regular bank reconciliation and cash flow tracking",
      "Monthly financial statements preparation and analysis",
      "Tax preparation support and proper documentation maintenance",
      "Cloud-based accounting software setup and training",
      "Real-time financial reporting and customized dashboards",
      `Full compliance with ${seoData.locationName} accounting standards and regulations`
    ]
  };

  return (
    <Layout>
      <SEOManager
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonical={seoData.canonical}
        schema={bookkeepingSchema}
        staticContent={staticContentData}
        openGraph={{
          title: seoData.title,
          description: seoData.description,
          type: "website"
        }}
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
