
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ContactForm } from "@/components/ContactForm";
import { useState } from "react";

export const AboutHero = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-r from-brand-dark to-gray-900 text-white py-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/lovable-uploads/2e981926-f1aa-4635-a064-f9520c758a7f.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.15'
        }}
      />
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Run your business smarter with <span className="text-brand-orange">finance services</span> from industry led experts!
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Enjoy the freedom to focus solely on your business while we seamlessly take care of the rest. Let Growwth handle the intricacies of finance, compliance, and legality. At every stage – startup, growth, or expansion – consider Growwth your indispensable ally.
          </p>
          <Button 
            onClick={() => setContactModalOpen(true)}
            className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-6 text-lg rounded-full"
          >
            Book Free Call
          </Button>
        </motion.div>
      </div>

      <Dialog open={contactModalOpen} onOpenChange={setContactModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center">Book a Free Call</DialogTitle>
            <DialogDescription className="text-center">
              Schedule a consultation with our experts to discuss your business needs
            </DialogDescription>
          </DialogHeader>
          <ContactForm onSuccess={() => setContactModalOpen(false)} />
        </DialogContent>
      </Dialog>
    </section>
  );
};
