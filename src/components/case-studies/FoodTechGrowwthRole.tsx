
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export const FoodTechGrowwthRole = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="heading-md text-brand-dark">Growwth's Role</h3>
            <div className="w-24 h-1 bg-brand-orange mx-auto mt-4"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none text-gray-600"
          >
            <h4 className="text-xl font-semibold text-brand-dark mb-4">Growwth played a pivotal role by:</h4>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 text-brand-orange" size={24} />
                <div>
                  <p className="text-gray-700">Providing strategic insights and working closely with the internal finance team, CEO, and investors.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 text-brand-orange" size={24} />
                <div>
                  <p className="text-gray-700">Serving as a long-term partner, aligning goals and strategies for sustainable growth.</p>
                </div>
              </div>
            </div>
            
            <p className="text-lg leading-relaxed mt-8">
              At Growwth Partners, we're your compass, guiding your business. We work closely with your internal finance team, the CEO (captain of the ship), and investors to ensure everyone is aligned and working in harmony. Think of us as long-term partners, not just consultants. We understand your goals and chart a course for steady, confident, and successful business navigation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
