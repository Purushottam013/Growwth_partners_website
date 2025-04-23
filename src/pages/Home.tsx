
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { TrustedPartnerSection } from "@/components/home/TrustedPartnerSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { AchievementsSection } from "@/components/home/AchievementsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CtaSection } from "@/components/home/CtaSection";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Add framer-motion for animations
import { motion } from "framer-motion";

const HomePage = () => {
  const navigate = useNavigate();
  
  const handleCreatePost = () => {
    navigate("/admin/blog");
  };
  
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden" // Prevent any horizontal overflow
      >
        <div className="container mx-auto px-4 py-6 flex justify-end">
          <Button 
            onClick={handleCreatePost}
            className="bg-brand-orange hover:bg-brand-orange/90 text-white"
          >
            Create Blog Post
          </Button>
        </div>
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
