
import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, PhoneIcon } from "lucide-react";

const contactDetails = [
  {
    icon: <Mail className="h-6 w-6 text-brand-orange" />,
    title: "Mail Us",
    details: ["jd@growwthpartners.com"],
    subheading: "Let Us Assist You"
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-brand-orange" />,
    title: "Whatsapp",
    details: ["Live Support"],
    subheading: "Our Friendly team is here to help."
  },
  {
    icon: <MapPin className="h-6 w-6 text-brand-orange" />,
    title: "Visit Us",
    details: [
      "65 Chulia Street, #46-00 OCBC Centre, Singapore 049513"
    ],
    subheading: "Come say hello at our office HQ."
  },
  {
    icon: <PhoneIcon className="h-6 w-6 text-brand-orange" />,
    title: "Call Us",
    details: ["+65 9861 5600"],
    subheading: "Mon-fri from 8am to 5pm."
  }
];

export const ContactDetails = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="w-full px-4 py-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {contactDetails.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + (index * 0.1) }}
              className="bg-white/80 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#9b87f5]/20 hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Icon and Title Row */}
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-[#9b87f5]/10 to-[#D6BCFA]/20 p-3 rounded-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 flex-1">
                    {item.title}
                  </h3>
                </div>
                
                {/* Details Section */}
                <div className="space-y-2">
                  {item.details.map((detail, idx) => (
                    <div key={idx} className="min-w-0">
                      <p className="text-gray-700 font-medium text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                        {detail}
                      </p>
                    </div>
                  ))}
                  
                  {/* Subheading */}
                  <p className="text-xs text-gray-500 italic leading-relaxed">
                    {item.subheading}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
