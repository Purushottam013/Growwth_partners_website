
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getGuideBySlug } from "@/data/guides";
import GuideDetail from "./GuideDetail";

const GuideSingle = () => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  const guide = getGuideBySlug(slug || "");
  
  // If no slug is provided or guide does not exist, redirect to guide listing
  if (!slug || !guide) {
    return <Navigate to="/guide" replace />;
  }

  // Images for key takeaways - updated with new uploaded images
  const keyTakeawayImages = [
    "/lovable-uploads/eada7e0d-02d0-4ab8-84f0-be181df1f606.png", // Business Needs
    "/lovable-uploads/78de0c98-849c-433a-8091-906cc975db44.png", // Different Investors
    "/lovable-uploads/a0163cd7-4dda-4a9b-b88a-6ce847f553d9.png", // Create an Engaging Pitch Deck
    "/lovable-uploads/676d8878-101f-4447-8aca-a029fd75c735.png", // Perfect Your Elevator Pitch
    "/lovable-uploads/c68f7426-d276-476e-b69f-7d01150ca25e.png"  // Navigate Investor Networks
  ];

  const handleContactClick = () => {
    navigate("/contact#consultation-form");
  };

  return <GuideDetail guide={guide} keyTakeawayImages={keyTakeawayImages} onContactClick={handleContactClick} />;
};

export default GuideSingle;
