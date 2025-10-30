import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ExpertBlogSection = () => {
  const blogPosts = [
    {
      title: "Why Singapore is the ideal location for startups",
      description:
        'Singapore has a reputation for ease in starting a business owing to startup grants and efficient tax administration. It is known as the "Silicon Valley of Asia."',
      url: "https://growwthpartners.com/blog/why-singapore-is-the-ideal-location-for-startups",
    },
    {
      title: "Various funding options available for startups",
      description:
        "Everything a company requires, including financing programmes, tax breaks, cash grants, everything must be available in the economy.",
      url: "https://growwthpartners.com/blog/various-funding-options-available-for-startups",
    },
    {
      title: "Grants for Singapore Startups",
      description:
        'Singapore is known as Asia\'s "Silicon Valley" because it is the most desirable location for business startups. In addition to its low tax rates',
      url: "https://growwthpartners.com/blog/grants-for-singapore-startups",
    },
  ];

  return (
    <section className="py-14 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-[#E5DEFF] text-[#F87315] rounded-full text-sm font-semibold mb-4">
            Expert Insights
          </span>
          <h2 className="heading-md mb-4">From our experts! Read now</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Stay updated with our expert insights on financial management,
            business growth, and industry trends.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full group"
              >
                <Card className="bg-white hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-2 border-0 shadow-md overflow-hidden">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-3 text-brand-dark group-hover:text-[#F87315] transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-gray-600 mb-6">{post.description}</p>
                    <div className="flex items-center text-[#F87315] font-medium mt-auto">
                      <span>Read article</span>
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
