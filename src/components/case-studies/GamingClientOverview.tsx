
import { motion } from "framer-motion";

export const GamingClientOverview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="/lovable-uploads/737dbc2e-2fc1-47d8-91a0-05a44375ddb5.png" 
              alt="Gaming Industry Client" 
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-brand-dark mb-6">Client Overview</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our client, a prominent player in the gaming industry, sought strategic financial guidance to elevate their business to new heights. As a provider of cutting-edge gaming experiences, they aimed to maximise company valuation and identify additional revenue streams for sustainable growth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
