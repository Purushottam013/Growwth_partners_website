
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export const DataDrivenResults = () => {
  const results = [
    {
      title: "Staff Cost Optimization",
      description: "Developed a comprehensive staff costing model for the next 2 years, resulting in optimized staff costs and recommendations to manage expenditures, potentially saving SGD 100k annually"
    },
    {
      title: "Capital Allocation Insights",
      description: "Determined the cost of capital and weighted average cost of capital, providing insights into capital allocation decisions, with a total debt of SGD 835k."
    },
    {
      title: "Revenue Growth Projection",
      description: "Prepared a PNL forecast, projecting revenue growth from SGD 700k to SGD 1.5mn over the next 2 years."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="heading-md text-brand-dark">Key Achievements</h3>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Through collaboration with Growwth, client achieved the following key results:
          </p>
        </motion.div>

        <div className="space-y-8">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 shadow-sm border-l-4 border-brand-orange"
            >
              <div className="flex items-start gap-6">
                <span className="mt-1 text-brand-orange">
                  <CheckCircle size={28} />
                </span>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-800">{result.title}</h4>
                  <p className="text-gray-600">{result.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
