
import React from "react";
import { Layout } from "@/components/Layout";
import { FaqSection } from "@/components/accounting/FaqSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const MRAGrantGuidePage = () => {
  // First section of FAQs
  const benefitsFaqs = [
    {
      question: "How does the MRA Grant benefit SMEs?",
      answer: "For SMEs looking to expand internationally, the MRA Grant helps in reducing financial constraint and risk of entering new markets by covering 70% of all eligible costs."
    },
    {
      question: "What types of activities does the MRA Grant support?",
      answer: "Market set-up, market promotion, overseas business development, overseas marketing and PR activities among others are the types of expansion activities that can be funded through MRA Grant."
    },
    {
      question: "How does the MRA Grant compare to other grants?",
      answer: "Unlike other programs such as the Global Company Partnership (GCP) Grant, which covers a wider scope of internationalisation activities, including innovation and capability development, the MRA grant is specifically designed for SMEs focusing on market entry and promotion activities."
    },
    {
      question: "Can the MRA Grant be used for setting up overseas operations?",
      answer: "Yes, it can cater for sales or representative offices or equity entities established abroad."
    },
    {
      question: "What makes the MRA Grant unique?",
      answer: "It offers targeted assistance during early stages of venturing into foreign markets like conducting market research or doing business developments outside the country of origin, while most other grant programs concentrate more on long-term growth and innovation within the global entrepreneurship community."
    }
  ];

  // Second section of FAQs
  const eligibilityFaqs = [
    {
      question: "Which types of businesses can apply for MRA Grant?",
      answer: "Only Singapore registered SMEs with annual sales turnover less than S$100m and employees fewer than 200 are eligible to apply for this grant."
    },
    {
      question: "Can a startup apply for the MRA Grant?",
      answer: "Yes, a startup can apply for the MRA Grant in Singapore. However, it must meet Enterprise Singapore's eligibility criteria."
    },
    {
      question: "Are there any industry restrictions for the MRA Grant?",
      answer: "No, the MRA grant is available to SMEs in all sectors as long as they want to expand globally."
    },
    {
      question: "Is there a limit to how many times a company can apply for the MRA Grant?",
      answer: "A company may make multiple applications covering different countries; however each new market entry is subject to a maximum total funding cap set at S$100,000 per application round."
    },
    {
      question: "What financial documents are required for the MRA Grant application?",
      answer: "To apply for the MRA Grant in Singapore, you would typically need the most recent financial statements showing annual sales turnover proof."
    }
  ];

  // Third section of FAQs
  const applicationFaqs = [
    {
      question: "How to apply for an MRA Grant in Singapore?",
      answer: "Start by checking if your business meets eligibility criteria and collecting necessary documentation."
    },
    {
      question: "Where can I send my MRA Grant application?",
      answer: "The application for an MRA Grant must be submitted online via Business Grants Portal (BGP)."
    },
    {
      question: "What happens after I submit my MRA Grant application?",
      answer: "Enterprise Singapore will evaluate your MRA Grant application and get back to you. Additional information might be required from you at this stage."
    },
    {
      question: "How long does MRA Grant application evaluation take?",
      answer: "Depending on factors involved, evaluating an MRA Grant application usually takes a few weeks before applicants are informed."
    },
    {
      question: "Can I change the details after submitting an MRA Grant application?",
      answer: "To make changes in your MRA Grant application, contact Enterprise Singapore directly to communicate the required updates."
    }
  ];

  return (
    <Layout>
      <article className="container mx-auto px-4 py-8">
        {/* Section 1: Title and Key Takeaways */}
        <header className="max-w-full mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-6 w-[95%] mx-auto text-center">Comprehensive Guide to the Market Readiness Assistance (MRA) Grant in Singapore</h1>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-8 text-center">Key Takeaways</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="p-6 bg-white rounded shadow-sm flex flex-col items-center text-center h-full">
                <img 
                  src="/lovable-uploads/f65b1ac4-5df9-412a-bcea-91829022f179.png" 
                  alt="Comprehensive Financial Support" 
                  className="w-48 h-48 mb-6 object-contain"
                />
                <h3 className="font-medium mb-4 text-xl">Comprehensive Financial Support</h3>
                <p className="text-base">Up to 70% of eligible costs may be covered by the MRA Grant, which offers up to S$100,000 per new market.</p>
              </div>
              <div className="p-6 bg-white rounded shadow-sm flex flex-col items-center text-center h-full">
                <img 
                  src="/lovable-uploads/af8677aa-5aae-405e-bc5b-f990607e3755.png" 
                  alt="Diverse Eligible Activities" 
                  className="w-48 h-48 mb-6 object-contain"
                />
                <h3 className="font-medium mb-4 text-xl">Diverse Eligible Activities</h3>
                <p className="text-base">The grant can be used for a variety of activities, such as trade show participation, business matching, market research, and international marketing.</p>
              </div>
              <div className="p-6 bg-white rounded shadow-sm flex flex-col items-center text-center h-full">
                <img 
                  src="/lovable-uploads/8187e304-541b-4e46-a4bd-048867849161.png" 
                  alt="Clear Eligibility Criteria" 
                  className="w-48 h-48 mb-6 object-contain"
                />
                <h3 className="font-medium mb-4 text-xl">Clear Eligibility Criteria</h3>
                <p className="text-base">Companies must be Singapore-registered SMEs with an annual turnover of no more than S$100 million in order to be eligible for the MRA Grant.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded shadow-sm flex flex-col items-center text-center h-full">
                <img 
                  src="/lovable-uploads/f65b1ac4-5df9-412a-bcea-91829022f179.png" 
                  alt="Structured Application Process" 
                  className="w-48 h-48 mb-6 object-contain"
                />
                <h3 className="font-medium mb-4 text-xl">Structured Application Process</h3>
                <p className="text-base">There are multiple steps in the MRA Grant application process, including pre-application, submission, assessment, and post-approval.</p>
              </div>
              <div className="p-6 bg-white rounded shadow-sm flex flex-col items-center text-center h-full">
                <img 
                  src="/lovable-uploads/af8677aa-5aae-405e-bc5b-f990607e3755.png" 
                  alt="Importance of Thorough Preparation" 
                  className="w-48 h-48 mb-6 object-contain"
                />
                <h3 className="font-medium mb-4 text-xl">Importance of Thorough Preparation</h3>
                <p className="text-base">Applications that are successful must have precise goals, thorough project plans, correct data, adherence to regulations, and expert support.</p>
              </div>
            </div>
          </div>
        </header>

        {/* Section 2: Introduction */}
        <section className="max-w-4xl mx-auto my-12">
          <h3 className="text-2xl font-semibold mb-4">Introduction</h3>
          <div className="prose max-w-none">
            <p>Companies are always looking for growth opportunities. One effective way to do that is by expanding into foreign markets. However, such moves often involve making huge investments and overcoming various challenges.</p>
            <p>To support this cause, there are grants like the Market Readiness Assistance (MRA) Grant which can provide financial support for businesses planning to go global.</p>
            <p>This comprehensive guide provides an explanation about the MRA Grant in Singapore, including what it involves, the benefits of using it, how one should apply for it, and the challenges in securing it.</p>
          </div>
        </section>

        {/* Section 3: What is an MRA Grant? */}
        <section className="max-w-4xl mx-auto my-12">
          <h3 className="text-2xl font-semibold mb-4">What is an MRA Grant?</h3>
          <div className="prose max-w-none mb-6">
            <p>Market Readiness Assistance (MRA) Grant is a government initiative aimed at helping Singaporean SMEs enter international markets. The grant supports certain activities with financial aid designed to facilitate overseas expansion such as market set-up, market promotion as well as business development.</p>
            <p>The MRA Grant covers up to 70% of eligible costs with a maximum cap of S$100,000 per company per new market. It reduces the financial risk associated with exploring and entering new markets thus making it easier for local companies to expand their global presence.</p>
          </div>
          
          <img 
            src="/lovable-uploads/f65b1ac4-5df9-412a-bcea-91829022f179.png" 
            alt="Key Components of the MRA Grant" 
            className="w-full max-w-3xl mx-auto my-8 rounded-lg shadow-md"
          />
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
            <p className="font-semibold">Pro-tip:</p>
            <p>Carefully categorise your project expenses under the specific MRA Grant components—such as market promotion, business development, and market set-up—to ensure you maximise the funding available for each category and avoid overspending on non-eligible activities.</p>
          </div>
        </section>

        {/* Section 4: Benefits of the MRA Grant */}
        <section className="max-w-4xl mx-auto my-12">
          <h3 className="text-2xl font-semibold mb-4">Benefits of the MRA Grant</h3>
          <div className="prose max-w-none">
            <p>The MRA Grant offers numerous benefits to Singaporean SMEs, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Financial Support:</strong> It subsidises almost 70% of qualified expenses, relieving small and medium-sized enterprises from heavy financial burden.</li>
              <li><strong>Market Expansion:</strong> This program enables firms to venture into new territories so they can have multiple sources of income.</li>
              <li><strong>Access to Expertise:</strong> It links entrepreneurs with professionals who possess skills required for successful penetration in different markets.</li>
              <li><strong>Risk Management:</strong> By giving out money under this scheme, risks connected with going abroad are minimised or eliminated completely.</li>
              <li><strong>Competitive Edge:</strong> Businesses get ahead of competitors by utilising funds provided through MRAs to explore fresh ideas while still relevant within their industries.</li>
            </ul>
          </div>
          
          {/* FAQs for Benefits section */}
          <div className="mt-8">
            <FaqSection faqs={benefitsFaqs} />
          </div>
        </section>

        {/* Section 6: Activities Eligible for the MRA Grant */}
        <section className="max-w-4xl mx-auto my-12">
          <h3 className="text-2xl font-semibold mb-4">Activities Eligible for the MRA Grant</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Overseas Market Promotion</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <p className="font-medium">Physical Trade Fairs</p>
                  <p>This includes hiring a space and building a booth that cannot be larger than 36 square metres in size.</p>
                </li>
                <li>
                  <p className="font-medium">Virtual Trade Fairs</p>
                  <p>Setting up virtual exhibition halls and booths, creating marketing materials and arranging business meetings or matching sessions.</p>
                </li>
                <li>
                  <p className="font-medium">Marketing Activities or Public Relations (PR)</p>
                  <p>Holding in-store promotions, roadshows, pop-up stores etc., which are part of an overall marketing campaign or PR effort.</p>
                </li>
              </ul>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Overseas Market Set-up</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <p className="font-medium">Market Entry Support</p>
                  <p>This covers advisory, legal fees and expenses relating to intellectual property application; filing and registering sales representative offices / equity entities; import & export licences.</p>
                </li>
                <li>
                  <p className="font-medium">FTA and Trade Compliance Consultancy</p>
                  <p>This includes legal or consultancy fees for getting guidance on customs compliance, exporting controls and sanctions issues, and product HS classification.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 7: Overseas Business Development */}
        <section className="max-w-4xl mx-auto my-12">
          <h3 className="text-2xl font-semibold mb-4">Overseas Business Development</h3>
          <div className="prose max-w-none">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <p className="font-medium">Business Matching</p>
                <p>Looking for potential partners who can act as licensees or franchisees, finding agents or distributors who would help sell products or services, identifying cross-border logistics partners, searching for joint venture partners, etc.,</p>
              </li>
              <li>
                <p className="font-medium">Overseas Marketing Presence</p>
                <p>Sending employees based in the target market to carry out marketing activities there including attending trade shows, doing sales calls, and more.</p>
              </li>
              <li>
                <p className="font-medium">In-Market Business Development</p>
                <p>Training BD personnel (in-market), reaching out to new business leads within specific markets where there may not have been previous contact made, carrying out market entry activity like a launch, reviewing existing market strategy if necessary.</p>
              </li>
            </ul>

            <h4 className="text-xl font-medium mt-6 mb-2">Who Can Apply?</h4>
            <p>The MRA Grant is open only to Singapore registered SMEs who wish to venture into new international markets. It would help most businesses that have strong products or services which they intend scaling globally.</p>
            
            <h4 className="text-xl font-medium mt-6 mb-2">Eligibility for the Grant</h4>
            <p>To be eligible for this grant, companies must meet these requirements:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Singapore-Registered Entity:</strong> The company has to be incorporated and registered under Singapore laws.</li>
              <li><strong>Annual Sales Turnover:</strong> S$100 million is the maximum annual sales turnover allowed for any business seeking MRA Grant funding.</li>
              <li><strong>Employment Size:</strong> The number of persons employed by an enterprise should not exceed 200 individuals at any given time during its financial year.</li>
              <li><strong>Financial Health:</strong> A business must be financially sound based on established accounting standards & practices within the industry concerned.</li>
            </ul>
          </div>
          
          <img 
            src="/lovable-uploads/af8677aa-5aae-405e-bc5b-f990607e3755.png" 
            alt="MRA Grant Calculation Example" 
            className="w-full max-w-3xl mx-auto my-8 rounded-lg shadow-md"
          />
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
            <p className="font-semibold">Pro-Tip:</p>
            <p>For accurate and realistic cost estimates, consider predictive analytics tools for accurate market research and historical financial data. This procedure guarantees that you are suitably equipped to meet the financial demands of your expansion project, while also fortifying your grant application.</p>
          </div>
          
          {/* FAQs for Eligibility */}
          <div className="mt-8">
            <FaqSection faqs={eligibilityFaqs} />
          </div>
        </section>

        {/* Section 9: Process of MRA Grant Application */}
        <section className="max-w-4xl mx-auto my-12">
          <h3 className="text-2xl font-semibold mb-4">Process of MRA Grant Application</h3>
          <div className="prose max-w-none mb-6">
            <p>Applying for the MRA Grant involves several steps:</p>
            <h4 className="text-xl font-medium mt-4 mb-2">Pre-Application</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Self-Assessment:</strong> Ensure that your business is eligible for the grant.</li>
              <li><strong>Gathering Documentation:</strong> Prepare all necessary documents such as company registration, financial statements and project proposals.</li>
            </ul>
            
            <h4 className="text-xl font-medium mt-4 mb-2">Application Submission</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Online Submission:</strong> Submit your application through the Business Grants Portal.</li>
              <li><strong>Supporting Documents:</strong> Attach all required documents and information to support your application.</li>
            </ul>
          </div>

          <img 
            src="/lovable-uploads/8187e304-541b-4e46-a4bd-048867849161.png" 
            alt="Tips for a Successful MRA Grant Application" 
            className="w-full max-w-3xl mx-auto my-8 rounded-lg shadow-md"
          />

          <div className="prose max-w-none">  
            <h4 className="text-xl font-medium mt-4 mb-2">Evaluation</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Review Process:</strong> Enterprise Singapore will review the application and may request for more information or clarification if needed.</li>
              <li><strong>Approval:</strong> If approved, you will receive a Letter of Offer which states the amount of grant awarded and its conditions.</li>
            </ul>
            
            <h4 className="text-xl font-medium mt-4 mb-2">Post-Approval</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Project Implementation:</strong> Carry out the activities outlined in the approved project during application.</li>
              <li><strong>Claims Submission:</strong> Submit claims for reimbursement of eligible expenses with supporting documents.</li>
            </ul>
          </div>
          
          {/* FAQs for Application Process */}
          <div className="mt-8">
            <FaqSection faqs={applicationFaqs} />
          </div>
        </section>

        {/* Section 11: Common Mistakes Made During MRA Grant Application */}
        <section className="max-w-4xl mx-auto my-12">
          <h3 className="text-2xl font-semibold mb-4">Common Mistakes Made During MRA Grant Application</h3>
          <div className="prose max-w-none">
            <p>MRA Grant provides a substantial amount of money to support and empower businesses looking to expand to the international market. However, these Grants are not easily provided to all SMEs and hence, an extremely well-presented and error-free application is crucial.</p>
            <p>Here are some predominantly made errors you should look to avoid while you apply for the MRA Grant:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Incomplete Documentation:</strong> Failing to provide all required documents may cause delay or rejection of application.</li>
              <li><strong>Unclear Objectives:</strong> Your application could look weak when your business objectives are vague or poorly defined.</li>
              <li><strong>Ignoring Eligibility Criteria:</strong> Applications that do not meet requirements get rejected outrightly.</li>
              <li><strong>Budgeting Mistakes:</strong> Evaluation red flags are raised when the budget is incorrect or unrealistic.</li>
              <li><strong>Lack of Follow-Up:</strong> A delayed response to additional information requests can lead to slowing down the process or rejection of the application.</li>
            </ul>
          </div>
          
          <div className="mt-8 p-6 bg-gray-50 rounded-lg border-t-4 border-brand-orange text-center">
            <p className="text-lg mb-4">Simplify Your Fundraising Process: Growwth Partners can manage the intricate details of fundraising, freeing you up to concentrate on expanding your company. Find out more today!</p>
          </div>
        </section>

        {/* Section 12: Summary */}
        <section className="max-w-4xl mx-auto my-12">
          <h3 className="text-2xl font-semibold mb-4">Summary</h3>
          <div className="prose max-w-none">
            <p>The Market Readiness Assistance (MRA) Grant is an invaluable resource for Singaporean SMEs looking to expand into international markets. By providing financial support for market research, market entry, and market promotion activities, the MRA Grant reduces the risks and costs associated with overseas expansion.</p>
            <p>For businesses seeking to leverage the MRA Grant, understanding the requirements and preparing a thorough application are crucial steps towards securing the funding needed for successful international expansion.</p>
            <p>At <Link to="/" className="text-brand-orange hover:underline">Growwth Partners</Link>, we are committed to supporting your business growth and helping you navigate the complexities of the MRA Grant application process. Speak to our experts and get guidance to handle your complex and taxing fundraising journey.</p>
          </div>
        </section>

        {/* Section 13: Call to Action */}
        <section className="max-w-4xl mx-auto my-12 bg-gradient-to-r from-brand-orange/20 to-brand-orange/5 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Book a free call with our expert to discuss your bookkeeping needs and save time and effort.</h3>
          <p className="mb-6 text-lg">We are here to help you!</p>
          <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange/80">
            <Link to="/contact">Book a free call</Link>
          </Button>
        </section>
      </article>
    </Layout>
  );
};

export default MRAGrantGuidePage;
