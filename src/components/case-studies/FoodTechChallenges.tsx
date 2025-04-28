
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

export const FoodTechChallenges = () => {
  const challenges = [
    "Complexities in inventory management, especially regarding expiry dates.",
    "Cash flow issues due to an amalgamation of growth expenses and operational costs.",
    "Strategic decisions on whether to prioritise volume with lower margins or focus on niche markets with higher margins."
  ];

  return (
    <section id="challenges" className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="heading-md text-brand-dark">Client Challenges</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              The initial challenges faced by the client included:
            </p>
            <ul className="space-y-4">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <AlertCircle className="text-brand-orange mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{challenge}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-6 -right-6 w-64 h-64 bg-brand-orange/10 rounded-full filter blur-3xl"></div>
            <img
              src="/lovable-uploads/e13039f9-8178-4cd3-8a0e-80120863119c.png"
              alt="Food Tech Challenges"
              className="rounded-2xl shadow-2xl relative z-10 w-full max-w-md mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
