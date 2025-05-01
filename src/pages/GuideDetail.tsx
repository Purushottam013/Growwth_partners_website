
import React from "react";
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Guide } from "@/data/guides";

interface GuideDetailProps {
  guide: Guide;
  keyTakeawayImages: string[];
  onContactClick: () => void;
}

const GuideDetail: React.FC<GuideDetailProps> = ({ guide, keyTakeawayImages, onContactClick }) => {
  // Create a mock structure for keyTakeaways and other missing properties if they don't exist
  const keyTakeaways = [
    { title: "Growth Orientation", description: "FRS for Small Entities focuses on essential reporting areas to support business growth." },
    { title: "Simplified Reporting", description: "Less complex disclosure requirements make financial reporting more manageable." },
    { title: "Cost Efficiency", description: "Reduced reporting burden leads to lower compliance costs and resource savings." },
    { title: "Compliance and Transparency", description: "Maintains adherence to accounting principles while ensuring clarity." },
    { title: "Business Decision Support", description: "Provides a framework for informed decisions based on accurate financial data." }
  ];
  
  // Content sections
  const sections = [
    { title: "Who Can Apply FRS for Small Entities?", content: `<p>The FRS for Small Entities is designed for businesses that meet specific criteria. To qualify, an entity must:</p>
      <ul class="list-disc pl-6 mt-3 space-y-2">
        <li>Be non-publicly accountable</li>
        <li>Publish general purpose financial statements for external users</li>
        <li>Meet two of the following size criteria:
          <ul class="list-disc pl-6 mt-2 mb-2">
            <li>Annual revenue of less than S$10 million</li>
            <li>Total assets of less than S$10 million</li>
            <li>Fewer than 50 employees</li>
          </ul>
        </li>
      </ul>` },
    { title: "Key Differences from Full FRS", content: `<p>The FRS for Small Entities differs from the full FRS framework in several important ways:</p>
      <ul class="list-disc pl-6 mt-3 space-y-2">
        <li><strong>Simplified Recognition and Measurement:</strong> Less complex approaches to financial instruments, goodwill amortization, and research and development costs.</li>
        <li><strong>Reduced Disclosures:</strong> Fewer required notes and explanations in financial statements.</li>
        <li><strong>Eliminated Topics:</strong> Certain complex areas like share-based payments, intermediate reporting, and earnings per share are not required.</li>
      </ul>` },
    { title: "Implementation Considerations", content: `<p>Transitioning to FRS for Small Entities requires careful planning:</p>
      <ul class="list-disc pl-6 mt-3 space-y-2">
        <li><strong>Initial Assessment:</strong> Evaluate if your business meets the qualifying criteria.</li>
        <li><strong>Impact Analysis:</strong> Determine how the transition will affect your financial statements.</li>
        <li><strong>System Updates:</strong> Adjust accounting systems and processes as needed.</li>
        <li><strong>Staff Training:</strong> Ensure your team understands the new requirements.</li>
        <li><strong>Communication:</strong> Inform stakeholders about the changes in financial reporting.</li>
      </ul>` }
  ];
  
  // FAQ items
  const faqs = [
    { question: "Is FRS for Small Entities mandatory for qualifying businesses?", answer: "No, it's optional. Qualifying businesses can choose between FRS for Small Entities or full FRS." },
    { question: "Can a business switch back to full FRS after adopting FRS for Small Entities?", answer: "Yes, but the change must be justified and properly documented, with retrospective application." },
    { question: "How frequently is FRS for Small Entities updated?", answer: "It's typically updated every few years, rather than the more frequent updates to full FRS." },
    { question: "Does using FRS for Small Entities affect tax calculations?", answer: "Not generally, as Singapore tax calculations have their own rules, but some simplifications may affect certain tax computations." }
  ];
  
  return (
    <Layout>
      {/* Hero Section with Title - Gradient background */}
      <section className="relative py-16 bg-gradient-to-b from-blue-100 to-white">
        <div className="container mx-auto px-4 w-[90%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              {guide.Title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {guide.Excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Takeaways Section - With centered layout for last items if needed */}
      <section className="py-12 bg-gradient-to-r from-blue-50/30 via-purple-50/30 to-blue-50/30">
        <div className="container mx-auto px-4 w-[90%]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-gray-900">
              Key Takeaways
            </h2>
            
            {/* Conditional rendering based on the number of takeaways */}
            {keyTakeaways.length <= 3 ? (
              // If 3 or fewer takeaways, show them in one row
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {keyTakeaways.map((takeaway, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                  >
                    <div className="flex justify-center mb-4">
                      <img 
                        src={keyTakeawayImages[index] || '/placeholder.svg'}
                        alt={takeaway.title}
                        className="h-20 w-auto"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-center">{takeaway.title}</h3>
                    <p className="text-gray-700">{takeaway.description}</p>
                  </motion.div>
                ))}
              </div>
            ) : keyTakeaways.length === 5 ? (
              // Special case for 5 takeaways (3 in first row, 2 centered in second)
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {keyTakeaways.slice(0, 3).map((takeaway, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                    >
                      <div className="flex justify-center mb-4">
                        <img 
                          src={keyTakeawayImages[index] || '/placeholder.svg'}
                          alt={takeaway.title}
                          className="h-20 w-auto"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-center">{takeaway.title}</h3>
                      <p className="text-gray-700">{takeaway.description}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-3xl mx-auto">
                  {keyTakeaways.slice(3, 5).map((takeaway, index) => (
                    <motion.div
                      key={index + 3}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                    >
                      <div className="flex justify-center mb-4">
                        <img 
                          src={keyTakeawayImages[index + 3] || '/placeholder.svg'}
                          alt={takeaway.title}
                          className="h-20 w-auto"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-center">{takeaway.title}</h3>
                      <p className="text-gray-700">{takeaway.description}</p>
                    </motion.div>
                  ))}
                </div>
              </>
            ) : (
              // Default grid layout for 4+ takeaways
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {keyTakeaways.map((takeaway, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                  >
                    <div className="flex justify-center mb-4">
                      <img 
                        src={keyTakeawayImages[index] || '/placeholder.svg'}
                        alt={takeaway.title}
                        className="h-20 w-auto"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-center">{takeaway.title}</h3>
                    <p className="text-gray-700">{takeaway.description}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections - identical styling for both guides */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Introduction section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Introduction</h3>
            <div className="prose max-w-none text-lg text-gray-700 leading-relaxed">
              <div dangerouslySetInnerHTML={{ __html: `
                <p>Singapore's financial reporting landscape offers specialized frameworks for businesses of different sizes. The Financial Reporting Standard for Small Entities (FRS for Small Entities) provides a simplified alternative to the full FRS framework, specifically designed for smaller businesses that meet certain criteria.</p>
                <p>This comprehensive guide explores the key aspects of FRS for Small Entities, helping business owners and financial professionals understand its applications, benefits, and implementation considerations.</p>
              ` }} />
            </div>
          </motion.div>

          {/* Main content */}
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="mb-16"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900">{section.title}</h3>
              <div className="prose max-w-none text-lg text-gray-700 leading-relaxed">
                <div dangerouslySetInnerHTML={{ __html: section.content }} />
              </div>
            </motion.div>
          ))}

          {/* FAQ section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900">Frequently Asked Questions</h3>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="text-left font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                    <p className="text-gray-700">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Summary and CTA section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Summary</h3>
            <div className="text-lg text-gray-700 mb-10 leading-relaxed">
              <div dangerouslySetInnerHTML={{ __html: `
                <p>The FRS for Small Entities represents an important tool for smaller businesses in Singapore to streamline their financial reporting while maintaining compliance with accounting standards. By reducing complexity and focusing on the most relevant aspects of financial reporting, it allows business owners to allocate resources more efficiently without compromising on financial transparency.</p>
                <p>For eligible businesses, adopting this framework can lead to significant cost and time savings, while still providing stakeholders with the financial information they need to make informed decisions. As with any accounting framework, proper implementation and understanding are key to maximizing its benefits.</p>
              ` }} />
            </div>

            <Separator className="my-10" />

            {/* CTA Section - Highlighted */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-10 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ready to take the next step?
              </h3>
              <p className="text-xl mb-6">
                Book a free call with our expert to discuss your needs.
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
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default GuideDetail;
