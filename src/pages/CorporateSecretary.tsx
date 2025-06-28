
import { Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/corporatesecretary/HeroSection";
import { EffortlessSection } from "@/components/corporatesecretary/EffortlessSection";
import { HowWeWorkSection } from "@/components/corporatesecretary/HowWeWorkSection";
import { ServicesSection } from "@/components/corporatesecretary/ServicesSection";
import { TrustedSection } from "@/components/accounting/TrustedSection";
import { AboutTestimonials } from "@/components/about/AboutTestimonials";
import { FaqSection } from "@/components/corporatesecretary/FaqSection";
import { CaseStudySection } from "@/components/corporatesecretary/CaseStudySection";
import { ExpertBlogSection } from "@/components/corporatesecretary/ExpertBlogSection";
import { useCountry } from "@/contexts/CountryContext";
import SEOhelper from "@/components/SEOhelper";

const CorporateSecretaryPage = () => {
  const { country } = useCountry();

  // Redirect non-Singapore users to their respective home pages
  if (country === 'uae') {
    return <Navigate to="/uae" replace />;
  }

  if (country === 'australia') {
    return <Navigate to="/australia" replace />;
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What is the scope of services of the company secretary?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When an individual gets into company secretarial services, he/she needs to manage meetings, facilitate and take care of financial transactions, ensure legal compliance, manage risks and offer legal advice and assistance."
      }
    },{
      "@type": "Question",
      "name": "How much does a Company Secretary cost in Singapore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An in-house company secretary costs between SGD 60,000 to SGD 100,000 annually. On the other hand, if an organization decides to outsource these services, it eventually costs around SGD 300 to SGD 1,500."
      }
    },{
      "@type": "Question",
      "name": "How do I change my company secretary in Singapore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you want to change your company secretary in Singapore and opt for other company secretarial services in Singapore, the new secretary needs to sign the Form 45B."
      }
    }]
  };

  return (
    <Layout>
      <SEOhelper
        title="Corporate Secretary Services in Singapore | Growwth Partners"
        description="Outsource your company secretarial functions to Singapore's trusted experts. Growwth Partners offers full compliance, filing, and advisory services."
        keywords="singapore corporate secretary, company compliance, statutory filing, acra filing"
        canonicalUrl="https://growwthpartners.com/corporate-secretary-services-in-singapore/"
        structuredData={organizationSchema}
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <HeroSection />
        <EffortlessSection />
        <HowWeWorkSection />
        <ServicesSection />
        <TrustedSection />
        <AboutTestimonials />
        <FaqSection />
        <CaseStudySection />
        <ExpertBlogSection />
      </motion.div>
    </Layout>
  );
};

export default CorporateSecretaryPage;
