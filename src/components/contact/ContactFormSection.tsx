
import React from "react";
import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";
import { ContactDetails } from "./ContactDetails";

export const ContactFormSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#E5DEFF]/20 via-white to-[#D6BCFA]/20">
      <div className="container-custom max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="heading-md mb-3">Schedule a FREE consultation call with an Expert</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We'd be delighted to assist. Please provide your contact information and we will contact you
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full max-w-2xl"
          >
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#9b87f5]/20 to-[#D6BCFA]/30 rounded-full -mr-10 -mt-10 z-0"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-brand-orange/10 to-[#FDE1D3]/30 rounded-full -ml-10 -mb-10 z-0"></div>
              
              <div className="relative z-10">
                <ContactForm />
              </div>
            </div>
          </motion.div>

          <ContactDetails />
        </div>
      </div>
    </section>
  );
};
