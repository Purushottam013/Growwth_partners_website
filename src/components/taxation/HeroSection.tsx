
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ContactForm } from "@/components/ContactForm";

export const HeroSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="relative bg-gradient-to-b from-gray-100 to-gray-50 py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute top-10 right-10 w-60 h-60 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <span className="inline-block px-4 py-1 bg-[#FEF7CD] text-brand-orange rounded-full text-sm font-semibold mb-6">
              Taxation & Compliance
            </span>
            <h1 className="heading-xl lg:text-5xl text-gray-900 font-bold mb-6 leading-tight">
              Are You Confident Your Tax Returns Are Accurate and Timely?
            </h1>
            <p className="text-xl text-gray-700 mb-10">
              Discover the Growwth Partners Advantage
            </p>
            <Button 
              onClick={() => setContactModalOpen(true)} 
              className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-8 py-6 text-lg rounded-full"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative max-w-md mx-auto"
          >
            {/* First floating badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -top-8 -right-8 bg-white shadow-lg rounded-lg px-4 py-2 z-20"
            >
              <p className="text-sm font-bold text-brand-blue flex items-center">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Expert Tax Support
              </p>
            </motion.div>
            
            {/* Second floating badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-lg px-4 py-2 z-20"
            >
              <p className="text-sm font-bold text-brand-orange flex items-center">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                On-Time Filing
              </p>
            </motion.div>
            
            <img 
              src="/lovable-uploads/400ef52e-c935-47c0-8183-c36913218f6c.png"
              alt="Tax Services" 
              className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300" 
            />
          </motion.div>
        </div>
      </div>

      <Dialog open={contactModalOpen} onOpenChange={setContactModalOpen}>
        <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center">Contact Us</DialogTitle>
            <DialogDescription className="text-center">
              Fill in your details and we'll get back to you shortly to discuss your taxation needs.
            </DialogDescription>
          </DialogHeader>
          <ContactForm onSuccess={() => setContactModalOpen(false)} />
        </DialogContent>
      </Dialog>
    </section>
  );
};
