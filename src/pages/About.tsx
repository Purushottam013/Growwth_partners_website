
import { Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { AboutHero } from "@/components/about/AboutHero";
import { TrustedSection } from "@/components/about/TrustedSection";
import { WhyChooseUs } from "@/components/about/WhyChooseUs";
import { HowWeWork } from "@/components/about/HowWeWork";
import { FounderSection } from "@/components/about/FounderSection";
import { TeamSection } from "@/components/about/TeamSection";
import { IndustryExperience } from "@/components/about/IndustryExperience";
import { AboutTestimonials } from "@/components/about/AboutTestimonials";
import { ExpertInsights } from "@/components/about/ExpertInsights";
import { motion } from "framer-motion";
import { useCountry } from "@/contexts/CountryContext";
import { SeoOptimizer } from "@/components/SeoOptimizer";

const AboutPage = () => {
  const { country } = useCountry();

  // Redirect non-Singapore users to their respective home pages
  if (country === 'uae') {
    return <Navigate to="/uae/" replace />;
  }

  if (country === 'australia') {
    return <Navigate to="/australia/" replace />;
  }

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Growwth Partners",
    "description": "Learn about Growwth Partners' team of award-winning financial consultants delivering strategic growth, accounting, and CFO services across Singapore and beyond.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Growwth Partners",
      "url": "https://growwthpartners.com",
      "logo": "https://growwthpartners.com/lovable-uploads/5f2bc1cf-2bab-424d-8245-eb52af504603.png",
      "description": "Award-winning financial consultants specializing in accounting, CFO services, and business growth strategies",
      "foundingDate": "2015",
      "numberOfEmployees": "25-50",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "Singapore"
      }
    }
  };

  const staticContentData = {
    heading: "About Growwth Partners - Award-Winning Financial Experts in Singapore",
    features: [
      "15+ years of combined experience in financial consulting",
      "Award-winning team of certified accountants and CFOs",
      "95% client retention rate with proven track record",
      "Specialized expertise in startup and SME financial management", 
      "Comprehensive financial solutions from accounting to strategic planning",
      "Industry recognition for excellence in financial advisory services",
      "Multi-disciplinary team with diverse industry experience",
      "Innovative approach to financial management and business growth"
    ],
    additionalContent: "Growwth Partners was founded with the vision of providing world-class financial advisory services to businesses in Singapore and beyond. Our team combines deep technical expertise with innovative approaches to help businesses achieve sustainable growth and financial success."
  };

  return (
    <Layout>
      <SeoOptimizer 
        title="About Growwth Partners | Award-Winning Financial Experts in Singapore"
        description="Learn about Growwth Partners' team of award-winning financial consultants delivering strategic growth, accounting, and CFO services across Singapore and beyond."
        keywords={["about growwth partners", "financial experts singapore", "award winning accountants", "singapore financial consultants", "cfo services team", "accounting professionals", "business growth experts"]}
        schema={aboutSchema}
        staticContent={staticContentData}
        content="Discover the story behind Growwth Partners, Singapore's premier financial advisory firm. Our award-winning team of certified accountants, CFOs, and financial consultants brings over 15 years of combined experience to help businesses achieve sustainable growth and financial success."
        priority="high"
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AboutHero />
        <TrustedSection />
        <WhyChooseUs />
        <HowWeWork />
        <FounderSection />
        <TeamSection />
        <IndustryExperience />
        <AboutTestimonials />
        <ExpertInsights />
      </motion.div>
    </Layout>
  );
};

export default AboutPage;
