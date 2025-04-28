
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { OnlineConsumerGoodsHero } from "@/components/case-studies/OnlineConsumerGoodsHero";
import { OnlineConsumerGoodsClientOverview } from "@/components/case-studies/OnlineConsumerGoodsClientOverview";
import { OnlineConsumerGoodsGoalsObjectives } from "@/components/case-studies/OnlineConsumerGoodsGoalsObjectives";
import { OnlineConsumerGoodsKeyAchievements } from "@/components/case-studies/OnlineConsumerGoodsKeyAchievements";
import { OnlineConsumerGoodsChallenges } from "@/components/case-studies/OnlineConsumerGoodsChallenges";
import { OnlineConsumerGoodsRole } from "@/components/case-studies/OnlineConsumerGoodsRole";
import { OnlineConsumerGoodsTakeaways } from "@/components/case-studies/OnlineConsumerGoodsTakeaways";
import { CaseStudyCta } from "@/components/case-studies/CaseStudyCta";
import { motion } from "framer-motion";

const OnlineConsumerGoodsCaseStudy = () => {
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
        <OnlineConsumerGoodsHero />
        <OnlineConsumerGoodsClientOverview />
        <OnlineConsumerGoodsGoalsObjectives />
        <OnlineConsumerGoodsKeyAchievements />
        <OnlineConsumerGoodsChallenges />
        <OnlineConsumerGoodsRole />
        <OnlineConsumerGoodsTakeaways />
        <CaseStudyCta />
      </motion.div>
    </Layout>
  );
};

export default OnlineConsumerGoodsCaseStudy;
