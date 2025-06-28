
import { Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/payroll/HeroSection";
import { IntroSection } from "@/components/payroll/IntroSection";
import { ServicesSection } from "@/components/payroll/ServicesSection";
import { TrustedSection } from "@/components/accounting/TrustedSection";
import { AboutTestimonials } from "@/components/about/AboutTestimonials";
import { motion } from "framer-motion";
import { useCountry } from "@/contexts/CountryContext";
import SEOhelper from "@/components/SEOhelper";

const PayrollPage = () => {
  const { country } = useCountry();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Payroll Services in Singapore",
    "description": "Affordable and easy payroll services designed for small businesses",
    "provider": {
      "@type": "Organization",
      "name": "Growwth Partners",
      "url": "https://growwthpartners.com"
    },
    "areaServed": "Singapore, UAE, Australia",
    "serviceType": "Accounting Services"
  };

  // Redirect non-Singapore users to their respective home pages
  if (country === 'uae') {
    return <Navigate to="/uae" replace />;
  }

  if (country === 'australia') {
    return <Navigate to="/australia" replace />;
  }


  return (
    <Layout>
       <SEOhelper
        title="Expert Payroll Services in Singapore for Startups | Growwth Partners"
        description="Affordable and easy payroll services designed for small businesses. Simplify tax compliance and pay your team effortlessly with Growwth partnres."
        keywords="small business payroll, payroll for small business, affordable payroll, small business tax, easy payroll"
        canonicalUrl="https://growwthpartners.com/payroll-services-in-singapore/"
        structuredData={organizationSchema}
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
