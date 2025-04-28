
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export const CaseStudySection = () => {
  const caseStudies = [
    {
      title: "Fueling Food Tech Growth",
      description: "Strategic planning and meticulous execution, ensuring every aspect of the business was optimised for reducing food wastage and optimizing the supply chain.",
      url: "/case-studies/food-tech"
    },
    {
      title: "Achieving Remarkable Growth: A Data-Driven Success Story",
      description: "Discover how Growwth can empower your business to achieve sustainable growth through data-driven financial solutions.",
      url: "/case-studies/ecommerce"
    }
  ];

  return (
    <section className="bg-white py-[60px]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-[#FEF7CD] rounded-full text-sm font-semibold mb-4 text-orange-500">
            Success Stories
          </span>
          <h3 className="heading-md mb-4">Case Study</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our Success Stories! How Bookkeeping Services Helped Businesses Achieve their Long term Goals.
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
              <Link
                to={study.url}
                className="block h-full group"
              >
                <Card className="bg-gray-50 hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-2 border-0 shadow-md overflow-hidden">
                  <CardContent className="p-8">
                    <h4 className="text-xl font-bold mb-4 text-brand-dark group-hover:text-brand-orange transition-colors">
                      {study.title}
                    </h4>
                    <p className="text-gray-600 mb-6">{study.description}</p>
                    <div className="flex items-center text-brand-orange font-medium">
                      <span>Read case study</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
