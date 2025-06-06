
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
import { SEOManager } from "@/components/SEOManager";
import { usePageSEO } from "@/hooks/usePageSEO";

const AboutPage = () => {
  const { country } = useCountry();

  // Redirect non-Singapore users to their respective home pages
  if (country === 'uae') {
    return <Navigate to="/uae/" replace />;
  }

  if (country === 'australia') {
    return <Navigate to="/australia/" replace />;
  }

  const seoData = usePageSEO({
    baseTitle: "About Growwth Partners - Award-Winning Financial Experts",
    baseDescription: "Learn about Growwth Partners' team of award-winning financial consultants delivering strategic growth, accounting, and CFO services across Singapore and beyond.",
    keywords: [
      "about growwth partners", 
      "financial experts", 
      "award winning accountants", 
      "financial consultants", 
      "cfo services team", 
      "accounting professionals", 
      "business growth experts",
      "singapore financial firm"
    ],
    pageType: "about"
  });

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Growwth Partners",
    "description": seoData.description,
    "url": seoData.canonical,
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
      },
      "expertise": [
        "Financial Consulting",
        "Accounting Services", 
        "CFO Services",
        "Business Growth Strategy",
        "Tax Compliance",
        "Financial Reporting"
      ]
    }
  };

  const staticContentData = {
    heading: `About Growwth Partners - Leading Financial Experts in ${seoData.locationName}`,
    content: `Growwth Partners was founded with the vision of providing world-class financial advisory services to businesses in ${seoData.locationName} and beyond. Our team combines deep technical expertise with innovative approaches to help businesses achieve sustainable growth and financial success. We serve startups, SMEs, and established businesses with comprehensive financial solutions.`,
    features: [
      `15+ years of combined experience in financial consulting in ${seoData.locationName}`,
      "Award-winning team of certified accountants and CFOs with proven track record",
      "95% client retention rate demonstrating exceptional service quality",
      "Specialized expertise in startup and SME financial management and growth strategies", 
      "Comprehensive financial solutions from basic accounting to strategic CFO services",
      "Industry recognition for excellence in financial advisory and business consulting",
      "Multi-disciplinary team with diverse industry experience across various sectors",
      "Innovative approach to financial management using cutting-edge technology and methodologies"
    ]
  };

  return (
    <Layout>
      <SEOManager
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonical={seoData.canonical}
        schema={aboutSchema}
        staticContent={staticContentData}
        openGraph={{
          title: seoData.title,
          description: seoData.description,
          type: "website"
        }}
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
