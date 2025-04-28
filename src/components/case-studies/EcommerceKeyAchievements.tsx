
import { motion } from "framer-motion";
import { ArrowUp, ArrowRight } from "lucide-react";

export const EcommerceKeyAchievements = () => {
  const achievements = [
    {
      percentage: "48%",
      title: "Increase in Conversion Rate",
      description: "Through optimized sales funnels and improved customer journey mapping"
    },
    {
      percentage: "65%",
      title: "Growth in Monthly Revenue",
      description: "Resulting from enhanced analytics and data-driven decision making"
    },
    {
      percentage: "32%",
      title: "Reduction in Customer Acquisition Cost",
      description: "By implementing more efficient marketing automation strategies"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4">
            Results
          </span>
          <h2 className="heading-lg text-brand-dark">Key Achievements</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-md text-center"
            >
              <div className="mb-4 w-14 h-14 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto">
                <ArrowUp className="text-brand-orange" />
              </div>
              <h3 className="text-4xl font-bold text-brand-orange mb-3">{achievement.percentage}</h3>
              <h4 className="font-semibold text-xl mb-3">{achievement.title}</h4>
              <p className="text-gray-600">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            These results demonstrate the power of combining data analytics with strategic automation to 
            create sustainable growth for e-commerce businesses.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
