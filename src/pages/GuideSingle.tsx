
import { useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { getGuideBySlug } from "@/data/guides";
import { useState, useEffect } from "react";
import { FaqSection } from "@/components/accounting/FaqSection";
import BookkeepingGuidePage from "@/components/guide/BookkeepingGuidePage";
import MRAGrantGuidePage from "@/components/guide/MRAGrantGuidePage";

const GuideSingle = () => {
  const { slug } = useParams();
  const [guide, setGuide] = useState<ReturnType<typeof getGuideBySlug>>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      // Simulate fetching data with a slight delay
      setLoading(true);
      setTimeout(() => {
        const foundGuide = getGuideBySlug(slug);
        setGuide(foundGuide);
        setLoading(false);
      }, 300);
    }
  }, [slug]);

  // Special handling for the bookkeeping guide to use the custom component
  if (slug === "comprehensive-guide-to-bookkeeping-practices") {
    return <BookkeepingGuidePage />;
  }

  // Special handling for the MRA grant guide to use the custom component
  if (slug === "comprehensive-guide-to-mra-grant-singapore") {
    return <MRAGrantGuidePage />;
  }

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!guide) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-4">Guide not found</h1>
          <p>The guide you're looking for doesn't exist.</p>
        </div>
      </Layout>
    );
  }

  // Create guide-specific FAQs based on the guide category
  const getFaqsForGuide = () => {
    switch (guide.Category) {
      case 'Fractional CFO':
        return [
          {
            question: "What is a Part-Time CFO?",
            answer: "A part-time (or fractional) CFO is an experienced financial executive who provides strategic financial guidance to companies on a part-time or project basis."
          },
          {
            question: "How much does a Part-Time CFO cost?",
            answer: "Part-time CFO costs vary based on experience, industry, and scope, but generally range from $1,500-$5,000 per month, significantly less than a full-time CFO."
          },
          {
            question: "When should I hire a Part-Time CFO?",
            answer: "Consider hiring a part-time CFO when experiencing rapid growth, preparing for funding, establishing financial systems, navigating challenges, or needing expert financial guidance without the cost of a full-time hire."
          }
        ];
      case 'Corporate Secretary':
        return [
          {
            question: "Is a Corporate Secretary mandatory in Singapore?",
            answer: "Yes, all companies incorporated in Singapore must appoint a company secretary within 6 months of incorporation, as required by the Companies Act."
          },
          {
            question: "What are the qualifications for a Corporate Secretary?",
            answer: "A corporate secretary must be a natural person residing in Singapore with the necessary knowledge and experience. For public companies, additional qualifications are required."
          },
          {
            question: "What happens if I don't appoint a Corporate Secretary?",
            answer: "Failure to appoint a qualified corporate secretary is a statutory breach that can result in penalties for the company and its directors."
          }
        ];
      case 'Accounting':
        return [
          {
            question: "What is the difference between bookkeeping and accounting?",
            answer: "Bookkeeping involves recording daily transactions, while accounting encompasses analyzing, interpreting, and summarizing financial data to make business decisions."
          },
          {
            question: "How often should financial statements be prepared?",
            answer: "Most businesses prepare financial statements monthly for internal use and quarterly or annually for external reporting and compliance purposes."
          },
          {
            question: "What accounting software is recommended for small businesses?",
            answer: "Popular options include Xero, QuickBooks, and FreshBooks, but the best choice depends on your specific business needs, industry, and scale of operations."
          }
        ];
      case 'Grants & Funding':
        return [
          {
            question: "What other grants are available for Singapore businesses?",
            answer: "Besides the MRA Grant, Singapore businesses can access the Enterprise Development Grant (EDG), Productivity Solutions Grant (PSG), and various sector-specific grants through Enterprise Singapore and other government agencies."
          },
          {
            question: "How long does it take to receive approval for the MRA Grant?",
            answer: "The evaluation process typically takes 4-6 weeks, though this timeline can vary depending on the complexity of your application and the current volume of submissions."
          },
          {
            question: "Can I apply for multiple grants simultaneously?",
            answer: "Yes, you can apply for multiple grants as long as you meet the eligibility criteria for each and the same expense item is not being funded by more than one grant program."
          }
        ];
      default:
        return [
          {
            question: "How can I implement these practices in my business?",
            answer: "Start by assessing your current processes, identifying gaps, and gradually implementing improvements. Consider consulting with professionals for tailored advice."
          },
          {
            question: "Are there industry-specific considerations I should be aware of?",
            answer: "Yes, different industries have unique requirements. It's advisable to research or consult with experts familiar with your specific industry's best practices and regulations."
          },
          {
            question: "How can Growwth Partners help with these services?",
            answer: "Growwth Partners offers comprehensive solutions tailored to your business needs, including expert guidance, implementation support, and ongoing management of these functions."
          }
        ];
    }
  };

  return (
    <Layout>
      <article className="container mx-auto px-4 py-8">
        <img
          src={guide.Image}
          alt={guide.Title}
          className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
        />
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{guide.Title}</h1>
          <div className="mb-8">
            <span className="px-3 py-1 text-sm font-medium text-brand-orange bg-brand-orange/10 rounded-full">
              {guide.Category}
            </span>
            {guide.publishedAt && (
              <span className="ml-4 text-gray-500">
                Published on {new Date(guide.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            )}
          </div>
          <div className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: guide.Content || '' }}
          />
        </div>
        
        {/* FAQ Section */}
        <div className="mt-16">
          <FaqSection faqs={getFaqsForGuide()} />
        </div>
      </article>
    </Layout>
  );
};

export default GuideSingle;
