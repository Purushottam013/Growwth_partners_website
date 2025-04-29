
import { motion } from "framer-motion";

export const GamingIndustryHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-brand-dark to-brand-dark/90 text-white py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/1ed48ddc-7d12-4428-85a4-68bf292a6461.png"
          alt="Gaming Industry Growth"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1 bg-brand-orange/20 text-brand-orange rounded-full text-sm font-semibold mb-6">
            Gaming Industry Case Study
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Transforming A Gaming Industry Business For Exponential Growth
          </h1>
        </motion.div>
      </div>
    </section>
  );
};
