
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    content: "Working with Growwth Partners transformed our business finances. Their expertise in fractional CFO services gave us the strategic insight we needed without the cost of a full-time executive.",
    author: "Sarah Johnson",
    position: "CEO, TechStart Solutions",
    rating: 5
  },
  {
    content: "The team at Growwth Partners helped us streamline our accounting processes and identify cost-saving opportunities we hadn't seen before. Their attention to detail is impressive.",
    author: "Michael Chen",
    position: "Operations Director, Global Imports",
    rating: 5
  },
  {
    content: "Their cash flow modeling services were game-changing for our business planning. We now have a much clearer picture of our finances and can make more informed decisions.",
    author: "Priya Sharma",
    position: "Finance Manager, Innovative Retail",
    rating: 5
  },
  {
    content: "I was impressed by how quickly Growwth Partners understood our unique business challenges and provided customized solutions that actually worked for our situation.",
    author: "David Wilson",
    position: "Founder, Digital Creations",
    rating: 4
  },
  {
    content: "Their bookkeeping service is thorough and reliable. We no longer worry about our financial records and can focus on growing our business instead.",
    author: "Amanda Lewis",
    position: "Small Business Owner",
    rating: 5
  }
];

export const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  // Handle manual navigation
  const next = () => {
    setCurrent((current + 1) % testimonials.length);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 5000);
  };
  
  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 5000);
  };
  
  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrent((current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [current, autoplay]);
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Clients Love Us</h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it - hear what our clients have to say about our services.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border-0 shadow-lg bg-white">
                    <CardContent className="p-8">
                      <div className="mb-6 flex justify-center">
                        <Quote className="h-12 w-12 text-brand-orange opacity-20" />
                      </div>
                      <p className="text-lg text-gray-700 text-center mb-6">{testimonial.content}</p>
                      <div className="text-center">
                        <div className="flex justify-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i} 
                              className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`} 
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          ))}
                        </div>
                        <h4 className="text-lg font-bold text-gray-800">{testimonial.author}</h4>
                        <p className="text-sm text-gray-500">{testimonial.position}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 bg-white rounded-full shadow-lg p-3 focus:outline-none hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 bg-white rounded-full shadow-lg p-3 focus:outline-none hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index);
                  setAutoplay(false);
                  setTimeout(() => setAutoplay(true), 5000);
                }}
                className={`mx-1 w-3 h-3 rounded-full transition-all ${
                  current === index ? "bg-brand-orange w-8" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
