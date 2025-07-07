
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const FAQSection = () => {
  const faqs = [
    {
      question: "What types of companies do you work with?",
      answer: "We work with companies across various industries and stages, from pre-seed startups to established businesses seeking growth capital. Our expertise spans technology, healthcare, fintech, e-commerce, and many other sectors."
    },
    {
      question: "How long does the fundraising process typically take?",
      answer: "The fundraising timeline varies depending on several factors including company stage, funding amount, and market conditions. Typically, the process takes 4-6 months from initial engagement to closing, though some rounds may close faster or take longer depending on complexity."
    },
    {
      question: "What is your fee structure?",
      answer: "We offer flexible engagement models to suit different client needs, including success-based fees, retainer arrangements, and hybrid structures. Our fee structure is transparent and aligned with your fundraising goals. Contact us for a detailed discussion about pricing options."
    },
    {
      question: "Do you guarantee funding success?",
      answer: "While we cannot guarantee funding outcomes due to market variables and investor preferences, our proven methodology, extensive network, and comprehensive approach significantly increase your chances of successful fundraising. We work diligently to position your company for success."
    },
    {
      question: "What stages of funding do you support?",
      answer: "We support companies at all funding stages, from pre-seed and seed rounds to Series A, B, C, and beyond. We also assist with bridge financing, debt funding, and strategic partnerships. Our approach is tailored to your specific stage and requirements."
    },
    {
      question: "How do you help prepare our pitch deck?",
      answer: "Our team works closely with you to create compelling, investor-ready pitch decks that clearly communicate your value proposition, market opportunity, business model, and growth potential. We ensure your presentation tells a compelling story that resonates with investors."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our fundraising services
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline px-8 py-6 hover:bg-gray-50 rounded-t-xl">
                  <span className="pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 px-8 pb-6 pt-2 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
