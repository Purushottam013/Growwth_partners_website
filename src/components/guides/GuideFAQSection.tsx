
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

interface GuideFAQSectionProps {
  faqs: { question: string; answer: string }[];
  startIndex?: number;
  endIndex?: number;
  title?: string;
}

export const GuideFAQSection = ({
  faqs,
  startIndex = 0,
  endIndex,
  title = "Frequently Asked Questions",
}: GuideFAQSectionProps) => {
  const faqsToRender = endIndex ? faqs.slice(startIndex, endIndex) : faqs.slice(startIndex);
  
  if (!faqs || faqsToRender.length === 0) {
    return null;
  }

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-8">{title}</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqsToRender.map((faq, index) => (
          <AccordionItem key={`${startIndex}-${index}`} value={`faq-${startIndex}-${index}`} className="border-b">
            <AccordionTrigger className="text-left font-medium py-4 flex justify-between">
              {faq.question}
              <ChevronDown className="h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200" />
            </AccordionTrigger>
            <AccordionContent className="pb-4 pt-0">
              <p className="py-2 text-gray-600">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
