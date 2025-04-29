
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CaseStudySection = () => {
  const caseStudies = [
    {
      title: "Achieving Remarkable Growth: A Data-Driven Success Story",
      description: "With a focus on experiential learning, they aimed to optimize their staff costs, capital allocation, and financial forecasting to align with their expansion goals.",
      url: "/case-studies/data-driven-success"
    },
    {
      title: "Achievening E-Commerce Growth With Automation And Analytics",
      description: "We leveraged data and technology to automate processes, utilizing advanced tools to analyze financial data and target prospects effectively.",
      url: "/case-studies/ecommerce"
    }
  ];

  return (
    <section className="py-14 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-[#FEF7CD] text-brand-orange rounded-full text-sm font-semibold mb-4">Success Stories</span>
          <h3 className="heading-md mb-4">Case Study</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our Success Stories! How Fractional CFO Services Helped Businesses Achieve their Long term Goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <a 
                href={study.url}
                className="block h-full group"
              >
                <Card className="bg-gray-50 hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-2 border-0 shadow-md overflow-hidden">
                  <CardContent className="p-8">
                    <h4 className="text-xl font-bold mb-4 text-brand-dark group-hover:text-brand-orange transition-colors">{study.title}</h4>
                    <p className="text-gray-600 mb-6">{study.description}</p>
                    <div className="flex items-center text-brand-orange font-medium">
                      <span>Read case study</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
