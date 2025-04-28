
import { motion } from "framer-motion";
import { LightbulbIcon } from "lucide-react";

export const EcommerceKeyTakeaways = () => {
  const takeaways = [
    "Data-driven decision making is foundational for sustained e-commerce growth",
    "Strategic automation reduces operational costs while enhancing customer experience",
    "Regular analysis of customer behavior leads to more effective personalization",
    "Integration between systems is crucial for creating seamless operations",
    "Continuous optimization based on performance metrics drives ongoing improvement"
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
            Insights
          </span>
          <h2 className="heading-md text-brand-dark mb-6">Key Takeaways</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            This success story highlights the effectiveness and sustainability of data-driven strategies in achieving remarkable growth in e-commerce operations.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
          <div className="space-y-6">
            {takeaways.map((takeaway, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center mt-0.5">
                  <LightbulbIcon size={18} />
                </span>
                <p className="text-gray-700 font-medium">{takeaway}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
