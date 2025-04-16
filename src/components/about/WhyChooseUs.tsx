import { motion } from "framer-motion";
import { Briefcase, Globe, Users, Gem } from "lucide-react";
const features = [{
  icon: <Briefcase className="w-8 h-8 text-brand-orange" />,
  title: "Expert Leadership",
  description: "Our team, hailing from Big 4 firms, multinationals, venture capitalists, and startups, brings a wealth of diverse finance and business expertise."
}, {
  icon: <Users className="w-8 h-8 text-brand-orange" />,
  title: "Comprehensive Services",
  description: "From business consulting to CFO services and investor support, Growwth Partners is your all-in-one solution for diverse financial needs."
}, {
  icon: <Globe className="w-8 h-8 text-brand-orange" />,
  title: "Global Perspective",
  description: "With a worldwide presence, we offer unique insights for strategic financial planning, bringing a global outlook to your business success."
}, {
  icon: <Gem className="w-8 h-8 text-brand-orange" />,
  title: "Long-Term Commitment",
  description: "Growwth Partners demonstrates commitment by accepting equity as payment, showcasing our dedication to investing in promising ideas and fostering lasting partnerships."
}];
export const WhyChooseUs = () => {
  return <section className="py-[40px]">
      <div className="container-custom">
        <motion.h3 initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-3xl font-bold text-center mb-16">
          Why Choose Growwth?
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => <motion.div key={index} initial={{
          opacity: 0,
          x: index % 2 === 0 ? -20 : 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1,
          duration: 0.6
        }} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>)}
        </div>
      </div>
    </section>;
};