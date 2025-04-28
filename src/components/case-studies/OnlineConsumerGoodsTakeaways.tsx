
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const OnlineConsumerGoodsTakeaways = () => {
  const takeaways = [
    {
      title: "Continuous Optimisation",
      description: "Utilising real-time data for informed decision-making, ensuring operational efficiency and financial prudence."
    },
    {
      title: "Adaptation and Innovation",
      description: "Adapting strategies based on market dynamics, fostering a culture of innovation for enduring success."
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
          className="text-center mb-10"
        >
          <h3 className="heading-md text-brand-dark">Key Takeaways</h3>
          <p className="text-gray-700 mt-4 max-w-3xl mx-auto">
            The sustainable growth achieved was attributed to timely decision-making, enhanced visibility, 
            and strategic financial planning.
          </p>
          <p className="text-lg font-medium text-brand-orange mt-4">Ongoing strategies include:</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {takeaways.map((takeaway, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md border border-gray-100"
              >
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center">
                      <Check className="text-brand-orange" size={20} />
                    </span>
                    <h4 className="text-xl font-bold text-gray-900">{takeaway.title}</h4>
                  </div>
                  <p className="text-gray-700 pl-14">{takeaway.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
