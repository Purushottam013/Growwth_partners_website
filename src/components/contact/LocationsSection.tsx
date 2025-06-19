
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react";

export const LocationsSection = () => {
  const locations = [
    {
      country: "Singapore",
      address: "65 Chulia Street, #46-00 OCBC Centre, Singapore 049513",
      image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      color: "from-[#F97316]/20 to-[#F97316]/5"
    },
    {
      country: "UAE",
      address: "The Binary by OMNIYAT, 32 Marasi Drive Street – Business Bay – Dubai",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      color: "from-[#FFBE00]/20 to-[#FFBE00]/5"
    },
    {
      country: "Australia",
      address: "50 Clarence St, Sydney NSW 2000",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      color: "from-[#06C0A9]/20 to-[#06C0A9]/5"
    },
    {
      country: "India",
      address: "BlueOne Square, Udyog Vihar, 246, Phase IV, Udyog Vihar, Gurugram, HR 122016",
      image: "/lovable-uploads/e06531a8-fd3a-4b27-836c-e3384363a63b.png", // Updated image URL
      color: "from-[#21C55D]/20 to-[#21C55D]/5"
    }
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5
      }
    })
  };

  const contactInfo = [
    { icon: <Phone className="h-5 w-5" />, text: "+65 8893 0720", href: "tel:+6588930720" },
    { icon: <Mail className="h-5 w-5" />, text: "Send an Email", href: "mailto:jd@growwthpartners.com" },
    { icon: <Clock className="h-5 w-5" />, text: "Mon-Fri: 9AM - 6PM", href: null },
    { icon: <Globe className="h-5 w-5" />, text: "www.growwthpartners.com", href: "https://www.growwthpartners.com" }
  ];

  return (
    <section className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-md mb-5">Locations we serve...</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            With our global presence, we provide accounting and financial services to businesses across multiple regions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="h-full"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={location.image} 
                    alt={location.country} 
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-b ${location.color}`}></div>
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <h3 className="text-xl font-bold text-white">{location.country}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start mb-4">
                    <MapPin className="h-5 w-5 text-brand-orange mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">{location.address}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 bg-white rounded-xl shadow-lg p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-brand-orange/10 p-3 rounded-full mr-4">
                  {React.cloneElement(item.icon, { className: "h-6 w-6 text-brand-orange" })}
                </div>
                <div>
                  {item.href ? (
                    <a href={item.href} className="text-gray-700 hover:text-brand-orange transition-colors">
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-gray-700">{item.text}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
