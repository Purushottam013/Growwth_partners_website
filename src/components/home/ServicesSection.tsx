
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Building, 
  TrendingUp, 
  FileCheck, 
  BriefcaseBusiness, 
  DollarSign 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: <BookOpen className="h-12 w-12 text-brand-orange" />,
      title: "Accounting & Bookkeeping",
      description: "Comprehensive bookkeeping and accounting services to keep your financial records accurate and up-to-date."
    },
    {
      icon: <Building className="h-12 w-12 text-brand-orange" />,
      title: "Company Incorporation",
      description: "Efficient company formation services to help you start your business smoothly and legally."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-brand-orange" />,
      title: "Startup Growth Service",
      description: "Tailored support and strategies to accelerate the growth and success of your startup."
    },
    {
      icon: <FileCheck className="h-12 w-12 text-brand-orange" />,
      title: "Company Secretary",
      description: "Professional company secretarial services to ensure compliance with statutory requirements."
    },
    {
      icon: <BriefcaseBusiness className="h-12 w-12 text-brand-orange" />,
      title: "Fund Raising",
      description: "Expert assistance in securing funding and investment for your business ventures."
    },
    {
      icon: <DollarSign className="h-12 w-12 text-brand-orange" />,
      title: "Payroll Services",
      description: "Reliable payroll management services to ensure timely and accurate payment of your employees."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="heading-lg text-center mb-16">
          <span className="text-brand-orange">Services</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card 
                className={`h-full transition-all duration-300 ${
                  hoveredCard === index 
                    ? "shadow-xl transform -translate-y-2 border-brand-orange" 
                    : "shadow-md"
                }`}
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-5 p-4 rounded-full bg-brand-orange/10">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
