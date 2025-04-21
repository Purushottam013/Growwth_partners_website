
import React from "react";
import { motion } from "framer-motion";
import { FileText, FileSearch, Briefcase } from "lucide-react";

export const EasyStepsSection = () => {
  const steps = [
    {
      icon: <FileText className="h-10 w-10 text-white" />,
      title: "Choose Your Business Name",
      description: "Let Us Guide You!"
    },
    {
      icon: <FileSearch className="h-10 w-10 text-white" />,
      title: "Gathering Your Necessary Documents",
      description: "We'll Provide a Clear Checklist."
    },
    {
      icon: <Briefcase className="h-10 w-10 text-white" />,
      title: "Document Collection and Filing",
      description: "We Handle the Details."
    }
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
              <div className="border border-white/20 bg-white/10 backdrop-filter backdrop-blur-sm rounded-xl p-6 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-br from-brand-green to-brand-blue p-4 rounded-full mb-5 shadow-lg">
                    {step.icon}
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
