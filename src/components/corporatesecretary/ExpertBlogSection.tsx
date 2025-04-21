
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const ExpertBlogSection = () => {
  const blogs = [
    {
      title: "Why Singapore is the ideal location for startups",
      description: "Singapore has a reputation for ease in starting a business owing to startup grants and efficient tax administration. It is known as the \"Silicon Valley of Asia.\"",
      url: "https://growwthpartners.com/blog/startup/why-singapore-is-the-ideal-location-for-startups/"
    },
    {
      title: "Various funding options available for startups",
      description: "Everything a company requires, including financing programmes, tax breaks, cash grants, everything must be available in the economy.",
      url: "https://growwthpartners.com/blog/startup/various-funding-options-available-for-startups/"
    },
    {
      title: "Grants for Singapore Startups",
      description: "Singapore is known as Asia's \"Silicon Valley\" because it is the most desirable location for business startups. In addition to its low tax rates.",
      url: "https://growwthpartners.com/blog/news/grants-for-singapore-startups/"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">From our experts! Read now</h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="h-full"
            >
              <a href={blog.url} target="_blank" rel="noopener noreferrer" className="block h-full group">
                <Card className="overflow-hidden h-full border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-brand-orange transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{blog.description}</p>
                    <div className="flex items-center text-brand-orange font-medium mt-auto">
                      <span>Read Article</span>
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
