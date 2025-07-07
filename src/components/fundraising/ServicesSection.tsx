
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Target, 
  Users, 
  FileText, 
  Shield, 
  Handshake,
  CheckCircle
} from 'lucide-react';

export const ServicesSection = () => {
  const services = [
    {
      icon: Target,
      title: "Fundraising Strategy & Planning",
      description: "Comprehensive fundraising strategy tailored to your business stage and market conditions.",
      details: ["Strategic positioning", "Market analysis", "Timing optimization", "Growth roadmap"]
    },
    {
      icon: Users,
      title: "Investor Identification & Outreach",
      description: "Connect with the right investors through our extensive network of VCs and angel investors.",
      details: ["Investor matching", "Network access", "Pitch preparation", "Relationship building"]
    },
    {
      icon: FileText,
      title: "Pitch Deck Development",
      description: "Create compelling presentations that capture investor attention and drive funding decisions.",
      details: ["Story crafting", "Visual design", "Data presentation", "Investment thesis"]
    },
    {
      icon: Shield,
      title: "Due Diligence Preparation",
      description: "Get investor-ready with organized financials, legal documents, and KPIs.",
      details: ["Document organization", "Financial preparation", "Legal compliance", "Process streamlining"]
    },
    {
      icon: Handshake,
      title: "Negotiation Support",
      description: "Navigate term sheets and investment agreements with expert guidance.",
      details: ["Term sheet review", "Valuation analysis", "Deal structuring", "Legal support"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive fundraising solutions tailored to your business needs
          </p>
        </div>

        {/* First Row - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {services.slice(0, 3).map((service, index) => (
            <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-blue-50/50 to-purple-50/50">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{detail}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Second Row - 2 Cards Centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {services.slice(3).map((service, index) => (
              <Card key={index + 3} className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-green-50/50 to-blue-50/50">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
