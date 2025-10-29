
import { Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/taxation/HeroSection";
import { ComplianceSection } from "@/components/taxation/ComplianceSection";
import { ServiceStagesSection } from "@/components/taxation/ServiceStagesSection";
import { ProcessSection } from "@/components/taxation/ProcessSection";
import { TrustedSection } from "@/components/accounting/TrustedSection";
import { CtaSection } from "@/components/accounting/CtaSection";
import { ContactTestimonials } from "@/components/contact/ContactTestimonials";
import { FaqSection } from "@/components/taxation/FaqSection";
import { ExpertBlogSection } from "@/components/taxation/ExpertBlogSection";
import { motion } from "framer-motion";
import { useCountry } from "@/contexts/CountryContext";
import SEOhelper from "@/components/SEOhelper";

const TaxationPage = () => {
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
      "name": "What is tax compliance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tax compliance involves ensuring that a company adheres to all tax laws and regulations, including accurate reporting and timely payment of taxes."
      }
    },{
      "@type": "Question",
      "name": "Why is thorough financial review important for tax compliance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A thorough financial review ensures all financial statements are accurate, identifying any discrepancies or errors that could affect tax calculations and compliance."
      }
    },{
      "@type": "Question",
      "name": "How does Growwth Partners ensure transparency in tax calculations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We link financials with tax workings, providing a clear trail from income to expenses to tax payable, ensuring you understand how we arrived at each number."
      }
    }],
    "areaServed": "Singapore, UAE, Australia",
    "serviceType": "taxation compliance Services",
    contactPoint: {
      "@type": "ContactPoint",
      email: "jd@growwthpartners.com",
      telephone: "+65 8893 0720",
      contactType: "Business Service",
    },
    address: {
        "@type": "PostalAddress",
        streetAddress: "65 Chulia Street",
        addressLocality: "Singapore",
        addressRegion: "#46-00 OCBC Centre, Singapore 049513",
        postalCode: "049513",
        addressCountry: "SG",
      },
  };
  
  return (
    <Layout>
      <SEOhelper
        title="Taxation & Compliance Services in Singapore | Growwth Partners"
        description="Professional taxation and compliance services in Singapore for startups & SMEs. Stay compliant and scale confidently with Growwth Partners' expert support."
        keywords="singapore taxation, tax compliance, corporate tax, gst filing"
        canonicalUrl="https://growwthpartners.com/taxation/"
        structuredData={organizationSchema}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <HeroSection />
        <ComplianceSection />
        <ServiceStagesSection />
        <ProcessSection />
        <TrustedSection />
        <CtaSection />
        <ContactTestimonials />
        <FaqSection />
        <ExpertBlogSection />
      </motion.div>
    </Layout>
  );
};

export default TaxationPage;
