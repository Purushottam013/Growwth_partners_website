
import { motion } from "framer-motion";
import { CircleMinus } from "lucide-react";

export const DataDrivenChallenges = () => {
  const challenges = [
    "Lack of precise financial forecasting to enable strategic decision-making regarding expansion and resource allocation.",
    "Inefficient tracking of marketing expenses, making it difficult to evaluate ROI and optimize customer acquisition costs."
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="heading-md text-brand-dark mb-4">Client Challenges</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm"
          >
            <p className="text-lg text-gray-700 mb-6">
              The client faced several challenges in their financial management that needed to be addressed:
            </p>
            
            <div className="space-y-4">
              {challenges.map((challenge, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="mt-1 text-red-500">
                    <CircleMinus size={24} />
                  </span>
                  <p className="text-gray-700">{challenge}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
