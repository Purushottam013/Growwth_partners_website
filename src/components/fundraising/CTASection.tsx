
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Star,
  Rocket,
  ArrowRight,
  Mail,
  Phone
} from 'lucide-react';

interface CTASectionProps {
  onContactClick: () => void;
}

export const CTASection = ({ onContactClick }: CTASectionProps) => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/3 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/3 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Geometric decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/15 rotate-12 animate-pulse delay-1000"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="inline-flex items-center gap-2 bg-white/15 text-white border-white/30 px-6 py-3 text-base backdrop-blur-md rounded-full mb-8 shadow-lg">
              <Star className="w-5 h-5" />
              Ready to Transform Your Business?
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Ready to Get
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
                Started?
              </span>
            </h2>
            <p className="text-xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Take the first step towards securing your next funding round. Our team is ready to help you achieve your fundraising goals and unlock your startup's potential.
            </p>
          </div>
          
          {/* Enhanced Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            {/* Email Card */}
            <Card className="bg-white/15 backdrop-blur-xl border border-white/30 hover:bg-white/20 transition-all duration-300 group transform hover:scale-105 hover:shadow-2xl shadow-xl">
              <CardContent className="p-8 text-center relative overflow-hidden">
                {/* Card decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full blur-xl"></div>
                
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-blue-400 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-white">Email Us</h3>
                  <p className="text-blue-100 mb-6 text-base leading-relaxed">Get in touch via email for detailed discussions about your fundraising needs</p>
                  <a 
                    href="mailto:jd@growwthpartners.com" 
                    className="inline-flex items-center gap-2 text-white hover:text-blue-200 transition-colors font-semibold text-base bg-white/10 px-6 py-3 rounded-full hover:bg-white/20 border border-white/20 hover:border-white/40 backdrop-blur-sm"
                  >
                    jd@growwthpartners.com
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
            
            {/* Phone Card */}
            <Card className="bg-white/15 backdrop-blur-xl border border-white/30 hover:bg-white/20 transition-all duration-300 group transform hover:scale-105 hover:shadow-2xl shadow-xl">
              <CardContent className="p-8 text-center relative overflow-hidden">
                {/* Card decoration */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full blur-xl"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br from-pink-400/20 to-transparent rounded-full blur-xl"></div>
                
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-purple-400 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-white">Call Us</h3>
                  <p className="text-blue-100 mb-6 text-base leading-relaxed">Speak directly with our fundraising experts for immediate assistance</p>
                  <a 
                    href="tel:+6598615600" 
                    className="inline-flex items-center gap-2 text-white hover:text-blue-200 transition-colors font-semibold text-base bg-white/10 px-6 py-3 rounded-full hover:bg-white/20 border border-white/20 hover:border-white/40 backdrop-blur-sm"
                  >
                    +65 9861 5600
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced CTA Button */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 rounded-full border-2 border-transparent hover:border-blue-200 group"
              onClick={onContactClick}
            >
              <Rocket className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
              Schedule a Consultation
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-blue-200 text-sm mt-4 max-w-md mx-auto">
              Free 30-minute consultation to discuss your fundraising strategy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
