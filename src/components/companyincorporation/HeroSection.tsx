
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ContactForm } from "@/components/ContactForm";
import { BadgeCheck, BadgePercent, Award } from "lucide-react";
import singaporeImage from "/lovable-uploads/611849ac-90f5-4367-a853-5139fd978f70.png";

export const HeroSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="relative py-10 md:py-16 overflow-hidden bg-gradient-to-b from-brand-green/10 to-white">
      <div className="absolute inset-0 z-0 opacity-5 bg-grid-pattern"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h1 className="heading-lg mb-5 text-brand-dark leading-tight">
              Company Incorporation Services <span className="text-brand-green relative">in Singapore</span>
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              The Best Service to Help You With It? Growwth Partners
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Button 
                onClick={() => setContactModalOpen(true)}
                className="bg-brand-green hover:bg-brand-green/90 text-white px-7 py-5 text-lg font-medium rounded-full"
              >
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 relative h-[360px]"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl h-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/20 to-brand-blue/20 mix-blend-overlay rounded-2xl"></div>
              <img 
                src={singaporeImage} 
                alt="Singapore Skyline" 
                className="w-full h-full object-cover rounded-2xl transform hover:scale-105 transition-transform duration-700"
                style={{ maxHeight: "360px", objectPosition: "center" }}
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-8 -left-8 z-30 animate-float-slow"
            >
              <div className="flex items-center gap-2 bg-white rounded-xl p-3 shadow-lg backdrop-blur-sm border border-gray-100">
                <div className="bg-brand-green/10 p-2 rounded-lg">
                  <BadgeCheck className="h-5 w-5 text-brand-green" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">100% Paperless</p>
                  <p className="text-xs text-gray-600">Incorporation Process</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -top-8 -right-8 z-30 animate-float"
            >
              <div className="flex items-center gap-2 bg-white rounded-xl p-3 shadow-lg backdrop-blur-sm border border-gray-100">
                <div className="bg-brand-blue/10 p-2 rounded-lg">
                  <Award className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Leading Service</p>
                  <p className="text-xs text-gray-600">In Singapore</p>
                </div>
              </div>
            </motion.div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#E5DEFF]/50 rounded-full filter blur-3xl"></div>
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#F2FCE2]/50 rounded-full filter blur-3xl"></div>
          </motion.div>
        </div>
      </div>

      <Dialog open={contactModalOpen} onOpenChange={setContactModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center">Contact Us</DialogTitle>
            <DialogDescription className="text-center">
              Fill in your details below and our experts will be in touch to discuss your company incorporation needs.
            </DialogDescription>
          </DialogHeader>
          <ContactForm onSuccess={() => setContactModalOpen(false)} />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;
