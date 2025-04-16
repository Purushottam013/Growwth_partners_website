
import { Layout } from "@/components/Layout";
import { AboutHero } from "@/components/about/AboutHero";
import { TrustedSection } from "@/components/about/TrustedSection";
import { WhyChooseUs } from "@/components/about/WhyChooseUs";
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
      </motion.div>
    </Layout>
  );
};

export default AboutPage;
