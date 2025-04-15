
import { useEffect, useState, useRef } from "react";
import { CheckCircle } from "lucide-react";
import { motion, useInView } from "framer-motion";

export const TrustedPartnerSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });
  
  const features = [
    {
      title: "Proven Reputation",
      description: "We have a proven track record of serving over 500 clients, including start-ups, SMEs, and growing organizations. Our team consists of seasoned professionals with decades of experience in finance, commercial operations, execution, and strategy. We have a deep understanding of what it takes to grow a business, making us a reliable partner for SMBs."
    },
    {
      title: "Crafting Success Stories",
      description: "We are not just service providers; we are your dedicated growth partners. Our belief in mutual success drives us to truly partner with you. Our unique fee structure reflects our commitment to nurturing long-term relationships, ensuring we grow only when you do."
    },
    {
      title: "Value-Adding Solutions",
      description: "Our belief in mutual success drives us to truly partner with you. Our unique fee structure reflects our commitment to nurturing long-term relationships, ensuring we grow only when you do."
    },
    {
      title: "Agility and Adaptability",
      description: "We pride ourselves on our agile and flexible approach, allowing us to swiftly and efficiently adapt to your needs. Our team works as a part of your team, ensuring seamless integration and understanding of your business."
    }
  ];
  
  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [isInView, features.length]);

  return (
    <section className="py-20 bg-white overflow-hidden" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="heading-lg mb-4">
            Your Trusted Partner for Accounting, Bookkeeping, and Financial Advisory Services
          </h2>
          <p className="text-xl text-brand-orange font-semibold">
            Trusted by 500+ organizations with 95%+ customer satisfaction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-16">
          {/* Feature tabs */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-brand-orange text-white shadow-lg"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="flex items-center">
                    <CheckCircle 
                      className={`mr-3 h-6 w-6 ${
                        activeIndex === index ? "text-white" : "text-brand-orange"
                      }`} 
                    />
                    <h3 className="font-bold text-lg">{feature.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Feature details */}
          <div className="lg:col-span-3 bg-gray-50 p-8 rounded-xl shadow-lg">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ 
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 50
                }}
                transition={{ duration: 0.5 }}
                className={`${activeIndex === index ? "block" : "hidden"}`}
              >
                <h3 className="text-2xl font-bold text-brand-orange mb-4">{feature.title}</h3>
                <p className="text-lg text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
