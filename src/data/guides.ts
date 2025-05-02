
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
    Category: "Bookkeeping",
    Excerpt: "Master the fundamentals of bookkeeping with our comprehensive guide for small businesses.",
    Content: "Full guide content for bookkeeping practices",
    publishedAt: "2025-05-01",
    keyTakeaways: [
      { title: "Accurate Record-Keeping", description: "Learn proper techniques for maintaining accurate financial records." },
      { title: "Digital Tools", description: "Explore modern bookkeeping software to streamline your processes." },
      { title: "Tax Compliance", description: "Understand how good bookkeeping practices support tax compliance." },
      { title: "Financial Analysis", description: "Use bookkeeping data to make informed business decisions." },
      { title: "Error Prevention", description: "Implement checks and balances to prevent common bookkeeping errors." }
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
        title: "Bookkeeping Fundamentals", 
        content: `<p>Good bookkeeping starts with understanding these core principles:</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li><strong>Double-Entry Bookkeeping:</strong> Each transaction affects at least two accounts, maintaining the accounting equation.</li>
          <li><strong>Accrual vs. Cash Basis:</strong> Decide whether to record transactions when they occur or when cash changes hands.</li>
          <li><strong>Chart of Accounts:</strong> Establish a well-organized list of accounts tailored to your business.</li>
          <li><strong>Reconciliation:</strong> Regularly compare internal records with external statements to ensure accuracy.</li>
        </ul>`
      },
      { 
        title: "Best Practices for Small Businesses", 
        content: `<p>Small businesses should implement these bookkeeping practices:</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li><strong>Separate Business and Personal:</strong> Maintain dedicated business accounts and avoid commingling funds.</li>
          <li><strong>Regular Schedule:</strong> Set aside specific times for bookkeeping tasks to ensure consistency.</li>
          <li><strong>Document Everything:</strong> Keep receipts, invoices, and documentation for all transactions.</li>
          <li><strong>Use Technology:</strong> Leverage accounting software to automate repetitive tasks.</li>
          <li><strong>Back Up Data:</strong> Create regular backups of your financial information to prevent data loss.</li>
        </ul>`
      },
      { 
        title: "Common Bookkeeping Mistakes to Avoid", 
        content: `<p>Watch out for these frequent bookkeeping errors:</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li><strong>Delayed Recording:</strong> Letting transactions pile up leads to errors and incomplete records.</li>
          <li><strong>Missing Receipts:</strong> Without proper documentation, you risk tax compliance issues.</li>
          <li><strong>DIY Without Knowledge:</strong> Attempting complex bookkeeping without proper training can lead to costly mistakes.</li>
          <li><strong>No Regular Review:</strong> Failing to periodically review your books can allow errors to compound.</li>
          <li><strong>Improper Categorization:</strong> Incorrectly categorizing expenses affects financial reporting accuracy.</li>
        </ul>`
      }
    ],
    faqs: [
      { question: "How often should I update my books?", answer: "For small businesses, weekly updates are recommended. Larger operations may require daily bookkeeping." },
      { question: "Should I use cash or accrual accounting?", answer: "Accrual accounting provides a more accurate picture of your business finances, but cash-based may be simpler for very small businesses." },
      { question: "What's the difference between bookkeeping and accounting?", answer: "Bookkeeping focuses on recording financial transactions, while accounting involves analyzing, interpreting, and reporting that financial data." },
      { question: "Can I do my own bookkeeping?", answer: "Yes, with proper training and tools. However, as your business grows, a professional bookkeeper can save you time and reduce errors." }
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
