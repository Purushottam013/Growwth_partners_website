import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ContactForm } from "@/components/ContactForm";
import reviewsImage from "/lovable-uploads/dffbab4b-f0da-478a-9c0a-f904cf950811.png";
export const CtaSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  return <section className="bg-gradient-to-br from-brand-orange/90 to-brand-orange py-[40px]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
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
        }} className="lg:col-span-2">
            <img src={reviewsImage} alt="Customer Reviews" className="w-full h-auto max-w-md mx-auto rounded-2xl" />
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="lg:col-span-3 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Curious to learn more?
            </h3>
            <p className="text-xl opacity-90 mb-8">
              Book a free call with our expert to discuss your business needs and save time and effort.
            </p>
            <Button onClick={() => setContactModalOpen(true)} className="bg-white text-brand-orange hover:bg-gray-100 px-8 py-6 text-lg font-bold rounded-full">
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
    </section>;
};