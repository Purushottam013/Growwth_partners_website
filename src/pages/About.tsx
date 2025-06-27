
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
import SEOhelper from "@/components/SEOhelper";

const AboutPage = () => {
  const { country } = useCountry();

  // Redirect non-Singapore users to their respective home pages
  if (country === 'uae') {
    return <Navigate to="/uae/" replace />;
  }

  if (country === 'australia') {
    return <Navigate to="/australia/" replace />;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Growwth Partners",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
      "mainEntity": {
      "@type": "Organization",
      "name": "https://growwthpartners.com",
      "description": "Expert financial, accounting, and bookkeeping services. Get started with our CFO, finance and accounting solutions to manage and grow your business efficiently"
    }
    }
  

  return (
    <Layout>
      <SEOhelper
        title="About Growwth Partners - Leading Financial Experts in Singapore"
        description="Award-winning financial consultants specializing in accounting, CFO services, and business growth strategies."
        keywords="about growwth partners,financial experts, award winning accountants, financial consultants, cfo services team, accounting professionals, business growth experts,singapore financial firm"
        canonicalUrl="https://growwthpartners.com/about"
        structuredData={structuredData}
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
