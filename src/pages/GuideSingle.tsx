
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getGuideBySlug } from "@/data/guides";
import GuideDetail from "./GuideDetail";

const GuideSingle = () => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  
  // If no slug is provided, redirect to guide listing
  if (!slug) {
    return <Navigate to="/guide" replace />;
  }
  
  const guide = getGuideBySlug(slug);
  
  // If guide does not exist, redirect to guide listing
  if (!guide) {
    return <Navigate to="/guide" replace />;
  }

  // Key takeaway images specific to each guide
  let keyTakeawayImages: string[] = [];
  let keyTakeaways = [];
  let sections = [];
  let faqs = [];
  
  // Set content based on guide slug
  if (slug === "pitching-to-investors-guide") {
    // Images for key takeaways - updated with new uploaded images for investor pitch guide
    keyTakeawayImages = [
      "/lovable-uploads/ff64989c-dab9-4050-814e-d90bca79f42b.png", // Business Needs
      "/lovable-uploads/15e6b360-d5dd-4d93-8dd8-86e3b6815a2c.png", // Different Investors
      "/lovable-uploads/ff10cb0e-544a-4e37-b61b-8e4174ede681.png", // Create an Engaging Pitch Deck
      "/lovable-uploads/29d7a505-65ef-443d-bc30-78185338c79b.png", // Perfect Your Elevator Pitch
      "/lovable-uploads/7950ef2b-fec5-470f-8003-13b293af4b08.png"  // Growth Orientation
    ];
    
    // Investor pitch guide content
    keyTakeaways = [
      { title: "Understand Your Business Needs", description: "Clearly define what you're seeking from investors beyond just money." },
      { title: "Research Different Investors", description: "Target investors who specialize in your industry and stage of business." },
      { title: "Create an Engaging Pitch Deck", description: "Develop a concise presentation that tells your business story with compelling data." },
      { title: "Perfect Your Elevator Pitch", description: "Craft a 30-second summary that captures the essence of your business opportunity." },
      { title: "Show Growth Orientation", description: "Demonstrate how you'll use investment to scale and provide returns." }
    ];
    
    sections = [
      { title: "Understanding Investor Expectations", content: `<p>Before approaching investors, it's critical to understand what they're looking for:</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li><strong>Return on Investment:</strong> Investors expect significant returns, typically 10-20x for early-stage investments.</li>
          <li><strong>Clear Exit Strategy:</strong> They want to know how they'll eventually liquidate their investment.</li>
          <li><strong>Scalable Business Model:</strong> Your business should demonstrate potential for rapid growth.</li>
          <li><strong>Strong Team:</strong> Investors often say they invest in people first, ideas second.</li>
        </ul>` },
      { title: "Crafting Your Pitch", content: `<p>Your pitch should be tailored to your audience and cover these essential elements:</p>
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
        </ul>` },
      { title: "Approaching Different Types of Investors", content: `<p>Different funding sources have distinct expectations and processes:</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li><strong>Angel Investors:</strong> Individual investors often focused on early-stage startups. They typically invest $25K-$100K and can make decisions quickly.</li>
          <li><strong>Venture Capital:</strong> Institutional investors who manage funds and typically invest in startups with high growth potential. Their process is more formal and can take 3-6 months.</li>
          <li><strong>Strategic Investors:</strong> Companies that invest for both financial returns and strategic advantages. They look for synergies with their existing business.</li>
          <li><strong>Family Offices:</strong> Private wealth management firms that can often take a longer-term view than traditional VCs.</li>
        </ul>` }
    ];
    
    faqs = [
      { question: "How much equity should I expect to give up in my first fundraising round?", answer: "Typically, startups give up between 15-25% equity in their seed round, but this varies based on valuation, industry, and growth stage." },
      { question: "Should I approach multiple investors simultaneously?", answer: "Yes, creating a sense of competition can enhance your negotiating position, but be transparent about this with potential investors." },
      { question: "What's the ideal length for a pitch deck?", answer: "Aim for 10-15 slides that can be presented in under 20 minutes, allowing time for questions." },
      { question: "How do I value my startup when I have limited revenue?", answer: "Early-stage valuations typically consider team experience, market size, IP, traction metrics, competitive landscape, and comparable company valuations." }
    ];
  } else if (slug === "financial-reporting-standards-singapore") {
    // Default to financial reporting guide content
    keyTakeawayImages = [
      "/lovable-uploads/ff64989c-dab9-4050-814e-d90bca79f42b.png", // Using placeholder images
      "/lovable-uploads/15e6b360-d5dd-4d93-8dd8-86e3b6815a2c.png",
      "/lovable-uploads/ff10cb0e-544a-4e37-b61b-8e4174ede681.png",
      "/lovable-uploads/29d7a505-65ef-443d-bc30-78185338c79b.png",
      "/lovable-uploads/7950ef2b-fec5-470f-8003-13b293af4b08.png"
    ];
    
    keyTakeaways = [
      { title: "Growth Orientation", description: "FRS for Small Entities focuses on essential reporting areas to support business growth." },
      { title: "Simplified Reporting", description: "Less complex disclosure requirements make financial reporting more manageable." },
      { title: "Cost Efficiency", description: "Reduced reporting burden leads to lower compliance costs and resource savings." },
      { title: "Compliance and Transparency", description: "Maintains adherence to accounting principles while ensuring clarity." },
      { title: "Business Decision Support", description: "Provides a framework for informed decisions based on accurate financial data." }
    ];
    
    sections = [
      { title: "Who Can Apply FRS for Small Entities?", content: `<p>The FRS for Small Entities is designed for businesses that meet specific criteria. To qualify, an entity must:</p>
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
        </ul>` },
      { title: "Key Differences from Full FRS", content: `<p>The FRS for Small Entities differs from the full FRS framework in several important ways:</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li><strong>Simplified Recognition and Measurement:</strong> Less complex approaches to financial instruments, goodwill amortization, and research and development costs.</li>
          <li><strong>Reduced Disclosures:</strong> Fewer required notes and explanations in financial statements.</li>
          <li><strong>Eliminated Topics:</strong> Certain complex areas like share-based payments, intermediate reporting, and earnings per share are not required.</li>
        </ul>` },
      { title: "Implementation Considerations", content: `<p>Transitioning to FRS for Small Entities requires careful planning:</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li><strong>Initial Assessment:</strong> Evaluate if your business meets the qualifying criteria.</li>
          <li><strong>Impact Analysis:</strong> Determine how the transition will affect your financial statements.</li>
          <li><strong>System Updates:</strong> Adjust accounting systems and processes as needed.</li>
          <li><strong>Staff Training:</strong> Ensure your team understands the new requirements.</li>
          <li><strong>Communication:</strong> Inform stakeholders about the changes in financial reporting.</li>
        </ul>` }
    ];
    
    faqs = [
      { question: "Is FRS for Small Entities mandatory for qualifying businesses?", answer: "No, it's optional. Qualifying businesses can choose between FRS for Small Entities or full FRS." },
      { question: "Can a business switch back to full FRS after adopting FRS for Small Entities?", answer: "Yes, but the change must be justified and properly documented, with retrospective application." },
      { question: "How frequently is FRS for Small Entities updated?", answer: "It's typically updated every few years, rather than the more frequent updates to full FRS." },
      { question: "Does using FRS for Small Entities affect tax calculations?", answer: "Not generally, as Singapore tax calculations have their own rules, but some simplifications may affect certain tax computations." }
    ];
  }

  const handleContactClick = () => {
    // Navigate to contact page and scroll to consultation form
    navigate("/contact");
    
    // Use setTimeout to ensure navigation completes before trying to scroll
    setTimeout(() => {
      const consultationForm = document.getElementById("consultation-form");
      if (consultationForm) {
        consultationForm.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  // Pass proper content for the specific guide
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
