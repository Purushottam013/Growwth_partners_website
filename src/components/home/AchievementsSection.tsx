
import { motion } from "framer-motion";
import { Award, CheckCircle, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const AchievementsSection = () => {
  const achievements = [
    {
      icon: <Award className="h-16 w-16 text-brand-orange" />,
      title: "Best Fractional CFO Services Award",
      description: 'The Golden Globe Tigers Awards for Excellence in Banking, Financial Services and Insurance (BFSI) held on 8th May, 2024 at Pullman Kuala Lumpur City Hotel & Residences, Malaysia declared Growwth Partners as the "Best Fractional CFO Services" provider in the APAC region.'
    },
    {
      icon: <CheckCircle className="h-16 w-16 text-brand-blue" />,
      title: "Xero Certified Partner",
      description: "Growwth Partners is a Xero Silver champion partner after working on 500+ Xero accounts of clients and helping them streamline their books on the software and helping them scale financially."
    },
    {
      icon: <Rocket className="h-16 w-16 text-brand-green" />,
      title: "Launch of Ryzup.ai",
      description: "We launched our cutting-edge AI powered strategic finance and growth tool for start-ups, SMEs, growing companies by providing 24/7 access to an experienced AI CFO and growth catalyst at a fraction of cost."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h3 className="heading-md mb-4">Our Achievements</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Marketing experts in your niche with proven ROI results, backed by unbiased monitoring. 
            Consistent unbiased monitoring to assure optimal results and accountability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-brand-orange via-brand-blue to-brand-green"></div>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-5 rounded-full bg-gray-100 p-4">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
