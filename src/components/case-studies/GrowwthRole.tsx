
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export const GrowwthRole = () => {
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
            <p className="text-lg leading-relaxed mb-6">
              In the dynamic landscape of our client's enterprise, Growwth stood as a strategic architect. 
              We meticulously refined accounting protocols, orchestrated seamless cash flow management, 
              and implemented robust safeguards against revenue loss. With our expertise, the client's 
              business not only achieved financial stability but also radiated a vibrant aura of success, 
              captivating markets and stakeholders alike.
            </p>
            
            <p className="text-lg leading-relaxed mb-8">
              Growwth played a pivotal role by:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 text-brand-orange" size={24} />
                <div>
                  <h4 className="font-semibold text-brand-dark text-xl mb-1">Strategic Thinking</h4>
                  <p>Collaborating closely with the internal team and the CEO to devise effective strategies.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 text-brand-orange" size={24} />
                <div>
                  <h4 className="font-semibold text-brand-dark text-xl mb-1">Operational Support</h4>
                  <p>Serving as a long-term partner, not just a consultant, aligning goals and working hand-in-hand with the internal team.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
