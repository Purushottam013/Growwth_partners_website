
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ContactForm } from "@/components/ContactForm";

export const ComplianceSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-full flex items-center"
          >
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#D3E4FD]/30 rounded-full filter blur-3xl"></div>
            <div className="h-full flex items-center justify-center">
              <img 
                src="/lovable-uploads/9e1ac171-5c61-4717-9652-6498cdb9e30e.png" 
                alt="Tax Compliance Form" 
                className="w-full max-w-md h-auto rounded-xl shadow-lg relative z-10" 
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#FEF7CD]/30 rounded-full filter blur-3xl"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-full flex flex-col justify-center"
          >
            <h3 className="heading-md mb-6 text-gray-900">
              Stay on top of your tax compliance
            </h3>
            <p className="text-xl font-medium text-brand-orange mb-6">
              Why Choose Growwth? Simplified Reporting
            </p>
            
            <div className="space-y-6 mb-10">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <h4 className="font-bold text-lg mb-2">Understand your tax returns with ease</h4>
                <p className="text-gray-700">We present your tax information in a clear, understandable format, avoiding complex jargon.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <h4 className="font-bold text-lg mb-2">Linked financials</h4>
                <p className="text-gray-700">Click through to see how we arrived at each number, ensuring transparency and clarity.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <h4 className="font-bold text-lg mb-2">Common inaccuracy pitfalls avoided</h4>
                <p className="text-gray-700">Our method ensures you understand your figures better than ever before.</p>
              </motion.div>
            </div>
            
            <Button
              onClick={() => setContactModalOpen(true)}
              className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-5 text-lg font-semibold rounded-lg"
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
              Fill in your details and our tax expert will get in touch with you shortly.
            </DialogDescription>
          </DialogHeader>
          <ContactForm onSuccess={() => setContactModalOpen(false)} />
        </DialogContent>
      </Dialog>
    </section>
  );
};
