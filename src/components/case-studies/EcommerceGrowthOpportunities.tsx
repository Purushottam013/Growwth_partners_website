
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export const EcommerceGrowthOpportunities = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block p-3 bg-brand-orange/10 rounded-full mb-4">
              <TrendingUp className="text-brand-orange w-6 h-6" />
            </span>
            <h3 className="heading-md text-brand-dark mb-6">Identifying Growth Opportunities</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We leveraged data and technology to automate processes, utilizing advanced tools to analyze 
              financial data and target prospects effectively. Transitioning from traditional Excel methods 
              to cloud-based accounting streamlined operations and improved conversion rates.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
