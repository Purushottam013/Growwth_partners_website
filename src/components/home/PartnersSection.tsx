
import { useEffect, useRef } from "react";
import companyLogo from "/lovable-uploads/5f2bc1cf-2bab-424d-8245-eb52af504603.png";

export const PartnersSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const startScroll = () => {
      if (scrollRef.current) {
        const scrollWidth = scrollRef.current.scrollWidth;
        const clientWidth = scrollRef.current.clientWidth;
        
        let scrollPosition = 0;
        const scroll = () => {
          if (scrollRef.current) {
            scrollPosition++;
            if (scrollPosition >= scrollWidth / 2) {
              scrollPosition = 0;
            }
            scrollRef.current.scrollLeft = scrollPosition;
          }
        };
        
        const intervalId = setInterval(scroll, 20);
        return () => clearInterval(intervalId);
      }
    };
    
    const timeoutId = setTimeout(startScroll, 1000);
    return () => clearTimeout(timeoutId);
  }, []);
  
  // Create 12 logos for the infinite scroll effect
  const logos = Array(12).fill(companyLogo);
  
  return (
    <section id="industry-experience" className="py-16 bg-gray-50">
      <div className="container-custom">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Diverse experience of working with various industries
        </h3>
        
        <div className="relative overflow-hidden">
          {/* Gradient masks for seamless scrolling effect */}
          <div className="absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-gray-50 to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-gray-50 to-transparent"></div>
          
          <div 
            ref={scrollRef}
            className="flex overflow-x-scroll scrollbar-none py-4"
          >
            <div className="flex space-x-16 min-w-max px-12">
              {logos.map((logo, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center bg-white p-6 rounded-lg shadow-md w-32 h-32"
                >
                  <img 
                    src={logo} 
                    alt={`Partner ${index + 1}`} 
                    className="w-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
