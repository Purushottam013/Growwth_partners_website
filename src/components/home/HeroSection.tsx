
import { useState } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ContactForm } from "@/components/ContactForm";
import heroImage from "/lovable-uploads/5f2bc1cf-2bab-424d-8245-eb52af504603.png";

export const HeroSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 -z-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-orange/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-blue/5 rounded-full filter blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="heading-xl text-brand-dark mb-6 animate-slide-up">
              Fueling Business Growth With 
              <span className="text-brand-orange"> Expert Accounting & Financial Services!</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 animation-delay-200 animate-slide-up">
              At Growth Partners, we provide more than just accounting and bookkeeping services. 
              Our customized financial solutions ensure that each client receives personalized 
              attention and expert advice tailored to their unique business needs.
            </p>
            <div className="animation-delay-300 animate-slide-up">
              <Button 
                onClick={() => setContactModalOpen(true)} 
                className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full px-8 py-6 text-lg font-medium group"
              >
                Speak To An Expert
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="mt-12 hidden md:block">
              <a
                href="#industry-experience"
                className="inline-flex items-center text-brand-orange hover:text-brand-orange/80 transition-colors"
              >
                <span className="mr-2">Scroll to discover more</span>
                <ArrowDown className="h-4 w-4 animate-bounce" />
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10 animate-float-slow">
              <img
                src={heroImage}
                alt="Growth Partners"
                className="rounded-lg shadow-2xl object-cover mx-auto"
              />
            </div>
            <div className="absolute inset-0 bg-brand-orange/10 rounded-lg filter blur-xl -z-10 transform translate-x-4 translate-y-4"></div>
          </div>
        </div>
      </div>

      {/* Contact Dialog */}
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
    </section>
  );
};
