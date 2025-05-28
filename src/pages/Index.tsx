
import React from 'react';
import { Navigate } from 'react-router-dom';
import { Seo } from "@/components/Seo";

const Index = () => {
  return (
    <>
      <Seo 
        title="Growwth Partners | Financial & Accounting Experts Singapore"
        description="Expert accounting, CFO, and financial services for SMEs and startups in Singapore. Unlock growth with award-winning advisors at Growwth Partners." 
        canonical={`${window.location.origin}/`}
      />
      {/* Redirect to the Home page which contains the proper content */}
      <Navigate to="/" replace />
    </>
  );
};

export default Index;
