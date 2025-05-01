
import React from "react";
import { motion } from "framer-motion";
import { Users, BookOpen, FileCheck, Laptop } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";
import calculationImage from "/lovable-uploads/221e982a-6266-4524-962a-3f5d957224fb.png";

export const HowWeWorkSection = () => {
  const workItems = [
    {
      icon: <Users className="h-10 w-10 text-brand-orange" />,
      title: "1-1 Accounting Team Support",
      description: "Get a dedicated accounting expert personally assigned to you who manages your finances with precision and care."
    },
    {
      icon: <BookOpen className="h-10 w-10 text-brand-green" />,
      title: "All-Inclusive Bookkeeping",
      description: "Receive comprehensive bookkeeping services that cover every financial aspect of your business."
    },
    {
      icon: <FileCheck className="h-10 w-10 text-brand-blue" />,
      title: "Tax and Compliance",
      description: "Ensure seamless tax filing and compliance with all regulations, keeping your business audit-ready."
    },
    {
      icon: <Laptop className="h-10 w-10 text-brand-yellow" />,
      title: "User-Friendly Software",
      description: "Utilize our intuitive software for easy financial management, accessible from any device."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[#F1F0FB] to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-[#FDE1D3] text-brand-orange rounded-full text-sm font-semibold mb-4">Our Process</span>
          <h3 className="heading-md mb-4">How We Work?</h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We know time is valuable. Here's how we ensure seamless compliance for your business saves time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#E5DEFF]/30 rounded-full filter blur-3xl"></div>
            <div className="relative z-10">
              <div className="bg-white p-2 rounded-2xl shadow-2xl relative">
                <OptimizedImage 
                  src={calculationImage} 
                  alt="Team Collaboration" 
                  className="w-full h-[400px] rounded-xl object-cover"
                  fallbackSrc="/placeholder.svg"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-orange/10 rounded-full"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-brand-blue/10 rounded-full"></div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#FDE1D3]/30 rounded-full filter blur-3xl"></div>
          </motion.div>

          <div className="lg:col-span-7 space-y-8">
            {workItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-5 items-start bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="p-3 bg-gray-50 rounded-xl shadow-sm flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
