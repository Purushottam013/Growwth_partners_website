import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";
export const FaqSection = () => {
  const faqs = [{
    question: "What exactly is financial modeling?",
    answer: "Financial modeling is the process of creating a summary of a company's costs and income in the form of a spreadsheet that can be used to calculate the impact of future events or decisions."
  }, {
    question: "How much does your financial modeling service cost?",
    answer: "Our financial modeling services are customized to each client's specific needs and business complexity. We offer tailored pricing based on the scope, depth, and timeframe of your project. Contact us for a personalized quote."
  }, {
    question: "How long does it take to develop a financial model?",
    answer: "The timeline varies depending on the complexity and requirements of your business. Simple models may take 1-2 weeks, while more complex models with multiple scenarios and detailed projections can take 3-4 weeks or longer."
  }, {
    question: "Do you offer ongoing support after delivering the financial model?",
    answer: "Yes, we provide ongoing support to ensure you get the most value from your financial model. This includes regular updates, training sessions for your team, and assistance with interpreting results and making data-driven decisions."
  }, {
    question: "Can you customize financial models for specific industries?",
    answer: "Absolutely. We specialize in creating industry-specific financial models that reflect the unique dynamics, metrics, and KPIs relevant to your sector. Our team has experience across multiple industries including tech, healthcare, retail, manufacturing, and more."
  }];
  return <section className="py-14 bg-white">
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
          <span className="inline-block px-4 py-1 bg-[#D3E4FD] text-[#F87315] rounded-full text-sm font-semibold mb-4">
            FAQ
          </span>
          <h3 className="heading-md mb-4">Frequently Asked Questions</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Find answers to common questions about our financial modeling services.
          </p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="mb-5 border-none">
                {/* Custom AccordionTrigger with icon */}
                <AccordionTrigger className={`
                    group flex items-center justify-between w-full
                    bg-[#ededed] px-6 py-6
                    font-bold text-xl md:text-2xl text-black
                    rounded-none border border-[#e2e2e2] transition-all duration-200 
                    shadow-none
                    outline-none
                    focus-visible:outline-none
                    data-[state=open]:border-[2.5px] data-[state=open]:border-[#1775ff]
                    data-[state=open]:rounded-[6px]
                  `} style={{
              boxShadow: "none",
              borderRadius: "4px",
              borderWidth: "1.5px"
            }}>
                  <span className="text-left w-full select-none font-medium">{faq.question}</span>
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
                      <Plus className={`
                          w-6 h-6 transition-all duration-200
                          group-data-[state=open]:hidden
                        `} strokeWidth={3} />
                      <Minus className={`
                          w-6 h-6 transition-all duration-200
                          group-data-[state=closed]:hidden
                        `} strokeWidth={3} />
                    </span>
                  </span>
                </AccordionTrigger>
                {/* Styled AccordionContent */}
                <AccordionContent className={`
                    bg-white px-6 pb-6 pt-2 border border-[#e2e2e2] border-t-0
                    text-lg text-gray-800 font-normal leading-relaxed
                    rounded-b-[6px]
                    animate-slide-down
                  `} style={{
              fontFamily: "'Montserrat', sans-serif"
            }}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </div>
    </section>;
};