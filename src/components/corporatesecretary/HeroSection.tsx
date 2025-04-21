
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ContactForm } from "@/components/ContactForm";
import handshakeImage from "/lovable-uploads/658d652b-f5d2-4603-af7b-ad64c5e2d4ec.png";

export const HeroSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-[#0c162d] to-[#1a274d] text-white overflow-hidden py-20 lg:py-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Corporate Secretarial Services In Singapore – Simplify Compliance with Us
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Struggling with corporate compliance and governance? Our Corporate Secretarial Services in Singapore streamline every aspect, keeping your business compliant and growth-focused.
            </p>
            <Button 
              onClick={() => setContactModalOpen(true)}
              className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-6 text-lg rounded-full"
            >
              Book Free Call
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-lg">
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-[#F87315] to-purple-600 opacity-75 blur"></div>
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src={handshakeImage} 
                  alt="Corporate Secretary Service" 
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Dialog open={contactModalOpen} onOpenChange={setContactModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center">Book a Free Call</DialogTitle>
            <DialogDescription className="text-center">
              Speak with our experts to learn how we can help your business stay compliant
            </DialogDescription>
          </DialogHeader>
          <ContactForm onSuccess={() => setContactModalOpen(false)} />
        </DialogContent>
      </Dialog>
    </section>
  );
};
