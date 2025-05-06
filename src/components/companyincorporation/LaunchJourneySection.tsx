
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ContactForm } from "@/components/ContactForm";

export const LaunchJourneySection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-gradient-to-r from-brand-green/90 to-brand-blue/80 py-16 px-4 md:px-0">
      <div className="container-custom flex flex-col items-center justify-center text-center animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Launch Your Entrepreneurial Journey With Growwth Partners!
        </h2>
        <p className="text-lg text-white/90 mb-6">
          We are here to help you!
        </p>
        <Button
          onClick={() => setOpen(true)}
          className="bg-white text-brand-green px-8 py-4 rounded-full font-semibold text-lg shadow hover:bg-brand-green/10 transition-colors"
        >
          Speak To An Expert
        </Button>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center">Speak To An Expert</DialogTitle>
            <DialogDescription className="text-center">
              Fill in your details below and our incorporation experts will contact you.
            </DialogDescription>
          </DialogHeader>
          <ContactForm onSuccess={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default LaunchJourneySection;
