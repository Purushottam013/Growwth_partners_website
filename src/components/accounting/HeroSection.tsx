import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ContactForm } from "@/components/ContactForm";
import { BadgeCheck, BadgePercent } from "lucide-react";
import accountingHeroImage from "/lovable-uploads/a7cbeedf-132f-41c2-bd4f-159c8e1875dc.png";

export const HeroSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white to-[#F2FCE2]/30">
      <div className="absolute inset-0 z-0 opacity-5 bg-grid-pattern"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h1 className="heading-lg mb-6 text-brand-dark leading-tight">
              Most Trusted <span className="text-brand-orange relative">5-Star</span> Accounting Services In Singapore
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Are you tired of navigating the complexities of accounting and financial management for your business?
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Button 
                onClick={() => setContactModalOpen(true)}
                className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-6 text-lg font-medium rounded-full"
              >
                Book Free Call
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-brand-blue/20 mix-blend-overlay rounded-2xl"></div>
              <img 
                src={accountingHeroImage} 
                alt="Accounting and Tax Services" 
                className="w-full h-auto object-cover rounded-2xl transform hover:scale-105 transition-transform duration-700"
              />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-6 -left-6 z-20"
              >
                <div className="flex items-center gap-2 bg-white rounded-xl p-3 shadow-lg animate-float-slow backdrop-blur-sm border border-gray-100">
                  <div className="bg-brand-orange/10 p-2 rounded-lg">
                    <BadgeCheck className="h-5 w-5 text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">95% Client</p>
                    <p className="text-xs text-gray-600">Satisfaction Rate</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -top-6 -right-6 z-20"
              >
                <div className="flex items-center gap-2 bg-white rounded-xl p-3 shadow-lg animate-float backdrop-blur-sm border border-gray-100">
                  <div className="bg-brand-blue/10 p-2 rounded-lg">
                    <BadgePercent className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">50M+</p>
                    <p className="text-xs text-gray-600">Managed Annually</p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#E5DEFF]/50 rounded-full filter blur-3xl"></div>
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#FDE1D3]/50 rounded-full filter blur-3xl"></div>
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
