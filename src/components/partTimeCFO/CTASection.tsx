import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import ExpertForm from './ExpertForm';

export const CTASection: React.FC = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50/50 overflow-hidden">
      <div className="container-custom">
        <div className="relative bg-brand-orange/5 rounded-3xl p-10 sm:p-16 shadow-lg overflow-hidden">
          {/* Decorative Blurs */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-brand-orange/10 rounded-full filter blur-3xl"></div>
          <div className="absolute left-20 -top-20 w-64 h-64 bg-blue-400/10 rounded-full filter blur-3xl"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 text-center max-w-3xl mx-auto"
          >
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            >
              Ready to Transform Your Finance Function?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-700 mb-10"
            >
              Let's explore how our fractional CFO services can bring clarity, confidence, and strategic direction to your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Dialog open={contactOpen} onOpenChange={setContactOpen}>
                <DialogTrigger asChild>
                  <Button
                    onClick={() => setContactOpen(true)}
                    className="bg-brand-orange text-white hover:bg-brand-orange/90 shadow-lg hover:shadow-xl px-8 py-7 text-lg font-medium rounded-xl transform transition-all duration-300 hover:scale-105 inline-flex items-center"
                  >
                    <span>Book a Free CFO Consultation</span>
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-center">Book a Free CFO Consultation</DialogTitle>
                    <DialogDescription className="text-center">
                      Fill in the form below and we'll get back to you shortly.
                    </DialogDescription>
                  </DialogHeader>
                  <ExpertForm onSuccess={() => setContactOpen(false)} />
                </DialogContent>
              </Dialog>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
