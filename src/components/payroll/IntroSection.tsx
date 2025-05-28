
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ContactModal } from "@/components/ui/contact-modal";
export const IntroSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h3 className="heading-md mb-6 text-brand-dark">
            Payroll Outsourcing Services in Singapore​
          </h3>
          <p className="text-lg text-gray-700 mb-8">
            We help you manage everything accurately and efficiently, from consolidating payroll inputs and processing payroll and tax reports to meeting statutory compliance and filings.
            <span className="block mt-4 font-medium text-brand-orange">
              Discover the ease of payroll management services with Growwth – your partner in success
            </span>
          </p>
          <Button
            onClick={() => setContactModalOpen(true)}
            className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-6 text-lg font-semibold rounded-full"
          >
            Speak To An Expert
          </Button>
        </motion.div>
      </div>

 
       <ContactModal 
        open={contactModalOpen} 
        onOpenChange={setContactModalOpen} 
      />
    </section>
  );
};
