
import { useEffect } from "react";
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
import { useLocation } from "react-router-dom";

const FoodTechCaseStudy = () => {
  const location = useLocation();

  useEffect(() => {
    // If there's a hash in the URL (e.g., #challenges)
    if (location.hash) {
      // Get the element with the corresponding ID
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // Wait a brief moment for the page to fully render
        setTimeout(() => {
          // Scroll to the element with smooth scrolling
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      // If no hash, scroll to top of page
      window.scrollTo(0, 0);
    }
  }, [location]);

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
