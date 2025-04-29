
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const GamingKeyTakeaways = () => {
  const takeaways = [
    "Strategic Financial Planning: Implementing a comprehensive plan that not only increased valuation but also set the stage for continued growth.",
    "Diversification for Scalability: Identifying and capitalizing on additional revenue streams, ensuring the business remains adaptable and scalable.",
    "Investor Collaboration: Establishing strong relationships with investors, creating a foundation for ongoing support and strategic partnerships."
  ];
  
  const strategies = [
    "Continuous Market Analysis: Remaining vigilant to market trends, identifying new opportunities for growth.",
    "Dynamic Financial Planning: Adapting financial strategies to evolving market conditions and investor expectations.",
    "Investor Engagement: Maintaining proactive communication with investors, ensuring a collaborative approach to future initiatives."
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Key Takeaways
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The sustainable growth achieved can be attributed to:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-md"
          >
            <h4 className="text-xl font-semibold text-brand-dark mb-6">Growth Factors</h4>
            <ul className="space-y-4">
              {takeaways.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <span className="bg-green-100 p-2 rounded-full text-green-600 mr-4 mt-1 flex-shrink-0">
                    <Check className="h-4 w-4" />
                  </span>
                  <p className="text-gray-700">{item}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-md"
          >
            <h4 className="text-xl font-semibold text-brand-dark mb-6">Ongoing Strategies</h4>
            <p className="text-gray-700 mb-4">Post-engagement, the client continues to thrive by:</p>
            <ul className="space-y-4">
              {strategies.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <span className="bg-blue-100 p-2 rounded-full text-blue-600 mr-4 mt-1 flex-shrink-0">
                    <Check className="h-4 w-4" />
                  </span>
                  <p className="text-gray-700">{item}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
