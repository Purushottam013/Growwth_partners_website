
import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

export const FaqSection = () => {
  const faqs = [
    {
      question: "What is the scope of services of the company secretary?",
      answer: "When an individual gets into company secretarial services, he/she needs to manage meetings, facilitate and take care of financial transactions, ensure legal compliance, manage risks and offer legal advice and assistance."
    },
    {
      question: "What services does a company secretary in practice provide?",
      answer: "A company secretary, in practice, is responsible for offering support and advice on compliance issues and corporate governance. They can work as an independent consultant in different sectors such as accounting and law firms. They oversee whether the companies they are working with are complying with the laws and regulations or not. Apart from that, company secretary services in practice enables the professionals to advise on board performance and composition. They contribute to guiding the companies by sharing their best business practices."
    },
    {
      question: "What Is the Main Role of a Company Secretary?",
      answer: "The main roles of a company secretary typically include the following:\nOrganizing board meetings for companies along with shareholder meetings.\nTaking care of the statutory registers of the company.\nFocusing on corporate governance that includes managing stakeholders' and shareholders' interests, handling conflicts of interest, and dealing with investor guidelines and applicable codes.\nManaging the records of the company. It typically includes VAT registration, PAYE information, tax and accountancy records, pension and insurance information.\nUpdating the company's house's records.\nEvery individual interested in corp security services needs to fully understand these few roles and fulfill them."
    },
    {
      question: "How much does a Company Secretary cost in Singapore?",
      answer: "An in-house company secretary costs between SGD 60,000 to SGD 100,000 annually. On the other hand, if an organization decides to outsource these services, it eventually costs around SGD 300 to SGD 1,500."
    },
    {
      question: "How do I change my company secretary in Singapore?",
      answer: "If you want to change your company secretary in Singapore and opt for other company secretarial services in Singapore, the new secretary needs to sign the Form 45B."
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
            Find answers to common questions about our corporate secretary services.
          </p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="mb-5 border-none">
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
                  <span className="text-left w-full select-none font-medium">{faq.question}</span>
                  <span
                    className={`
                      flex items-center justify-center
                      transition-all duration-300
                    `}
                  >
                    <span
                      className={`
                        flex items-center justify-center
                        w-8 h-8 md:w-9 md:h-9
                        bg-black rounded-full
                        text-white
                        transition-all duration-200
                      `}
                    >
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
                  {faq.answer.split('\n').map((paragraph, i) => (
                    <p key={i} className="mb-2">{paragraph}</p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
