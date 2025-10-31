
import { useCountry } from "@/contexts/CountryContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Feature {
  title: string;
  description: string;
}

interface PlaceholderContentProps {
  title: string;
  description: string;
  imageBg?: string;
  features?: Feature[];
}

export const PlaceholderContent = ({ 
  title, 
  description,
  imageBg = "bg-gradient-to-r from-brand-blue to-brand-green",
  features
}: PlaceholderContentProps) => {
  const navigate = useNavigate();

  const handleJoinUs = () => {
    navigate('/contact-us');
    window.scrollTo(0, 0);
  };
  return (
    <div className="py-20">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-4">
              <Badge variant="gradient" size="lg" className="mb-4">
                <ArrowUp className="h-4 w-4 mr-1" />
                New Feature
              </Badge>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-lg text-gray-600 mb-8">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleJoinUs} 
                className="bg-brand-orange hover:bg-brand-orange/90 font-bold"
              >
                Contact Us
              </Button>
            </div>
          </div>
          <div className={`${imageBg} h-64 md:h-80 rounded-lg flex items-center justify-center text-white font-bold text-xl p-8 text-center shadow-lg`}>
            <div className="w-full max-w-md">
              <div className="bg-white rounded-2xl shadow-lg p-1 mb-6 mx-auto w-fit">
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-1.5 rounded-full flex items-center justify-center">
                    <ArrowUp className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-medium text-gray-800">50-70% Cost Savings vs Full-Time CFO</span>
                </div>
              </div>
              {title} Content Coming Soon
            </div>
          </div>
        </div>
        
        <div className="mt-16 space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold">What We Offer</h2>
          <p className="text-gray-600">
            Our comprehensive services are designed to meet your specific needs, delivering excellence and expertise in every aspect of our work.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {features ? features.map((feature, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            )) : null}
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg mt-12">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Professional expertise backed by industry recognition</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Innovative solutions tailored to your business needs</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Transparent pricing with competitive rates</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Dedicated support team for seamless service delivery</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
