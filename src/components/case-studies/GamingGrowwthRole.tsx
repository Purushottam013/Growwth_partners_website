
import { motion } from "framer-motion";
import { TrendingUp, PieChart, Users, DollarSign } from "lucide-react";

export const GamingGrowwthRole = () => {
  const roles = [
    {
      icon: TrendingUp,
      title: "Strategic Valuation Analysis",
      description: "Conducting an in-depth evaluation to identify and leverage opportunities for a substantial increase in company valuation."
    },
    {
      icon: PieChart,
      title: "Diversification Strategies",
      description: "Collaborating closely with the internal team to pinpoint and capitalize on 2-3 additional revenue and growth opportunities, ensuring scalability."
    },
    {
      icon: Users,
      title: "Investor Relationship Management",
      description: "Serving as a liaison between the company and investors, fostering collaboration and alignment of goals for mutual success."
    },
    {
      icon: DollarSign,
      title: "Fundraising Support",
      description: "Offering expertise in fundraising efforts, refining financial models, due diligence documents, and other materials to present a compelling case to potential investors."
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
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Growwth's Role
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Growwth played a pivotal role by:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="bg-brand-orange/10 p-3 rounded-full text-brand-orange mr-4">
                  <role.icon className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-semibold text-brand-dark">{role.title}</h4>
              </div>
              <p className="text-gray-700 ml-16">{role.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
