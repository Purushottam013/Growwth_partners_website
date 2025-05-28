
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { BadgeCheck, BadgePercent, PhoneCall } from "lucide-react";
import bookkeepingHeroImage from "/lovable-uploads/cf4931e3-eac5-452b-9fb1-71a1922b7e30.png";
import { OptimizedImage } from "../ui/optimized-image";
import { ContactModal } from "@/components/ui/contact-modal";


export const HeroSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="relative py-10 md:py-16 overflow-hidden bg-gradient-to-b from-white to-[#F2FCE2]/30">
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
              Bookkeeping Services in Singapore – <span className="text-[#FB8136] relative">Simplify</span> Your Business Finances
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Organize your business transactions, maintain up-to-date accounts, and make informed business decisions with our trusted virtual bookkeeping services for Small businesses, SMEs, and multinational businesses.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Button 
                onClick={() => setContactModalOpen(true)}
                className="bg-[#FB8136] hover:bg-[#FB8136]/90 text-white px-7 py-5 text-lg font-medium rounded-full"
              >
                <PhoneCall className="mr-2 h-5 w-5" />
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
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FB8136]/20 to-brand-blue/20 mix-blend-overlay rounded-2xl"></div>
              <OptimizedImage 
                src={bookkeepingHeroImage} 
                alt="Bookkeeping Services" 
                className="w-full h-full object-cover rounded-2xl transform hover:scale-105 transition-transform duration-700"
                style={{
                  maxHeight: "360px", 
                  objectPosition: "center"
                }}
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-8 -left-8 z-20"
            >
              <div className="flex items-center gap-2 bg-white rounded-xl p-3 shadow-lg animate-float-slow backdrop-blur-sm border border-gray-100">
                <div className="bg-brand-green/10 p-2 rounded-lg">
                  <BadgeCheck className="h-5 w-5 text-brand-green" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Trusted by</p>
                  <p className="text-xs text-gray-600">200+ Businesses</p>
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
                <div className="bg-brand-blue/10 p-2 rounded-lg">
                  <BadgePercent className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Cost-Effective</p>
                  <p className="text-xs text-gray-600">Bookkeeping</p>
                </div>
              </div>
            </motion.div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#E5DEFF]/50 rounded-full filter blur-3xl"></div>
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#FDE1D3]/50 rounded-full filter blur-3xl"></div>
          </motion.div>
        </div>
      </div>


       <ContactModal 
              open={contactModalOpen} 
              onOpenChange={setContactModalOpen} 
            />
    </section>
  );
};
