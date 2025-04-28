
import { motion } from "framer-motion";
import { Check, TrendingUp, Zap } from "lucide-react";

export const KeyTakeaways = () => {
  const achievements = [
    "Financial Planning and Strategy: Implementing a clear financial plan aligned with business objectives.",
    "Cash Flow Optimisation: Managing working capital effectively, ensuring stability and predictability.",
    "Improved Accounts Receivable Collection: Faster collection of accounts receivable, maintaining a healthy cash flow.",
    "Operational Efficiency: Implementing SOPs and process automation, reducing bottlenecks and enhancing overall efficiency.",
    "Compliance and Audit Support: Meeting regulatory requirements, ensuring a hassle-free business environment."
  ];

  const strategies = [
    "Leveraging the implemented financial systems for real-time insights and informed decision-making.",
    "Adapting strategies based on market trends and customer demands, ensuring agility in their approach.",
    "Fostering a culture of continuous improvement and innovation, positioning the business as an industry leader in the competitive food technology landscape."
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="heading-md text-brand-dark">Key Takeaways</h3>
          <div className="w-24 h-1 bg-brand-orange mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-brand-orange/10 rounded-lg">
                <TrendingUp className="text-brand-orange" size={24} />
              </div>
              <h4 className="text-xl font-bold text-brand-dark">The sustainable growth achieved can be attributed to:</h4>
            </div>
            <ul className="space-y-3">
              {achievements.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="text-brand-orange mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-brand-orange/10 rounded-lg">
                <Zap className="text-brand-orange" size={24} />
              </div>
              <h4 className="text-xl font-bold text-brand-dark">Ongoing Strategies</h4>
            </div>
            <p className="text-gray-600 mb-4">Post-engagement, the client continues to thrive by:</p>
            <ul className="space-y-3">
              {strategies.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="text-brand-orange mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
