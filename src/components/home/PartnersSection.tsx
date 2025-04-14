
import { useEffect, useRef } from "react";

// Partner logos would typically be imported from assets
const partnerLogos = [
  "Amazon",
  "Microsoft",
  "Google",
  "Adobe",
  "Salesforce",
  "Oracle",
  "IBM",
  "SAP",
  "Deloitte",
  "KPMG"
];

export const PartnersSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    
    const scroll = () => {
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      } else {
        slider.scrollLeft += 1;
      }
    };
    
    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Trusted by Leading Companies</h2>
        
        <div className="relative overflow-hidden">
          <div
            ref={sliderRef}
            className="flex items-center justify-start gap-12 overflow-x-scroll scrollbar-none scroll-smooth"
            style={{ scrollBehavior: 'smooth' }}
          >
            {/* First set of logos */}
            {partnerLogos.map((logo, index) => (
              <div key={`logo-1-${index}`} className="flex-shrink-0 py-2">
                <div className="bg-white h-16 min-w-[180px] rounded-md shadow-sm flex items-center justify-center font-bold text-xl text-gray-600">
                  {logo}
                </div>
              </div>
            ))}
            
            {/* Duplicate logos for infinite scroll effect */}
            {partnerLogos.map((logo, index) => (
              <div key={`logo-2-${index}`} className="flex-shrink-0 py-2">
                <div className="bg-white h-16 min-w-[180px] rounded-md shadow-sm flex items-center justify-center font-bold text-xl text-gray-600">
                  {logo}
                </div>
              </div>
            ))}
          </div>
          
          {/* Shadow overlay for fade effect */}
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};
