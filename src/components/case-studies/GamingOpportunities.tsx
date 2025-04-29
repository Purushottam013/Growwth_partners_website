
import { motion } from "framer-motion";
import { Search, TrendingUp, Users } from "lucide-react";

export const GamingOpportunities = () => {
  const opportunities = [
    {
      icon: Search,
      title: "Conducting a comprehensive valuation assessment"
    },
    {
      icon: TrendingUp,
      title: "Analysing market trends to uncover new revenue streams"
    },
    {
      icon: Users,
      title: "Strategising investor engagement and partnership possibilities"
    }
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
            Identifying Opportunities
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {opportunities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="bg-brand-orange/10 p-4 rounded-full text-brand-orange mx-auto mb-4 inline-block">
                <item.icon className="h-6 w-6" />
              </div>
              <p className="text-gray-700 font-medium">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
