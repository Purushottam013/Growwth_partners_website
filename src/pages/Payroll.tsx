
import { Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/payroll/HeroSection";
import { IntroSection } from "@/components/payroll/IntroSection";
import { ServicesSection } from "@/components/payroll/ServicesSection";
import { TrustedSection } from "@/components/accounting/TrustedSection";
import { CtaSection } from "@/components/accounting/CtaSection";
import { AboutTestimonials } from "@/components/about/AboutTestimonials";
import { useCountry } from "@/contexts/CountryContext";
import { Seo } from "@/components/Seo";

const PayrollPage = () => {
  const { country } = useCountry();

  // Redirect non-Singapore users to their respective home pages
  if (country === 'uae') {
    return (
      <>
        <Seo
          title="Payroll Services UAE | Growwth Partners"
          description="Professional payroll management for UAE businesses. Ensure compliance with UAE labor laws while we handle your payroll processing efficiently."
          canonical={`${window.location.origin}/payroll-services-in-uae`}
        />
        <Navigate to="/uae" replace />
      </>
    );
  }

  if (country === 'australia') {
    return (
      <>
        <Seo
          title="Australian Payroll Services | Growwth Partners"
          description="Comprehensive payroll solutions for Australian businesses. Stay compliant with Australian payroll regulations while focusing on your core business."
          canonical={`${window.location.origin}/payroll-services-in-australia`}
        />
        <Navigate to="/australia" replace />
      </>
    );
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What payroll services do you offer in Singapore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer comprehensive payroll processing, CPF compliance, tax filing, employee onboarding, and monthly payroll reports for Singapore businesses."
      }
    },{
      "@type": "Question",
      "name": "How do you ensure CPF compliance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our team stays updated with CPF regulations and ensures accurate calculations, timely submissions, and proper record-keeping for all employees."
      }
    },{
      "@type": "Question",
      "name": "Can you handle payroll for foreign employees?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we manage payroll for both local and foreign employees, ensuring compliance with work permit conditions and tax obligations."
      }
    }]
  };

  return (
    <Layout>
      <Seo
        title="Payroll Services in Singapore | Expert CPF & Tax Compliance | Growwth Partners"
        description="Streamline your Singapore payroll with expert CPF compliance, tax filing, and employee management. Trusted by 500+ businesses for accurate, timely payroll processing."
        schema={organizationSchema}
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
        <CtaSection />
        <AboutTestimonials />
      </motion.div>
    </Layout>
  );
};

export default PayrollPage;
