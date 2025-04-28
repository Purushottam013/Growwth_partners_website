import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
export const FoodTechKeyAchievements = () => {
  const achievements = [{
    title: "Financial Success",
    items: ["Collaborated with the CEO and investors for a profitable financial plan.", "Improved key metrics with a performance system."]
  }, {
    title: "Working Capital Mastery",
    items: ["Strategically managed working capital.", "Enhanced cash flow and financial reporting."]
  }, {
    title: "Efficient Consolidation",
    items: ["Streamlined financial reporting with automated bookkeeping.", "Ensured accurate EBITDA representation."]
  }];
  return <section className="bg-white py-[60px]">
      <div className="container-custom">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h3 className="heading-md text-brand-dark">Key Achievements</h3>
          <div className="w-24 h-1 bg-brand-orange mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} viewport={{
          once: true
        }} className="bg-white border border-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <div className="rounded-full bg-brand-orange/10 w-12 h-12 flex items-center justify-center mb-4">
                <CheckCircle className="text-brand-orange" size={24} />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-brand-dark">{achievement.title}</h4>
              <ul className="space-y-2">
                {achievement.items.map((item, idx) => <li key={idx} className="flex items-start gap-2">
                    <span className="text-brand-orange font-bold">•</span>
                    <span className="text-gray-600">{item}</span>
                  </li>)}
              </ul>
            </motion.div>)}
        </div>
      </div>
    </section>;
};