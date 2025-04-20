
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      title: "Accurate Salary Calculations",
      description: "Precision in every paycheck, ensuring employees are compensated fairly and promptly."
    },
    {
      title: "Compliance Assurance",
      description: "Stay up-to-date with ever-changing regulations; we handle tax deductions and filings with precision."
    },
    {
      title: "Custom Payroll Solutions",
      description: "Tailored services to match your unique business requirements, providing flexibility and efficiency."
    },
    {
      title: "Bookkeeping, Tax Preparation, and Compliance",
      description: "Growwth ensures your taxes are prepared accurately and that you're fully compliant with tax regulations."
    },
    {
      title: "Customised Financial Analysis",
      description: "Gain a competitive edge with our in-depth financial analysis, tailored to your business goals."
    },
    {
      title: "Scalability",
      description: "Whether you're a startup, SME, or multinational corporation, our services adapt to your business's evolving needs."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="heading-md mb-4">How We Work: Our Process Flow</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Your Premier Payroll Services in Singapore
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-brand-orange/10 p-2 rounded-lg mt-1">
                  <Check className="h-5 w-5 text-brand-orange" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-brand-dark">
                    {service.title}
                  </h4>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
