
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const DataDrivenTakeaways = () => {
  const takeaways = [
    "Optimizing staff costs and capital allocation.",
    "Enhancing financial forecasting accuracy.",
    "Improving marketing ROI and resource utilization."
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="text-center mb-8">
            <h2 className="heading-md text-brand-dark">Key Takeaways</h2>
            <p className="text-lg text-gray-600 mt-4">Through collaboration with Growwth, Client achieved sustainable growth by:</p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm mb-12">
            <div className="space-y-4 mb-8">
              {takeaways.map((takeaway, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <Check className="text-brand-orange mt-1" size={24} />
                  <p className="text-gray-700">{takeaway}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="p-4 bg-brand-orange/10 rounded-lg border border-brand-orange/30">
              <p className="italic text-gray-700">
                "Discover how Growwth can empower your business to achieve sustainable
                growth through data-driven financial solutions."
              </p>
            </div>
          </div>
          
          <div>
            <p className="text-gray-700 leading-relaxed">
              The collaboration between Client X and Growwth resulted in detailed financial forecasts, automated dashboards, and strategic business valuations, fostering sustainable growth. By leveraging data-driven insights, Client X continues to thrive post-engagement, equipped with the tools to make informed decisions and achieve long-term objectives.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
