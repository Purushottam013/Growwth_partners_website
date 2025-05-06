
import React from "react";
import { motion } from "framer-motion";
import { BookText, UserCheck, Percent, LineChart, BarChart3 } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";

// Import image directly without using /public prefix in the path
import accountingChartLaptopImage from "/lovable-uploads/a13f7da4-7bc9-4766-a72f-647f69d4a085.png";

export const ServicesSection = () => {
  const services = [{
    icon: <BookText className="h-8 w-8 text-brand-orange" />,
    title: "Precise Bookkeeping",
    description: "Keep track of every financial detail with accuracy."
  }, {
    icon: <UserCheck className="h-8 w-8 text-brand-green" />,
    title: "Effortless Payroll Management",
    description: "Streamlined payroll processing for hassle-free payments."
  }, {
    icon: <Percent className="h-8 w-8 text-brand-blue" />,
    title: "Taxation Simplified",
    description: "Expert guidance and optimized strategies for tax efficiency."
  }, {
    icon: <LineChart className="h-8 w-8 text-brand-yellow" />,
    title: "Financial Reporting Clarity",
    description: "Clear insights into your business's financial health."
  }, {
    icon: <BarChart3 className="h-8 w-8 text-brand-orange" />,
    title: "Strategic Financial Advice",
    description: "Customized solutions to drive growth and profits."
  }];
  return <section className="bg-white py-[60px]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="order-2 lg:order-1">
            <h3 className="heading-md mb-4">Your Premier Accounting Services In Singapore</h3>
            <p className="text-lg text-gray-700 mb-10">
              We deliver transparent, efficient, personalized & accounting services in Singapore
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.4,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className="bg-gray-50 p-5 rounded-xl hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{service.title}</h4>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </motion.div>)}
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="order-1 lg:order-2 relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#E5DEFF]/30 rounded-full filter blur-3xl"></div>
            <div className="relative z-10">
              <img 
                  src={accountingChartLaptopImage} 
                  alt="Person using pink calculator with financial documents and receipts" 
                  className="w-full h-[400px] rounded-xl object-cover"
                />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#FDE1D3]/30 rounded-full filter blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>;
};
