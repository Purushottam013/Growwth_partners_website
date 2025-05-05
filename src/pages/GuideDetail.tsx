import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Guide } from "@/data/guides";
import { ChevronDown, ChevronRight } from "lucide-react";

interface GuideDetailProps {
  guide: Guide;
  onContactClick: () => void;
}

const GuideDetail = ({ guide, onContactClick }: GuideDetailProps) => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  // Function to render FAQs by index range
  const renderFAQs = (startIndex: number, endIndex: number) => {
    if (!guide.faqs) return null;
    
    const faqsToRender = guide.faqs.slice(startIndex, endIndex);
    if (faqsToRender.length === 0) return null;
    
    return (
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
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

  return (
    <Layout>
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className={`mx-auto ${guide.Title === "A Comprehensive Guide to Bookkeeping Practices" ? "w-[90%]" : "max-w-4xl"}`}>
            {/* Title - Only showing title without hero section for bookkeeping practices guide */}
            {guide.Title === "A Comprehensive Guide to Bookkeeping Practices" && (
              <div className="mb-8 text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{guide.Title}</h1>
                <div className="flex items-center justify-center mt-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                    {guide.Category}
                  </span>
                </div>
              </div>
            )}
            
            {/* Hero Section - Only for other guides */}
            {guide.Title !== "A Comprehensive Guide to Bookkeeping Practices" && (
              <section className="bg-gray-50 py-16 mb-12 rounded-lg">
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
            )}
            
            {/* Banner Image - Only for non-bookkeeping guides or conditionally display for bookkeeping guide */}
            {guide.Title !== "A Comprehensive Guide to Bookkeeping Practices" && (
              <div className="mb-12 rounded-lg overflow-hidden">
                <OptimizedImage 
                  src={guide.Image} 
                  alt={guide.Title} 
                  className="w-full h-auto" 
                  fallbackSrc="/placeholder.svg"
                />
              </div>
            )}
            
            {/* Key Takeaways Section - Custom layout for Bookkeeping guide */}
            {guide.Title === "A Comprehensive Guide to Bookkeeping Practices" && guide.keyTakeaways && guide.keyTakeaways.length > 0 && (
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-8 text-center">Key Takeaways</h2>
                <div className="space-y-6">
                  {/* First row - 3 items */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {guide.keyTakeaways.slice(0, 3).map((takeaway, index) => (
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
                  
                  {/* Second row - 2 items */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-2/3 mx-auto">
                    {guide.keyTakeaways.slice(3, 5).map((takeaway, index) => (
                      <div key={index + 3} className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 mb-4">
                          <OptimizedImage 
                            src={guide.keyTakeawayImages?.[index + 3] || "/placeholder.svg"} 
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
              </div>
            )}
            
            {/* Key Takeaways Section - Default layout for other guides */}
            {guide.Title !== "A Comprehensive Guide to Bookkeeping Practices" && guide.keyTakeaways && guide.keyTakeaways.length > 0 && (
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
            
            {/* Content and FAQ Sections - Now interspersed as per content structure */}
            {guide.Title === "A Comprehensive Guide to Bookkeeping Practices" ? (
              <>
                {/* Introduction Section */}
                {guide.sections && guide.sections[0] && (
                  <div className="mb-12 prose max-w-none">
                    <h2 className="text-2xl font-bold mb-4">{guide.sections[0].title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: guide.sections[0].content }} />
                  </div>
                )}
                
                {/* What is Bookkeeping Section */}
                {guide.sections && guide.sections[1] && (
                  <div className="mb-12 prose max-w-none">
                    <h2 className="text-2xl font-bold mb-4">{guide.sections[1].title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: guide.sections[1].content }} />
                  </div>
                )}
                
                {/* First FAQ Section */}
                {renderFAQs(0, 4)}
                
                {/* Importance of Bookkeeping Section */}
                {guide.sections && guide.sections[2] && (
                  <div className="mb-12 prose max-w-none">
                    <h2 className="text-2xl font-bold mb-4">{guide.sections[2].title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: guide.sections[2].content }} />
                  </div>
                )}
                
                {/* Basic Bookkeeping Terms Section */}
                {guide.sections && guide.sections[3] && (
                  <div className="mb-12 prose max-w-none">
                    <h2 className="text-2xl font-bold mb-4">{guide.sections[3].title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: guide.sections[3].content }} />
                  </div>
                )}
                
                {/* Second FAQ Section */}
                {renderFAQs(4, 9)}
                
                {/* Comprehensive Steps Section */}
                {guide.sections && guide.sections[4] && (
                  <div className="mb-12 prose max-w-none">
                    <h2 className="text-2xl font-bold mb-4">{guide.sections[4].title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: guide.sections[4].content }} />
                  </div>
                )}
                
                {/* Common Challenges Section */}
                {guide.sections && guide.sections[5] && (
                  <div className="mb-12 prose max-w-none">
                    <h2 className="text-2xl font-bold mb-4">{guide.sections[5].title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: guide.sections[5].content }} />
                  </div>
                )}
                
                {/* Third FAQ Section */}
                {renderFAQs(9, 14)}
                
                {/* Summary Section */}
                {guide.sections && guide.sections[6] && (
                  <div className="mb-12 prose max-w-none">
                    <h2 className="text-2xl font-bold mb-4">{guide.sections[6].title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: guide.sections[6].content }} />
                  </div>
                )}
                
                {/* Book a Free Consultation Section - Updated to match financial reporting guide */}
                {guide.sections && guide.sections[7] && (
                  <div className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white mb-12 rounded-lg">
                    <div className="container mx-auto px-4">
                      <div className="max-w-3xl mx-auto text-center">
                        <h3 className="text-3xl font-bold mb-6">
                          Book a free call with our expert to discuss your bookkeeping needs and save time and effort.
                        </h3>
                        
                        <p className="text-xl mb-8">
                          We are here to help you!
                        </p>
                        
                        <Button 
                          onClick={onContactClick}
                          size="lg" 
                          className="bg-white text-blue-700 hover:bg-gray-100 font-semibold text-lg px-8 py-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                        >
                          Book a Free Call
                          <ChevronRight className="ml-2 h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <>
                {/* Content Sections for other guides */}
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
                
                {/* FAQ Section for other guides */}
                {guide.faqs && guide.faqs.length > 0 && (
                  <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full">
                      {guide.faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`faq-${index}`} className="border-b">
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
                )}
              </>
            )}
            
            {/* CTA Section - except for Bookkeeping guide as it already has one */}
            {guide.Title !== "A Comprehensive Guide to Bookkeeping Practices" && (
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <h2 className="text-2xl font-bold mb-4">Need Help With Your Business?</h2>
                <p className="text-gray-600 mb-6">
                  Our team of experts is ready to provide you with personalized advice and solutions.
                </p>
                <Button onClick={onContactClick} className="bg-primary hover:bg-primary/90">
                  Schedule A Consultation
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GuideDetail;
