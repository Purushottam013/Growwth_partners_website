
import React from "react";
import { motion } from "framer-motion";

export const PrecisionSection = () => {
  return (
    <section className="py-14 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="heading-md mb-6">
              Precision Today, Prosperity Tomorrow: Expert <span className="text-[#F87315]">Financial Modeling</span>
            </h3>
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
        </div>
      </div>
    </section>
  );
};
