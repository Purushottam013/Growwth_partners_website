
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const KeyAchievements = () => {
  const achievements = [
    {
      title: "Path to Profitability",
      description: "Collaborated with the CEO to implement a clear path to profitability, resulting in sustainable financial growth."
    },
    {
      title: "Working Capital Mastery",
      description: "Optimised working capital, ensuring smooth day-to-day operations and stability in cash flow."
    },
    {
      title: "Efficient Consolidation",
      description: "Assisted the CEO in implementing strategies for faster collection of accounts receivable, reducing outstanding payments and ensuring timely revenue recognition."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="heading-md text-brand-dark">Key Achievements</h3>
          <div className="w-24 h-1 bg-brand-orange mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div className="rounded-full bg-brand-orange/10 w-12 h-12 flex items-center justify-center mb-4">
                <Check className="text-brand-orange" size={24} />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-brand-dark">{achievement.title}</h4>
              <p className="text-gray-600">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
