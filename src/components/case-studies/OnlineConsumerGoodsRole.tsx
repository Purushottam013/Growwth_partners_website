
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const OnlineConsumerGoodsRole = () => {
  const roles = [
    "Process Optimisation: Streamlined financial processes, enhancing visibility and operational efficiency.",
    "Strategic Insights: Provided crucial insights for product diversification, distribution optimization, and financial stability."
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="heading-md text-brand-dark mb-8 text-center">Growwth's Role</h3>
          
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
            <p className="text-lg text-gray-700 mb-6">
              Growwth Partners acted as strategic advisors, dedicating significant man hours to achieve the set milestones.
            </p>
            <p className="text-lg font-medium text-gray-900 mb-6">Major contributions included:</p>
            
            <div className="space-y-4">
              {roles.map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <Check className="text-brand-orange mt-1" size={24} />
                  <p className="text-gray-700">{role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
