
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

  return <GuideDetail />;
};

export default GuideSingle;
