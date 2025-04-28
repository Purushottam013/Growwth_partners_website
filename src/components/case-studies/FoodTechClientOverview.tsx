
import { motion } from "framer-motion";

export const FoodTechClientOverview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="heading-lg text-brand-dark">Client Overview</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our client, a pioneering force in the food technology industry, focuses on optimising the food supply chain. Their approach aims to reduce food wastage by connecting suppliers with businesses, ensuring the use of excess or imperfect food supply without compromising quality. They also offer logistics optimisation services.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-6 -right-6 w-64 h-64 bg-brand-orange/10 rounded-full filter blur-3xl"></div>
            <img
              src="/lovable-uploads/e68af182-07c6-466c-a646-ec842f6011a2.png"
              alt="Food Tech Overview"
              className="rounded-2xl shadow-2xl relative z-10 w-full max-w-md mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
