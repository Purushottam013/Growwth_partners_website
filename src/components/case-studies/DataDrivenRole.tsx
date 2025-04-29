
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const DataDrivenRole = () => {
  const roles = [
    "Conducting thorough financial analysis and forecasting to enable better decision-making regarding staff costs and capital allocation.",
    "Implementing robust data analysis techniques to evaluate marketing expenses, optimizing ROI, and enhancing resource utilization.",
    "Acting as CuriousCore's financial partner, facilitating the development of financial models and forecasts, and conducting regular reviews of financial performance."
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="heading-md text-brand-dark mb-8 text-center">Growwth's Role</h3>
          
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <p className="text-lg text-gray-700 mb-6">
              Growwth addressed client's challenges and contributed to their achievements by:
            </p>
            
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
