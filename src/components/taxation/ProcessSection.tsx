
import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Clipboard, Users, FileCheck } from "lucide-react";

export const ProcessSection = () => {
  const steps = [
    {
      icon: <MessageCircle className="h-10 w-10 text-white" />,
      title: "Initial Consultation",
      description: "Discuss your current tax situation and identify issues with previous providers.",
      bgColor: "bg-brand-blue"
    },
    {
      icon: <Clipboard className="h-10 w-10 text-white" />,
      title: "Customized Plan",
      description: "Develop a tailored tax compliance plan addressing your specific needs.",
      bgColor: "bg-brand-orange"
    },
    {
      icon: <Users className="h-10 w-10 text-white" />,
      title: "Ongoing Support",
      description: "Monthly bookkeeping and regular check-ins to ensure continuous accuracy.",
      bgColor: "bg-brand-green"
    },
    {
      icon: <FileCheck className="h-10 w-10 text-white" />,
      title: "Year-End Preparation",
      description: "Comprehensive review and preparation of your tax return, linked with financials for complete transparency.",
      bgColor: "bg-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-[#FEF7CD] text-brand-orange rounded-full text-sm font-semibold mb-4">
            Our Process
          </span>
          <h3 className="heading-md mb-6">How It Works</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col"
            >
              <div className={`p-5 ${step.bgColor} flex justify-center items-center`}>
                <div className="bg-white/20 rounded-full p-3">
                  {step.icon}
                </div>
              </div>
              <div className="p-8 flex-grow">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-brand-orange font-bold mr-3">
                    {index + 1}
                  </div>
                  <h4 className="text-xl font-bold">{step.title}</h4>
                </div>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
