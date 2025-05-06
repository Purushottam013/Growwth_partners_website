
import React from "react";
import { motion } from "framer-motion";
import { OptimizedImage } from "@/components/ui/optimized-image";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: "/placeholder.svg",
      title: "Startups",
      description: "Secure funding with compelling financial projections and business plans."
    },
    {
      icon: "/placeholder.svg",
      title: "Small and Medium Businesses",
      description: "Optimise operations and budgeting with precise financial modeling."
    },
    {
      icon: "/placeholder.svg",
      title: "Corporate Entities",
      description: "Navigate mergers, acquisitions, and expansions with confidence through detailed financial analysis."
    }
  ];

  return (
    <section className="py-14 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="heading-md mb-4">Who Benefits from Our <span className="text-[#F87315]">Financial Modeling</span> Services?</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our tailored financial modeling solutions serve diverse business needs, from startups to corporations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center"
            >
              <div className="mb-6 p-0 inline-block">
                <OptimizedImage 
                  src={benefit.icon} 
                  alt={`${benefit.title} icon`} 
                  className="h-24 w-24 object-contain" 
                  fallbackSrc="/placeholder.svg"
                />
              </div>
              <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
              <p className="text-gray-700">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
