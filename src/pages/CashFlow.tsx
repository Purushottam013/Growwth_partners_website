
import { Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/cashflow/HeroSection";
import { PrecisionSection } from "@/components/cashflow/PrecisionSection";
import { BenefitsSection } from "@/components/cashflow/BenefitsSection";
import { WhyChooseSection } from "@/components/cashflow/WhyChooseSection";
import { TrustedSection } from "@/components/accounting/TrustedSection";
import { CtaSection } from "@/components/accounting/CtaSection";
import { AboutTestimonials } from "@/components/about/AboutTestimonials";
import { FaqSection } from "@/components/cashflow/FaqSection";
import { CaseStudySection } from "@/components/cashflow/CaseStudySection";
import { ExpertBlogSection } from "@/components/cashflow/ExpertBlogSection";
import { motion } from "framer-motion";
import { useCountry } from "@/contexts/CountryContext";
import SEOhelper from "@/components/SEOhelper";
import { useSeoOptimization } from "@/hooks/useSeoOptimization";

const CashFlowPage = () => {
  const { country } = useCountry();

  // Redirect non-Singapore users to their respective home pages
  if (country === 'uae') {
    return <Navigate to="/uae" replace />;
  }

  if (country === 'australia') {
    return <Navigate to="/australia" replace />;
  }

  const seoData = useSeoOptimization({
    service: "cash-flow",
    content: "Take control of your cash flow and future-proof your business with flexible modelling services tailored for Singaporean SMEs & startups.",
    title: "Cash Flow Modelling Services in Singapore | Growwth Partners",
    description: "Take control of your cash flow and future-proof your business with flexible modelling services tailored for Singaporean SMEs & startups.",
    keywords: ["singapore cash flow modelling", "financial modeling", "business forecasting", "cash flow management"]
  });

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What exactly is financial modeling?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Financial modeling is the process of creating a summary of a company's costs and income in the form of a spreadsheet that can be used to calculate the impact of future events or decisions."
      }
    },{
      "@type": "Question",
      "name": "How much does your financial modeling service cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our financial modeling services are customized to each client's specific needs and business complexity. We offer tailored pricing based on the scope, depth, and timeframe of your project. Contact us for a personalized quote."
      }
    },{
      "@type": "Question",
      "name": "Can you customize financial models for specific industries?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We specialize in creating industry-specific financial models that reflect the unique dynamics, metrics, and KPIs relevant to your sector. Our team has experience across multiple industries including tech, healthcare, retail, manufacturing, and more."
      }
    }]
  };

  return (
    <Layout>
      <SEOhelper
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords.join(", ")}
        structuredData={organizationSchema}
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <HeroSection />
        <PrecisionSection />
        <BenefitsSection />
        <WhyChooseSection />
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

export default CashFlowPage;
