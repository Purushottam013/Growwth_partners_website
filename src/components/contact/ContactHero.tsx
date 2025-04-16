
import React from "react";
import { motion } from "framer-motion";
import { Shield, Users, Crown } from "lucide-react";

export const ContactHero = () => {
  const benefits = [
    {
      icon: <Users className="h-12 w-12 text-white" />,
      title: "Total Accountability",
      description: "We help entrepreneurs grow their business with ease, efficiency and certainty about the future"
    },
    {
      icon: <Shield className="h-12 w-12 text-white" />,
      title: "Personalised Solution",
      description: "Provide a proprietary, internally developed, powerful digital solution for all finance, commercial and growth needs of entrepreneurs"
    },
    {
      icon: <Crown className="h-12 w-12 text-white" />,
      title: "Strong Leader",
      description: "Led by Jatin Detwani, who is amongst the Top finance professionals globally and has been awarded as Asia's Greatest CFO award"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 via-white to-brand-green/10 -z-10"></div>
      
      {/* Background circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-orange/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#21C55D]/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="heading-lg text-brand-dark mb-8">Our Clients Love Us Because</h1>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="relative overflow-hidden"
            >
              <div className="bg-white rounded-xl shadow-lg p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                {/* Background circle design */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#c2d8f7] rounded-full opacity-20 transform translate-x-10 -translate-y-10 hover:opacity-30 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  <div className="rounded-full bg-gradient-to-r from-brand-orange to-brand-green p-4 inline-flex mb-6">
                    {React.cloneElement(benefit.icon, { className: "h-10 w-10 text-white" })}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
