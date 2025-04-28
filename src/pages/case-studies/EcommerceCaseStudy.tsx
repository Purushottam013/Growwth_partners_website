
import { Layout } from "@/components/Layout";
import { CaseStudyEcommerceHero } from "@/components/case-studies/CaseStudyEcommerceHero";
import { EcommerceClientOverview } from "@/components/case-studies/EcommerceClientOverview";
import { EcommerceGoalsObjectives } from "@/components/case-studies/EcommerceGoalsObjectives";
import { EcommerceKeyAchievements } from "@/components/case-studies/EcommerceKeyAchievements";
import { EcommerceChallenges } from "@/components/case-studies/EcommerceChallenges";
import { EcommerceGrowwthRole } from "@/components/case-studies/EcommerceGrowwthRole";
import { EcommerceKeyTakeaways } from "@/components/case-studies/EcommerceKeyTakeaways";
import { CaseStudyCta } from "@/components/case-studies/CaseStudyCta";
import { motion } from "framer-motion";

const EcommerceCaseStudy = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <CaseStudyEcommerceHero />
        <EcommerceClientOverview />
        <EcommerceGoalsObjectives />
        <EcommerceKeyAchievements />
        <EcommerceChallenges />
        <EcommerceGrowwthRole />
        <EcommerceKeyTakeaways />
        <CaseStudyCta />
      </motion.div>
    </Layout>
  );
};

export default EcommerceCaseStudy;
