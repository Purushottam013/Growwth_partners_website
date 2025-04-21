
import React from "react";
import { motion } from "framer-motion";

export const HowWeWorkSection = () => {
  const steps = [
    {
      icon: "/lovable-uploads/3da3018f-7245-4b4d-84b1-41df187d414e.png",
      title: "Introduction Call",
      description: "Quick 30 min call to understand your current challenges and how Growwth can help you out."
    },
    {
      icon: "/lovable-uploads/00ac3120-53ad-43eb-bb50-59aa05d0d0a2.png",
      title: "Know Your Customer",
      description: "The team will go through your existing data, structure, and understand your current state of affairs to align better."
    },
    {
      icon: "/lovable-uploads/b9027104-9789-4c4e-94c7-d62c90db1c20.png",
      title: "Kick Off",
      description: "A Expert will be assigned to you and the team will take care of all your compliances."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">How We Work?</h3>
          <p className="text-xl text-gray-600">
            We know time is valuable. Here's how we ensure seamless compliance for your business saves time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 relative">
          {/* Timeline connector */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 hidden md:block"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center relative z-10"
            >
              <div className="mb-6 mx-auto bg-[#EFF6FF] p-4 rounded-full inline-flex items-center justify-center w-20 h-20">
                <img src={step.icon} alt={step.title} className="w-12 h-12 object-contain" />
              </div>
              <div className="absolute top-6 -left-3 w-6 h-6 bg-brand-orange rounded-full hidden md:block"></div>
              <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
              <p className="text-gray-700">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
