
import { motion } from "framer-motion";

export const OnlineConsumerGoodsClientOverview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="heading-md text-brand-dark">Client Overview</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              The client is a prominent player in the online consumer goods industry with presence 
              across 5 APAC geographies. It specialises in health and beauty supplements, beauty 
              products and other consumer products sold online through their own website and 
              other channels including online marketplaces.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-6 -right-6 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl"></div>
            <img
              src="/lovable-uploads/ede7f3db-3a08-4841-9abb-ea3ba74cac22.png"
              alt="Online Consumer Goods Business Overview"
              className="w-full h-auto rounded-2xl shadow-xl relative z-10"
            />
            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-brand-orange/5 rounded-full filter blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
