
import React from "react";
import { motion } from "framer-motion";
import { LineChart, PieChart, Landmark, Brain, Cpu } from "lucide-react";
import { OptimizedImage } from "../ui/optimized-image";

const whyImage = "/lovable-uploads/33d6747a-53fc-4629-b07b-b1f3534c1847.png";

export const WhyChooseSection = () => {
  const features = [
    {
      icon: <LineChart className="h-8 w-8 text-[#F87315]" />,
      title: "Comprehensive Analysis",
      description: "Over a decade of experience developing 1000+ financial models, ensuring depth and accuracy in our insights."
    },
    {
      icon: <PieChart className="h-8 w-8 text-brand-blue" />,
      title: "Scenario Planning",
      description: "Proactive approach to anticipate and plan for diverse business scenarios, ensuring resilience and adaptability."
    },
    {
      icon: <Landmark className="h-8 w-8 text-brand-green" />,
      title: "Investor-Relevant Models",
      description: "A decade of advising with a focus on what investors seek, ensuring our models align with their expectations."
    },
    {
      icon: <Brain className="h-8 w-8 text-brand-yellow" />,
      title: "Commercial Acumen",
      description: "20+ years of industry expertise, providing not just a spreadsheet but a defensible growth story. We go beyond being just excel experts; we are industry experts working across multiple industries."
    },
    {
      icon: <Cpu className="h-8 w-8 text-brand-purple" />,
      title: "Tech-Driven Solutions",
      description: "Utilising cutting-edge automation tools for efficient and error-free financial management."
    }
  ];

  return (
    <section className="py-14 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side features/cards */}
          <div className="opacity-0 animate-fadeIn">
            <h3 className="heading-md mb-6">Why Choose <span className="text-[#F87315]">Us</span>?</h3>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 opacity-0 animate-fadeIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-3 bg-gray-50 rounded-lg shadow-sm">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side image */}
          <div className="flex justify-center opacity-0 animate-fadeIn">
            <OptimizedImage
              src={whyImage}
              alt="Why Choose Us Visual"
              className="rounded-2xl shadow-md w-full max-w-md object-contain"
              height={400}
              width={500}
              style={{ background: "#fff" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
