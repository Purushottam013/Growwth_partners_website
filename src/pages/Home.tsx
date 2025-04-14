
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { AchievementsSection } from "@/components/home/AchievementsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CtaSection } from "@/components/home/CtaSection";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <PartnersSection />
      <ServicesSection />
      <AchievementsSection />
      <TestimonialsSection />
      <CtaSection />
    </Layout>
  );
};

export default HomePage;
