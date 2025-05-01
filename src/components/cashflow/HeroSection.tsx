
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ContactForm } from "@/components/ContactForm";
import { BadgeCheck, TrendingUp, Clock, DollarSign } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";
// Use the user uploaded image here
import heroImage from "/lovable-uploads/b51c5473-b592-468a-9952-259fa777df74.png";

export const HeroSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const features = [
    { icon: <BadgeCheck className="h-5 w-5 text-brand-blue" />, text: "Industry Leaders" },
    { icon: <TrendingUp className="h-5 w-5 text-brand-green" />, text: "Long-Term Commitment" },
    { icon: <Clock className="h-5 w-5 text-brand-orange" />, text: "Quick Turnaround" },
    { icon: <DollarSign className="h-5 w-5 text-brand-purple" />, text: "Transparent Pricing" }
  ];

  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-gradient-to-b from-[#F2FCE2]/30 to-white">
      <div className="absolute inset-0 z-0 opacity-5 bg-grid-pattern"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h1 className="heading-lg mb-5 text-brand-dark leading-tight">
              Expert <span className="text-[#F87315] relative">Financial Modeling</span> Services
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Navigating financial intricacies is crucial for strategic decision-making.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                  className="flex items-center gap-2"
                >
                  <div className="bg-gray-100 p-2 rounded-full">
                    {feature.icon}
                  </div>
                  <span className="text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button 
                onClick={() => setContactModalOpen(true)}
                className="bg-[#F87315] hover:bg-[#F87315]/90 text-white px-7 py-6 text-lg font-medium rounded-full"
              >
                Book Free Call
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 relative h-full"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl h-[320px] lg:h-[380px] border-4 border-white p-1">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-[#F87315]/20 mix-blend-overlay rounded-2xl"></div>
              <OptimizedImage 
                src={heroImage} 
                alt="Cash Flow Modeling Services" 
                className="w-full h-full object-cover rounded-xl"
                style={{
                  objectPosition: "center",
                  aspectRatio: "16/9"
                }}
                fallbackSrc="/placeholder.svg"
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-8 -left-8 z-20"
            >
              <div className="flex items-center gap-2 bg-white rounded-xl p-3 shadow-lg animate-float-slow backdrop-blur-sm border border-gray-100">
                <div className="bg-[#F87315]/10 p-2 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-[#F87315]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Strategic</p>
                  <p className="text-xs text-gray-600">Decision Making</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -top-8 -right-8 z-20"
            >
              <div className="flex items-center gap-2 bg-white rounded-xl p-3 shadow-lg animate-float backdrop-blur-sm border border-gray-100">
                <div className="bg-brand-green/10 p-2 rounded-lg">
                  <DollarSign className="h-5 w-5 text-brand-green" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Financial</p>
                  <p className="text-xs text-gray-600">Precision</p>
                </div>
              </div>
            </motion.div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#D3E4FD]/50 rounded-full filter blur-3xl"></div>
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#F2FCE2]/50 rounded-full filter blur-3xl"></div>
          </motion.div>
        </div>
      </div>

      <Dialog open={contactModalOpen} onOpenChange={setContactModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center">Speak To A Financial Expert</DialogTitle>
            <DialogDescription className="text-center">
              Get personalized financial modeling advice tailored for your business needs. Fill in your details and an expert will get in touch with you.
            </DialogDescription>
          </DialogHeader>
          <ContactForm onSuccess={() => setContactModalOpen(false)} />
        </DialogContent>
      </Dialog>
    </section>
  );
};
