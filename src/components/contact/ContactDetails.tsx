
import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, PhoneIcon } from "lucide-react";

const contactDetails = [
  {
    icon: <Mail className="h-6 w-6 text-brand-orange" />,
    title: "Mail Us",
    subheading: "Let Us Assist You",
    details: ["jatin@growwthpartners.com"]
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-brand-orange" />,
    title: "Whatsapp",
    subheading: "Our Friendly team is here to help.",
    details: ["Live Support"]
  },
  {
    icon: <MapPin className="h-6 w-6 text-brand-orange" />,
    title: "Visit Us",
    subheading: "Come say hello at our office HQ.",
    details: [
      "65 Chulia Street, #46-00 OCBC Centre, Singapore 049513"
    ]
  },
  {
    icon: <PhoneIcon className="h-6 w-6 text-brand-orange" />,
    title: "Call Us",
    subheading: "Mon-fri from 8am to 5pm.",
    details: ["+65 8893 0720"]
  }
];

export const ContactDetails = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl mx-auto"
    >
      {contactDetails.map((item, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.7 + (index * 0.1) }}
          className="bg-white/80 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#9b87f5]/20 hover:-translate-y-1"
        >
          <div className="flex items-start space-x-4">
            <div className="bg-gradient-to-br from-[#9b87f5]/10 to-[#D6BCFA]/20 p-3 rounded-lg">
              {item.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{item.subheading}</p>
              {item.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600">
                  {detail}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
