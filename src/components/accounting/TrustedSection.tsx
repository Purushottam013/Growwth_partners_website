
import { useRef } from "react";
import { motion } from "framer-motion";
import { PartnersSection } from "@/components/home/PartnersSection";

export const TrustedSection = () => {
  return <section className="bg-gray-50 py-[34px]">
      <div className="container-custom">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }} className="text-center mb-12">
          <h3 className="heading-md mb-4">Trusted over 200+ startups/businesses around the world</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Curious to learn more? Book a free call with our expert to discuss your business needs and save time and effort.
          </p>
        </motion.div>
        
        {/* Reuse the partners section from home page */}
        <PartnersSection />
      </div>
    </section>;
};
