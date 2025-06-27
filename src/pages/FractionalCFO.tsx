
import { Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/partTimeCFO/HeroSection";
import FinancialInsights from "@/components/partTimeCFO/FinancialInsights";
import ServiceOverview from "@/components/partTimeCFO/ServiceOverview";
import WorkProcess from "@/components/partTimeCFO/WorkProcess";
import ExpertForm from "@/components/partTimeCFO/ExpertForm";
import CaseStudySection from "@/components/partTimeCFO/CaseStudySection";
import { ContactTestimonials } from "@/components/contact/ContactTestimonials";
import CTASection from "@/components/partTimeCFO/CTASection";
import FAQAccordion from "@/components/partTimeCFO/FAQAccordion";
import { useCountry } from "@/contexts/CountryContext";
import SEOhelper from "@/components/SEOhelper";
import { useSeoOptimization } from "@/hooks/useSeoOptimization";

const FractionalCFOPage = () => {
  const { country } = useCountry();

  // Redirect non-Singapore users to their respective home pages
  if (country === 'uae') {
    return <Navigate to="/uae" replace />;
  }

  if (country === 'australia') {
    return <Navigate to="/australia" replace />;
  }

  const seoData = useSeoOptimization({
    service: "part-time-cfo",
    content: "Get strategic guidance and real results with part-time CFO, finance strategy, and fractional leadership services for Singapore's high-growth companies.",
    title: "Expert Fractional & Virtual CFO in Singapore",
    description: "Hire top-rated fractional, part-time, or virtual CFO services in Singapore. Boost financial strategy and performance without full-time costs.",
    keywords: ["virtual cfo", "singapore cfo", "financial strategy", "fractional leadership"]
  });

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What's the difference between a part-time CFO and a full-time CFO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A part-time or fractional CFO offers strategic financial expertise without the cost of a full-time hire. You only pay for the support you need—making it ideal for startups and SMEs."
      }
    },{
      "@type": "Question",
      "name": "Is a CFO necessary if I already have an accountant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Accountants handle compliance and historical data. CFOs look forward—helping with planning, strategy, investor relations, and growth decisions."
      }
    },{
      "@type": "Question",
      "name": "Are your virtual CFOs based in Singapore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our CFOs have deep local expertise and work with companies across Singapore and Southeast Asia."
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
        <HeroSection/>
        <FinancialInsights/>
        <ServiceOverview/>
        <WorkProcess/>
        <CaseStudySection/>
        <ContactTestimonials/>
        <CTASection/>
        <FAQAccordion/>
      </motion.div>
    </Layout>
  );
};

export default FractionalCFOPage;
