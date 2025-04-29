
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { GamingIndustryHero } from "@/components/case-studies/GamingIndustryHero";
import { GamingClientOverview } from "@/components/case-studies/GamingClientOverview";
import { GamingGoalsObjectives } from "@/components/case-studies/GamingGoalsObjectives";
import { GamingKeyAchievements } from "@/components/case-studies/GamingKeyAchievements";
import { GamingClientChallenges } from "@/components/case-studies/GamingClientChallenges";
import { GamingOpportunities } from "@/components/case-studies/GamingOpportunities";
import { GamingGrowwthRole } from "@/components/case-studies/GamingGrowwthRole";
import { GamingKeyTakeaways } from "@/components/case-studies/GamingKeyTakeaways";
import { CaseStudyCta } from "@/components/case-studies/CaseStudyCta";
import { motion } from "framer-motion";

const GamingIndustryCaseStudy = () => {
  useEffect(() => {
    // Always scroll to top of page when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <GamingIndustryHero />
        <GamingClientOverview />
        <GamingGoalsObjectives />
        <GamingKeyAchievements />
        <GamingClientChallenges />
        <GamingOpportunities />
        <GamingGrowwthRole />
        <GamingKeyTakeaways />
        <CaseStudyCta />
      </motion.div>
    </Layout>
  );
};

export default GamingIndustryCaseStudy;
