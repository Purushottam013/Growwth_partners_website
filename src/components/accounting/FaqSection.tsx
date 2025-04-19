
import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FaqSection = () => {
  const faqs = [
    {
      question: "What services do you offer as an accounting firm?",
      answer: "We offer comprehensive accounting services including bookkeeping, tax planning, financial reporting, payroll management, consulting, and more."
    }, 
    {
      question: "How can outsourcing accounting benefit my business?",
      answer: "Outsourcing accounting saves you time, ensures accuracy, and provides valuable financial insights to make informed decisions."
    }, 
    {
      question: "Do I need bookkeeping software, or can I manage with manual records?",
      answer: "While manual bookkeeping is possible, it can be time-consuming and prone to errors. Bookkeeping software offers efficiency, accuracy, and reporting capabilities, making it a popular choice."
    }, 
    {
      question: "Can you assist with tax preparation and filing?",
      answer: "Yes, we provide tax services, including preparation, filing, planning, and compliance to navigate complex tax regulations."
    }, 
    {
      question: "What is the benefit of having regular financial reports?",
      answer: "Regular financial reports offer insights into your business's financial health, expenses, trends, and aid in decision-making."
    }, 
    {
      question: "How can I get started with your accounting services?",
      answer: "Reach out to us via our contact page to discuss your business needs and find the right services for you."
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
            Find answers to common questions about our accounting services
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
                <AccordionItem value={`item-${index}`} className="border-b border-gray-200 py-3">
                  <AccordionTrigger className="text-left font-semibold text-lg">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-700 pt-2 pb-4 font-medium text-base leading-relaxed">
                    <p className="font-medium text-base leading-relaxed">{faq.answer}</p>
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
