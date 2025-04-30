
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

// Empty guides array - will be populated later when the feature is ready
export const guides: Guide[] = [];

export const getGuidesByCategory = (category?: string): Guide[] => {
  return guides;
};

export const getGuideBySlug = (slug: string): Guide | undefined => {
  return undefined;
};
