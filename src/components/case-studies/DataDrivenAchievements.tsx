
import { motion } from "framer-motion";

export const DataDrivenAchievements = () => {
  const achievements = [
    {
      metric: "SGD 100k",
      description: "saved annually through staff cost optimisation with a 2-year model."
    },
    {
      metric: "SGD 835k",
      description: "debt informed capital allocation decisions"
    },
    {
      metric: "SGD 700k to SGD 1.5mn",
      description: "revenue projection guided by meticulous PNL forecasting."
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
          <h3 className="heading-md text-brand-dark mb-4">Key Achievements</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm text-center"
            >
              <h4 className="text-3xl font-bold text-brand-orange mb-4">{achievement.metric}</h4>
              <p className="text-gray-600">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
