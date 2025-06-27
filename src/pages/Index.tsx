import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { AchievementsSection } from "@/components/home/AchievementsSection";
import { TrustedPartnerSection } from "@/components/home/TrustedPartnerSection";
import { CtaSection } from "@/components/home/CtaSection";
import { motion } from "framer-motion";
import SEOhelper from "@/components/SEOhelper";

const Index = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Growwth Partners",
    "url": "https://growwthpartners.com",
    "logo": "https://growwthpartners.com/lovable-uploads/5f2bc1cf-2bab-424d-8245-eb52af504603.png",
    "description": "Leading financial services provider offering accounting, payroll, CFO services, and business solutions for startups and SMEs in Singapore.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "SG",
      "addressLocality": "Singapore"
    },
    "sameAs": [
      "https://www.linkedin.com/company/growwth-partners"
    ],
    "service": [
      {
        "@type": "Service",
        "name": "Accounting Services",
        "description": "Professional accounting and bookkeeping services for businesses"
      },
      {
        "@type": "Service", 
        "name": "Fractional CFO Services",
        "description": "Part-time CFO expertise for strategic financial guidance"
      },
      {
        "@type": "Service",
        "name": "Payroll Services", 
        "description": "Complete payroll management and compliance solutions"
      }
    ]
  };

  return (
    <Layout>
      <SEOhelper
        title="Professional Financial Services for Startups & SMEs | Growwth Partners"
        description="Expert accounting, payroll, fractional CFO, and business advisory services in Singapore. Trusted by 500+ businesses for reliable financial solutions and strategic growth support."
        keywords="singapore financial services, accounting services, payroll outsourcing, fractional cfo, business advisory, startup accounting"
        canonicalUrl={`${window.location.origin}/`}
        structuredData={organizationSchema}
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <HeroSection />
        <PartnersSection />
        <ServicesSection />
        <TestimonialsSection />
        <AchievementsSection />
        <TrustedPartnerSection />
        <CtaSection />
      </motion.div>
    </Layout>
  );
};

export default Index;
