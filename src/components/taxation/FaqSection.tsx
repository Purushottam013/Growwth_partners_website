
import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

export const FaqSection = () => {
  const faqs = [
    {
      question: "What is tax compliance?",
      answer: "Tax compliance involves ensuring that a company adheres to all tax laws and regulations, including accurate reporting and timely payment of taxes."
    }, 
    {
      question: "Why is thorough financial review important for tax compliance?",
      answer: "A thorough financial review ensures all financial statements are accurate, identifying any discrepancies or errors that could affect tax calculations and compliance."
    }, 
    {
      question: "How does Growwth Partners help with tax deadlines?",
      answer: "We provide clear, advance notifications of all tax deadlines and ensure timely submission to avoid penalties and interest charges."
    }, 
    {
      question: "What makes Growwth Partners' reporting different?",
      answer: "Our tax reports are straightforward and easy to understand, linking financials with tax workings for complete transparency and clarity."
    }, 
    {
      question: "How often does Growwth Partners review financials?",
      answer: "We offer monthly bookkeeping services to keep your financials accurate year-round, reducing the end-of-year workload and ensuring continuous accuracy."
    }, 
    {
      question: "Can Growwth Partners help with tax-saving opportunities?",
      answer: "Yes, we identify potential tax-saving opportunities, such as capital allowances and software expenses, and communicate them promptly to our clients."
    },
    {
      question: "What happens during the initial consultation?",
      answer: "During the initial consultation, we discuss your current tax situation, identify issues with previous providers, and develop a tailored tax compliance plan to address your specific needs."
    },
    {
      question: "How does Growwth Partners ensure transparency in tax calculations?",
      answer: "We link financials with tax workings, providing a clear trail from income to expenses to tax payable, ensuring you understand how we arrived at each number."
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
            Find answers to common questions about our taxation and compliance services.
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
