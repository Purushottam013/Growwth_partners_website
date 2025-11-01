import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Plus, Minus } from 'lucide-react';

export const FAQAccordion: React.FC = () => {
  const faqs = [
    {
      question: "What's the difference between a part-time CFO and a full-time CFO?",
      answer:
        'A part-time or fractional CFO offers strategic financial expertise without the cost of a full-time hire. You only pay for the support you need—making it ideal for startups and SMEs.',
    },
    {
      question: 'Is a CFO necessary if I already have an accountant?',
      answer:
        'Yes. Accountants handle compliance and historical data. CFOs look forward—helping with planning, strategy, investor relations, and growth decisions.',
    },
    {
      question: 'Are your virtual CFOs based in Singapore?',
      answer:
        'Yes, our CFOs have deep local expertise and work with companies across Singapore and Southeast Asia.',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-blue-50/50 py-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            FAQs About CFO Services
          </h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto mt-4"></div>
        </motion.div>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {faqs.map((item, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx + 1}`}
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
                <span className="text-left w-full select-none font-medium">{item.question}</span>
                <span className="flex items-center justify-center transition-all duration-300">
                  <span className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 bg-black rounded-full text-white transition-all duration-200">
                    <Plus className="w-6 h-6 transition-all duration-200 group-data-[state=open]:hidden" strokeWidth={3} />
                    <Minus className="w-6 h-6 transition-all duration-200 group-data-[state=closed]:hidden" strokeWidth={3} />
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="bg-white px-6 pb-6 pt-2 border border-[#e2e2e2] border-t-0 text-lg text-gray-800 font-normal leading-relaxed rounded-b-[6px] animate-slide-down">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQAccordion;
