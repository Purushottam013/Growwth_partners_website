
import React from "react";
import { motion } from "framer-motion";
import { FileText, Scale, Building, FileCheck, MapPin, Shield } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: <FileText className="h-8 w-8 text-brand-green" />,
      title: "Streamlined Paperwork",
      description: "We handle the intricate paperwork, ensuring a hassle-free registration process."
    },
    {
      icon: <Scale className="h-8 w-8 text-brand-green" />,
      title: "Legal Expertise",
      description: "Our team of experts navigates Singapore's legal landscape, guaranteeing compliance and peace of mind."
    },
    {
      icon: <Building className="h-8 w-8 text-brand-green" />,
      title: "Name Reservation",
      description: "We secure your chosen business name, avoiding potential naming conflicts."
    },
    {
      icon: <FileCheck className="h-8 w-8 text-brand-green" />,
      title: "Registration with Authorities",
      description: "Growwth takes care of all formalities with Singaporean authorities, expediting the process."
    },
    {
      icon: <MapPin className="h-8 w-8 text-brand-green" />,
      title: "Registered Address",
      description: "We provide a registered business address, a mandatory requirement for company incorporation in Singapore."
    },
    {
      icon: <Shield className="h-8 w-8 text-brand-green" />,
      title: "Corporate Secretary",
      description: "Our services include appointing a qualified corporate secretary, easing the administrative burden."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="heading-md mb-4">What Do We Get Done?</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Your Path to Asia Market Entry for Company Incorporation Services in Singapore
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-5 bg-brand-green/10 p-4 rounded-full w-16 h-16 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h4>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
              <div className="h-1 w-full bg-gradient-to-r from-brand-green to-brand-blue"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
