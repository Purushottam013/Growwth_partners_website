
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ContactForm } from "@/components/ContactForm";
import heroImage from "/lovable-uploads/804ce1ba-72ec-4fff-8f63-9af8f33229dd.png";

export const HeroSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#f4f7fd] py-12 md:py-20">
      <div className="container-custom relative z-10 flex flex-col md:flex-row items-center md:items-stretch gap-12">
        {/* Left */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-6 animate-fade-in">
            <span className="bg-white text-brand-orange px-4 py-2 rounded-full font-semibold shadow-md text-sm flex items-center gap-2 border border-orange-100">
              <span className="text-lg">⭐</span> Singapore's #1 Incorporation Service
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-brand-dark leading-tight mb-4 animate-fade-in">
            Company Incorporation <br className="hidden md:inline" />
            <span className="text-brand-orange">Services in Singapore</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8 md:max-w-xl animate-fade-in">
            Start your business journey with our 100% paperless incorporation services. Grow your business from anywhere in the world.
          </p>
          <Button 
            onClick={() => setContactModalOpen(true)}
            className="bg-brand-orange hover:bg-brand-orange/90 text-white px-7 py-5 text-lg font-semibold rounded-xl shadow-sm animate-fade-in"
          >
            Get Started Today &rarr;
          </Button>
          <div className="flex flex-col sm:flex-row items-stretch mt-12 gap-6 animate-fade-in">
            <div className="flex-1 text-center md:text-left">
              <div className="text-2xl font-bold text-brand-dark">200+</div>
              <div className="text-gray-600 text-sm">Businesses Served</div>
            </div>
            <div className="border-l border-gray-300 h-10 self-center hidden sm:block" />
            <div className="flex-1 text-center md:text-left">
              <div className="text-2xl font-bold text-brand-dark">100%</div>
              <div className="text-gray-600 text-sm">Paperless Process</div>
            </div>
            <div className="border-l border-gray-300 h-10 self-center hidden sm:block" />
            <div className="flex-1 text-center md:text-left">
              <div className="text-2xl font-bold text-brand-dark">24/7</div>
              <div className="text-gray-600 text-sm">Expert Support</div>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="flex-1 flex justify-center relative w-full h-[340px] md:h-[390px] lg:h-[420px]">
          <div className="relative w-[340px] md:w-[390px] lg:w-[420px] h-full drop-shadow-xl rounded-3xl bg-white">
            <img
              src={heroImage}
              alt="Singapore Business"
              className="rounded-3xl object-cover w-full h-full"
              style={{ objectPosition: "center" }}
            />
            {/* Overlays */}
            <div className="absolute right-4 top-6">
              <div className="bg-white flex items-center gap-2 px-6 py-2 rounded-full shadow-lg border border-gray-200 animate-fade-in">
                <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-bold mr-2">✔</span>
                <span className="text-gray-700 font-medium text-sm">Fast Registration</span>
              </div>
            </div>
            <div className="absolute left-[-40px] md:left-[-60px] bottom-10 shadow-lg rounded-full">
              <div className="bg-white flex items-center gap-2 px-6 py-2 rounded-full border border-gray-200 animate-fade-in">
                <span className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-sm font-bold mr-2">✔</span>
                <span className="text-gray-700 font-medium text-sm">100% Success Rate</span>
              </div>
            </div>
            {/* Card inside image */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[78%] bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl px-6 py-3 shadow-md">
              <div className="text-brand-green font-semibold text-md mb-0.5">Ready to Incorporate?</div>
              <div className="text-gray-800 text-[14px]">3 simple steps to start your business</div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={contactModalOpen} onOpenChange={setContactModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center">Contact Us</DialogTitle>
            <DialogDescription className="text-center">
              Fill in your details below and our experts will be in touch to discuss your company incorporation needs.
            </DialogDescription>
          </DialogHeader>
          <ContactForm onSuccess={() => setContactModalOpen(false)} />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;
