
import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FaqSection = () => {
  const faqs = [
    {
      question: "What is financial modeling and why is it important for my business?",
      answer: "Financial modeling involves creating a representation of a company's financial performance. It's crucial for strategic planning, forecasting, and decision-making, helping businesses set realistic goals and achieve optimal results."
    },
    {
      question: "How can accurate financial modeling benefit my startup in securing funding?",
      answer: "A comprehensive financial model includes income statements, balance sheets, cash flow statements, and assumptions. It also involves scenario analysis and sensitivity analysis to anticipate various business situations."
    },
    {
      question: "Can your financial models help with mergers and acquisitions?",
      answer: "Yes, our detailed financial analysis and modeling provide crucial insights for navigating mergers and acquisitions, helping you evaluate potential deals and make informed decisions."
    },
    {
      question: "What tools and technologies do you use for financial modeling?",
      answer: "We utilize advanced automation tools and software like Excel, Python, and specialized financial modeling platforms to ensure efficient, accurate, and error-free financial management."
    },
    {
      question: "How do you ensure the accuracy and reliability of your financial models?",
      answer: "We ensure accuracy through a comprehensive analysis, validation processes, and leveraging over a decade of experience. Our models are regularly reviewed and updated to reflect the latest financial data and trends."
    },
    {
      question: "What types of businesses can benefit from your financial modeling services?",
      answer: "Our services are beneficial for startups, small and medium businesses, and corporate entities. We tailor our models to meet the specific needs of each business, helping them achieve their financial goals."
    }
  ];
  
  return (
    <section className="bg-gray-50 py-16">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-[#D3E4FD] text-brand-blue rounded-full text-sm font-semibold mb-4">Common Questions</span>
          <h3 className="heading-md mb-4">Frequently Asked Questions</h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Find answers to common questions about our financial modeling services
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-xl shadow-md px-8 py-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem 
                  value={`item-${index}`} 
                  className="border-b border-gray-200 py-3"
                >
                  <AccordionTrigger className="text-left font-semibold text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pt-2 pb-4">
                    <p className="font-medium text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
