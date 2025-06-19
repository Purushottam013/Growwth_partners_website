
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
      className="w-full max-w-none mx-auto px-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center">
        {contactDetails.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 + (index * 0.1) }}
            className="bg-white/80 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#9b87f5]/20 hover:-translate-y-1 w-full max-w-[300px] min-h-[180px]"
          >
            <div className="flex flex-col space-y-3 h-full">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-[#9b87f5]/10 to-[#D6BCFA]/20 p-3 rounded-lg flex-shrink-0">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
              </div>
              
              <div className="ml-2 flex-grow">
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm overflow-wrap-anywhere">
                    {detail}
                  </p>
                ))}
                <p className="text-sm text-gray-500 mt-2 italic">
                  {item.subheading}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
