
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const OnlineConsumerGoodsKeyAchievements = () => {
  const achievements = [
    {
      title: "Milestone Completion",
      description: "Successfully accomplished all key milestones initially set by the CEO and the board showcasing a high level of expertise, commitment and efficiency resulting in savings of $100K + in first 3 months"
    },
    {
      title: "Enhanced Visibility",
      description: "Implemented improved reporting methods, providing clear financial insights and enabling better decision-making for the management. This resulted in management receiving relevant details within 10 days after the month end for decision making and growth."
    },
    {
      title: "Optimised Cash flow",
      description: "Worked closely with the management, sales team, operations team to collect long outstanding Accounts Receivable to improve cash flow management. Resulted in resolving long outstanding debts of more than $ 250K"
    },
    {
      title: "Grant assistance",
      description: "Closely partnered with the team to assist on EDG grant for new product development of $ 100K+."
    },
    {
      title: "Dividend Declaration",
      description: "Facilitated the long-pending dividend declaration by offering precise visibility into cash holdings, ensuring timely payouts. This provided better return to shareholders."
    },
    {
      title: "Tax Issue Resolution",
      description: "Addressed and clarified all tax-related challenges, providing clarity in the financial workings of the company. Worked closely with the team to implement Transfer pricing requirements and separately contest a claim of $2M on tax credits from IRAS."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="heading-md text-brand-dark">Key Achievements</h3>
          <div className="w-24 h-1 bg-brand-orange mx-auto mt-4"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center">
                    <Check size={20} />
                  </span>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-gray-900">{achievement.title}</h4>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
