
import { useCountry } from "@/contexts/CountryContext";
import { Button } from "@/components/ui/button";

interface PlaceholderContentProps {
  title: string;
  description: string;
  imageBg?: string;
}

export const PlaceholderContent = ({ 
  title, 
  description,
  imageBg = "bg-gradient-to-r from-brand-blue to-brand-green" 
}: PlaceholderContentProps) => {
  const { getCountryUrl } = useCountry();
  
  return (
    <div className="py-20">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-lg text-gray-600 mb-8">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                className="bg-brand-orange hover:bg-brand-orange/90"
              >
                <a href={getCountryUrl("contact")}>Contact Us</a>
              </Button>
              <Button 
                asChild
                variant="outline"
              >
                <a href={getCountryUrl("")}>Back to Home</a>
              </Button>
            </div>
          </div>
          <div className={`${imageBg} h-64 md:h-80 rounded-lg flex items-center justify-center text-white font-bold text-xl p-8 text-center shadow-lg`}>
            {title} Content Coming Soon
          </div>
        </div>
        
        <div className="mt-16 space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold">What We Offer</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-3">Feature {item}</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
                </p>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg mt-12">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Professional expertise in financial services</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Tailored solutions for your business needs</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Transparent pricing and no hidden fees</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Dedicated support team available for assistance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
