
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

  // Images for key takeaways - updated with new uploaded images for investor pitch guide
  const keyTakeawayImages = [
    "/lovable-uploads/ff64989c-dab9-4050-814e-d90bca79f42b.png", // Business Needs
    "/lovable-uploads/15e6b360-d5dd-4d93-8dd8-86e3b6815a2c.png", // Different Investors
    "/lovable-uploads/ff10cb0e-544a-4e37-b61b-8e4174ede681.png", // Create an Engaging Pitch Deck
    "/lovable-uploads/29d7a505-65ef-443d-bc30-78185338c79b.png", // Perfect Your Elevator Pitch
    "/lovable-uploads/7950ef2b-fec5-470f-8003-13b293af4b08.png"  // Growth Orientation
  ];

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

  return <GuideDetail guide={guide} keyTakeawayImages={keyTakeawayImages} onContactClick={handleContactClick} />;
};

export default GuideSingle;
