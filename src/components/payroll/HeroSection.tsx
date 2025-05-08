
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BadgeCheck, CircleDollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import payrollHeroImage from "/lovable-uploads/a98ed889-8aa1-431a-aa5c-2883e1d8f642.png";
import { OptimizedImage } from "../ui/optimized-image";

export const HeroSection = () => {
  return (
    <section className="relative py-10 md:py-16 overflow-hidden bg-gradient-to-b from-white to-[#FFF3E8]/30">
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
              Payroll Services in Singapore – <span className="text-brand-orange">Streamlined Operations</span> and Satisfied Employees
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Let our experts handle your payroll intricacies. Experience seamless, error-free payroll management with us.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Button 
                asChild
                className="bg-brand-orange hover:bg-brand-orange/90 text-white px-7 py-5 text-lg font-medium rounded-full"
              >
                <Link to="/contact#consultation-form">
                  Contact Us
                </Link>
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
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-brand-blue/20 mix-blend-overlay rounded-2xl"></div>
              <OptimizedImage 
                src={payrollHeroImage} 
                alt="Payroll Services" 
                className="w-full h-full object-cover rounded-2xl transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-8 -left-8 z-20"
            >
              <div className="flex items-center gap-2 bg-white rounded-xl p-3 shadow-lg animate-float-slow backdrop-blur-sm border border-gray-100">
                <div className="bg-brand-orange/10 p-2 rounded-lg">
                  <BadgeCheck className="h-5 w-5 text-brand-orange" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">100%</p>
                  <p className="text-xs text-gray-600">Compliance Rate</p>
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
                <div className="bg-brand-orange/10 p-2 rounded-lg">
                  <CircleDollarSign className="h-5 w-5 text-brand-orange" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Efficient</p>
                  <p className="text-xs text-gray-600">Processing</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
