
import { motion } from "framer-motion";

export const EcommerceGoalsObjectives = () => {
  const goals = [
    {
      title: "Optimize Sales Funnel",
      description: "Develop a more efficient sales pipeline with automated touchpoints and personalized communications."
    },
    {
      title: "Enhance Analytics Integration",
      description: "Implement comprehensive data analytics to derive actionable insights from customer interactions."
    },
    {
      title: "Improve Customer Retention",
      description: "Create strategies to boost repeat purchases and increase customer lifetime value."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-brand-orange/20 text-brand-orange rounded-full text-sm font-semibold mb-4">
            Strategy
          </span>
          <h2 className="heading-lg text-brand-dark max-w-3xl mx-auto">
            Primary Goals and Objectives
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100"
            >
              <h3 className="text-xl font-bold mb-4 text-brand-dark">{goal.title}</h3>
              <p className="text-gray-600">{goal.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
