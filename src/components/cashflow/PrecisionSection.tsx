
import React from "react";
import { motion } from "framer-motion";
import cashFlowImage from "/lovable-uploads/6f0b2616-8f72-4d67-adc3-0f1211cc1015.png";

export const PrecisionSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h3 className="heading-md mb-6">Precision Today, Prosperity Tomorrow: Expert Financial Modeling</h3>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                Poor financial modeling can lead to lower wealth creation, undervaluation, and unrealistic investor expectations. 
                Accurate forecasting is key to setting realistic goals and achieving optimal results.
              </p>
              <p>
                Our expert Financial Modeling Services act as a compass for your business, ensuring precise insights 
                and strategic foresight. Don't gamble with your financial future—choose precision for elevated business decisions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#E5DEFF]/30 rounded-full filter blur-3xl"></div>
            <div className="relative z-10">
              <img 
                src={cashFlowImage} 
                alt="Financial Modeling" 
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#FDE1D3]/30 rounded-full filter blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
