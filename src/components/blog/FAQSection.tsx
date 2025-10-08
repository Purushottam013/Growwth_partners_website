import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  postTitle: string;
}

export const FAQSection = ({ faqs, postTitle }: FAQSectionProps) => {
  if (!faqs || faqs.length === 0) {
    return null;
  }

  // Filter out empty FAQs
  const validFaqs = faqs.filter(faq => faq.question && faq.answer);
  
  if (validFaqs.length === 0) {
    return null;
  }

  // Generate Schema.org FAQPage structured data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: validFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="mt-12 bg-muted/30 p-6 md:p-8 rounded-xl">
      <script type="application/ld+json">
        {JSON.stringify(faqStructuredData)}
      </script>
      
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      
      <Accordion type="single" collapsible className="w-full space-y-2">
        {validFaqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="bg-background rounded-lg px-4 border"
          >
            <AccordionTrigger className="text-left hover:no-underline">
              <span className="font-semibold">{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pt-2">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
