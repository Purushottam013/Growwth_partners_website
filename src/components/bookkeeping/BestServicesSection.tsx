
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ContactForm } from "@/components/ContactForm";
import { Award, TrendingUp } from "lucide-react";

export const BestServicesSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block px-4 py-1 bg-[#F2FCE2] text-brand-green rounded-full text-sm font-semibold mb-4">Award-Winning Services</span>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-brand-dark">
              Best bookkeeping services in Singapore
            </h3>
            <div className="w-20 h-1 bg-brand-green mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our award-winning team specializes in online bookkeeping services, managing your accounting and finance tasks effortlessly and cost-effectively, setting the stage for future growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-0 bg-gray-50 p-3 rounded-lg">
              <Award className="h-6 w-6 text-brand-orange" />
              <span className="text-gray-700 font-medium">Award-Winning Team</span>
            </div>
            
            <div className="flex items-center gap-3 mb-4 sm:mb-0 bg-gray-50 p-3 rounded-lg">
              <TrendingUp className="h-6 w-6 text-brand-blue" />
              <span className="text-gray-700 font-medium">Setting Stage for Growth</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Button
              onClick={() => setContactModalOpen(true)}
              className="bg-brand-green hover:bg-brand-green/90 text-white px-8 py-6 text-lg font-bold rounded-full"
            >
              Speak To An Expert
            </Button>
          </motion.div>
        </div>
      </div>

      <Dialog open={contactModalOpen} onOpenChange={setContactModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center">Speak To An Expert</DialogTitle>
            <DialogDescription className="text-center">
              Every Business Is Unique. Let Us Tailor A Plan For You! Fill In Your Details And An Expert Will Touch Base With You
            </DialogDescription>
          </DialogHeader>
          <ContactForm onSuccess={() => setContactModalOpen(false)} />
        </DialogContent>
      </Dialog>
    </section>
  );
};
