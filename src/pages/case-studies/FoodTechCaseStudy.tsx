
import { Layout } from "@/components/Layout";
import { CaseStudyFoodTechHero } from "@/components/case-studies/CaseStudyFoodTechHero";
import { FoodTechClientOverview } from "@/components/case-studies/FoodTechClientOverview";
import { FoodTechGoalsObjectives } from "@/components/case-studies/FoodTechGoalsObjectives";
import { FoodTechKeyAchievements } from "@/components/case-studies/FoodTechKeyAchievements";
import { FoodTechChallenges } from "@/components/case-studies/FoodTechChallenges";
import { FoodTechGrowwthRole } from "@/components/case-studies/FoodTechGrowwthRole";
import { FoodTechTimeline } from "@/components/case-studies/FoodTechTimeline";
import { FoodTechKeyTakeaways } from "@/components/case-studies/FoodTechKeyTakeaways";
import { CaseStudyCta } from "@/components/case-studies/CaseStudyCta";
import { motion } from "framer-motion";

const FoodTechCaseStudy = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <CaseStudyFoodTechHero />
        <FoodTechClientOverview />
        <FoodTechGoalsObjectives />
        <FoodTechKeyAchievements />
        <FoodTechChallenges />
        <FoodTechGrowwthRole />
        <FoodTechTimeline />
        <FoodTechKeyTakeaways />
        <CaseStudyCta />
      </motion.div>
    </Layout>
  );
};

export default FoodTechCaseStudy;
