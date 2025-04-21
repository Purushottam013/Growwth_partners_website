import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Plus, Minus } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const faqItems = [
    {
      question: 'What are the requirements to incorporate a company in Singapore?',
      answer:
        'To incorporate a company in Singapore, you need at least one director who is a Singapore resident, at least one shareholder (can be the same person as the director), a company secretary, a registered physical address in Singapore, and a minimum paid-up capital of SGD 1.',
    },
    {
      question: 'How long does it take to incorporate a company in Singapore?',
      answer:
        'With Growwth Partners, company incorporation in Singapore typically takes 1-3 business days once all required documents are submitted and verified. Complex cases may require additional time for approval.',
    },
    {
      question: 'Can foreigners incorporate a company in Singapore?',
      answer:
        'Yes, foreigners can incorporate a company in Singapore. However, at least one director must be a Singapore resident (citizen, permanent resident, or EntrePass holder). We can help arrange a nominee director if needed.',
    },
    {
      question: 'What are the ongoing compliance requirements after incorporation?',
      answer:
        'After incorporation, Singapore companies must hold annual general meetings, file annual returns, prepare financial statements, file tax returns, and maintain a registered office address. Our corporate secretarial services can help manage these requirements.',
    },
    {
      question: 'What taxes will my Singapore company be subject to?',
      answer:
        'Singapore companies are subject to a corporate tax rate of 17%. However, there are various tax incentives and exemptions available, particularly for new startups. Singapore also has one of the largest networks of double tax treaties worldwide.',
    },
    {
      question: 'Do I need to be physically present in Singapore to incorporate a company?',
      answer:
        "No, you don't need to be physically present in Singapore to incorporate a company. Growwth Partners can handle the entire incorporation process remotely, making it convenient for international entrepreneurs.",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto py-16">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-8 text-gray-900"
      >
        Frequently Asked Questions
      </motion.h2>
      <Accordion type="single" collapsible className="space-y-4">
        {faqItems.map((item, idx) => (
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
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-gray-600 text-base leading-relaxed">{item.answer}</p>
              </motion.div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
