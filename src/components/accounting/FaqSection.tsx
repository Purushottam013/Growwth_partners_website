
import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FaqSection = () => {
  const faqs = [
    {
      question: "What accounting services do you offer?",
      answer: "We offer a comprehensive range of accounting services including bookkeeping, payroll management, tax preparation and filing, financial reporting, management accounting, and strategic financial advisory. Our services are tailored to meet the specific needs of your business."
    },
    {
      question: "How can your accounting services benefit my business?",
      answer: "Our accounting services provide accurate financial records, ensure tax compliance, improve cash flow management, offer valuable insights for decision-making, and free up your time to focus on core business activities. We help you maintain financial health while identifying opportunities for growth and cost savings."
    },
    {
      question: "How much do your accounting services cost?",
      answer: "Our pricing is customized based on your business size, complexity, and specific service requirements. We offer flexible packages starting from basic bookkeeping to comprehensive financial management solutions. Contact us for a personalized quote tailored to your needs."
    },
    {
      question: "What makes your accounting services different from others?",
      answer: "Our services stand out due to our personalized approach, experienced team, cutting-edge technology, proactive tax planning, industry-specific expertise, and commitment to building long-term relationships with clients. We focus on being partners in your financial success rather than just service providers."
    },
    {
      question: "How often will I receive financial reports?",
      answer: "We typically provide monthly financial reports, but the frequency can be adjusted according to your business needs. We can deliver weekly, monthly, quarterly, or annual reports depending on your requirements. Our reporting schedule is flexible and designed to give you timely insights when you need them."
    },
    {
      question: "Can you help with tax planning and compliance?",
      answer: "Yes, tax planning and compliance are core parts of our service offering. We provide proactive tax strategies to minimize your tax burden legally, ensure timely filing of all required tax returns, stay updated with changing tax laws, and represent you during tax audits if needed. Our goal is to keep you compliant while optimizing your tax position."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="heading-md mb-4">Frequently Asked Questions</h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Find answers to common questions about our accounting services
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-xl shadow-md px-6 py-2">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`} className="border-b border-gray-200 py-2">
                  <AccordionTrigger className="text-left font-semibold text-lg">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-2 pb-4">
                    {faq.answer}
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
