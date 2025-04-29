
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { DataDrivenHero } from "@/components/case-studies/DataDrivenHero";
import { DataDrivenOverview } from "@/components/case-studies/DataDrivenOverview";
import { DataDrivenAchievements } from "@/components/case-studies/DataDrivenAchievements";
import { DataDrivenGoals } from "@/components/case-studies/DataDrivenGoals";
import { DataDrivenChallenges } from "@/components/case-studies/DataDrivenChallenges";
import { DataDrivenResults } from "@/components/case-studies/DataDrivenResults";
import { DataDrivenRole } from "@/components/case-studies/DataDrivenRole";
import { DataDrivenTakeaways } from "@/components/case-studies/DataDrivenTakeaways";
import { CaseStudyCta } from "@/components/case-studies/CaseStudyCta";
import { motion } from "framer-motion";

const DataDrivenSuccessCaseStudy = () => {
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
        <DataDrivenHero />
        <DataDrivenOverview />
        <DataDrivenAchievements />
        <DataDrivenGoals />
        <DataDrivenChallenges />
        <DataDrivenResults />
        <DataDrivenRole />
        <DataDrivenTakeaways />
        <CaseStudyCta />
      </motion.div>
    </Layout>
  );
};

export default DataDrivenSuccessCaseStudy;
