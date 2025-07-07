
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  TrendingUp, 
  Network,
  Award,
  User,
  CheckCircle
} from 'lucide-react';

export const WhyChooseUsSection = () => {
  const whyChooseUs = [
    {
      icon: Award,
      title: "Proven Track Record",
      points: [
        "100+ years combined finance experience",
        "Ex-CFO at Rocket Internet leadership", 
        "100+ companies served globally"
      ]
    },
    {
      icon: Network,
      title: "Extensive Network",
      points: [
        "Curated investor connections",
        "Top-tier VCs and angel groups",
        "Active investment opportunities"
      ]
    },
    {
      icon: TrendingUp,
      title: "Industry Expertise",
      points: [
        "Deep market understanding",
        "Multiple sector experience",
        "Current funding trends knowledge"
      ]
    },
    {
      icon: User,
      title: "Personalized Approach",
      points: [
        "Tailored strategies for each client",
        "Business goals alignment",
        "Market position optimization"
      ]
    },
    {
      icon: CheckCircle,
      title: "End-to-End Support",
      points: [
        "Strategy to closing support",
        "Every stage guidance",
        "Comprehensive process management"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Growwth Partners?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Proven expertise, extensive network, and personalized support for your success
          </p>
        </div>

        {/* First Row - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {whyChooseUs.slice(0, 3).map((item, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-blue-400 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-6 text-white">
                  {item.title}
                </h3>
                <ul className="space-y-3">
                  {item.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Second Row - 2 Cards Centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {whyChooseUs.slice(3).map((item, index) => (
              <Card key={index + 3} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-blue-400 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-6 text-white">
                    {item.title}
                  </h3>
                  <ul className="space-y-3">
                    {item.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-3 text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
