import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Building, TrendingUp, FileCheck, BriefcaseBusiness, DollarSign, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const services = [{
    icon: <BookOpen className="h-12 w-12 text-brand-orange" />,
    title: "Accounting & Bookkeeping",
    description: "Comprehensive bookkeeping and accounting services to keep your financial records accurate and up-to-date.",
    link: "/accounting",
    image: "/lovable-uploads/ea43d5c9-d122-4ead-b816-df9b6bfae0e3.png"
  }, {
    icon: <Building className="h-12 w-12 text-brand-orange" />,
    title: "Company Incorporation",
    description: "Efficient company formation services to help you start your business smoothly and legally.",
    link: "/company-incorporation",
    image: "/lovable-uploads/ef68f631-a956-4ecf-97fb-9ada6c055e8c.png"
  }, {
    icon: <TrendingUp className="h-12 w-12 text-brand-orange" />,
    title: "Startup Growth Service",
    description: "Tailored support and strategies to accelerate the growth and success of your startup.",
    link: "/fractional-cfo",
    image: "/lovable-uploads/febac4ca-b732-41a5-a979-e95223a26a56.png"
  }, {
    icon: <FileCheck className="h-12 w-12 text-brand-orange" />,
    title: "Company Secretary",
    description: "Professional company secretarial services to ensure compliance with statutory requirements.",
    link: "/corporate-secretary",
    image: "/lovable-uploads/ee6e6742-615b-4ace-b909-1927ece7fa0e.png"
  }, {
    icon: <BriefcaseBusiness className="h-12 w-12 text-brand-orange" />,
    title: "Fractional CFO",
    description: "A financial expert providing high-level strategic financial leadership and guidance to businesses, offering cost-effective access to experienced CFO-level expertise.",
    link: "/contact",
    image: "/lovable-uploads/ed0aceb6-fbf6-4386-96fd-dd7675e87616.png"
  }, {
    icon: <DollarSign className="h-12 w-12 text-brand-orange" />,
    title: "Payroll Services",
    description: "Reliable payroll management services to ensure timely and accurate payment of your employees.",
    link: "/payroll",
    image: "/lovable-uploads/c7239ec6-a71a-438a-9739-33d28fa85a23.png"
  }];

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section 
      id="services-section" 
      className="bg-white relative overflow-hidden py-[40px]"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/5 rounded-full -z-10 transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.div initial={{
            opacity: 0,
            y: -20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }}>
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
        
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }}>
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants} 
              transition={{
                duration: 0.5
              }} 
              onMouseEnter={() => setHoveredCard(index)} 
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card className={`h-full transition-all duration-300 overflow-hidden ${hoveredCard === index ? "shadow-xl transform -translate-y-2 border-brand-orange" : "shadow-md hover:shadow-lg"}`}>
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <div className="mb-2 p-3 rounded-full bg-white/90 backdrop-blur-sm w-fit">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto flex items-center text-brand-orange font-medium hover:text-brand-orange/80 justify-start" 
                      asChild
                    >
                      <a href={service.link}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
