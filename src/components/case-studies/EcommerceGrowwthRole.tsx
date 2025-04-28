
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const EcommerceGrowwthRole = () => {
  const services = [
    "Implementation of dynamic pricing strategies",
    "Development of automated customer segmentation",
    "Integration of advanced analytics dashboards",
    "Creation of scalable marketing automation workflows",
    "Design of personalized customer journey maps",
    "Optimization of inventory management systems"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
              Our Approach
            </span>
            <h3 className="heading-md text-brand-dark">Growwth's Role</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We partnered closely with the client team to understand their unique challenges and develop a comprehensive strategy that leveraged automation and data analytics to drive sustainable growth.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our services included comprehensive consulting, implementation support, and ongoing optimization to ensure all solutions were delivering maximum value.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-xl"
          >
            <h4 className="font-semibold text-xl mb-6 text-brand-dark">Services Provided:</h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-0.5">
                    <Check size={14} />
                  </span>
                  <span className="text-gray-700">{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
