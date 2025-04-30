
import { useParams, Navigate } from "react-router-dom";
import { getGuideBySlug } from "@/data/guides";
import GuideDetail from "./GuideDetail";

const GuideSingle = () => {
  const { slug } = useParams<{ slug: string }>();
  const guide = getGuideBySlug(slug || "");
  
  // If no slug is provided or guide does not exist, redirect to guide listing
  if (!slug || !guide) {
    return <Navigate to="/guide" replace />;
  }

  // Images for key takeaways
  const keyTakeawayImages = [
    "/lovable-uploads/9e1ac171-5c61-4717-9652-6498cdb9e30e.png",
    "/lovable-uploads/a789441a-bd8a-4480-a2ce-1a8108aa187c.png",
    "/lovable-uploads/9f095a7e-c6a7-42c7-91f7-1392ee523a5e.png", 
    "/lovable-uploads/88257c1a-be18-4216-a182-5c9094b565b9.png",
    "/lovable-uploads/99dda4f2-b7f4-46c0-8ee6-1c166ae0e0a3.png"
  ];

  return <GuideDetail guide={guide} keyTakeawayImages={keyTakeawayImages} />;
};

export default GuideSingle;
