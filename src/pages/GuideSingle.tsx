import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getGuideBySlug } from "@/data/guides";
import GuideDetail from "./GuideDetail";
import { useToast } from "@/components/ui/use-toast";

const GuideSingle = () => {
  const { slug } = useParams<{ slug: string }>();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const guide = getGuideBySlug(slug || "");
  
  useEffect(() => {
    if (!guide) {
      toast({
        title: "Guide not found",
        description: "The guide you're looking for doesn't exist.",
        variant: "destructive",
      });
      navigate("/guide");
    }
  }, [guide, toast, navigate]);
  
  if (!guide) return null;
  
  // Define content for the bookkeeping guide
  const isBookkeepingGuide = slug === "comprehensive-bookkeeping-practices-guide";

  // Define content based on which guide is being viewed
  const keyTakeaways = isBookkeepingGuide 
    ? [
        { 
          title: "Definition", 
          description: "Understand the basics of bookkeeping and its primary methods."
        },
        { 
          title: "Significance", 
          description: "Realise the importance of bookkeeping for compliance and management." 
        },
        { 
          title: "Roles and Responsibilities", 
          description: "Learn what a bookkeeper does and the skills needed." 
        },
        { 
          title: "Process Steps", 
          description: "Get familiar with the steps involved in the bookkeeping process." 
        },
        { 
          title: "Challenges", 
          description: "Identify common challenges and understand the need for professional help." 
        }
      ]
    : [ /* financial reporting guide takeaways */ ];
  
  const sections = isBookkeepingGuide
    ? [
        {
          title: "What is Bookkeeping?",
          content: `
            <p>This refers to systematically recording, organising and maintaining all financial transactions of a company so that they may reflect sales, purchases, and income. The main aim is usually accuracy and currency accessibility.</p>
            <p class="bg-gray-100 p-4 my-4 border-l-4 border-blue-500"><strong>Pro-tip:</strong> Keep all receipts and invoices organised to simplify your bookkeeping process. An organised system ensures that every transaction has got its proper record. Not only does this make work easier but also provides necessary supporting documents for audits or tax returns filing.</p>
            <h4 class="text-xl font-semibold mt-6 mb-4">Methods of Bookkeeping</h4>
            <p>Everything done financially in any institution, whether positive or negative, must be documented accurately for the purpose of reporting and analysis.</p>
            <p>There are two major types: single-entry & double-entry book keeping systems.</p>
            <h5 class="text-lg font-semibold mt-4 mb-2">Single-Entry Bookkeeping</h5>
            <p>In single-entry bookkeeping, each transaction gets recorded once. This is almost like using a personal cheque book, which keeps track of the cash flow only. As it indicates the financial position on a limited level, it is useful only where the number of transactions conducted are minimal. It is thus suitable for an individual incurring expenses on behalf of the company or for small businesses.</p>
            <h5 class="text-lg font-semibold mt-4 mb-2">Double-Entry Bookkeeping</h5>
            <p>Double-entry bookkeeping is where every transaction affects at least two accounts, hence ensuring maintenance of the balance sheet equation (Assets = Liabilities + Equity).</p>
            <p>Although more complicated than the single-entry system, the double-entry bookkeeping method offers detailed statements and greater precision about what happened within a certain time frame. It is thus widely preferred by most businesses.</p>
            <p class="font-medium mt-4">Feeling overwhelmed by bookkeeping? Growwth Partners' expert services can help manage your books accurately. Contact us today!</p>
          `
        },
        {
          title: "Importance of Bookkeeping",
          content: `
            <h4 class="text-xl font-semibold mt-4 mb-2">Legal Compliance</h4>
            <p>Through proper bookkeeping, business owners can comply with tax laws and other statutory regulations, thus avoiding penalties that may arise out of non-compliance. This also helps during audits, if there is a need to settle any disputed figures concerning income earned or deductions made as per law.</p>
            <h4 class="text-xl font-semibold mt-4 mb-2">Financial Management</h4>
            <p>Bookkeeping gives an insight into one's financial status which assists in budgeting, controlling costs, planning investments, and more. It shows where money comes from, how it was used, where it went, so that future goals can be not just planned, but also achieved.</p>
            <h4 class="text-xl font-semibold mt-4 mb-2">Investor Confidence</h4>
            <p>This is a short speech that sums up what your company does and why it's valuable. It should be between 30-60 seconds long and grab people's attention.</p>
            <p class="bg-gray-100 p-4 my-4 border-l-4 border-blue-500"><strong>Pro-tip:</strong> Reconcile your bank statements on a regular basis by making sure they match your internal records and your bank statements. This keeps your financial data accurate and avoids possible problems during audits by helping to quickly identify any errors or unauthorised transactions.</p>
          `
        },
        {
          title: "Basic Bookkeeping Terms",
          content: `
            <h4 class="text-xl font-semibold mt-4 mb-2">Assets</h4>
            <p>Assets are resources that a business owns. They can be classified as current assets (such as cash and stock) or non-current assets (such as property and equipment).</p>
            <h4 class="text-xl font-semibold mt-4 mb-2">Liabilities</h4>
            <p>These are debts owed by the company to its creditors. They could include loans, accounts payable or mortgages. Liabilities may be either current (due within 1 year) or long-term (due after 1 year).</p>
            <h4 class="text-xl font-semibold mt-4 mb-2">Equity</h4>
            <p>Equity is the owner's residual interest in a business after deducting liabilities from assets. It includes capital contributed by owners, retained earnings, and any other additional paid-in capital.</p>
            <h4 class="text-xl font-semibold mt-4 mb-2">Revenue</h4>
            <p>Revenue is the inflow of income from ordinary business activities like sales or services. It represents total earnings before expenses are deducted, thus giving a measure of profitability.</p>
            <h4 class="text-xl font-semibold mt-4 mb-2">Expenses</h4>
            <p>Expenses are costs incurred while earning revenues during an accounting period. This could include rent, utilities, payroll, supplies, etc., which affects profit of the enterprise being reported upon</p>
            <h4 class="text-xl font-semibold mt-4 mb-2">Ledger</h4>
            <p>A complete log of all financial transactions is called a ledger. It facilitates accurate reporting and analysis by classifying transactions by accounts and offering a comprehensive view of financial activity.</p>
          `
        },
        {
          title: "Comprehensive Steps in Bookkeeping Process",
          content: `
            <h4 class="text-xl font-semibold mt-4 mb-2">Analysing Financial Transactions</h4>
            <p>The first step in the accounting cycle is to understand what each transaction means and how it affects the financial statements. This involves correctly classifying transactions so that they can be reported accurately.</p>
            <h4 class="text-xl font-semibold mt-4 mb-2">Recording Transactions</h4>
            <p>Transactions are initially recorded in a journal using a general entry, which includes details such as date, account title, description, and amount. Accurate records need to be maintained for future reference and audit purposes.</p>
            <h4 class="text-xl font-semibold mt-4 mb-2">Posting to the Ledger</h4>
            <p>These journal entries are then transferred into their respective accounts in the general ledger. This process groups all similar information together, making it easier for companies to prepare financial statements later on.</p>
            <h4 class="text-xl font-semibold mt-4 mb-2">Preparing Trial Balance</h4>
            <p>At this stage, one must ensure everything has been entered correctly and that debits equal credits. The trial balance acts as a self-check mechanism before finalising the financial reports like balance sheets and income statements.</p>
            <h4 class="text-xl font-semibold mt-4 mb-2">Adjusting Entries</h4>
            <p>At the end of an accounting period, to reflect accurate financial positions, entries are often looked into and adjusted. This step could involve correcting errors made while recording transactions or recognising accrued expenses or revenues that were not captured during the initial recognition phase.</p>
            <h4 class="text-xl font-semibold mt-4 mb-2">Preparing Financial Statements</h4>
            <p>Then comes creating different types of financial statements,—balance sheets, income statements, and cash flow statements—which summarise the company's performance over certain time periods, like months, quarters or years. These statements help with decision-making and offer information about the company's financial situation.</p>
            <h4 class="text-xl font-semibold mt-4 mb-2">Closing the Books</h4>
            <p>At the conclusion of the accounting period, close any temporary accounts so that the following period can begin anew. By using this procedure, income and expenses are guaranteed to be reported within the accurate accounting period.</p>
            <p class="bg-gray-100 p-4 my-4 border-l-4 border-blue-500"><strong>Pro-tip:</strong> To stay on top of your business' finances, have a detailed checklist of the important tasks to ensure nothing important gets missed. This checklist can provide structure & discipline around key activities like invoice creation, expense tracking, reconciliation and more.</p>
          `
        },
        {
          title: "Common Challenges in Bookkeeping",
          content: `
            <h4 class="text-xl font-semibold mt-4 mb-2">Complexity</h4>
            <p>Looking after many accounts and transactions can be confusing, especially for small businesses which do not have specialised resources dedicated to it. This process needs close attention to details and understanding of accounting concepts.</p>
            <h4 class="text-xl font-semibold mt-4 mb-2">Time-Consuming</h4>
            <p>Updating and keeping detailed records regularly is what bookkeeping entails, which can be considerately time-consuming. As a business owner, you might often find it hard to balance between this and other operational and strategic duties.</p>
            <h4 class="text-xl font-semibold mt-4 mb-2">Errors and Omissions</h4>
            <p>Manual bookkeeping increases the risk of errors and omissions, which leads to incorrect financial reporting. Common errors can be data entry mistakes, missed transactions, incorrect categorisation, among others.</p>
            <h4 class="text-xl font-semibold mt-4 mb-2">Compliance Issues</h4>
            <p>It is important to keep up with tax laws and regulations. Failure to comply may lead to penalisation or fine. Continuous learning and attentiveness is necessary so that compliance can be ensured.</p>
            <h4 class="text-xl font-semibold mt-4 mb-2">Security Concerns</h4>
            <p>Strong security measures should be taken when handling sensitive financial information to avoid breaches. Secure systems need to be put in place and safe practices should be implemented to protect financial data.</p>
            <p class="font-medium mt-4">Bookkeeping challenges can hinder your business growth. Let Growwth Partners handle your bookkeeping needs, ensuring accuracy and compliance. Contact us today!</p>
          `
        }
      ]
    : [ /* financial reporting guide sections */ ];

  const faqs = isBookkeepingGuide
    ? [
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
        },
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
        },
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
      ] 
    : [ /* financial reporting guide FAQs */ ];

  // Set up keyTakeaway images
  const keyTakeawayImages = [
    "/lovable-uploads/753ca010-8990-4e45-a02a-523a4c61a109.png",
    "/lovable-uploads/753ca010-8990-4e45-a02a-523a4c61a109.png",
    "/lovable-uploads/753ca010-8990-4e45-a02a-523a4c61a109.png",
    "/lovable-uploads/753ca010-8990-4e45-a02a-523a4c61a109.png",
    "/lovable-uploads/753ca010-8990-4e45-a02a-523a4c61a109.png"
  ];

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <GuideDetail
      guide={guide}
      keyTakeawayImages={keyTakeawayImages}
      keyTakeaways={keyTakeaways}
      sections={sections}
      faqs={faqs}
      onContactClick={handleContactClick}
    />
  );
};

export default GuideSingle;
