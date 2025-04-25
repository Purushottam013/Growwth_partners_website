
import React from "react";
import { motion } from "framer-motion";

export const ServiceStagesSection = () => {
  const services = [
    {
      icon: <img src="/lovable-uploads/aee41598-8696-4d33-879b-decd0db603c2.png" alt="Financial Review" className="w-16 h-16" />,
      title: "Accurate and Thorough Financial Review",
      description: "We Ensure all financial statements are meticulously checked for accuracy, identifying any discrepancies or errors that could affect tax calculations."
    },
    {
      icon: <img src="/lovable-uploads/17ffc44e-243e-4ed5-9ecf-86f42e5c4939.png" alt="Deadline Management" className="w-16 h-16" />,
      title: "Timely Filing and Proactive Deadline Management",
      description: "We provide clear, advance notifications of all tax deadlines, and ensure timely submission to avoid penalties and interest charges."
    },
    {
      icon: <img src="/lovable-uploads/958bd351-bf88-48a1-957b-61b539526e37.png" alt="Transparent Reporting" className="w-16 h-16" />,
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
              <div className="mx-auto mb-6 flex items-center justify-center">
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
