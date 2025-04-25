
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const ExpertBlogSection = () => {
  const blogs = [
    {
      title: "Why Singapore is the ideal location for startups",
      description: "Singapore has a reputation for ease in starting a business owing to startup grants and efficient tax administration. It is known as the 'Silicon Valley of Asia'.",
      url: "https://growwthpartners.com/blog/startup/why-singapore-is-the-ideal-location-for-startups/"
    }, 
    {
      title: "Various funding options available for startups",
      description: "Everything a company requires, including financing programmes, tax breaks, cash grants, everything must be available in the economy.",
      url: "https://growwthpartners.com/blog/startup/various-funding-options-available-for-startups/"
    }, 
    {
      title: "Grants for Singapore Startups",
      description: "Singapore is known as Asia's 'Silicon Valley' because it is the most desirable location for business startups. In addition to its low tax rates",
      url: "https://growwthpartners.com/blog/news/grants-for-singapore-startups/"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-[60px]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="heading-lg mb-4">From our experts! Read now</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Insights and advice from our financial experts to help your business thrive
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <a href={blog.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                <Card className="bg-white hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1 border border-gray-100">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-3 text-brand-dark group-hover:text-brand-orange transition-colors">{blog.title}</h4>
                    <p className="text-gray-600 mb-4">{blog.description}</p>
                    <div className="flex items-center text-brand-orange font-medium">
                      <span>Read more</span>
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
