
import React from "react";
import { motion } from "framer-motion";
import { BookOpen, ChartLine, DollarSign, Shield } from "lucide-react";

export const EndToEndSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="heading-md mb-6">
            End-to-End Accounting Services: Your Business's Own Accounting Team for Half the Price
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Streamline your financial management with our comprehensive accounting services. Our dedicated experts, equipped with over 10 years of experience, ensure personalized and highly efficient support.
          </p>
          <p className="text-lg text-gray-700">
            Feel fully in control of your business finances with our support. Leverage our expertise to handle your tax, compliance, and cash flow needs effortlessly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <BookOpen className="h-12 w-12 text-brand-orange" />,
              title: "Full Financial Management",
              description: "Comprehensive bookkeeping, tax filing, and financial reporting for complete peace of mind."
            },
            {
              icon: <ChartLine className="h-12 w-12 text-brand-green" />,
              title: "Growth-Focused Strategies",
              description: "Proactive financial planning and analysis to drive sustainable business growth."
            },
            {
              icon: <DollarSign className="h-12 w-12 text-brand-blue" />,
              title: "Cost-Effective Solutions",
              description: "Professional accounting services at a fraction of the cost of an in-house team."
            },
            {
              icon: <Shield className="h-12 w-12 text-brand-yellow" />,
              title: "Compliance Assurance",
              description: "Stay compliant with all regulatory requirements and avoid costly penalties."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
            >
              <div className="mb-4 p-3 bg-gray-50 rounded-full inline-block">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
