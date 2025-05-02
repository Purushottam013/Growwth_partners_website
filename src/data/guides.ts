
export interface Guide {
  id: number;
  Title: string;
  slug: string;
  Image: string;
  Category: string;
  Excerpt: string;
  Content: string;
  publishedAt?: string;
}

// Define guide content
export const guides: Guide[] = [
  {
    id: 1,
    Title: "The Most Comprehensive Guide to Pitching to Investors",
    slug: "pitching-to-investors-guide",
    Image: "/lovable-uploads/e724df8b-078f-4892-9a47-ab21bdd069b1.png", // Using the same guide banner image for now
    Category: "Corporate Secretary",
    Excerpt: "Learn how to effectively pitch to investors and secure funding for your business growth.",
    Content: "Full guide content for pitching to investors",
    publishedAt: "2025-04-15"
  },
  {
    id: 2,
    Title: "Guide to Financial Reporting Standards in Singapore for Small Entities",
    slug: "financial-reporting-standards-singapore",
    Image: "/lovable-uploads/e724df8b-078f-4892-9a47-ab21bdd069b1.png", // Using the same guide banner image for now
    Category: "Accounting",
    Excerpt: "Learn about the simplified accounting framework targeted at smaller entities in Singapore.",
    Content: "Full guide content for financial reporting standards",
    publishedAt: "2025-04-30"
  },
  {
    id: 3,
    Title: "A Comprehensive Guide to Bookkeeping Practices",
    slug: "comprehensive-bookkeeping-practices-guide",
    Image: "/lovable-uploads/e724df8b-078f-4892-9a47-ab21bdd069b1.png", // Using the same guide banner image for now
    Category: "Incorporation",
    Excerpt: "Master the basics of bookkeeping to ensure financial accuracy and compliance for your business.",
    Content: "Full guide content for bookkeeping practices",
    publishedAt: "2025-05-01"
  }
];

// Define available guide categories
export const guideCategories = [
  "Accounting", 
  "Corporate Secretary", 
  "HR & Payroll", 
  "Incorporation", 
  "Fractional CFO", 
  "Taxation & Compliance"
];

export const getGuidesByCategory = (category?: string): Guide[] => {
  if (!category) return guides;
  return guides.filter(guide => guide.Category === category);
};

export const getGuideBySlug = (slug: string): Guide | undefined => {
  return guides.find(guide => guide.slug === slug);
};
