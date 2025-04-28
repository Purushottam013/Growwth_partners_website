
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const EcommerceGrowwthRole = () => {
  const services = [
    "Automated the entire process by incorporating past and present data into Xero",
    "Activated bank feeds for multiple bank accounts",
    "Integrated business payment platforms such as PayPal, Afterpay, and Shoppay for live feeds",
    "Integrated the main sales channels, Shopify and Amazon, with seamless integration using third-party software",
    "Successfully reconciled Shopify, Amazon, and payment platform accounts",
    "Implemented tracking categories for major products to identify and manage profitability",
    "Assisted in managing various advertising platforms and reconciling them",
    "Additionally, resolved past issues with the main shipping platform, Aircylce"
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
          <h3 className="heading-md text-brand-dark mb-4">Growwth's Role</h3>
          <p className="text-xl text-gray-600">Growwth played a pivotal role by:</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-8">
            <ul className="space-y-4">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <Check className="text-green-600 w-4 h-4" />
                  </span>
                  <span className="text-gray-700">{service}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
