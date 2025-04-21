import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger
} from '@/components/ui/dialog';
import ExpertForm from './ExpertForm';
import { ChevronRight, Award, ShieldCheck, TrendingUp, BarChart3 } from 'lucide-react';
import heroImage from '/lovable-uploads/54b8e38f-0d15-438c-b9ac-a121ec19b560.png';

export const HeroSection: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const scrollToServices = () => {
    const el = document.getElementById('virtual-cfo-services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-gradient-to-b from-blue-100/80 via-white to-blue-100/40">
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-300/20 rounded-full filter blur-3xl animate-pulse opacity-70" />
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-brand-orange/20 rounded-full filter blur-3xl animate-pulse opacity-60 delay-500" />
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-300/20 rounded-full filter blur-2xl animate-pulse opacity-50 delay-300" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Hero Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex px-4 py-2 rounded-full bg-brand-orange/10 text-brand-orange font-medium shadow-sm"
            >
              <Award className="mr-2 h-4 w-4" />
              Singapore's Leading Fractional CFO Services
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
            >
              Fractional CFO <span className="text-brand-orange">Services in Singapore</span> for Startups & SMEs
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl text-gray-700"
            >
              Strategic financial leadership without the cost of a full-time hire—save 50-70% while accelerating your growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-brand-orange text-white px-6 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transform transition hover:scale-105 inline-flex items-center">
                    <span>Speak to an Expert</span>
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Speak to a CFO Expert</DialogTitle>
                    <DialogDescription>Fill in the form and we'll be in touch shortly.</DialogDescription>
                  </DialogHeader>
                  <ExpertForm onSuccess={() => setIsDialogOpen(false)} />
                </DialogContent>
              </Dialog>

              <Button onClick={scrollToServices} variant="outline" className="px-6 py-4">
                Learn Our Services
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start space-x-2 text-gray-500"
            >
              <ShieldCheck className="h-5 w-5 text-brand-orange" />
              <span className="text-sm">Trusted by 200+ Singapore businesses</span>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-3xl rotate-3" />
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={heroImage}
                alt="Financial analysis with charts"
                className="w-full h-auto max-h-[345px] object-cover"
              />

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">50-70% Cost Savings</h3>
                    <p className="text-xs text-gray-700">vs Full-Time CFO</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:translate-y-1 transition-transform"
              >
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-4 w-4 text-blue-600" />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">Data-Driven Insights</h3>
                    <p className="text-xs text-gray-700">Strategic Financial Planning</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
