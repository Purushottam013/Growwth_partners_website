
import React from "react";
import { Layout } from "@/components/Layout";
import { FaqSection } from "@/components/accounting/FaqSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Search, Flag, Rocket, LayoutDashboard } from "lucide-react";
import { 
  Card, 
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";

const BookkeepingGuidePage = () => {
  // FAQs for different sections
  const methodsFaqs = [
    {
      question: "What is the main difference between single-entry and double-entry bookkeeping?",
      answer: "While a single-entry system records each transaction only once, the latter does it twice, but in different accounts."
    },
    {
      question: "Is double-entry bookkeeping necessary for small businesses?",
      answer: "Though not mandatory, using the double-entry bookkeeping method provides more accurate results thereby facilitating growth & expansion plans."
    },
    {
      question: "Can I switch from single-entry to double-entry bookkeeping?",
      answer: "Yes, but a well-planned conversion process must be followed while ensuring all past data are correctly entered into every account affected."
    },
    {
      question: "How often should I update my books?",
      answer: "Daily or weekly updates would suffice to ensure accuracy in recording transactions done over specified periods of time."
    }
  ];

  const termsFaqs = [
    {
      question: "What is the difference between assets and liabilities?",
      answer: "Assets refer to what businesses own while liabilities refer to their debts/obligations."
    },
    {
      question: "How is equity calculated?",
      answer: "By deducting liabilities from assets: Equity = Assets – Liabilities."
    },
    {
      question: "What is the purpose of a ledger?",
      answer: "Ledgers record all financial transactions made within given periods for accurate reporting and analysis."
    },
    {
      question: "What are the types of revenue?",
      answer: "There is Non-operating Revenue (those earned outside normal operations) but Operating Revenue is the main source for most companies."
    },
    {
      question: "What are common business expenses?",
      answer: "Rent, utilities, salaries, taxes, advertising fees, etc., can be considered as business expenses. These might vary depending on nature & scope of operations."
    }
  ];

  const challengesFaqs = [
    {
      question: "What are common bookkeeping errors?",
      answer: "Common errors include data entry mistakes, missed transactions, incorrect categorisation."
    },
    {
      question: "How can I avoid bookkeeping errors?",
      answer: "Use accounting software and reconcile accounts regularly through periodic audits."
    },
    {
      question: "What is the impact of poor bookkeeping on a business?",
      answer: "Poorly done bookkeeping can lead to mismanaged funds, non-compliance with taxes and loss of investors or funding."
    },
    {
      question: "Why is compliance important in bookkeeping?",
      answer: "Compliance ensures adherence to tax laws and regulations, avoiding legal issues and penalties."
    },
    {
      question: "How can I secure my bookkeeping records?",
      answer: "Encrypting software can be used to secure your bookkeeping recording. Also, making backups often and restricting access to only authorised persons may also help ensure security."
    }
  ];

  return (
    <Layout>
      <article className="container mx-auto px-4 py-8">
        {/* Section 1: Title and Key Takeaways */}
        <header className="max-w-full mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-6 w-[95%] mx-auto">A Comprehensive Guide to Bookkeeping Practices</h1>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-8 text-center">Key Takeaways</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="p-6 bg-white rounded shadow-sm flex flex-col items-center text-center h-full">
                <img 
                  src="/lovable-uploads/8512cbec-531f-47eb-b4b9-07c45d8af9a3.png" 
                  alt="Definition" 
                  className="w-32 h-32 mb-6"
                />
                <h3 className="font-medium mb-4 text-xl">Definition</h3>
                <p className="text-base">Understand the basics of bookkeeping and its primary methods.</p>
              </div>
              <div className="p-6 bg-white rounded shadow-sm flex flex-col items-center text-center h-full">
                <img 
                  src="/lovable-uploads/f3a56b78-d040-4625-860c-5244fa5b6aa9.png" 
                  alt="Significance" 
                  className="w-32 h-32 mb-6"
                />
                <h3 className="font-medium mb-4 text-xl">Significance</h3>
                <p className="text-base">Realise the importance of bookkeeping for compliance and management.</p>
              </div>
              <div className="p-6 bg-white rounded shadow-sm flex flex-col items-center text-center h-full">
                <img 
                  src="/lovable-uploads/ea8d2d58-1f4b-4396-b555-b2c99d049b4f.png" 
                  alt="Roles and Responsibilities" 
                  className="w-32 h-32 mb-6"
                />
                <h3 className="font-medium mb-4 text-xl">Roles and Responsibilities</h3>
                <p className="text-base">Learn what a bookkeeper does and the skills needed.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded shadow-sm flex flex-col items-center text-center h-full">
                <img 
                  src="/lovable-uploads/a789441a-bd8a-4480-a2ce-1a8108aa187c.png" 
                  alt="Process Steps" 
                  className="w-32 h-32 mb-6"
                />
                <h3 className="font-medium mb-4 text-xl">Process Steps</h3>
                <p className="text-base">Get familiar with the steps involved in the bookkeeping process.</p>
              </div>
              <div className="p-6 bg-white rounded shadow-sm flex flex-col items-center text-center h-full">
                <img 
                  src="/lovable-uploads/12a63d37-c083-4866-91bf-a8fe64ececbd.png" 
                  alt="Challenges" 
                  className="w-32 h-32 mb-6"
                />
                <h3 className="font-medium mb-4 text-xl">Challenges</h3>
                <p className="text-base">Identify common challenges and understand the need for professional help.</p>
              </div>
            </div>
          </div>
        </header>

        {/* Section 2: Introduction */}
        <section className="max-w-4xl mx-auto my-12">
          <h3 className="text-2xl font-semibold mb-4">Introduction</h3>
          <div className="prose max-w-none">
            <p>No business can prosper without bookkeeping. It is the lifeblood of any prosperous enterprise undertaking accurate financial decisions and staying within the law. But it is also one of those things that are often overlooked in small businesses.</p>
            <p>This authoritative guide covers everything you need to know about book-keeping starting with its basic principles and methods, why it's important as well as common challenges faced when doing it. Whether you're a small business owner or an aspiring entrepreneur, understanding how to do your accounts is key.</p>
            <p>But if this sounds overwhelming or time-consuming for you, then there are professional services available which can help manage your records keeping them in good order.</p>
          </div>
        </section>

        {/* Section 3: What is Bookkeeping */}
        <section className="max-w-4xl mx-auto my-12">
          <h3 className="text-2xl font-semibold mb-4">What is Bookkeeping?</h3>
          <div className="prose max-w-none mb-6">
            <p>This refers to systematically recording, organising and maintaining all financial transactions of a company so that they may reflect sales, purchases, and income. The main aim is usually accuracy and currency accessibility.</p>
          </div>
          
          <img 
            src="/lovable-uploads/9b09d6da-f51b-4ea8-adfa-2e55f3ee1359.png" 
            alt="Differences between Bookkeeping and Accounting" 
            className="w-full max-w-3xl mx-auto my-8 rounded-lg shadow-md"
          />
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
            <p className="font-semibold">Pro-tip:</p>
            <p>Keep all receipts and invoices organised to simplify your bookkeeping process. An organised system ensures that every transaction has got its proper record. Not only does this make work easier but also provides necessary supporting documents for audits or tax returns filing.</p>
          </div>
        </section>

        {/* Section 4: Methods of Bookkeeping */}
        <section className="max-w-4xl mx-auto my-12">
          <h3 className="text-2xl font-semibold mb-4">Methods of Bookkeeping</h3>
          <div className="prose max-w-none">
            <p>Everything done financially in any institution, whether positive or negative, must be documented accurately for the purpose of reporting and analysis. There are two major types: single-entry & double-entry book keeping systems.</p>
            
            <h4 className="text-xl font-medium mt-6 mb-3">Single-Entry Bookkeeping</h4>
            <p>In single-entry bookkeeping, each transaction gets recorded once. This is almost like using a personal cheque book, which keeps track of the cash flow only. As it indicates the financial position on a limited level, it is useful only where the number of transactions conducted are minimal. It is thus suitable for an individual incurring expenses on behalf of the company or for small businesses.</p>
            
            <h4 className="text-xl font-medium mt-6 mb-3">Double-Entry Bookkeeping</h4>
            <p>Double-entry bookkeeping is where every transaction affects at least two accounts, hence ensuring maintenance of the balance sheet equation (Assets = Liabilities + Equity). Although more complicated than the single-entry system, the double-entry bookkeeping method offers detailed statements and greater precision about what happened within a certain time frame. It is thus widely preferred by most businesses.</p>
          </div>
          
          {/* FAQs for this section */}
          <div className="mt-8">
            <FaqSection faqs={methodsFaqs} />
          </div>
        </section>

        {/* Section 6: Importance of Bookkeeping */}
        <section className="max-w-4xl mx-auto my-12">
          <h3 className="text-2xl font-semibold mb-4">Importance of Bookkeeping</h3>
          <div className="prose max-w-none">
            <h4 className="text-xl font-medium mt-4 mb-2">Legal Compliance</h4>
            <p>Through proper bookkeeping, business owners can comply with tax laws and other statutory regulations, thus avoiding penalties that may arise out of non-compliance. This also helps during audits, if there is a need to settle any disputed figures concerning income earned or deductions made as per law.</p>
            
            <h4 className="text-xl font-medium mt-4 mb-2">Financial Management</h4>
            <p>Bookkeeping gives an insight into one's financial status which assists in budgeting, controlling costs, planning investments, and more. It shows where money comes from, how it was used, where it went, so that future goals can be not just planned, but also achieved.</p>
            
            <h4 className="text-xl font-medium mt-4 mb-2">Investor Confidence</h4>
            <p>This is a short speech that sums up what your company does and why it's valuable. It should be between 30-60 seconds long and grab people's attention.</p>
          </div>
          
          <img 
            src="/lovable-uploads/dad81a7c-7ca5-4f6f-af5e-e5dcc560d434.png" 
            alt="Role of a Bookkeeper" 
            className="w-full max-w-3xl mx-auto my-8 rounded-lg shadow-md"
          />
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
            <p className="font-semibold">Pro-tip:</p>
            <p>Reconcile your bank statements on a regular basis by making sure they match your internal records and your bank statements. This keeps your financial data accurate and avoids possible problems during audits by helping to quickly identify any errors or unauthorised transactions.</p>
          </div>
        </section>

        {/* Section 7: Basic Bookkeeping Terms */}
        <section className="max-w-4xl mx-auto my-12">
          <h3 className="text-2xl font-semibold mb-4">Basic Bookkeeping Terms</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Assets</h4>
              <p>Assets are resources that a business owns. They can be classified as current assets (such as cash and stock) or non-current assets (such as property and equipment).</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Liabilities</h4>
              <p>These are debts owed by the company to its creditors. They could include loans, accounts payable or mortgages. Liabilities may be either current (due within 1 year) or long-term (due after 1 year).</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Equity</h4>
              <p>Equity is the owner's residual interest in a business after deducting liabilities from assets. It includes capital contributed by owners, retained earnings, and any other additional paid-in capital.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Revenue</h4>
              <p>Revenue is the inflow of income from ordinary business activities like sales or services. It represents total earnings before expenses are deducted, thus giving a measure of profitability.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Expenses</h4>
              <p>Expenses are costs incurred while earning revenues during an accounting period. This could include rent, utilities, payroll, supplies, etc., which affects profit of the enterprise being reported upon.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Ledger</h4>
              <p>A complete log of all financial transactions is called a ledger. It facilitates accurate reporting and analysis by classifying transactions by accounts and offering a comprehensive view of financial activity.</p>
            </div>
          </div>
          
          {/* FAQs for Basic Terms */}
          <div className="mt-8">
            <FaqSection faqs={termsFaqs} />
          </div>
        </section>

        {/* Section 9: Comprehensive Steps in Bookkeeping Process */}
        <section className="max-w-4xl mx-auto my-12">
          <h3 className="text-2xl font-semibold mb-4">Comprehensive Steps in Bookkeeping Process</h3>
          <div className="prose max-w-none">
            <h4 className="text-xl font-medium mt-4 mb-2">Analysing Financial Transactions</h4>
            <p>The first step in the accounting cycle is to understand what each transaction means and how it affects the financial statements. This involves correctly classifying transactions so that they can be reported accurately.</p>
            
            <h4 className="text-xl font-medium mt-4 mb-2">Recording Transactions</h4>
            <p>Transactions are initially recorded in a journal using a general entry, which includes details such as date, account title, description, and amount. Accurate records need to be maintained for future reference and audit purposes.</p>
            
            <h4 className="text-xl font-medium mt-4 mb-2">Posting to the Ledger</h4>
            <p>These journal entries are then transferred into their respective accounts in the general ledger. This process groups all similar information together, making it easier for companies to prepare financial statements later on.</p>
          </div>
          
          <img 
            src="/lovable-uploads/bb44494d-3122-46fe-b8dc-68eb2efc6856.png" 
            alt="7 Step Guide to Effective Bookkeeping" 
            className="w-full max-w-3xl mx-auto my-8 rounded-lg shadow-md"
          />
          
          <div className="prose max-w-none">
            <h4 className="text-xl font-medium mt-4 mb-2">Preparing Trial Balance</h4>
            <p>At this stage, one must ensure everything has been entered correctly and that debits equal credits. The trial balance acts as a self-check mechanism before finalising the financial reports like balance sheets and income statements.</p>
            
            <h4 className="text-xl font-medium mt-4 mb-2">Adjusting Entries</h4>
            <p>At the end of an accounting period, to reflect accurate financial positions, entries are often looked into and adjusted. This step could involve correcting errors made while recording transactions or recognising accrued expenses or revenues that were not captured during the initial recognition phase.</p>
            
            <h4 className="text-xl font-medium mt-4 mb-2">Preparing Financial Statements</h4>
            <p>Then comes creating different types of financial statements,—balance sheets, income statements, and cash flow statements—which summarise the company's performance over certain time periods, like months, quarters or years. These statements help with decision-making and offer information about the company's financial situation.</p>
            
            <h4 className="text-xl font-medium mt-4 mb-2">Closing the Books</h4>
            <p>At the conclusion of the accounting period, close any temporary accounts so that the following period can begin anew. By using this procedure, income and expenses are guaranteed to be reported within the accurate accounting period.</p>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
            <p className="font-semibold">Pro-tip:</p>
            <p>To stay on top of your business' finances, have a detailed checklist of the important tasks to ensure nothing important gets missed. This checklist can provide structure & discipline around key activities like invoice creation, expense tracking, reconciliation and more.</p>
          </div>
        </section>

        {/* Section 10: Common Challenges in Bookkeeping */}
        <section className="max-w-4xl mx-auto my-12">
          <h3 className="text-2xl font-semibold mb-4">Common Challenges in Bookkeeping</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Complexity</h4>
              <p>Looking after many accounts and transactions can be confusing, especially for small businesses which do not have specialised resources dedicated to it. This process needs close attention to details and understanding of accounting concepts.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Time-Consuming</h4>
              <p>Updating and keeping detailed records regularly is what bookkeeping entails, which can be considerately time-consuming. As a business owner, you might often find it hard to balance between this and other operational and strategic duties.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Errors and Omissions</h4>
              <p>Manual bookkeeping increases the risk of errors and omissions, which leads to incorrect financial reporting. Common errors can be data entry mistakes, missed transactions, incorrect categorisation, among others.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Compliance Issues</h4>
              <p>It is important to keep up with tax laws and regulations. Failure to comply may lead to penalisation or fine. Continuous learning and attentiveness is necessary so that compliance can be ensured.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Security Concerns</h4>
              <p>Strong security measures should be taken when handling sensitive financial information to avoid breaches. Secure systems need to be put in place and safe practices should be implemented to protect financial data.</p>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-gray-50 rounded-lg border-t-4 border-brand-orange text-center">
            <p className="text-lg mb-4">Bookkeeping challenges can hinder your business growth. Let Growwth Partners handle your bookkeeping needs, ensuring accuracy and compliance. Contact us today!</p>
          </div>
          
          {/* FAQs for Challenges */}
          <div className="mt-8">
            <FaqSection faqs={challengesFaqs} />
          </div>
        </section>

        {/* Section 12: Summary */}
        <section className="max-w-4xl mx-auto my-12">
          <h3 className="text-2xl font-semibold mb-4">Summary</h3>
          <div className="prose max-w-none">
            <p>Bookkeeping is a vital part of running a successful business. It gives you insight into your financial health, keeps you compliant with the law and helps build trust with investors. By following this comprehensive guide, you will have a better understanding of what bookkeeping involves and why it's so important for any healthy business.</p>
            <p>While bookkeeping can seem exhausting, there are always professionals who can help. Growwth Partners offer a comprehensive range of services designed to meet all your business financial needs.</p>
            <p>Don't let the complexities of bookkeeping hold you back from doing what you do best – running your business. <Link to="/bookkeeping" className="text-brand-orange hover:underline font-medium">Reach out to us today!</Link></p>
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

export default BookkeepingGuidePage;
