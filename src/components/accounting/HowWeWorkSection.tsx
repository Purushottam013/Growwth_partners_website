import React from "react";
import { motion } from "framer-motion";
import { Users, BookOpen, FileCheck, Laptop } from "lucide-react";
import calculationImage from "/lovable-uploads/8f10f66e-a04c-4619-aa09-09d6e3a04972.png";

export const HowWeWorkSection = () => {
  const workItems = [
    {
      icon: <Users className="h-10 w-10 text-brand-orange" />,
      title: "1-1 Accounting Team Support",
      description: "Get a dedicated accounting expert personally assigned to you who manages your finances with precision and care."
    },
    {
      icon: <BookOpen className="h-10 w-10 text-brand-green" />,
      title: "All-Inclusive Bookkeeping",
      description: "Receive comprehensive bookkeeping services that cover every financial aspect of your business."
    },
    {
      icon: <FileCheck className="h-10 w-10 text-brand-blue" />,
      title: "Tax and Compliance",
      description: "Ensure seamless tax filing and compliance with all regulations, keeping your business audit-ready."
    },
    {
      icon: <Laptop className="h-10 w-10 text-brand-yellow" />,
      title: "User-Friendly Software",
      description: "Utilize our intuitive software for easy financial management, accessible from any device."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#F1F0FB] to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="heading-md mb-4">How We Work?</h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We know time is valuable. Here's how we ensure seamless compliance for your business saves time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#E5DEFF]/30 rounded-full filter blur-3xl"></div>
            <div className="relative z-10">
              <img 
                src={calculationImage} 
                alt="How We Work" 
                className="w-full h-auto max-w-md mx-auto rounded-2xl shadow-xl"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#FDE1D3]/30 rounded-full filter blur-3xl"></div>
          </motion.div>

          <div className="space-y-8">
            {workItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start"
              >
                <div className="p-3 bg-white rounded-xl shadow-md flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
