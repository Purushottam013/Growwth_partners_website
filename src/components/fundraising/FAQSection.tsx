
import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

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
    <section className="py-14 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-[#D3E4FD] text-[#F87315] rounded-full text-sm font-semibold mb-4">
            FAQ
          </span>
          <h3 className="heading-md mb-4">Frequently Asked Questions</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Find answers to common questions about our fundraising services.
          </p>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="mb-5 border-none"
              >
                {/* Custom AccordionTrigger with icon */}
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
                  <span className="text-left w-full select-none font-medium">
                    {faq.question}
                  </span>
                  <span className={`
                    flex items-center justify-center
                    transition-all duration-300
                  `}>
                    <span className={`
                      flex items-center justify-center
                      w-8 h-8 md:w-9 md:h-9
                      bg-black rounded-full
                      text-white
                      transition-all duration-200
                    `}>
                      <Plus 
                        className={`
                          w-6 h-6 transition-all duration-200
                          group-data-[state=open]:hidden
                        `}
                        strokeWidth={3}
                      />
                      <Minus 
                        className={`
                          w-6 h-6 transition-all duration-200
                          group-data-[state=closed]:hidden
                        `}
                        strokeWidth={3}
                      />
                    </span>
                  </span>
                </AccordionTrigger>
                {/* Styled AccordionContent */}
                <AccordionContent 
                  className={`
                    bg-white px-6 pb-6 pt-2 border border-[#e2e2e2] border-t-0
                    text-lg text-gray-800 font-normal leading-relaxed
                    rounded-b-[6px]
                    animate-slide-down
                  `}
                  style={{
                    fontFamily: "'Montserrat', sans-serif"
                  }}
                >
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
