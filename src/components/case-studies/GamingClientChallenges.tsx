
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export const GamingClientChallenges = () => {
  const challenges = [
    "Limited avenues for revenue growth.",
    "Complex valuation considerations for gaming industry businesses.",
    "Difficulty in attracting and engaging investors effectively."
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8">Client Challenges</h3>
            <p className="text-gray-700 mb-6">
              Before engaging with Growwth, client encountered several challenges:
            </p>
            
            <ul className="space-y-4">
              {challenges.map((challenge, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <span className="bg-red-100 p-2 rounded-full text-red-500 mr-4 mt-1">
                    <AlertTriangle className="h-4 w-4" />
                  </span>
                  <p className="text-lg text-gray-700">{challenge}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <img 
              src="/lovable-uploads/25cb3d42-962d-4d14-8782-63cd2f7d9c41.png" 
              alt="Client Challenges" 
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
