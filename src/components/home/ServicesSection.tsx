
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Building, 
  TrendingUp, 
  FileCheck, 
  BriefcaseBusiness, 
  DollarSign,
  ArrowRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: <BookOpen className="h-12 w-12 text-brand-orange" />,
      title: "Accounting & Bookkeeping",
      description: "Comprehensive bookkeeping and accounting services to keep your financial records accurate and up-to-date.",
      link: "/accounting"
    },
    {
      icon: <Building className="h-12 w-12 text-brand-orange" />,
      title: "Company Incorporation",
      description: "Efficient company formation services to help you start your business smoothly and legally.",
      link: "/company-incorporation"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-brand-orange" />,
      title: "Startup Growth Service",
      description: "Tailored support and strategies to accelerate the growth and success of your startup.",
      link: "/fractional-cfo"
    },
    {
      icon: <FileCheck className="h-12 w-12 text-brand-orange" />,
      title: "Company Secretary",
      description: "Professional company secretarial services to ensure compliance with statutory requirements.",
      link: "/corporate-secretary"
    },
    {
      icon: <BriefcaseBusiness className="h-12 w-12 text-brand-orange" />,
      title: "Fund Raising",
      description: "Expert assistance in securing funding and investment for your business ventures.",
      link: "/contact"
    },
    {
      icon: <DollarSign className="h-12 w-12 text-brand-orange" />,
      title: "Payroll Services",
      description: "Reliable payroll management services to ensure timely and accurate payment of your employees.",
      link: "/payroll"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/5 rounded-full -z-10 transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-semibold mb-3">WHAT WE OFFER</span>
            <h2 className="heading-lg mb-4">
              Our <span className="text-brand-orange">Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide tailored financial solutions to help your business thrive. 
              Our expert team delivers personalized services designed for your unique needs.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card 
                className={`h-full transition-all duration-300 overflow-hidden ${
                  hoveredCard === index 
                    ? "shadow-xl transform -translate-y-2 border-brand-orange" 
                    : "shadow-md hover:shadow-lg"
                }`}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-5 p-4 rounded-full bg-brand-orange/10 w-fit">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto flex items-center text-brand-orange font-medium hover:text-brand-orange/80 justify-start"
                    asChild
                  >
                    <a href={service.link}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
