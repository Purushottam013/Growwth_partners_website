
import React from "react";
import { motion } from "framer-motion";
import { ChartLine, Shield, BookOpen, DollarSign, CheckCircle2 } from "lucide-react";

export const EndToEndSection = () => {
  const benefits = [
    "Personalized accounting strategies",
    "Continuous financial monitoring",
    "Tax optimization & compliance",
    "Cash flow management",
    "Business growth planning",
    "Cost reduction consulting"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-[#E5DEFF] text-brand-orange rounded-full text-sm font-semibold mb-4">Premium Accounting Services</span>
          <h2 className="heading-md mb-5 text-gray-900">
            End-to-End Accounting Services
          </h2>
          <p className="text-lg text-gray-600 mb-4 leading-relaxed max-w-3xl mx-auto">
            Your Business's Own Accounting Team for Half the Price
          </p>
          <div className="w-20 h-1 bg-brand-orange mx-auto my-5 rounded-full"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Streamline your financial management with our comprehensive accounting services. Our dedicated experts, equipped with over 10 years of experience, ensure personalized and highly efficient support.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="h-6 w-6 text-brand-green flex-shrink-0" />
                <p className="text-gray-700 font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 p-4 bg-[#F2FCE2] rounded-xl border border-brand-green/20">
            <p className="text-gray-700 italic">
              "Feel fully in control of your business finances with our support. Leverage our expertise to handle your tax, compliance, and cash flow needs effortlessly."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
