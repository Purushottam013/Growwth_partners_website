
import { Button } from "@/components/ui/button";
import { useCountry } from "@/contexts/CountryContext";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  const { getCountryUrl } = useCountry();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F4F8FC] via-[#E8F0FC] to-[#FEFEFE] py-20 md:py-32">
      {/* Animated Shapes with improved colors */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-yellow/15 rounded-full filter blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-blue/15 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute top-40 right-20 w-60 h-60 bg-[#E7EBFF]/30 rounded-full filter blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-40 left-40 w-40 h-40 bg-[#F7ECE7]/20 rounded-full filter blur-3xl animate-float"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold !leading-tight animate-fade-in">
              Your Partner for Business <span className="text-brand-orange">Growth</span> & <span className="text-brand-blue">Financial Success</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 md:text-xl animate-slide-up animation-delay-200">
              We provide expert financial solutions tailored to your business needs, helping you grow efficiently while staying financially sound.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-300">
              <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange/90">
                <a href={getCountryUrl("contact")}>
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={getCountryUrl("about")}>
                  Learn More
                </a>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative overflow-hidden rounded-lg shadow-2xl animate-float">
              <div className="aspect-[4/3] bg-gradient-to-tr from-brand-blue to-brand-green/70 rounded-lg flex items-center justify-center p-8">
                <div className="text-white text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Financial Success Awaits</h3>
                  <div className="grid grid-cols-2 gap-6 mt-8">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                      <div className="text-4xl font-bold">95%</div>
                      <div className="text-sm mt-2">Client Satisfaction</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                      <div className="text-4xl font-bold">25+</div>
                      <div className="text-sm mt-2">Years Experience</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                      <div className="text-4xl font-bold">500+</div>
                      <div className="text-sm mt-2">Businesses Helped</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                      <div className="text-4xl font-bold">3</div>
                      <div className="text-sm mt-2">Global Locations</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -left-6 bg-brand-yellow p-4 rounded-lg shadow-lg animate-float">
              <div className="text-sm font-bold">Cash Flow Optimization</div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-orange p-4 rounded-lg shadow-lg animate-float-slow">
              <div className="text-sm font-bold text-white">Expert CFO Services</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
