import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ContactForm } from "@/components/ContactForm";
import { Globe, TrendingUp } from "lucide-react";
import businessImage from "/lovable-uploads/ef68f631-a956-4ecf-97fb-9ada6c055e8c.png";
import { OptimizedImage } from "../ui/optimized-image";
export const ExpandBusinessSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  return <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent z-10"></div>
              <OptimizedImage src={businessImage} alt="Business Expansion" className="w-full h-auto object-cover transform hover:scale-105 transition-all duration-700" style={{
              maxHeight: "450px"
            }} />
              <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-brand-green" />
                  <span className="font-semibold text-gray-800">Singapore</span>
                </div>
              </div>
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.4,
              duration: 0.5
            }} className="absolute bottom-6 right-6 z-20 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg animate-pulse">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-brand-green" />
                  <span className="font-medium text-sm">Business Growth Hub</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Content Column */}
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} viewport={{
          once: true
        }} className="space-y-6">
            <h3 className="heading-md text-brand-dark">
              Best Country To Expand Your Business To? <span className="text-orange-500">Singapore</span>
            </h3>
            
            <p className="text-lg text-gray-700">
              We provide 100% paperless company incorporation services in Singapore. With the support of our highly efficient team, you can kickstart your business journey from anywhere in the world.
            </p>
            
            <p className="text-lg text-gray-700">
              Discover the ease of company registration services with Growwth – your partner in success.
            </p>
            
            <motion.div initial={{
            opacity: 0,
            y: 10
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.4,
            duration: 0.5
          }}>
              <Button onClick={() => setContactModalOpen(true)} className="text-white px-6 py-5 text-lg font-medium rounded-full mt-4 bg-[#f87315]">
                Speak To An Expert
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Dialog open={contactModalOpen} onOpenChange={setContactModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center">Speak To An Expert</DialogTitle>
            <DialogDescription className="text-center">
              Fill in your details and our incorporation experts will be in touch to discuss your business needs.
            </DialogDescription>
          </DialogHeader>
          <ContactForm onSuccess={() => setContactModalOpen(false)} />
        </DialogContent>
      </Dialog>
    </section>;
};
export default ExpandBusinessSection;