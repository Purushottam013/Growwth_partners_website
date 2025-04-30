import { useParams, Navigate, useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";

const FinancialReportingGuide = () => {
  const navigate = useNavigate();
  
  const handleContactClick = () => {
    // Navigate to contact page and scroll to consultation form
    navigate("/contact");
    
    // Use setTimeout to ensure navigation completes before trying to scroll
    setTimeout(() => {
      const consultationForm = document.getElementById("consultation-form");
      if (consultationForm) {
        consultationForm.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  // Updated key takeaway images with the newly uploaded images
  const keyTakeawayImages = [
    "/lovable-uploads/ff64989c-dab9-4050-814e-d90bca79f42b.png", // Simplified Financial Reporting
    "/lovable-uploads/15e6b360-d5dd-4d93-8dd8-86e3b6815a2c.png", // Eligibility Criteria
    "/lovable-uploads/ff10cb0e-544a-4e37-b61b-8e4174ede681.png", // Cost Efficacy
    "/lovable-uploads/29d7a505-65ef-443d-bc30-78185338c79b.png", // Growth Orientation
    "/lovable-uploads/7950ef2b-fec5-470f-8003-13b293af4b08.png"  // Compliance and Transparency
  ];

  return (
    <Layout>
      {/* Hero Section with Title */}
      <section className="relative py-16 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto px-4 w-[90%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Guide to Financial Reporting Standards in Singapore for Small Entities
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive guide to understanding and implementing SFRS for small entities in Singapore
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Takeaways Section */}
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Simplified Financial Reporting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex justify-center mb-4">
                  <img 
                    src={keyTakeawayImages[0]}
                    alt="Simplified Financial Reporting"
                    className="h-20 w-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Simplified Financial Reporting</h3>
                <p className="text-gray-700">
                  Singapore Financial Reporting Standards for Small Entities provides a streamlined framework tailored for small entities.
                </p>
              </motion.div>

              {/* Eligibility Criteria */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex justify-center mb-4">
                  <img 
                    src={keyTakeawayImages[1]}
                    alt="Eligibility Criteria"
                    className="h-20 w-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Eligibility Criteria</h3>
                <p className="text-gray-700">
                  There are specific criteria that have to be met, related to revenue, assets and number of employees.
                </p>
              </motion.div>

              {/* Cost Efficacy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex justify-center mb-4">
                  <img 
                    src={keyTakeawayImages[2]}
                    alt="Cost Efficacy"
                    className="h-20 w-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Cost Efficacy</h3>
                <p className="text-gray-700">
                  Businesses could save much on compliance, auditing and financial reporting costs by using this framework, allowing them to allocate their resources more efficiently.
                </p>
              </motion.div>

              {/* Growth Orientation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex justify-center mb-4">
                  <img 
                    src={keyTakeawayImages[3]}
                    alt="Growth Orientation"
                    className="h-20 w-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Growth Orientation</h3>
                <p className="text-gray-700">
                  Forging ahead with the core operations and growth strategies becomes easier with less time committed into financial reporting operations.
                </p>
              </motion.div>

              {/* Compliance and Transparency */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex justify-center mb-4">
                  <img 
                    src={keyTakeawayImages[4]}
                    alt="Compliance and Transparency"
                    className="h-20 w-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Compliance and Transparency</h3>
                <p className="text-gray-700">
                  This is an approach that ensures accuracy, transparency and adherence to legal requirements in financial reporting.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Introduction</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The Accounting Standards Council (ASC) designed the Singapore Financial Reporting Standards (SFRS) for Small Entities (SE), a simplified accounting framework targeted at smaller entities in Singapore. These Financial Reporting Standards became effective January 1st, 2011, to reduce the burden of financial reporting on small companies, while ensuring transparent and complete disclosures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Eligibility Criteria Section with Image */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Eligibility Criteria</h3>
            
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/2">
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  For an entity to be eligible for SFRS it has to be a small entity not publicly accountable which meets two out of three quantitative criteria:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                  <li>Total annual income should not exceed S$10 million,</li>
                  <li>Total gross assets should not exceed S$10 million,</li>
                  <li>Total number of employees should not exceed fifty persons.</li>
                </ul>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  An entity must satisfy these criteria over two consecutive years before applying the SFRS. Newly incorporated companies in Singapore can use the SFRS during their first two years if they meet these conditions that qualify them using it.
                </p>
                
                <div className="bg-brand-orange/10 border-l-4 border-brand-orange p-4 rounded-r-md mb-6">
                  <p className="text-gray-800 italic">
                    With the customised solutions offered by Growwth Partners, you can simplify your financial reporting practices and maximise your financial management efficiency. Get in touch now!
                  </p>
                </div>
              </div>
              
              <div className="lg:w-1/2 flex justify-center">
                <img 
                  src="/lovable-uploads/9b13b80f-d567-43ea-b38b-de0a867a0d64.png" 
                  alt="SFRS Benefits" 
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-gray-900">Potential Challenges and Considerations</h4>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                There are certain issues that businesses must consider before taking up SFRS for Small Entities. Transition costs such as initial training or conversion of accounting systems may present a challenge. Also, if a company plans on significant growth or an IPO, there may be a need to consider full SFRS instead. Subsidiaries within a group using full SFRS might face consolidation issues.
              </p>
              
              <h4 className="text-xl font-semibold mb-4 text-gray-900">Key Differences Between Full SFRS and SFRS for Small Entities</h4>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                The full Singapore Financial Reporting Standards consists of many standards suitable for various types of firms, Singapore Financial Reporting Standards for Small Entities are meant for smaller companies. The major differences between the two include:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Easy recognition</li>
                <li>Simplified measurement principles</li>
                <li>Fewer disclosures</li>
                <li>Concise reporting formats</li>
              </ul>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                These adjustments are intended to make it easier for small entities to prepare financial reports without compromising with quality.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
                <h5 className="text-lg font-semibold mb-2 text-gray-900">Pro Tip:</h5>
                <p className="text-gray-700">
                  Ensure you continuously monitor your company's financial metrics in order to stay eligible for SFRS, year after year. Your financial reporting should remain optimised and compliant by keeping track of any changes in SFRS or SFRS for Small Entities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section 1 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900">Frequently Asked Questions</h3>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">Can a small company that has just been set up in Singapore adopt SFRS for Small Entities?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    Yes, if they qualify, newly incorporated firms in Singapore can use the SFRS for Small Entities during their first two years of establishment. This allows them to start with an easy reportage system.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">What if an entity does not satisfy the criteria of SFRS for Small Entities?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    If an entity fails to meet the criteria of SFRS for Small Entities two years running, it will have to switch to full SFRS so that only eligible companies can continue enjoying simplified standards.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">Does any subsidiary have restrictions as regards using SFRS for Small Entities?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    Subsidiaries can use SFRS for Small entities even if their parent organisations utilise full SFRS since public accountability does not apply at this level. Subsidiaries can therefore benefit from simplified reporting while maintaining group-level compliance.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">How does tax reporting change under SFRS for small entities?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    Tax returns prepared under SFRS are acceptable to the Inland Revenue Authority of Singapore (IRAS), but are subject to necessary tax adjustments based on prevailing tax rules and principles.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">What are some of the benefits associated with adopting SFRS?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    It is cost-effective, simplifies reporting and frees up resources, leading to greater operational focus on core business activities.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Financial Statement Presentation Section with Image */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900">Financial Statement Presentation</h3>
            
            <div className="mb-12">
              <h4 className="text-xl font-semibold mb-4 text-gray-900">Information to be Presented in the Statement of Financial Position</h4>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Also called balance sheet, this Statement of Financial Position gives a view about where things stand financially within an organisation at a particular moment. It should contain:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Assets: Current and non-current assets such as cash, trade receivables, inventories, property, plant, and equipment.</li>
                <li>Liabilities: Current and non-current liabilities including trade payables, loans, and provisions.</li>
                <li>Equity: Owner's equity, retained earnings, and other reserves.</li>
              </ul>
              <p className="text-lg text-gray-700 mb-4">
                If presentation of additional line items or subtotals within this statement is necessary for understanding the entity's financial position then those should be provided by the concerned entity accordingly.
              </p>
            </div>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 text-gray-900">Information to be Presented in the Statement of Cash Flows</h4>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Statement of Cash Flows offers details regarding in & out cash movement over specific time span. It has three parts, namely:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Operating Activities: Cash flows from principal revenue-generating activities.</li>
                <li>Investing Activities: Cash flows from the acquisition and disposal of long-term assets and investments.</li>
                <li>Financing Activities: Cash flows related to changes in the size and composition of the equity and borrowings of the entity.</li>
              </ul>
              <p className="text-lg text-gray-700 mb-4">
                For the operating activities section, entities have the option to either use the direct method (showing gross cash receipts / payments) or indirect method (where net profit is adjusted for non-cash transactions) when reporting on cash flow.
              </p>
            </div>
            
            <div className="flex justify-center mb-8">
              <img 
                src="/lovable-uploads/c4305152-55c9-4691-b3ae-9aaaa411e8d2.png" 
                alt="Financial Statements under SFRS" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl shadow-sm mb-12">
              <h5 className="text-lg font-semibold mb-2 text-gray-900">Pro-tip:</h5>
              <p className="text-gray-700">
                Use the indirect method when preparing the Statement of Cash Flows since it gives clearer reconciliation between net profit & cash flow from operations.
              </p>
            </div>
            
            <div className="mb-12">
              <h4 className="text-xl font-semibold mb-4 text-gray-900">Information to be Presented in the Statement of Income and Retained Earnings</h4>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                The Statement of Income and Retained Earnings presents an organisation's financial performance over a specific period. It comprises:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Revenue: The money made from primary activities of the business.</li>
                <li>Expenses: All costs incurred to generate revenue, such as operating expenses, finance charges, taxes paid among others.</li>
                <li>Profit or Loss: The difference between earnings and expenditures.</li>
                <li>Retained Earnings: profits which are not distributed as dividends but kept back by the company.</li>
              </ul>
              <p className="text-lg text-gray-700 mb-4">
                A separate statement may be prepared for comprehensive income or it can be combined with an income statement showing all items recognised as revenue or expense during that particular time frame.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900">Information to be Presented in the Statement of Changes in Equity</h4>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                The Statement of Changes in Equity presents the movement in equity components during an accounting period. It consists of:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Total Comprehensive Income: Profit or loss for the period + other comprehensive income items.</li>
                <li>Transactions with Owners: Contributions from and distributions to owners (dividends, shares issuance, etc.)</li>
                <li>Reconciliation of Equity: Changes in equity components including retained earnings, share capital and other reserves.</li>
              </ul>
              <p className="text-lg text-gray-700 mb-4">
                For each item of equity, there is a requirement to present a reconciliation between its carrying amount at the beginning and end of the period, showing changes resulting from profit/loss, OCI (Other Comprehensive Income) and transactions with owners.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section 2 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900">Financial Statements FAQs</h3>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">What are the main elements of SFRS for Small Entities?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    Statement of Cash Flows, Statement of Changes in Equity, Statement of Comprehensive Income, Statement of Financial Position and Notes to Financial Statements make up a complete set.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">What details must be included on the statement of financial position?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    Line items such as cash & cash equivalents, inventories, property, equipment, trade & other payables, equity attributable parent company's owners, etc., need to be disclosed under this section.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">Which category should cash flows go into on a cash flow statement?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    Operating, investing and financing activities are three categories where cash flows belong. When reporting operating activities entities have the option to use direct or indirect methods.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">What information should be disclosed on income and retained earnings statements?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    Revenue, expenses, profit or loss, declared & paid dividends, retained earnings at start and end of the year are the required figures within this statement.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">How is the structure for the statement of changes in equity like?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    The statement shows changes between different types of capital balances, such as share capital, retained earnings and other reserves. It also includes comprehensive incomes over a particular time frame as well as transactions with stakeholders like issued shares and dividends.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Requirements for Compliance Section with Image */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Requirements for Compliance and Reporting</h3>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Consistent presentation and categorisation of financial items need to be taken extra care of by businesses that use SFRS for Small Entities. They also need to accurately record important accounting decisions and policies, as well as comparative data. Tax returns prepared under SFRS for Small Entities are acceptable to the Inland Revenue Authority of Singapore (IRAS) so long required tax adjustments are made based on prevailing rules and regulations.
            </p>
            
            <div className="flex flex-col lg:flex-row gap-8 items-center mb-8">
              <div className="lg:w-1/2 order-2 lg:order-1">
                <img 
                  src="/lovable-uploads/a33bd8bc-26ff-4eb8-a0cc-bcc5a7f25279.png" 
                  alt="Compliance Best Practices" 
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
              
              <div className="lg:w-1/2 order-1 lg:order-2">
                <h4 className="text-xl font-semibold mb-4 text-gray-900">Transitioning Process</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The process of moving to SFRS for Small Entities entails staff training, updating accounting systems to conform to the new framework, and assessing eligibility and potential benefits.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  During the transition period, small entities ought to compile a preliminary set of financial statements and evaluate their preparedness as well as any possible effects on their financial reporting.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  To guarantee a seamless adoption process, create a thorough transition plan that includes deadlines, resources, and significant checkpoints.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-gray-900">Common Mistakes to Avoid When Transitioning</h4>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                When implementing SFRS for Small Entities, a lot of businesses make common mistakes like not updating accounting systems, not meeting eligibility criteria consistently, not providing enough training for accounting staff, and not realising the importance of proper documentation and disclosures.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Do routine internal audits to find and fix any errors or gaps in compliance as soon as possible.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section 3 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900">Transitioning FAQs</h3>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">What actions should a business take in order to switch to SFRS for Small Entities?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    Under the new framework, an organisation needs to assess eligibility, train employees, update accounting systems, and prepare preliminary financial statements. Having a thorough transition plan in place is crucial.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">How much time does it take for small entities to switch to the SFRS?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    Depending on the size and complexity of the company, the transition can take a few months, but it usually requires several months of planning, which includes system updates and staff training.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">Which paperwork is required for the transition?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    Businesses should keep records of staff training, system updates, accounting policy modifications, and the initial financial statements prepared under SFRS for Small Entities during the transition.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">Which typical blunders when implementing SFRS for Small Entities?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    Inadequate employee training, failing to update accounting systems, inconsistently failing to meet eligibility requirements, and neglecting appropriate documentation and disclosures are examples of common errors.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">What impact might insufficient staff training have on the changeover?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    Inadequate staff training can result in financial reporting errors, noncompliance with the requirements of SFRS for Small Entities, and a higher chance of audit problems.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Summary</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              In conclusion, Singapore Financial Reporting Standards for Small Entities offer small businesses an easy-to-use, reasonably priced framework for continuing to produce transparent, legally-required financial reporting. Businesses must balance the many benefits, like lower complexity and cost effectiveness, against possible obstacles and expansion goals.
            </p>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Growwth Partners is an expert in guiding companies through the challenges of financial management. Our knowledgeable staff is available to assist you, whether you're thinking about adopting SFRS or you require full-service business and financial administration.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Get in touch with Growwth Partners right now to find out more about our specialised financial management services!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Book a Free Call Section - Highlighted */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h3 className="text-3xl font-bold mb-6">
              Book a free call with our expert to discuss your bookkeeping needs and save time and effort.
            </h3>
            
            <p className="text-xl mb-8">
              We are here to help you!
            </p>
            
            <Button 
              onClick={handleContactClick}
              size="lg" 
              className="bg-white text-blue-700 hover:bg-gray-100 font-semibold text-lg px-8 py-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              Book a Free Call
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default FinancialReportingGuide;
