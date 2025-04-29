
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export const DataDrivenChallenges = () => {
  const challenges = [
    {
      title: "Inaccurate Financials",
      description: "Errors in classification and updating by their previous bookkeeper."
    },
    {
      title: "Marketing ROI Analysis",
      description: "Difficulty in analyzing marketing expenses and ROI, hindering effective resource allocation."
    },
    {
      title: "High Staff Costs",
      description: "Necessitating alignment with revenue growth to ensure sustainability."
    }
  ];

  return (
    <section id="challenges" className="py-20 bg-slate-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-6 -right-6 w-64 h-64 bg-red-500/5 rounded-full filter blur-3xl"></div>
            <img
              src="/lovable-uploads/2669d2c1-06e4-4b29-98e4-1d00b964e675.png"
              alt="Business Challenge Concept - Wooden blocks representing challenges"
              className="rounded-2xl shadow-xl relative z-10 w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="heading-md text-brand-dark">Client Challenges</h3>
            <p className="text-gray-600">Before engaging with Growwth, client encountered several challenges:</p>
            <div className="space-y-6">
              {challenges.map((challenge, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-5 bg-white rounded-lg shadow-sm border-l-4 border-red-400"
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 text-red-500 flex items-center justify-center">
                    <AlertTriangle size={20} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{challenge.title}</h4>
                    <p className="text-gray-600">{challenge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
