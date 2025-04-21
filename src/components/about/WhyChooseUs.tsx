
import { motion } from "framer-motion";

const imageSrc = "/lovable-uploads/4d222fc3-3b38-473d-8f8b-37d9ce3e9094.png";

const features = [{
  icon: (
    <img
      src={imageSrc}
      alt="Why Choose Us"
      className="w-8 h-8 object-contain"
      loading="lazy"
    />
  ),
  title: "Expert Leadership",
  description: "Our team, hailing from Big 4 firms, multinationals, venture capitalists, and startups, brings a wealth of diverse finance and business expertise."
}, {
  icon: (
    <img
      src={imageSrc}
      alt="Why Choose Us"
      className="w-8 h-8 object-contain"
      loading="lazy"
    />
  ),
  title: "Comprehensive Services",
  description: "From business consulting to CFO services and investor support, Growwth Partners is your all-in-one solution for diverse financial needs."
}, {
  icon: (
    <img
      src={imageSrc}
      alt="Why Choose Us"
      className="w-8 h-8 object-contain"
      loading="lazy"
    />
  ),
  title: "Global Perspective",
  description: "With a worldwide presence, we offer unique insights for strategic financial planning, bringing a global outlook to your business success."
}, {
  icon: (
    <img
      src={imageSrc}
      alt="Why Choose Us"
      className="w-8 h-8 object-contain"
      loading="lazy"
    />
  ),
  title: "Long-Term Commitment",
  description: "Growwth Partners demonstrates commitment by accepting equity as payment, showcasing our dedication to investing in promising ideas and fostering lasting partnerships."
}];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Why Choose Growwth?
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#F3F8FE] via-[#F0F6FF] to-[#F9FCFF] p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#DBE9FE]/20 rounded-bl-full transition-all duration-300 
                group-hover:bg-[#DBE9FE]/30 group-hover:w-48 group-hover:h-48" />
              
              <div className="relative">
                <div className="mb-6 inline-block p-4 transition-colors duration-300">
                  {feature.icon}
                </div>
                
                <h4 className="text-2xl font-bold mb-4 text-gray-800 transition-colors">
                  {feature.title}
                </h4>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
