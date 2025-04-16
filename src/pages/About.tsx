
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

const AboutPage = () => {
  return (
    <Layout>
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
