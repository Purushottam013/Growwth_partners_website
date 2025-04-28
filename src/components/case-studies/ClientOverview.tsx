
import { motion } from "framer-motion";

export const ClientOverview = () => {
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
              The client is a leading player in the healthcare industry. It is revolutionising patient engagement through their AI-powered patient engagement. Their platform empowers Healthcare Providers and Insurers to connect with customers across various online platforms, enhancing the overall healthcare experience.
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
              src="/lovable-uploads/212caada-6a51-44d9-9976-b026e96af572.png"
              alt="Healthcare Innovation"
              className="rounded-2xl shadow-2xl relative z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
