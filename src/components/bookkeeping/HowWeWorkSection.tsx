
import React from "react";
import { motion } from "framer-motion";
import { HandshakeIcon, Layers, DollarSign, Users } from "lucide-react";

export const HowWeWorkSection = () => {
  const workItems = [
    {
      icon: <Users className="h-10 w-10 text-[#FB8136]" />,
      title: "Personalized Financial Expertise",
      description: "Align directly with a dedicated financial expert, not a machine, ensuring tailored and effective client communication and experience."
    },
    {
      icon: <Layers className="h-10 w-10 text-[#FB8136]" />,
      title: "Effortless Management",
      description: "Streamlined and hassle-free handling of accounting tasks."
    },
    {
      icon: <DollarSign className="h-10 w-10 text-[#FB8136]" />,
      title: "Cost-Effective Solutions",
      description: "Providing premium value with efficient and affordable services."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[#F1F0FB] to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-[#FB8136]/10 text-[#FB8136] rounded-full text-sm font-semibold mb-4">Our Approach</span>
          <h3 className="heading-md mb-4">How We Work?</h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We know time is valuable. Our approach ensures your financial management is handled with expertise and efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="p-4 bg-gray-50 rounded-xl shadow-sm mb-6">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
