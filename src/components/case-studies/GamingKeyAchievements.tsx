
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Users, PieChart } from "lucide-react";

export const GamingKeyAchievements = () => {
  const achievements = [
    {
      icon: TrendingUp,
      title: "Valuation Increase",
      description: "Through a thorough analysis, our strategic CFO identified and implemented opportunities that led to a remarkable 6X increase in the company's valuation."
    },
    {
      icon: PieChart,
      title: "Diversified Revenue Streams",
      description: "Recognizing the need for scalability, we identified and recommended 2-3 additional revenue and growth avenues, expanding the business beyond its current offerings."
    },
    {
      icon: Users,
      title: "Investor Collaboration",
      description: "Working closely with existing and potential investors, our team fostered collaborative relationships, aligning investor interests with the company's strategic objectives."
    },
    {
      icon: DollarSign,
      title: "Successful Fundraising",
      description: "Our support in fundraising proved pivotal, enhancing materials like financial models and due diligence documents. This not only attracted more interest but also facilitated a successful fundraising effort."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-brand-dark mb-6">Key Achievements</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="bg-brand-orange/10 p-3 rounded-full text-brand-orange mr-4">
                  <item.icon className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-semibold text-brand-dark">{item.title}</h4>
              </div>
              <p className="text-gray-700 ml-16">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
