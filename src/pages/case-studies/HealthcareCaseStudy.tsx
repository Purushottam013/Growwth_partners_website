
import { Layout } from "@/components/Layout";
import { CaseStudyHero } from "@/components/case-studies/CaseStudyHero";
import { ClientOverview } from "@/components/case-studies/ClientOverview";
import { GoalsObjectives } from "@/components/case-studies/GoalsObjectives";
import { KeyAchievements } from "@/components/case-studies/KeyAchievements";
import { ClientChallenges } from "@/components/case-studies/ClientChallenges";
import { GrowwthRole } from "@/components/case-studies/GrowwthRole";
import { KeyTakeaways } from "@/components/case-studies/KeyTakeaways";
import { CaseStudyCta } from "@/components/case-studies/CaseStudyCta";
import { motion } from "framer-motion";

const HealthcareCaseStudy = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <CaseStudyHero />
        <ClientOverview />
        <GoalsObjectives />
        <KeyAchievements />
        <ClientChallenges />
        <GrowwthRole />
        <KeyTakeaways />
        <CaseStudyCta />
      </motion.div>
    </Layout>
  );
};

export default HealthcareCaseStudy;
