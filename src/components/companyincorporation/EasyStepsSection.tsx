
import React from "react";
import { motion } from "framer-motion";
import IconFolder from "/lovable-uploads/5d78daa2-0b03-4cba-87d0-4f8acd80c249.png";
import IconDoc from "/lovable-uploads/b6101aaa-edc6-4881-8874-7bac605e43bf.png";
import IconName from "/lovable-uploads/9f592a64-6bfa-4899-85a4-8a6c8990fd6e.png";

export const EasyStepsSection = () => {
  const steps = [
    {
      icon: IconFolder,
      title: "Choose Your Business Name",
      description: "Let Us Guide You!",
    },
    {
      icon: IconDoc,
      title: "Gathering Your Necessary Documents",
      description: "We'll Provide a Clear Checklist.",
    },
    {
      icon: IconName,
      title: "Document Collection and Filing",
      description: "We Handle the Details.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-brand-green/90 to-brand-blue/80 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="heading-md mb-3 text-white">Company Incorporation Services in 3 Easy Steps</h3>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            We know time is valuable. Here's how we ensure seamless compliance for your business saves time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="border border-white/20 bg-white/10 backdrop-filter backdrop-blur-sm rounded-xl p-8 h-full shadow-xl">
                <div className="flex flex-col items-center text-center">
                  <div className="p-0 mb-5 flex items-center justify-center min-h-[80px]">
                    <img src={step.icon} alt={step.title} className="w-16 h-16 object-contain drop-shadow" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                  <p className="text-white/90">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <div className="border-t-2 border-dashed border-white/40 w-12"></div>
                  </div>
                )}
                <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-white/20 blur-xl"></div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-white/20 blur-xl"></div>
              </div>
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-brand-green/20 to-brand-blue/20 blur-lg transform translate-x-2 translate-y-2 rounded-xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EasyStepsSection;
