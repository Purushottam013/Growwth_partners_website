import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";
interface FaqItem {
  value?: string;
  question?: string;
  answer?: string;
  trigger?: string;
  content?: string;
}
interface FaqSectionProps {
  faqs?: FaqItem[];
}
export const FaqSection = ({
  faqs
}: FaqSectionProps) => {
  const defaultFaqs = [{
    question: "What services do you offer as an accounting firm?",
    answer: "We offer comprehensive accounting services including bookkeeping, tax planning, financial reporting, payroll management, consulting, and more."
  }, {
    question: "How can outsourcing accounting benefit my business?",
    answer: "Outsourcing accounting saves you time, ensures accuracy, and provides valuable financial insights to make informed decisions."
  }, {
    question: "Do I need bookkeeping software, or can I manage with manual records?",
    answer: "While manual bookkeeping is possible, it can be time-consuming and prone to errors. Bookkeeping software offers efficiency, accuracy, and reporting capabilities, making it a popular choice."
  }, {
    question: "Can you assist with tax preparation and filing?",
    answer: "Yes, we provide tax services, including preparation, filing, planning, and compliance to navigate complex tax regulations."
  }, {
    question: "What is the benefit of having regular financial reports?",
    answer: "Regular financial reports offer insights into your business's financial health, expenses, trends, and aid in decision-making."
  }, {
    question: "How can I get started with your accounting services?",
    answer: "Reach out to us via our contact page to discuss your business needs and find the right services for you."
  }];

  // Use provided faqs or default to the original ones
  const faqItems = faqs || defaultFaqs;
  return <section className="bg-gray-50 py-[60px]">
      <div className="container-custom">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }} className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-[#D3E4FD] text-brand-blue rounded-full text-sm font-semibold mb-4">Common Questions</span>
          <h3 className="heading-md mb-4">Frequently Asked Questions</h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Find answers to common questions about our accounting services
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={faq.value || `item-${index}`} 
                className="mb-5 border-none"
              >
                <AccordionTrigger 
                  className={`
                    group flex items-center justify-between w-full
                    bg-[#ededed] px-6 py-6
                    font-bold text-xl md:text-2xl text-black
                    rounded-none border border-[#e2e2e2] transition-all duration-200 
                    shadow-none
                    outline-none
                    focus-visible:outline-none
                    data-[state=open]:border-[2.5px] data-[state=open]:border-[#1775ff]
                    data-[state=open]:rounded-[6px]
                  `}
                  style={{
                    boxShadow: "none",
                    borderRadius: "4px",
                    borderWidth: "1.5px"
                  }}
                >
                  <span className="text-left w-full select-none font-medium">{faq.trigger || faq.question}</span>
                  <span className="flex items-center justify-center transition-all duration-300">
                    <span className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 bg-black rounded-full text-white transition-all duration-200">
                      <Plus className="w-6 h-6 transition-all duration-200 group-data-[state=open]:hidden" strokeWidth={3} />
                      <Minus className="w-6 h-6 transition-all duration-200 group-data-[state=closed]:hidden" strokeWidth={3} />
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="bg-white px-6 pb-6 pt-2 border border-[#e2e2e2] border-t-0 text-lg text-gray-800 font-normal leading-relaxed rounded-b-[6px] animate-slide-down">
                  {faq.content || faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>;
};