
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
