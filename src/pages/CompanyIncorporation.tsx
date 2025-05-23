import { Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/companyincorporation/HeroSection";
import { ExpandBusinessSection } from "@/components/companyincorporation/ExpandBusinessSection";
import { EasyStepsSection } from "@/components/companyincorporation/EasyStepsSection";
import { ServicesSection } from "@/components/companyincorporation/ServicesSection";
import { TrustedSection } from "@/components/accounting/TrustedSection";
import { AboutTestimonials } from "@/components/about/AboutTestimonials";
import { FaqSection } from "@/components/companyincorporation/FaqSection";
import { CaseStudySection } from "@/components/companyincorporation/CaseStudySection";
import { ExpertBlogSection } from "@/components/corporatesecretary/ExpertBlogSection";
import LaunchJourneySection from "@/components/companyincorporation/LaunchJourneySection";
import { useCountry } from "@/contexts/CountryContext";
import { Seo } from "@/components/Seo";

const CompanyIncorporationPage = () => {
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
    "name": "What is the price of registering a corporation in Singapore?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The standard fee for registering a corporation in Singapore is nearly $315."
    }
  },{
    "@type": "Question",
    "name": "Why should your company incorporate in Singapore?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Several individuals choose to incorporate their companies in Singapore because this place has an attractive tax system. Here, no tax on capital gains is levied, which makes Singapore a preferable choice for entrepreneurs and business people."
    }
  },{
    "@type": "Question",
    "name": "Does a Singaporean business need a director who resides there?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, at least one director who resides in Singapore must be present in a Singaporean business. This is evident according to Singapore's Companies Act."
    }
  }]
}

  return (
    <Layout>
      <Seo
        title="Company Incorporation in Singapore | Growwth Partners"
        description="Launch your Singapore company with hassle-free incorporation services from industry leaders. Full compliance, smooth process, effective results."
        schema={organizationSchema}
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <HeroSection />
        <ExpandBusinessSection />
        <EasyStepsSection />
        <ServicesSection />
        <TrustedSection />
        <LaunchJourneySection />
        <AboutTestimonials />
        <FaqSection />
        <CaseStudySection />
        <ExpertBlogSection />
      </motion.div>
    </Layout>
  );
};

export default CompanyIncorporationPage;
