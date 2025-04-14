
import { Button } from "@/components/ui/button";
import { useCountry } from "@/contexts/CountryContext";

export const CtaSection = () => {
  const { getCountryUrl } = useCountry();
  
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/10 via-brand-yellow/10 to-brand-green/10 transform -skew-y-6"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="bg-gradient-to-br from-brand-blue to-brand-green p-8 text-white flex items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Business Finances?</h3>
                <p className="mb-6">
                  Take the first step towards financial clarity and growth with our expert team.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Tailored financial strategies</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Expert fractional CFO services</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Strategic growth planning</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Schedule a Free Consultation</h3>
              <p className="text-gray-600 mb-6">
                Our experts are ready to discuss your unique business needs and how we can help.
              </p>
              <div className="space-y-4">
                <Button 
                  asChild
                  className="w-full bg-brand-orange hover:bg-brand-orange/90"
                >
                  <a href={getCountryUrl("contact")}>
                    Contact Us Today
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  className="w-full border-brand-orange text-brand-orange hover:bg-brand-orange/10"
                >
                  <a href="tel:+6588930720">
                    Call +65 8893 0720
                  </a>
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center">
                No obligation, just professional advice
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
