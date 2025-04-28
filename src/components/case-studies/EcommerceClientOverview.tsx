
import { motion } from "framer-motion";

export const EcommerceClientOverview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="heading-lg text-brand-dark">Client Overview</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Client X, a leading e-commerce entity, specializes in offering high-quality products to customers worldwide.
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
              src="/lovable-uploads/2c1a84a8-da00-42a6-81f2-f2ac4eddb7d0.png"
              alt="E-commerce Overview Illustration"
              className="rounded-2xl shadow-2xl relative z-10 w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
