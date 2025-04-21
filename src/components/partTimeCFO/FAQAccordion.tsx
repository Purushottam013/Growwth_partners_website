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

        <Accordion type="single" collapsible className="max-w-5xl mx-auto space-y-6">
          {faqs.map((item, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx + 1}`}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <AccordionTrigger className="group px-6 py-4 flex justify-between items-center">
                <span className="text-lg font-medium text-gray-800">{item.question}</span>
                <div className="flex-shrink-0">
                  <Plus className="h-6 w-6 text-brand-orange group-data-[state=open]:hidden transition-transform" />
                  <Minus className="h-6 w-6 text-brand-orange hidden group-data-[state=open]:block transition-transform" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 bg-gray-50">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-gray-600 leading-relaxed"
                >
                  {item.answer}
                </motion.p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQAccordion;
