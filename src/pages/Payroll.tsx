
import { Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/payroll/HeroSection";
import { IntroSection } from "@/components/payroll/IntroSection";
import { ServicesSection } from "@/components/payroll/ServicesSection";
import { TrustedSection } from "@/components/accounting/TrustedSection";
import { AboutTestimonials } from "@/components/about/AboutTestimonials";
import { motion } from "framer-motion";
import { useCountry } from "@/contexts/CountryContext";
import { SeoOptimizer } from "@/components/SeoOptimizer";
import { useSeoOptimization } from "@/hooks/useSeoOptimization";

const PayrollPage = () => {
  const { country } = useCountry();

  // Redirect non-Singapore users to their respective home pages
  if (country === 'uae') {
    return <Navigate to="/uae" replace />;
  }

  if (country === 'australia') {
    return <Navigate to="/australia" replace />;
  }

  // Use the SEO optimization hook
  const seoData = useSeoOptimization({
    service: "payroll",
    content: "Payroll Services in Singapore – Streamlined Operations and Satisfied Employees. Let our experts handle your payroll intricacies. Experience seamless, error-free payroll management with us.",
    title: "Payroll Services in Singapore | Growwth Partners",
    description: "Professional payroll services in Singapore for startups & SMEs. Streamlined operations, compliance, and satisfied employees with Growwth Partners' expert support.",
    keywords: ["payroll outsourcing", "singapore payroll", "employee management", "tax compliance"]
  });

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What are the benefits of outsourcing payroll services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Outsourcing payroll saves time, ensures compliance, reduces errors, and provides expert support for tax and statutory requirements."
      }
    },{
      "@type": "Question",
      "name": "How does payroll outsourcing work in Singapore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We handle all aspects of payroll processing including salary calculations, CPF contributions, tax filings, and statutory compliance according to Singapore regulations."
      }
    }]
  };

  return (
    <Layout>
      <SeoOptimizer
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        schema={organizationSchema}
        autoGenerate={false}
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <HeroSection />
        <IntroSection />
        <ServicesSection />
        <TrustedSection />
        <AboutTestimonials />
      </motion.div>
    </Layout>
  );
};

export default PayrollPage;
