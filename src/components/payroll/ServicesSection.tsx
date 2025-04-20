
import React from "react";
import { motion } from "framer-motion";
import { Calculator, FileCheck, Settings } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: <Calculator className="h-6 w-6 text-brand-orange" />,
      title: "Accurate Salary Calculations",
      description: "Precision in every paycheck, ensuring employees are compensated fairly and promptly."
    },
    {
      icon: <FileCheck className="h-6 w-6 text-brand-orange" />,
      title: "Compliance Assurance",
      description: "Stay up-to-date with ever-changing regulations; we handle tax deductions and filings with precision."
    },
    {
      icon: <Settings className="h-6 w-6 text-brand-orange" />,
      title: "Custom Payroll Solutions",
      description: "Tailored services to match your unique business requirements, providing flexibility and efficiency."
    },
    {
      icon: <FileCheck className="h-6 w-6 text-brand-orange" />,
      title: "Bookkeeping, Tax Preparation, and Compliance",
      description: "Growwth ensures your taxes are prepared accurately and that you're fully compliant with tax regulations."
    },
    {
      icon: <Calculator className="h-6 w-6 text-brand-orange" />,
      title: "Customised Financial Analysis",
      description: "Gain a competitive edge with our in-depth financial analysis, tailored to your business goals."
    },
    {
      icon: <Settings className="h-6 w-6 text-brand-orange" />,
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="bg-brand-orange/10 p-3 rounded-lg shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-brand-dark">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="w-full flex items-center justify-center lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src="/lovable-uploads/5775afbb-6129-45f8-a8d4-53076a8462dd.png" 
                alt="Payroll Process Flow" 
                className="object-cover w-full"
                style={{ maxWidth: "600px", maxHeight: "700px" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
