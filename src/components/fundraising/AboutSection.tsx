
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Rocket } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            About Our Fundraising Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-200/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Expert Guidance</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  At Growwth Partners, we understand that securing funding is one of the most critical steps in your startup journey. Our experienced team provides end-to-end fundraising support, combining deep market knowledge with proven strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-200/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Scaling Success</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Whether you're preparing for your first funding round or looking to scale through Series A, B, or later stages, we provide the expertise and network you need to connect with the right investors at the right time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
