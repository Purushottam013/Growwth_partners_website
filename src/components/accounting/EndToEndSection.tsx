
import React from "react";
import { motion } from "framer-motion";
import { ChartLine, Shield, BookOpen, DollarSign } from "lucide-react";

export const EndToEndSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="heading-md mb-6 text-gray-900">
            End-to-End Accounting Services: Your Business's Own Accounting Team for Half the Price
          </h2>
          <p className="text-lg text-gray-600 mb-4 leading-relaxed">
            Streamline your financial management with our comprehensive accounting services. Our dedicated experts, equipped with over 10 years of experience, ensure personalized and highly efficient support.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Feel fully in control of your business finances with our support. Leverage our expertise to handle your tax, compliance, and cash flow needs effortlessly.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
