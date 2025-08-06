import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const FloatingDemoPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check if we're on the homepage

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleDemoClick = () => {
    window.open(
      "https://ryzup.ai/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="fixed bottom-2 right-0 md:bottom-4 md:right-0 z-50"
      role="dialog"
      aria-label="Schedule demo popup"
    >
      <div className="relative group">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-1 right-1 bg-white rounded-full p-1.5 shadow-lg hover:bg-gray-100 transition-colors z-10 border border-gray-200"
          aria-label="Close demo popup"
        >
          <X size={14} className="text-gray-600" />
        </button>

        {/* Main popup content */}
        <div onClick={handleDemoClick} className="cursor-pointer">
          <img
            src="/lovable-uploads/Ryzup_Sheets.jpeg"
            alt="RyzUp Sheets - Your Personal Analyst Ready to Transform Your Business Workflows? Get a Free Demo"
            className="w-[280px] h-[300px] rounded-lg shadow-lg border border-gray-200 max-w-none"
            loading="lazy"
          />
        </div>

        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
      </div>
    </div>
  );
};

export default FloatingDemoPopup;
