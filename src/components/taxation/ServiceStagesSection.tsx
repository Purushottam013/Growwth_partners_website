
import React from "react";
import { motion } from "framer-motion";
import { Check, ClipboardCheck, Clock, LineChart } from "lucide-react";

export const ServiceStagesSection = () => {
  const services = [
    {
      icon: <Check className="w-10 h-10 text-brand-blue" />,
      title: "Accurate and Thorough Financial Review",
      description: "We Ensure all financial statements are meticulously checked for accuracy, identifying any discrepancies or errors that could affect tax calculations."
    },
    {
      icon: <Clock className="w-10 h-10 text-brand-orange" />,
      title: "Timely Filing and Proactive Deadline Management",
      description: "We provide clear, advance notifications of all tax deadlines, and ensure timely submission to avoid penalties and interest charges."
    },
    {
      icon: <LineChart className="w-10 h-10 text-brand-green" />,
      title: "Transparent and Understandable Reporting",
      description: "Deliver tax reports in a straightforward, easy-to-understand format, linking financials with tax workings for complete transparency and clarity."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-[#D3E4FD] text-brand-blue rounded-full text-sm font-semibold mb-4">
            Comprehensive Support
          </span>
          <h3 className="heading-md mb-6">We support every stage of your financial lifecycle</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
            >
              <div className="mx-auto p-4 bg-gray-50 rounded-full mb-6 flex items-center justify-center w-20 h-20">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              <p className="text-gray-700 flex-grow">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
