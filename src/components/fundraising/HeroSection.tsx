
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Rocket,
  DollarSign,
  Building,
  Star,
  Globe,
  CheckCircle,
  Zap
} from 'lucide-react';

interface HeroSectionProps {
  onContactClick: () => void;
}

export const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden flex items-center">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-400/20 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-cyan-400/25 rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>
      
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rotate-45"></div>
        <div className="absolute bottom-40 right-40 w-24 h-24 border border-white/15 rotate-12"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-white/25 rotate-45"></div>
      </div>
      
      <div className="container-custom relative z-10 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Main Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border-white/30 px-4 py-2 text-sm backdrop-blur-md rounded-full">
                  <Rocket className="w-4 h-4" />
                  Expert-Led Fundraising Solutions
                </Badge>
                
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight">
                    Transform Your
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-pulse">
                      Vision Into
                    </span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
                      Reality
                    </span>
                  </h1>
                  
                  <p className="text-lg lg:text-xl text-blue-100 leading-relaxed max-w-2xl font-light">
                    From seed funding to Series A and beyond. Expert guidance to secure the capital your startup needs to thrive in today's competitive market.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-bold shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 rounded-full"
                  onClick={onContactClick}
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  Start Your Journey
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white/40 text-white hover:bg-white/15 px-8 py-4 text-lg backdrop-blur-md rounded-full font-semibold"
                  onClick={onContactClick}
                >
                  <DollarSign className="mr-2 h-5 w-5" />
                  For Investors
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                <div className="text-center group">
                  <div className="flex items-center justify-center mb-2">
                    <Building className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1">100+</div>
                  <div className="text-blue-200 text-sm">Companies Served</div>
                </div>
                <div className="text-center group">
                  <div className="flex items-center justify-center mb-2">
                    <DollarSign className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1">$500M+</div>
                  <div className="text-blue-200 text-sm">Capital Raised</div>
                </div>
                <div className="text-center group">
                  <div className="flex items-center justify-center mb-2">
                    <Star className="w-6 h-6 text-yellow-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1">85%</div>
                  <div className="text-blue-200 text-sm">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Right Side - Ready to Scale Card */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-500 w-full max-w-md">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Ready to Scale?</h3>
                      <p className="text-blue-200 text-sm">Join 100+ successful companies</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-white/10 rounded-lg p-3 border border-white/10 hover:bg-white/15 transition-colors">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-semibold text-sm">Pre-seed to Series A</span>
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-1">
                        <div className="bg-gradient-to-r from-green-400 to-blue-500 h-1 rounded-full w-3/4 shadow-lg"></div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-3 border border-white/10 hover:bg-white/15 transition-colors">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-semibold text-sm">Growth Capital</span>
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-1">
                        <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-1 rounded-full w-4/5 shadow-lg"></div>
                      </div>
                    </div>

                    <div className="bg-white/10 rounded-lg p-3 border border-white/10 hover:bg-white/15 transition-colors">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-semibold text-sm">Strategic Partnerships</span>
                        <Zap className="w-4 h-4 text-yellow-400" />
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-1">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-1 rounded-full w-5/6 shadow-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
