import { useState } from "react";
import { ArrowRight, ArrowDown, DollarSign, Trophy, Users, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ContactForm } from "@/components/ContactForm";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import financeImage from "/lovable-uploads/2e981926-f1aa-4635-a064-f9520c758a7f.png";

export const HeroSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const factBadges = [
    {
      icon: <DollarSign className="h-5 w-5 text-white" />,
      text: "$50M+ managed annually",
      position: "bottom-10 left-10",
      delay: 0.5,
      variant: "gradient"
    },
    {
      icon: <Trophy className="h-5 w-5 text-white" />,
      text: "95% client retention",
      position: "top-10 right-10",
      delay: 0.8,
      variant: "success"
    },
    {
      icon: <Users className="h-5 w-5 text-white" />,
      text: "500+ clients served",
      position: "bottom-20 right-5 lg:bottom-0 lg:right-20",
      delay: 1.1,
      variant: "info"
    },
    {
      icon: <Clock className="h-5 w-5 text-white" />,
      text: "15+ years experience",
      position: "top-10 left-5 lg:top-20 lg:left-10",
      delay: 1.4,
      variant: "gradient"
    },
  ];

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden py-12 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-green-50 to-blue-50 -z-10"></div>
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-orange/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#21C55D]/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-40 right-20 w-60 h-60 bg-brand-yellow/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-64 h-64 bg-brand-blue/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 pt-8 lg:pt-0">
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Badge 
                variant="soft" 
                className="py-2 px-4 text-base flex items-center gap-2 mb-3 w-fit"
                style={{ backgroundColor: '#F6E8E2', color: '#333' }}
              >
                <span className="bg-gradient-to-r from-brand-orange to-yellow-500 p-1.5 rounded-full flex items-center justify-center">
                  <Award className="h-5 w-5 text-white" />
                </span>
                <span className="font-medium">Singapore's Leading Financial Services</span>
              </Badge>
            </motion.div>

            <motion.h1 
              className="heading-xl text-brand-dark mb-5 animate-slide-up"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Fueling Business Growth With 
              <span className="text-brand-orange"> Expert Accounting</span> & Financial Services!
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-700 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              At Growth Partners, we provide more than just accounting and bookkeeping services. 
              Our customized financial solutions ensure that each client receives personalized 
              attention and expert advice tailored to their unique business needs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                onClick={() => setContactModalOpen(true)} 
                className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full px-8 py-6 text-lg font-medium group"
              >
                Speak To An Expert
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline"
                onClick={scrollToServices}
                className="border-brand-orange text-brand-orange hover:bg-brand-orange/10 rounded-full px-8 py-6 text-lg font-medium"
              >
                Our Services
              </Button>
            </motion.div>
            
            <motion.div 
              className="mt-12 hidden md:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="#industry-experience"
                className="inline-flex items-center text-brand-orange hover:text-brand-orange/80 transition-colors"
              >
                <span className="mr-2">Scroll to discover more</span>
                <ArrowDown className="h-4 w-4 animate-bounce" />
              </a>
            </motion.div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative rounded-lg overflow-hidden shadow-2xl"
              >
                <img
                  src={financeImage}
                  alt="Financial Growth"
                  className="rounded-lg object-cover mx-auto w-full"
                />
                
                {factBadges.map((badge, index) => (
                  <motion.div
                    key={index}
                    className={`absolute ${badge.position} hidden sm:block`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: badge.delay 
                    }}
                  >
                    <div className="rounded-2xl overflow-hidden p-0.5 bg-white shadow-lg">
                      <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white">
                        <div className="bg-[#21C55D] p-1.5 rounded-full flex items-center justify-center">
                          {badge.icon}
                        </div>
                        <span className="font-medium text-gray-800 whitespace-nowrap">{badge.text}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <div className="absolute inset-0 bg-[#21C55D]/10 rounded-lg filter blur-xl -z-10 transform translate-x-4 translate-y-4"></div>
          </div>
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
    </section>
  );
};
