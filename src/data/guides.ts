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
        content: `<p>No business can prosper without bookkeeping. It is the lifeblood of any prosperous enterprise undertaking accurate financial decisions and staying within the law. But it is also one of those things that are often overlooked in small businesses.</p>
        <p class="mt-3">This authoritative guide covers everything you need to know about book-keeping starting with its basic principles and methods, why it's important as well as common challenges faced when doing it. Whether you're a small business owner or an aspiring entrepreneur, understanding how to do your accounts is key.</p>
        <p class="mt-3">But if this sounds overwhelming or time-consuming for you, then there are professional services available which can help manage your records keeping them in good order.</p>`
      },
      { 
        title: "What is Bookkeeping?", 
        content: `<p>This refers to systematically recording, organising and maintaining all financial transactions of a company so that they may reflect sales, purchases, and income. The main aim is usually accuracy and currency accessibility.</p>
        
        <div class="my-6">
          <img src="/lovable-uploads/1fc46825-2dcc-4640-9925-ec8a4b06bad2.png" alt="Bookkeeping concept" class="w-full rounded-lg" />
        </div>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <p class="font-semibold">Pro-tip:</p>
          <p>Keep all receipts and invoices organised to simplify your bookkeeping process. An organised system ensures that every transaction has got its proper record. Not only does this make work easier but also provides necessary supporting documents for audits or tax returns filing.</p>
        </div>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">Methods of Bookkeeping</h4>
        <p>Everything done financially in any institution, whether positive or negative, must be documented accurately for the purpose of reporting and analysis.</p>
        <p class="mt-3">There are two major types: single-entry & double-entry book keeping systems.</p>
        
        <h5 class="text-md font-semibold mt-4 mb-2">Single-Entry Bookkeeping</h5>
        <p>In single-entry bookkeeping, each transaction gets recorded once. This is almost like using a personal cheque book, which keeps track of the cash flow only. As it indicates the financial position on a limited level, it is useful only where the number of transactions conducted are minimal. It is thus suitable for an individual incurring expenses on behalf of the company or for small businesses.</p>
        
        <h5 class="text-md font-semibold mt-4 mb-2">Double-Entry Bookkeeping</h5>
        <p>Double-entry bookkeeping is where every transaction affects at least two accounts, hence ensuring maintenance of the balance sheet equation (Assets = Liabilities + Equity).</p>
        <p class="mt-3">Although more complicated than the single-entry system, the double-entry bookkeeping method offers detailed statements and greater precision about what happened within a certain time frame. It is thus widely preferred by most businesses.</p>
        
        <div class="bg-primary/10 text-primary p-4 rounded-lg mt-6">
          <p>Feeling overwhelmed by bookkeeping? Growwth Partners' expert services can help manage your books accurately. Contact us today!</p>
        </div>`
      },
      { 
        title: "Importance of Bookkeeping", 
        content: `<h4 class="text-lg font-semibold mt-2 mb-3">Legal Compliance</h4>
        <p>Through proper bookkeeping, business owners can comply with tax laws and other statutory regulations, thus avoiding penalties that may arise out of non-compliance. This also helps during audits, if there is a need to settle any disputed figures concerning income earned or deductions made as per law.</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-3">Financial Management</h4>
        <p>Bookkeeping gives an insight into one's financial status which assists in budgeting, controlling costs, planning investments, and more. It shows where money comes from, how it was used, where it went, so that future goals can be not just planned, but also achieved.</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-3">Investor Confidence</h4>
        <p>This is a short speech that sums up what your company does and why it's valuable. It should be between 30-60 seconds long and grab people's attention.</p>
        
        <div class="my-6">
          <img src="/lovable-uploads/aa49c3a6-d4fd-49ca-b23d-7bb116924133.png" alt="Importance of bookkeeping" class="w-full rounded-lg" />
        </div>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <p class="font-semibold">Pro-tip:</p>
          <p>Reconcile your bank statements on a regular basis by making sure they match your internal records and your bank statements. This keeps your financial data accurate and avoids possible problems during audits by helping to quickly identify any errors or unauthorised transactions.</p>
        </div>`
      },
      {
        title: "Basic Bookkeeping Terms",
        content: `<h4 class="text-lg font-semibold mt-2 mb-3">Assets</h4>
        <p>Assets are resources that a business owns. They can be classified as current assets (such as cash and stock) or non-current assets (such as property and equipment).</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-3">Liabilities</h4>
        <p>These are debts owed by the company to its creditors. They could include loans, accounts payable or mortgages. Liabilities may be either current (due within 1 year) or long-term (due after 1 year).</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-3">Equity</h4>
        <p>Equity is the owner's residual interest in a business after deducting liabilities from assets. It includes capital contributed by owners, retained earnings, and any other additional paid-in capital.</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-3">Revenue</h4>
        <p>Revenue is the inflow of income from ordinary business activities like sales or services. It represents total earnings before expenses are deducted, thus giving a measure of profitability.</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-3">Expenses</h4>
        <p>Expenses are costs incurred while earning revenues during an accounting period. This could include rent, utilities, payroll, supplies, etc., which affects profit of the enterprise being reported upon.</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-3">Ledger</h4>
        <p>A complete log of all financial transactions is called a ledger. It facilitates accurate reporting and analysis by classifying transactions by accounts and offering a comprehensive view of financial activity.</p>`
      },
      {
        title: "Comprehensive Steps in Bookkeeping Process",
        content: `<h4 class="text-lg font-semibold mt-2 mb-3">Analysing Financial Transactions</h4>
        <p>The first step in the accounting cycle is to understand what each transaction means and how it affects the financial statements. This involves correctly classifying transactions so that they can be reported accurately.</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-3">Recording Transactions</h4>
        <p>Transactions are initially recorded in a journal using a general entry, which includes details such as date, account title, description, and amount. Accurate records need to be maintained for future reference and audit purposes.</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-3">Posting to the Ledger</h4>
        <p>These journal entries are then transferred into their respective accounts in the general ledger. This process groups all similar information together, making it easier for companies to prepare financial statements later on.</p>
        
        <div class="my-6">
          <img src="/lovable-uploads/eab63700-76fd-4b52-957f-720866b3c937.png" alt="Bookkeeping process steps" class="w-full rounded-lg" />
        </div>
        
        <h4 class="text-lg font-semibold mt-4 mb-3">Preparing Trial Balance</h4>
        <p>At this stage, one must ensure everything has been entered correctly and that debits equal credits. The trial balance acts as a self-check mechanism before finalising the financial reports like balance sheets and income statements.</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-3">Adjusting Entries</h4>
        <p>At the end of an accounting period, to reflect accurate financial positions, entries are often looked into and adjusted. This step could involve correcting errors made while recording transactions or recognising accrued expenses or revenues that were not captured during the initial recognition phase.</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-3">Preparing Financial Statements</h4>
        <p>Then comes creating different types of financial statements,—balance sheets, income statements, and cash flow statements—which summarise the company's performance over certain time periods, like months, quarters or years. These statements help with decision-making and offer information about the company's financial situation.</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-3">Closing the Books</h4>
        <p>At the conclusion of the accounting period, close any temporary accounts so that the following period can begin anew. By using this procedure, income and expenses are guaranteed to be reported within the accurate accounting period.</p>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <p class="font-semibold">Pro-tip:</p>
          <p>To stay on top of your business' finances, have a detailed checklist of the important tasks to ensure nothing important gets missed. This checklist can provide structure & discipline around key activities like invoice creation, expense tracking, reconciliation and more.</p>
        </div>`
      },
      {
        title: "Common Challenges in Bookkeeping",
        content: `<h4 class="text-lg font-semibold mt-2 mb-3">Complexity</h4>
        <p>Looking after many accounts and transactions can be confusing, especially for small businesses which do not have specialised resources dedicated to it. This process needs close attention to details and understanding of accounting concepts.</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-3">Time-Consuming</h4>
        <p>Updating and keeping detailed records regularly is what bookkeeping entails, which can be considerately time-consuming. As a business owner, you might often find it hard to balance between this and other operational and strategic duties.</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-3">Errors and Omissions</h4>
        <p>Manual bookkeeping increases the risk of errors and omissions, which leads to incorrect financial reporting. Common errors can be data entry mistakes, missed transactions, incorrect categorisation, among others.</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-3">Compliance Issues</h4>
        <p>It is important to keep up with tax laws and regulations. Failure to comply may lead to penalisation or fine. Continuous learning and attentiveness is necessary so that compliance can be ensured.</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-3">Security Concerns</h4>
        <p>Strong security measures should be taken when handling sensitive financial information to avoid breaches. Secure systems need to be put in place and safe practices should be implemented to protect financial data.</p>
        
        <div class="bg-primary/10 text-primary p-4 rounded-lg mt-6">
          <p>Bookkeeping challenges can hinder your business growth. Let Growwth Partners handle your bookkeeping needs, ensuring accuracy and compliance. Contact us today!</p>
        </div>`
      },
      {
        title: "Summary",
        content: `<p>Bookkeeping is a vital part of running a successful business. It gives you insight into your financial health, keeps you compliant with the law and helps build trust with investors. By following this comprehensive guide, you will have a better understanding of what bookkeeping involves and why it's so important for any healthy business.</p>
        <p class="mt-3">While bookkeeping can seem exhausting, there are always professionals who can help. Growwth Partners offer a comprehensive range of services designed to meet all your business financial needs.</p>
        <p class="mt-3">Don't let the complexities of bookkeeping hold you back from doing what you do best – running your business. Reach out to us today!</p>`
      },
      {
        title: "Book a Free Consultation",
        content: `<div class="bg-primary/10 p-8 rounded-lg text-center">
          <h3 class="text-xl font-bold mb-4">Book a free call with our expert to discuss your bookkeeping needs and save time and effort.</h3>
          <p class="mb-6">We are here to help you!</p>
          <button class="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium">Book a free call</button>
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
  },
  {
    id: 4,
    Title: "Comprehensive Guide to the Market Readiness Assistance (MRA) Grant in Singapore",
    slug: "mra-grant-singapore",
    Image: "/lovable-uploads/bb637a74-6152-4665-943f-66054058edf0.png",
    Category: "Incorporation",
    Excerpt: "Learn about the MRA Grant in Singapore and how it can help your business expand internationally.",
    Content: "Full guide content for MRA Grant",
    publishedAt: "2025-05-05",
    keyTakeaways: [
      { title: "Comprehensive Financial Support", description: "Up to 70% of eligible costs may be covered by the MRA Grant, which offers up to S$100,000 per new market." },
      { title: "Diverse Eligible Activities", description: "The grant can be used for a variety of activities, such as trade show participation, business matching, market research, and international marketing." },
      { title: "Clear Eligibility Criteria", description: "Companies must be Singapore-registered SMEs with an annual turnover of no more than S$100 million in order to be eligible for the MRA Grant." },
      { title: "Structured Application Process", description: "There are multiple steps in the MRA Grant application process, including pre-application, submission, assessment, and post-approval." },
      { title: "Importance of Thorough Preparation", description: "Applications that are successful must have precise goals, thorough project plans, correct data, adherence to regulations, and expert support." }
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
        content: `<p>Companies are always looking for growth opportunities. One effective way to do that is by expanding into foreign markets. However, such moves often involve making huge investments and overcoming various challenges.</p>
        <p class="mt-3">To support this cause, there are grants like the Market Readiness Assistance (MRA) Grant which can provide financial support for businesses planning to go global.</p>
        <p class="mt-3">This comprehensive guide provides an explanation about the MRA Grant in Singapore, including what it involves, the benefits of using it, how one should apply for it, and the challenges in securing it.</p>`
      },
      { 
        title: "What is an MRA Grant?", 
        content: `<p>Market Readiness Assistance (MRA) Grant is a government initiative aimed at helping Singaporean SMEs enter international markets. The grant supports certain activities with financial aid designed to facilitate overseas expansion such as market set-up, market promotion as well as business development.</p>
        
        <p class="mt-3">The MRA Grant covers up to 70% of eligible costs with a maximum cap of S$100,000 per company per new market. It reduces the financial risk associated with exploring and entering new markets thus making it easier for local companies to expand their global presence.</p>
        
        <div class="my-6">
          <img src="/lovable-uploads/bb637a74-6152-4665-943f-66054058edf0.png" alt="MRA Grant Components" class="w-full rounded-lg" />
        </div>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <p class="font-semibold">Pro-tip:</p>
          <p>Carefully categorise your project expenses under the specific MRA Grant components—such as market promotion, business development, and market set-up—to ensure you maximise the funding available for each category and avoid overspending on non-eligible activities.</p>
        </div>
        
        <div class="bg-primary/10 text-primary p-4 rounded-lg mt-6">
          <p>Collaborate with Growwth Partners to successfully manage your fundraising endeavours through custom tactics and knowledgeable direction. Talk to an expert!</p>
        </div>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">Benefits of the MRA Grant</h4>
        <p>The MRA Grant offers numerous benefits to Singaporean SMEs, including:</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li><strong>Financial Support:</strong> It subsidises almost 70% of qualified expenses, relieving small and medium-sized enterprises from heavy financial burden.</li>
          <li><strong>Market Expansion:</strong> This program enables firms to venture into new territories so they can have multiple sources of income.</li>
          <li><strong>Access to Expertise:</strong> It links entrepreneurs with professionals who possess skills required for successful penetration in different markets.</li>
          <li><strong>Risk Management:</strong> By giving out money under this scheme, risks connected with going abroad are minimised or eliminated completely.</li>
          <li><strong>Competitive Edge:</strong> Businesses get ahead of competitors by utilising funds provided through MRAs to explore fresh ideas while still relevant within their industries.</li>
        </ul>`
      },
      { 
        title: "Activities Eligible for the MRA Grant", 
        content: `<h4 class="text-lg font-semibold mt-2 mb-3">Overseas Market Promotion</h4>
        <p><strong>Physical Trade Fairs</strong><br/>This includes hiring a space and building a booth that cannot be larger than 36 square metres in size.</p>
        
        <p class="mt-3"><strong>Virtual Trade Fairs</strong><br/>Setting up virtual exhibition halls and booths, creating marketing materials and arranging business meetings or matching sessions.</p>
        
        <p class="mt-3"><strong>Marketing Activities or Public Relations (PR)</strong><br/>Holding in-store promotions, roadshows, pop-up stores etc., which are part of an overall marketing campaign or PR effort.</p>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">Overseas Market Set-up</h4>
        <p><strong>Market Entry Support</strong><br/>This covers advisory, legal fees and expenses relating to intellectual property application; filing and registering sales representative offices / equity entities; import & export licences.</p>
        
        <p class="mt-3"><strong>FTA and Trade Compliance Consultancy</strong><br/>This includes legal or consultancy fees for getting guidance on customs compliance, exporting controls and sanctions issues, and product HS classification.</p>
        
        <div class="bg-primary/10 text-primary p-4 rounded-lg mt-6">
          <p>With Growwth Partners' industry-best support, make the most of your funding opportunities by connecting with the right investors and securing the right valuation for your business. Start now!</p>
        </div>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">Overseas Business Development</h4>
        <p><strong>Business Matching</strong><br/>Looking for potential partners who can act as licensees or franchisees, finding agents or distributors who would help sell products or services, identifying cross-border logistics partners, searching for joint venture partners, etc.,</p>
        
        <p class="mt-3"><strong>Overseas Marketing Presence</strong><br/>Sending employees based in the target market to carry out marketing activities there including attending trade shows, doing sales calls, and more.</p>
        
        <p class="mt-3"><strong>In-Market Business Development</strong><br/>Training BD personnel (in-market), reaching out to new business leads within specific markets where there may not have been previous contact made, carrying out market entry activity like a launch, reviewing existing market strategy if necessary.</p>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <p class="font-semibold">Pro-tip:</p>
          <p>Take full advantage of virtual trade fairs as they offer a cost-effective alternative to physical fairs. These events provide significant exposure to international markets with lower costs for travel, accommodation, and booth construction, allowing you to stretch your budget further.</p>
        </div>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">Who Can Apply?</h4>
        <p>The MRA Grant is open only to Singapore registered SMEs who wish to venture into new international markets. It would help most businesses that have strong products or services which they intend scaling globally.</p>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">Eligibility for the Grant</h4>
        <p>To be eligible for this grant, companies must meet these requirements:</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li><strong>Singapore-Registered Entity:</strong> The company has to be incorporated and registered under Singapore laws.</li>
          <li><strong>Annual Sales Turnover:</strong> S$100 million is the maximum annual sales turnover allowed for any business seeking MRA Grant funding.</li>
          <li><strong>Employment Size:</strong> The number of persons employed by an enterprise should not exceed 200 individuals at any given time during its financial year.</li>
          <li><strong>Financial Health:</strong> A business must be financially sound based on established accounting standards & practices within the industry concerned.</li>
        </ul>`
      },
      { 
        title: "Process of MRA Grant Application", 
        content: `<p>Applying for the MRA Grant involves several steps:</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-3">Pre-Application</h4>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li><strong>Self-Assessment:</strong> Ensure that your business is eligible for the grant.</li>
          <li><strong>Gathering Documentation:</strong> Prepare all necessary documents such as company registration, financial statements and project proposals.</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-4 mb-3">Application Submission</h4>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li><strong>Online Submission:</strong> Submit your application through the Business Grants Portal.</li>
          <li><strong>Supporting Documents:</strong> Attach all required documents and information to support your application.</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-4 mb-3">Evaluation</h4>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li><strong>Review Process:</strong> Enterprise Singapore will review the application and may request for more information or clarification if needed.</li>
          <li><strong>Approval:</strong> If approved, you will receive a Letter of Offer which states the amount of grant awarded and its conditions.</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-4 mb-3">Post-Approval</h4>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li><strong>Project Implementation:</strong> Carry out the activities outlined in the approved project during application.</li>
          <li><strong>Claims Submission:</strong> Submit claims for reimbursement of eligible expenses with supporting documents.</li>
        </ul>
        
        <div class="my-6">
          <img src="/lovable-uploads/5d5bd90c-0e55-4a34-8b9a-8d062dc7ee5b.png" alt="MRA Grant Calculation Example" class="w-full rounded-lg" />
        </div>`
      },
      { 
        title: "Common Mistakes Made During MRA Grant Application", 
        content: `<p>MRA Grant provides a substantial amount of money to support and empower businesses looking to expand to the international market. However, these Grants are not easily provided to all SMEs and hence, an extremely well-presented and error-free application is crucial.</p>
        
        <p class="mt-3">Here are some predominantly made errors you should look to avoid while you apply for the MRA Grant:</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li><strong>Incomplete Documentation:</strong> Failing to provide all required documents may cause delay or rejection of application.</li>
          <li><strong>Unclear Objectives:</strong> Your application could look weak when your business objectives are vague or poorly defined.</li>
          <li><strong>Ignoring Eligibility Criteria:</strong> Applications that do not meet requirements get rejected outrightly.</li>
          <li><strong>Budgeting Mistakes:</strong> Evaluation red flags are raised when the budget is incorrect or unrealistic.</li>
          <li><strong>Lack of Follow-Up:</strong> A delayed response to additional information requests can lead to slowing down the process or rejection of the application.</li>
        </ul>
        
        <div class="my-6">
          <img src="/lovable-uploads/a77bed8c-75a1-42ee-a323-97d0cf993e4a.png" alt="Tips for a Successful MRA Grant Application" class="w-full rounded-lg" />
        </div>
        
        <div class="bg-primary/10 text-primary p-4 rounded-lg mt-6">
          <p>Simplify Your Fundraising Process: Growwth Partners can manage the intricate details of fundraising, freeing you up to concentrate on expanding your company. Find out more today!</p>
        </div>`
      },
      { 
        title: "Summary", 
        content: `<p>The Market Readiness Assistance (MRA) Grant is an invaluable resource for Singaporean SMEs looking to expand into international markets. By providing financial support for market research, market entry, and market promotion activities, the MRA Grant reduces the risks and costs associated with overseas expansion.</p>
        <p class="mt-3">For businesses seeking to leverage the MRA Grant, understanding the requirements and preparing a thorough application are crucial steps towards securing the funding needed for successful international expansion.</p>
        <p class="mt-3">At Growwth Partners, we are committed to supporting your business growth and helping you navigate the complexities of the MRA Grant application process. Speak to our experts and get guidance to handle your complex and taxing fundraising journey.</p>`
      },
      {
        title: "Book a Free Consultation",
        content: `<div class="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg">
          <div class="container mx-auto px-4">
            <div class="max-w-3xl mx-auto text-center">
              <h3 class="text-3xl font-bold mb-6">
                Book a free call with our expert to discuss your bookkeeping needs and save time and effort.
              </h3>
              
              <p class="text-xl mb-8">
                We are here to help you!
              </p>
              
              <button class="bg-white text-blue-700 hover:bg-gray-100 font-semibold text-lg px-8 py-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                Book a Free Call
              </button>
            </div>
          </div>
        </div>`
      }
    ],
    faqs: [
      { question: "How does the MRA Grant benefit SMEs?", answer: "For SMEs looking to expand internationally, the MRA Grant helps in reducing financial constraint and risk of entering new markets by covering 70% of all eligible costs." },
      { question: "What types of activities does the MRA Grant support?", answer: "Market set-up, market promotion, overseas business development, overseas marketing and PR activities among others are the types of expansion activities that can be funded through MRA Grant." },
      { question: "How does the MRA Grant compare to other grants?", answer: "Unlike other programs such as the Global Company Partnership (GCP) Grant, which covers a wider scope of internationalisation activities, including innovation and capability development, the MRA grant is specifically designed for SMEs focusing on market entry and promotion activities." },
      { question: "Can the MRA Grant be used for setting up overseas operations?", answer: "Yes, it can cater for sales or representative offices or equity entities established abroad." },
      { question: "What makes the MRA Grant unique?", answer: "It offers targeted assistance during early stages of venturing into foreign markets like conducting market research or doing business developments outside the country of origin, while most other grant programs concentrate more on long-term growth and innovation within the global entrepreneurship community." },
      { question: "Which types of businesses can apply for MRA Grant?", answer: "Only Singapore registered SMEs with annual sales turnover less than S$100m and employees fewer than 200 are eligible to apply for this grant." },
      { question: "Can a startup apply for the MRA Grant?", answer: "Yes, a startup can apply for the MRA Grant in Singapore. However, it must meet Enterprise Singapore's eligibility criteria." },
      { question: "Are there any industry restrictions for the MRA Grant?", answer: "No, the MRA grant is available to SMEs in all sectors as long as they want to expand globally." },
      { question: "Is there a limit to how many times a company can apply for the MRA Grant?", answer: "A company may make multiple applications covering different countries; however each new market entry is subject to a maximum total funding cap set at S$100,000 per application round." },
      { question: "What financial documents are required for the MRA Grant application?", answer: "To apply for the MRA Grant in Singapore, you would typically need the most recent financial statements showing annual sales turnover proof." },
      { question: "How to apply for an MRA Grant in Singapore?", answer: "Start by checking if your business meets eligibility criteria and collecting necessary documentation." },
      { question: "Where can I send my MRA Grant application?", answer: "The application for an MRA Grant must be submitted online via Business Grants Portal (BGP)." },
      { question: "What happens after I submit my MRA Grant application?", answer: "Enterprise Singapore will evaluate your MRA Grant application and get back to you. Additional information might be required from you at this stage." },
      { question: "How long does MRA Grant application evaluation take?", answer: "Depending on factors involved, evaluating an MRA Grant application usually takes a few weeks before applicants are informed." },
      { question: "Can I change the details after submitting an MRA Grant application?", answer: "To make changes in your MRA Grant application, contact Enterprise Singapore directly to communicate the required updates." }
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
