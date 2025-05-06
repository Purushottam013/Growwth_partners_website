
import { useRef } from "react";
import { motion } from "framer-motion";
import { OptimizedImage } from "@/components/ui/optimized-image";
import appboxoLogo from "/lovable-uploads/eacfd0b4-a51e-48ed-8dee-273d0e3cb95e.png";
import cenoaLogo from "/lovable-uploads/17aac22b-d2eb-4833-9e10-64fc56be4ace.png";
import channelFactoryLogo from "/lovable-uploads/c1b780f8-d39e-41c9-ae1f-7a21887507d1.png";
import dataleapLogo from "/lovable-uploads/59b87ecc-31d9-4461-8797-0c7ea4767efa.png";
import eblityLogo from "/lovable-uploads/7418733e-89fd-4714-88ce-a25077015abb.png";
import gnowbeLogo from "/lovable-uploads/88257c1a-be18-4216-a182-5c9094b565b9.png";
import greenALogo from "/lovable-uploads/0b77977a-7c18-484d-91db-d36ecc85d914.png";
import hdiLogo from "/lovable-uploads/99dda4f2-b7f4-46c0-8ee6-1c166ae0e0a3.png";
import heiHomesLogo from "/lovable-uploads/acdabfd4-01fd-4e23-8b11-ea624f680da4.png";
import peaceLilyLogo from "/lovable-uploads/675e92d1-f78a-4d54-a3d2-7b1ecb87e81d.png";
import mayaConsultingLogo from "/lovable-uploads/9f095a7e-c6a7-42c7-91f7-1392ee523a5e.png";
import navsarLogo from "/lovable-uploads/01d4597b-3f9e-4d9e-95e2-ae2406f63c3b.png";
import tmsLogo from "/lovable-uploads/228a715e-ab46-4e42-98be-1cd1f64064c3.png";
import treeDotsLogo from "/lovable-uploads/433c066a-08d9-4303-85e7-650c373ede0a.png";

export const PartnersSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  // Array of company logos with their names
  const logos = [{
    src: appboxoLogo,
    name: 'Appboxo'
  }, {
    src: cenoaLogo,
    name: 'Cenoa'
  }, {
    src: channelFactoryLogo,
    name: 'Channel Factory'
  }, {
    src: dataleapLogo,
    name: 'Dataleap'
  }, {
    src: eblityLogo,
    name: 'Eblity'
  }, {
    src: gnowbeLogo,
    name: 'Gnowbe'
  }, {
    src: greenALogo,
    name: 'GreenA'
  }, {
    src: hdiLogo,
    name: 'HDI'
  }, {
    src: heiHomesLogo,
    name: 'Hei Homes'
  }, {
    src: peaceLilyLogo,
    name: 'Peace Lily'
  }, {
    src: mayaConsultingLogo,
    name: 'Maya Consulting'
  }, {
    src: navsarLogo,
    name: 'Navsar'
  }, {
    src: tmsLogo,
    name: 'TMS Motor Group'
  }, {
    src: treeDotsLogo,
    name: 'TreeDots'
  }];

  // Animation for the slider
  const sliderVariants = {
    animate: {
      x: [0, -2000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: 30,
          ease: "linear"
        }
      }
    }
  };

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];
  return <section id="industry-experience" className="bg-gray-50 py-[14px]">
      <div className="container-custom">
        <div className="relative">
          {/* Gradient masks for seamless appearance */}
          <div className="absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
          
          {/* Slider container with no scrollbar */}
          <div className="overflow-hidden py-6">
            <motion.div ref={sliderRef} className="flex" variants={sliderVariants} animate="animate">
              {duplicatedLogos.map((logo, index) => <div key={`${logo.name}-${index}`} className="flex-shrink-0 mx-3">
                  <div className="bg-white p-2 rounded-lg shadow-md w-28 h-20 flex items-center justify-center">
                    <OptimizedImage 
                      src={logo.src} 
                      alt={`${logo.name} logo`} 
                      className="w-full h-auto object-contain opacity-80 hover:opacity-100 transition-opacity" 
                      loading="eager"
                      width={112} 
                      height={80}
                      priority={index < 5}
                    />
                  </div>
                </div>)}
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
};
