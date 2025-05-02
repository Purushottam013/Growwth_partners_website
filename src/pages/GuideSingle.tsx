
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getGuideBySlug } from "@/data/guides";
import GuideDetail from "./GuideDetail";
import { useEffect } from "react";

const GuideSingle = () => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  
  // If no slug is provided, redirect to guide listing
  if (!slug) {
    return <Navigate to="/guide" replace />;
  }
  
  const guide = getGuideBySlug(slug);
  
  // If guide does not exist, redirect to guide listing with error
  if (!guide) {
    console.error(`Guide not found for slug: ${slug}`);
    return <Navigate to="/guide" replace />;
  }

  const handleContactClick = () => {
    // Navigate to contact page and scroll to consultation form
    navigate("/contact#consultation-form");
    
    // Use setTimeout to ensure navigation completes before trying to scroll
    setTimeout(() => {
      const consultationForm = document.getElementById("consultation-form");
      if (consultationForm) {
        consultationForm.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  // Pass the guide data directly to GuideDetail
  return <GuideDetail guide={guide} onContactClick={handleContactClick} />;
};

export default GuideSingle;
