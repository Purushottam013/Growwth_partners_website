
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const GamingGoalsObjectives = () => {
  const goals = [
    "Increase company valuation",
    "Identify additional revenue and growth opportunities",
    "Collaborate with existing and potential investors for strategic partnerships",
    "Support in fund raising, enhancing financial models, due diligence, and fundraising materials"
  ];

  return (
    <section className="py-16 relative bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src="/lovable-uploads/0e6bbc41-4925-4486-a6de-623f6056fc74.png"
          alt="Financial Growth Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-brand-dark mb-12">
            Primary Goals and Objectives
          </h3>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <ul className="space-y-6">
              {goals.map((goal, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <span className="bg-brand-orange/10 p-2 rounded-full text-brand-orange mr-4 mt-1">
                    <Check className="h-5 w-5" />
                  </span>
                  <p className="text-lg text-gray-700">{goal}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
