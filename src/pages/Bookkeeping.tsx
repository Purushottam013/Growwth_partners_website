
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
import SeoOptimizer from "@/components/SeoOptimizer";

const BookkeepingPage = () => {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Professional Bookkeeping Services in Singapore`,
    "serviceType": "Bookkeeping Services",
    "provider": {
      "@type": "Organization",
      "name": "Growwth Partners",
      "url": "https://growwthpartners.com",
      "description": "Expert financial, accounting, and bookkeeping services. Get started with our CFO, finance and accounting solutions to manage and grow your business efficiently"
    },
  };



  return (
    <Layout>
      <SeoOptimizer
        title="Expert Bookkeeping Services in Singapore for Startups"
        description="Affordable bookkeeping for startups & SMEs in Singapore. Get expert virtual, online, and local bookkeeper services tailored to your business needs."
        keywords="bookkeeping services, financial records, transaction management, small business accounting, financial reporting, accounts payable, accounts receivable, bank reconciliation"
        canonicalUrl="https://growwthpartners.com/bookkeeping-services-in-singapore/"
        structuredData={structuredData}
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
