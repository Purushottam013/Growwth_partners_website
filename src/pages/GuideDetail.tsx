
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Guide } from "@/data/guides";
import { ChevronDown } from "lucide-react";

interface GuideDetailProps {
  guide: Guide;
  onContactClick: () => void;
}

const GuideDetail = ({ guide, onContactClick }: GuideDetailProps) => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{guide.Title}</h1>
              <p className="text-lg text-gray-600 mb-8">{guide.Excerpt}</p>
              <div className="flex items-center space-x-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                  {guide.Category}
                </span>
                {guide.publishedAt && (
                  <time className="text-gray-500 text-sm">
                    Published on {new Date(guide.publishedAt).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </time>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className={`mx-auto ${guide.Title === "A Comprehensive Guide to Bookkeeping Practices" ? "w-[90%]" : "max-w-4xl"}`}>
            {/* Banner Image */}
            <div className="mb-12 rounded-lg overflow-hidden">
              <OptimizedImage 
                src={guide.Image} 
                alt={guide.Title} 
                className="w-full h-auto" 
                fallbackSrc="/placeholder.svg"
              />
            </div>
            
            {/* Key Takeaways Section */}
            {guide.keyTakeaways && guide.keyTakeaways.length > 0 && (
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-8 text-center">Key Takeaways</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {guide.keyTakeaways.map((takeaway, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                      <div className="w-24 h-24 mb-4">
                        <OptimizedImage 
                          src={guide.keyTakeawayImages?.[index] || "/placeholder.svg"} 
                          alt={takeaway.title} 
                          className="w-full h-full" 
                          fallbackSrc="/placeholder.svg"
                        />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{takeaway.title}</h3>
                      <p className="text-sm text-gray-600">{takeaway.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Content Sections */}
            {guide.sections && guide.sections.length > 0 && (
              <div className="mb-16 space-y-12">
                {guide.sections.map((section, index) => (
                  <div key={index} className="prose max-w-none">
                    <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: section.content }} />
                  </div>
                ))}
              </div>
            )}
            
            {/* FAQ Section */}
            {guide.faqs && guide.faqs.length > 0 && (
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                  {guide.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`} className="border-b">
                      <AccordionTrigger className="text-left font-medium py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 pt-0">
                        <p className="py-2 text-gray-600">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )}
            
            {/* CTA Section */}
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Need Help With Your Business?</h2>
              <p className="text-gray-600 mb-6">
                Our team of experts is ready to provide you with personalized advice and solutions.
              </p>
              <Button onClick={onContactClick} className="bg-primary hover:bg-primary/90">
                Schedule A Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GuideDetail;
