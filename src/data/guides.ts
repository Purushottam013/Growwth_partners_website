export interface Guide {
  id: number;
  Title: string;
  slug: string;
  Image: string;
  Category: string;
  Excerpt: string;
  Content: string;
  publishedAt?: string;
  keyTakeaways?: Array<{
    title: string;
    description: string;
  }>;
  keyTakeawayImages?: Array<string>;
  sections?: Array<{
    title: string;
    content: string;
  }>;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

// Define guide content
export const guides: Guide[] = [
  {
    id: 1,
    Title: "The Most Comprehensive Guide to Pitching to Investors",
    slug: "pitching-to-investors-guide",
    Image: "/lovable-uploads/f2073f22-e161-45c6-9d26-1c99e770e553.png",
    Category: "Corporate Secretary",
    Excerpt: "Learn how to effectively pitch to investors and secure funding for your business growth.",
    Content: "Full guide content for pitching to investors",
    publishedAt: "2025-04-15",
    keyTakeaways: [
      { title: "Understand Your Business Needs", description: "Clearly define what you're seeking from investors beyond just money." },
      { title: "Research Different Investors", description: "Target investors who specialize in your industry and stage of business." },
      { title: "Create an Engaging Pitch Deck", description: "Develop a concise presentation that tells your business story with compelling data." },
      { title: "Perfect Your Elevator Pitch", description: "Craft a 30-second summary that captures the essence of your business opportunity." },
      { title: "Show Growth Orientation", description: "Demonstrate how you'll use investment to scale and provide returns." }
    ],
    keyTakeawayImages: [
      "/lovable-uploads/ff64989c-dab9-4050-814e-d90bca79f42b.png",
      "/lovable-uploads/15e6b360-d5dd-4d93-8dd8-86e3b6815a2c.png",
      "/lovable-uploads/ff10cb0e-544a-4e37-b61b-8e4174ede681.png",
      "/lovable-uploads/29d7a505-65ef-443d-bc30-78185338c79b.png",
      "/lovable-uploads/7950ef2b-fec5-470f-8003-13b293af4b08.png"
    ],
    sections: [
      { 
        title: "Understanding Investor Expectations", 
        content: `<p>Before approaching investors, it's critical to understand what they're looking for:</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li><strong>Return on Investment:</strong> Investors expect significant returns, typically 10-20x for early-stage investments.</li>
          <li><strong>Clear Exit Strategy:</strong> They want to know how they'll eventually liquidate their investment.</li>
          <li><strong>Scalable Business Model:</strong> Your business should demonstrate potential for rapid growth.</li>
          <li><strong>Strong Team:</strong> Investors often say they invest in people first, ideas second.</li>
        </ul>`
      },
      { 
        title: "Crafting Your Pitch", 
        content: `<p>Your pitch should be tailored to your audience and cover these essential elements:</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li><strong>Problem Statement:</strong> What significant market problem are you solving?</li>
          <li><strong>Solution:</strong> How your product or service solves this problem uniquely.</li>
          <li><strong>Market Size:</strong> Quantify your total addressable market with credible data.</li>
          <li><strong>Business Model:</strong> How you make money and your unit economics.</li>
          <li><strong>Traction:</strong> Evidence of market validation and customer adoption.</li>
          <li><strong>Competition:</strong> Honest assessment of alternatives and your competitive advantages.</li>
          <li><strong>Team:</strong> Why your team is uniquely qualified to execute this vision.</li>
          <li><strong>Financials:</strong> Realistic projections with clear assumptions.</li>
          <li><strong>Ask:</strong> Specific amount you're raising and use of funds.</li>
        </ul>`
      },
      { 
        title: "Approaching Different Types of Investors", 
        content: `<p>Different funding sources have distinct expectations and processes:</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li><strong>Angel Investors:</strong> Individual investors often focused on early-stage startups. They typically invest $25K-$100K and can make decisions quickly.</li>
          <li><strong>Venture Capital:</strong> Institutional investors who manage funds and typically invest in startups with high growth potential. Their process is more formal and can take 3-6 months.</li>
          <li><strong>Strategic Investors:</strong> Companies that invest for both financial returns and strategic advantages. They look for synergies with their existing business.</li>
          <li><strong>Family Offices:</strong> Private wealth management firms that can often take a longer-term view than traditional VCs.</li>
        </ul>`
      }
    ],
    faqs: [
      { question: "How much equity should I expect to give up in my first fundraising round?", answer: "Typically, startups give up between 15-25% equity in their seed round, but this varies based on valuation, industry, and growth stage." },
      { question: "Should I approach multiple investors simultaneously?", answer: "Yes, creating a sense of competition can enhance your negotiating position, but be transparent about this with potential investors." },
      { question: "What's the ideal length for a pitch deck?", answer: "Aim for 10-15 slides that can be presented in under 20 minutes, allowing time for questions." },
      { question: "How do I value my startup when I have limited revenue?", answer: "Early-stage valuations typically consider team experience, market size, IP, traction metrics, competitive landscape, and comparable company valuations." }
    ]
  },
  {
    id: 2,
    Title: "Guide to Financial Reporting Standards in Singapore for Small Entities",
    slug: "financial-reporting-standards-singapore",
    Image: "/lovable-uploads/f2073f22-e161-45c6-9d26-1c99e770e553.png",
    Category: "Accounting",
    Excerpt: "Learn about the simplified accounting framework targeted at smaller entities in Singapore.",
    Content: "Full guide content for financial reporting standards",
    publishedAt: "2025-04-30",
    keyTakeaways: [
      { title: "Growth Orientation", description: "FRS for Small Entities focuses on essential reporting areas to support business growth." },
      { title: "Simplified Reporting", description: "Less complex disclosure requirements make financial reporting more manageable." },
      { title: "Cost Efficiency", description: "Reduced reporting burden leads to lower compliance costs and resource savings." },
      { title: "Compliance and Transparency", description: "Maintains adherence to accounting principles while ensuring clarity." },
      { title: "Business Decision Support", description: "Provides a framework for informed decisions based on accurate financial data." }
    ],
    keyTakeawayImages: [
      "/lovable-uploads/ff64989c-dab9-4050-814e-d90bca79f42b.png",
      "/lovable-uploads/15e6b360-d5dd-4d93-8dd8-86e3b6815a2c.png",
      "/lovable-uploads/ff10cb0e-544a-4e37-b61b-8e4174ede681.png",
      "/lovable-uploads/29d7a505-65ef-443d-bc30-78185338c79b.png",
      "/lovable-uploads/7950ef2b-fec5-470f-8003-13b293af4b08.png"
    ],
    sections: [
      { 
        title: "Who Can Apply FRS for Small Entities?", 
        content: `<p>The FRS for Small Entities is designed for businesses that meet specific criteria. To qualify, an entity must:</p>
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
        </ul>`
      },
      { 
        title: "Key Differences from Full FRS", 
        content: `<p>The FRS for Small Entities differs from the full FRS framework in several important ways:</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li><strong>Simplified Recognition and Measurement:</strong> Less complex approaches to financial instruments, goodwill amortization, and research and development costs.</li>
          <li><strong>Reduced Disclosures:</strong> Fewer required notes and explanations in financial statements.</li>
          <li><strong>Eliminated Topics:</strong> Certain complex areas like share-based payments, intermediate reporting, and earnings per share are not required.</li>
        </ul>`
      },
      { 
        title: "Implementation Considerations", 
        content: `<p>Transitioning to FRS for Small Entities requires careful planning:</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li><strong>Initial Assessment:</strong> Evaluate if your business meets the qualifying criteria.</li>
          <li><strong>Impact Analysis:</strong> Determine how the transition will affect your financial statements.</li>
          <li><strong>System Updates:</strong> Adjust accounting systems and processes as needed.</li>
          <li><strong>Staff Training:</strong> Ensure your team understands the new requirements.</li>
          <li><strong>Communication:</strong> Inform stakeholders about the changes in financial reporting.</li>
        </ul>`
      }
    ],
    faqs: [
      { question: "Is FRS for Small Entities mandatory for qualifying businesses?", answer: "No, it's optional. Qualifying businesses can choose between FRS for Small Entities or full FRS." },
      { question: "Can a business switch back to full FRS after adopting FRS for Small Entities?", answer: "Yes, but the change must be justified and properly documented, with retrospective application." },
      { question: "How frequently is FRS for Small Entities updated?", answer: "It's typically updated every few years, rather than the more frequent updates to full FRS." },
      { question: "Does using FRS for Small Entities affect tax calculations?", answer: "Not generally, as Singapore tax calculations have their own rules, but some simplifications may affect certain tax computations." }
    ]
  },
  {
    id: 3,
    Title: "A Comprehensive Guide to Bookkeeping Practices", 
    slug: "bookkeeping-practices-guide",
    Image: "/lovable-uploads/a1793127-4e29-402b-b80a-6163df4177cb.png",
    Category: "Incorporation",
    Excerpt: "Master the fundamentals of bookkeeping with our comprehensive guide for small businesses.",
    Content: "Full guide content for bookkeeping practices",
    publishedAt: "2025-05-01",
    keyTakeaways: [
      { title: "Definition", description: "Understand the basics of bookkeeping and its primary methods." },
      { title: "Significance", description: "Realise the importance of bookkeeping for compliance and management." },
      { title: "Roles and Responsibilities", description: "Learn what a bookkeeper does and the skills needed." },
      { title: "Process Steps", description: "Get familiar with the steps involved in the bookkeeping process." },
      { title: "Challenges", description: "Identify common challenges and understand the need for professional help." }
    ],
    keyTakeawayImages: [
      "/lovable-uploads/ff64989c-dab9-4050-814e-d90bca79f42b.png",
      "/lovable-uploads/15e6b360-d5dd-4d93-8dd8-86e3b6815a2c.png",
      "/lovable-uploads/ff10cb0e-544a-4e37-b61b-8e4174ede681.png",
      "/lovable-uploads/29d7a505-65ef-443d-bc30-78185338c79b.png",
      "/lovable-uploads/7950ef2b-fec5-470f-8003-13b293af4b08.png"
    ],
    sections: [
      { 
        title: "Introduction", 
        content: `<p class="text-gray-600">No business can prosper without bookkeeping. It is the lifeblood of any prosperous enterprise undertaking accurate financial decisions and staying within the law. But it is also one of those things that are often overlooked in small businesses.</p>
        <p class="text-gray-600 mt-4">This authoritative guide covers everything you need to know about book-keeping starting with its basic principles and methods, why it's important as well as common challenges faced when doing it. Whether you're a small business owner or an aspiring entrepreneur, understanding how to do your accounts is key.</p>
        <p class="text-gray-600 mt-4">But if this sounds overwhelming or time-consuming for you, then there are professional services available which can help manage your records keeping them in good order.</p>`
      },
      { 
        title: "What is Bookkeeping?", 
        content: `<div class="space-y-4">
          <p class="text-gray-600">This refers to systematically recording, organising and maintaining all financial transactions of a company so that they may reflect sales, purchases, and income. The main aim is usually accuracy and currency accessibility.</p>
          
          <div class="my-6">
            <img src="/lovable-uploads/a1793127-4e29-402b-b80a-6163df4177cb.png" alt="Bookkeeping" class="w-full h-auto rounded-lg shadow-md"/>
          </div>
          
          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mt-6">
            <h4 class="font-semibold text-blue-700">Pro-tip:</h4>
            <p class="text-gray-700">Keep all receipts and invoices organised to simplify your bookkeeping process. An organised system ensures that every transaction has got its proper record. Not only does this make work easier but also provides necessary supporting documents for audits or tax returns filing.</p>
          </div>
          
          <h4 class="text-xl font-semibold mt-8">Methods of Bookkeeping</h4>
          <p class="text-gray-600">Everything done financially in any institution, whether positive or negative, must be documented accurately for the purpose of reporting and analysis.</p>
          <p class="text-gray-600 mt-2">There are two major types: single-entry & double-entry book keeping systems.</p>
          
          <h5 class="text-lg font-semibold mt-6">Single-Entry Bookkeeping</h5>
          <p class="text-gray-600">In single-entry bookkeeping, each transaction gets recorded once. This is almost like using a personal cheque book, which keeps track of the cash flow only. As it indicates the financial position on a limited level, it is useful only where the number of transactions conducted are minimal. It is thus suitable for an individual incurring expenses on behalf of the company or for small businesses.</p>
          
          <h5 class="text-lg font-semibold mt-6">Double-Entry Bookkeeping</h5>
          <p class="text-gray-600">Double-entry bookkeeping is where every transaction affects at least two accounts, hence ensuring maintenance of the balance sheet equation (Assets = Liabilities + Equity).</p>
          <p class="text-gray-600 mt-2">Although more complicated than the single-entry system, the double-entry bookkeeping method offers detailed statements and greater precision about what happened within a certain time frame. It is thus widely preferred by most businesses.</p>
          
          <div class="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 mt-6">
            <p class="text-gray-700">Feeling overwhelmed by bookkeeping? Growwth Partners' expert services can help manage your books accurately. Contact us today!</p>
          </div>
        </div>`
      },
      { 
        title: "Importance of Bookkeeping", 
        content: `<div class="space-y-4">
          <h4 class="text-lg font-semibold">Legal Compliance</h4>
          <p class="text-gray-600">Through proper bookkeeping, business owners can comply with tax laws and other statutory regulations, thus avoiding penalties that may arise out of non-compliance. This also helps during audits, if there is a need to settle any disputed figures concerning income earned or deductions made as per law.</p>
          
          <h4 class="text-lg font-semibold mt-6">Financial Management</h4>
          <p class="text-gray-600">Bookkeeping gives an insight into one's financial status which assists in budgeting, controlling costs, planning investments, and more. It shows where money comes from, how it was used, where it went, so that future goals can be not just planned, but also achieved.</p>
          
          <h4 class="text-lg font-semibold mt-6">Investor Confidence</h4>
          <p class="text-gray-600">This is a short speech that sums up what your company does and why it's valuable. It should be between 30-60 seconds long and grab people's attention.</p>
          
          <div class="my-6">
            <img src="/lovable-uploads/a1793127-4e29-402b-b80a-6163df4177cb.png" alt="Bookkeeping Importance" class="w-full h-auto rounded-lg shadow-md"/>
          </div>
          
          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mt-6">
            <h4 class="font-semibold text-blue-700">Pro-tip:</h4>
            <p class="text-gray-700">Reconcile your bank statements on a regular basis by making sure they match your internal records and your bank statements. This keeps your financial data accurate and avoids possible problems during audits by helping to quickly identify any errors or unauthorised transactions.</p>
          </div>
        </div>`
      },
      { 
        title: "Basic Bookkeeping Terms", 
        content: `<div class="space-y-6">
          <div>
            <h4 class="text-lg font-semibold">Assets</h4>
            <p class="text-gray-600">Assets are resources that a business owns. They can be classified as current assets (such as cash and stock) or non-current assets (such as property and equipment).</p>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold">Liabilities</h4>
            <p class="text-gray-600">These are debts owed by the company to its creditors. They could include loans, accounts payable or mortgages. Liabilities may be either current (due within 1 year) or long-term (due after 1 year).</p>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold">Equity</h4>
            <p class="text-gray-600">Equity is the owner's residual interest in a business after deducting liabilities from assets. It includes capital contributed by owners, retained earnings, and any other additional paid-in capital.</p>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold">Revenue</h4>
            <p class="text-gray-600">Revenue is the inflow of income from ordinary business activities like sales or services. It represents total earnings before expenses are deducted, thus giving a measure of profitability.</p>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold">Expenses</h4>
            <p class="text-gray-600">Expenses are costs incurred while earning revenues during an accounting period. This could include rent, utilities, payroll, supplies, etc., which affects profit of the enterprise being reported upon.</p>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold">Ledger</h4>
            <p class="text-gray-600">A complete log of all financial transactions is called a ledger. It facilitates accurate reporting and analysis by classifying transactions by accounts and offering a comprehensive view of financial activity.</p>
          </div>
        </div>`
      },
      { 
        title: "Comprehensive Steps in Bookkeeping Process", 
        content: `<div class="space-y-4">
          <h4 class="text-lg font-semibold">Analysing Financial Transactions</h4>
          <p class="text-gray-600">The first step in the accounting cycle is to understand what each transaction means and how it affects the financial statements. This involves correctly classifying transactions so that they can be reported accurately.</p>
          
          <h4 class="text-lg font-semibold mt-6">Recording Transactions</h4>
          <p class="text-gray-600">Transactions are initially recorded in a journal using a general entry, which includes details such as date, account title, description, and amount. Accurate records need to be maintained for future reference and audit purposes.</p>
          
          <h4 class="text-lg font-semibold mt-6">Posting to the Ledger</h4>
          <p class="text-gray-600">These journal entries are then transferred into their respective accounts in the general ledger. This process groups all similar information together, making it easier for companies to prepare financial statements later on.</p>
          
          <div class="my-6">
            <img src="/lovable-uploads/a1793127-4e29-402b-b80a-6163df4177cb.png" alt="Bookkeeping Process" class="w-full h-auto rounded-lg shadow-md"/>
          </div>
          
          <h4 class="text-lg font-semibold mt-6">Preparing Trial Balance</h4>
          <p class="text-gray-600">At this stage, one must ensure everything has been entered correctly and that debits equal credits. The trial balance acts as a self-check mechanism before finalising the financial reports like balance sheets and income statements.</p>
          
          <h4 class="text-lg font-semibold mt-6">Adjusting Entries</h4>
          <p class="text-gray-600">At the end of an accounting period, to reflect accurate financial positions, entries are often looked into and adjusted. This step could involve correcting errors made while recording transactions or recognising accrued expenses or revenues that were not captured during the initial recognition phase.</p>
          
          <h4 class="text-lg font-semibold mt-6">Preparing Financial Statements</h4>
          <p class="text-gray-600">Then comes creating different types of financial statements,—balance sheets, income statements, and cash flow statements—which summarise the company's performance over certain time periods, like months, quarters or years. These statements help with decision-making and offer information about the company's financial situation.</p>
          
          <h4 class="text-lg font-semibold mt-6">Closing the Books</h4>
          <p class="text-gray-600">At the conclusion of the accounting period, close any temporary accounts so that the following period can begin anew. By using this procedure, income and expenses are guaranteed to be reported within the accurate accounting period.</p>
          
          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mt-6">
            <h4 class="font-semibold text-blue-700">Pro-tip:</h4>
            <p class="text-gray-700">To stay on top of your business' finances, have a detailed checklist of the important tasks to ensure nothing important gets missed. This checklist can provide structure & discipline around key activities like invoice creation, expense tracking, reconciliation and more.</p>
          </div>
        </div>`
      },
      { 
        title: "Common Challenges in Bookkeeping", 
        content: `<div class="space-y-4">
          <h4 class="text-lg font-semibold">Complexity</h4>
          <p class="text-gray-600">Looking after many accounts and transactions can be confusing, especially for small businesses which do not have specialised resources dedicated to it. This process needs close attention to details and understanding of accounting concepts.</p>
          
          <h4 class="text-lg font-semibold mt-6">Time-Consuming</h4>
          <p class="text-gray-600">Updating and keeping detailed records regularly is what bookkeeping entails, which can be considerately time-consuming. As a business owner, you might often find it hard to balance between this and other operational and strategic duties.</p>
          
          <h4 class="text-lg font-semibold mt-6">Errors and Omissions</h4>
          <p class="text-gray-600">Manual bookkeeping increases the risk of errors and omissions, which leads to incorrect financial reporting. Common errors can be data entry mistakes, missed transactions, incorrect categorisation, among others.</p>
          
          <h4 class="text-lg font-semibold mt-6">Compliance Issues</h4>
          <p class="text-gray-600">It is important to keep up with tax laws and regulations. Failure to comply may lead to penalisation or fine. Continuous learning and attentiveness is necessary so that compliance can be ensured.</p>
          
          <h4 class="text-lg font-semibold mt-6">Security Concerns</h4>
          <p class="text-gray-600">Strong security measures should be taken when handling sensitive financial information to avoid breaches. Secure systems need to be put in place and safe practices should be implemented to protect financial data.</p>
          
          <div class="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 mt-6">
            <p class="text-gray-700">Bookkeeping challenges can hinder your business growth. Let Growwth Partners handle your bookkeeping needs, ensuring accuracy and compliance. Contact us today!</p>
          </div>
        </div>`
      },
      { 
        title: "Summary", 
        content: `<div class="space-y-4">
          <p class="text-gray-600">Bookkeeping is a vital part of running a successful business. It gives you insight into your financial health, keeps you compliant with the law and helps build trust with investors. By following this comprehensive guide, you will have a better understanding of what bookkeeping involves and why it's so important for any healthy business.</p>
          
          <p class="text-gray-600 mt-4">While bookkeeping can seem exhausting, there are always professionals who can help. Growwth Partners offer a comprehensive range of services designed to meet all your business financial needs.</p>
          
          <p class="text-gray-600 mt-4">Don't let the complexities of bookkeeping hold you back from doing what you do best – running your business. Reach out to us today!</p>
        </div>`
      }
    ],
    faqs: [
      { question: "What is the main difference between single-entry and double-entry bookkeeping?", answer: "While a single-entry system records each transaction only once, the latter does it twice, but in different accounts." },
      { question: "Is double-entry bookkeeping necessary for small businesses?", answer: "Though not mandatory, using the double-entry bookkeeping method provides more accurate results thereby facilitating growth & expansion plans." },
      { question: "Can I switch from single-entry to double-entry bookkeeping?", answer: "Yes, but a well-planned conversion process must be followed while ensuring all past data are correctly entered into every account affected." },
      { question: "How often should I update my books?", answer: "Daily or weekly updates would suffice to ensure accuracy in recording transactions done over specified periods of time." },
      { question: "What is the difference between assets and liabilities?", answer: "Assets refer to what businesses own while liabilities refer to their debts/obligations." },
      { question: "How is equity calculated?", answer: "By deducting liabilities from assets: Equity = Assets – Liabilities." },
      { question: "What is the purpose of a ledger?", answer: "Ledgers record all financial transactions made within given periods for accurate reporting and analysis." },
      { question: "What are the types of revenue?", answer: "There is Non-operating Revenue (those earned outside normal operations) but Operating Revenue is the main source for most companies." },
      { question: "What are common business expenses?", answer: "Rent, utilities, salaries, taxes, advertising fees, etc., can be considered as business expenses. These might vary depending on nature & scope of operations." },
      { question: "What are common bookkeeping errors?", answer: "Common errors include data entry mistakes, missed transactions, incorrect categorisation." },
      { question: "How can I avoid bookkeeping errors?", answer: "Use accounting software and reconcile accounts regularly through periodic audits." },
      { question: "What is the impact of poor bookkeeping on a business?", answer: "Poorly done bookkeeping can lead to mismanaged funds, non-compliance with taxes and loss of investors or funding." },
      { question: "Why is compliance important in bookkeeping?", answer: "Compliance ensures adherence to tax laws and regulations, avoiding legal issues and penalties." },
      { question: "How can I secure my bookkeeping records?", answer: "Encrypting software can be used to secure your bookkeeping recording. Also, making backups often and restricting access to only authorised persons may also help ensure security." }
    ]
  }
];

// Define available guide categories
export const guideCategories = [
  "Accounting", 
  "Corporate Secretary", 
  "HR & Payroll", 
  "Incorporation", 
  "Fractional CFO", 
  "Taxation & Compliance",
  "Bookkeeping"
];

export const getGuidesByCategory = (category?: string): Guide[] => {
  if (!category) return guides;
  return guides.filter(guide => guide.Category === category);
};

export const getGuideBySlug = (slug: string): Guide | undefined => {
  return guides.find(guide => guide.slug === slug);
};
