
import React from "react";
import { motion } from "framer-motion";
import { LineChart, PieChart, Landmark, Brain, Cpu } from "lucide-react";
import cashFlowImage from "/lovable-uploads/6f0b2616-8f72-4d67-adc3-0f1211cc1015.png";

export const WhyChooseSection = () => {
  const features = [
    {
      icon: <LineChart className="h-8 w-8 text-brand-blue" />,
      title: "Comprehensive Analysis",
      description: "Over a decade of experience developing 1000+ financial models, ensuring depth and accuracy in our insights."
    },
    {
      icon: <PieChart className="h-8 w-8 text-brand-orange" />,
      title: "Scenario Planning",
      description: "Proactive approach to anticipate and plan for diverse business scenarios, ensuring resilience and adaptability."
    },
    {
      icon: <Landmark className="h-8 w-8 text-brand-green" />,
      title: "Investor-Relevant Models",
      description: "A decade of advising with a focus on what investors seek, ensuring our models align with their expectations."
    },
    {
      icon: <Brain className="h-8 w-8 text-brand-yellow" />,
      title: "Commercial Acumen",
      description: "20+ years of industry expertise, providing not just a spreadsheet but a defensible growth story. We go beyond being just excel experts; we are industry experts working across multiple industries."
    },
    {
      icon: <Cpu className="h-8 w-8 text-brand-purple" />,
      title: "Tech-Driven Solutions",
      description: "Utilising cutting-edge automation tools for efficient and error-free financial management."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1"
          >
            <h3 className="heading-md mb-6">Why Choose Us?</h3>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 bg-gray-50 rounded-lg shadow-sm">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 relative"
          >
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#D3E4FD]/30 rounded-full filter blur-3xl"></div>
            <div className="relative z-10">
              <img 
                src={cashFlowImage} 
                alt="Why Choose Our Financial Modeling Services" 
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#FEF7CD]/30 rounded-full filter blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
