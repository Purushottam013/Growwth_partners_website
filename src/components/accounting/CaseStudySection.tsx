
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const CaseStudySection = () => {
  const caseStudies = [
    {
      title: "Transforming Patient Engagement In Healthcare Through Better Financial Management And Analysis",
      description: "Evaluating the business health of all companies within the group with the objective to improve revenue, profits and cash flows.",
      url: "https://growwthpartners.com/portfolio/transforming-patient-engagement-in-healthcare/"
    },
    {
      title: "Achievening E-Commerce Growth With Automation And Analytics",
      description: "This success story highlights the effectiveness and sustainability of data-driven strategies in achieving remarkable growth in e-commerce operations.",
      url: "https://growwthpartners.com/portfolio/achievening-e-commerce-growth-with-automation-and-analytics/"
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
          <h3 className="heading-md mb-4">Case Study</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our Success Stories! How Accounting Services Helped Businesses Achieve their Long term Goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <a 
                href={study.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full group"
              >
                <Card className="bg-gray-50 hover:shadow-lg transition-all duration-300 h-full hover:-translate-y-1 border-0 shadow-md overflow-hidden">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-3 text-brand-dark group-hover:text-brand-orange transition-colors">{study.title}</h4>
                    <p className="text-gray-600 mb-4">{study.description}</p>
                    <div className="flex items-center text-brand-orange font-medium">
                      <span>Read case study</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
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
