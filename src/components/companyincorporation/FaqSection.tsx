
import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

export const FaqSection = () => {
  const faqs = [
    {
      question: "Does a Singaporean business need a director who resides there?",
      answer: "Yes, at least one director who resides in Singapore must be present in a Singaporean business. This is evident according to Singapore's Companies Act."
    },
    {
      question: "What steps are necessary in Singapore to form a company?",
      answer: "Company registration in Singapore can be done by following these few steps: First of all, the business owner needs to review and understand the registration requirements of Singapore's company. After that, it is necessary to fix a corporate structure and assembly required documents. Look whether the company name you are looking forward to is available or not. Get professional help from business incorporation services and sign incorporation papers. Open your company's bank account after incorporating it. Check out the documents you will need for this overall process: Identification documents of directors and shareholders, Company name approval, Company registration form, Memorandum and Articles of Association, Appointment of company secretary, Permits and business license, Bank account details. If you find this overall process to be extremely intimidating, make sure to seek professional assistance from registration and incorporation services."
    },
    {
      question: "What credentials are required of a director of a Singaporean company?",
      answer: "The credentials of a Singaporean company's director include: The director needs to be 18 years or above. Potent enough to take care of the job both mentally and physically. Shouldn't be involved in any punishable offense or fraud. Should be financially stable and responsible. Should have a record of adhering to laws and regulations along with other compliance requirements. If an individual meets these basic credentials, he/she will be eligible to be the director of a Singaporean company."
    },
    {
      question: "What is the price of registering a corporation in Singapore?",
      answer: "The standard fee for registering a corporation in Singapore is nearly $315."
    },
    {
      question: "Can I operate a business in Singapore without registering it?",
      answer: "No, you won't be able to operate a business in Singapore without registering it. Company registration in Singapore is extremely important."
    },
    {
      question: "Why should your company incorporate in Singapore?",
      answer: "Several individuals choose to incorporate their companies in Singapore because this place has an attractive tax system. Here, no tax on capital gains is levied, which makes Singapore a preferable choice for entrepreneurs and business people."
    }
  ];

  return (
    <section className="py-14 bg-gray-50">
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
            Find answers to common questions about company incorporation in Singapore.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
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

export default FaqSection;
