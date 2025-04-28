
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const EcommerceSolutions = () => {
  const solutions = [
    "Transition to cloud-based accounting",
    "Implementation of real-time financial tracking",
    "Automation through integration with e-commerce platforms and bank feeds",
    "Data cleanup and reconciliation",
    "Streamlining of sales and payment platforms"
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="heading-md text-brand-dark">Data-Driven Solutions</h3>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-md">
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-orange/10 flex items-center justify-center mt-0.5">
                    <Check className="text-brand-orange w-4 h-4" />
                  </span>
                  <span className="text-gray-700">{solution}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
