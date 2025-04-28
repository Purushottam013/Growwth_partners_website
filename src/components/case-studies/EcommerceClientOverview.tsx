
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
              Our client is a rapidly growing e-commerce company focusing on automation and data-driven strategies. 
              They aim to revolutionize online retail through innovative technology solutions and analytics-based decision making.
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
              src="/lovable-uploads/de9005b3-7786-4eef-811d-5686088912b2.png"
              alt="E-commerce Growth"
              className="rounded-2xl shadow-2xl relative z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
