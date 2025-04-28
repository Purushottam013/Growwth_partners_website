
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="heading-md text-brand-dark">Growwth's Role</h3>
            <p className="text-lg text-gray-700">
              Growwth Partners acted as strategic advisors, dedicating significant man hours to achieve the set milestones.
            </p>
            <p className="text-lg font-medium text-gray-900">Major contributions included:</p>
            
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
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-brand-orange/5 rounded-full filter blur-3xl"></div>
            <img
              src="/lovable-uploads/ede7f3db-3a08-4841-9abb-ea3ba74cac22.png"
              alt="Growwth Partners Role"
              className="rounded-xl shadow-xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
