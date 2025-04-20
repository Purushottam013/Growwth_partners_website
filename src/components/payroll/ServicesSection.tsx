
import React from "react";
import { motion } from "framer-motion";

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="heading-md mb-4">How We Work: Our Process Flow</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Your Premier Payroll Services in Singapore
          </p>
        </motion.div>

        <div className="w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-lg max-w-4xl"
          >
            <img 
              src="/lovable-uploads/5775afbb-6129-45f8-a8d4-53076a8462dd.png" 
              alt="Payroll Process Flow" 
              className="object-contain w-full"
              style={{ height: "auto", maxHeight: "500px" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
