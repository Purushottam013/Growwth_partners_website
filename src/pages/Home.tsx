
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { TrustedPartnerSection } from "@/components/home/TrustedPartnerSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { AchievementsSection } from "@/components/home/AchievementsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CtaSection } from "@/components/home/CtaSection";

// Add framer-motion for animations
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-x-hidden" // Prevent horizontal overflow
      >
        <HeroSection />
        <PartnersSection />
        <TrustedPartnerSection />
        <ServicesSection />
        <AchievementsSection />
        <TestimonialsSection />
        <CtaSection />
      </motion.div>
    </Layout>
  );
};

export default HomePage;
