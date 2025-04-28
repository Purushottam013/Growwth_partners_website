
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const OnlineConsumerGoodsGoalsObjectives = () => {
  const objectives = [
    {
      title: "Visibility Enhancement",
      description: "Streamlining financial presentations for informed decision-making for the top management and the board."
    },
    {
      title: "Operational Efficiency",
      description: "Addressing finance and commercial issues in operations to boost performance of the business."
    },
    {
      title: "Financial Outsourcing",
      description: "Closely work as the outsourced finance and accounting partner in Singapore and other countries to increase cashflows, revenue, and profits through better cost management and performance reporting."
    },
    {
      title: "Strategic Advisor to the CEO and the shareholders",
      description: "Evaluating the business health of all companies within the group with the objective to improve revenue, profits and cash flows."
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/f8fb3d93-a82a-4c96-bcd3-f9d68f64fb4b.png"
          alt="Strategic Growth Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="heading-md text-brand-dark">Primary Goals and Objectives</h3>
          <div className="w-24 h-1 bg-brand-orange mx-auto mt-4"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-orange"
              >
                <div className="flex items-start gap-3">
                  <Check className="text-brand-orange mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-lg mb-1">{objective.title}</h4>
                    <p className="text-gray-700">{objective.description}</p>
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
