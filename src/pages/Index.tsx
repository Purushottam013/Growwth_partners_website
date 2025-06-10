
import React from 'react';
import { Navigate } from 'react-router-dom';
import { SeoOptimizer } from "@/components/SeoOptimizer";

const Index = () => {
  return (
    <>
      <SeoOptimizer 
        title="Growwth Partners | Financial & Accounting Experts Singapore"
        description="Expert accounting, CFO, and financial services for SMEs and startups in Singapore. Unlock growth with award-winning advisors at Growwth Partners." 
        canonical={`https://growwthpartners.com/`}
      />
      {/* Redirect to the Home page which contains the proper content */}
      <Navigate to="/" replace />
    </>
  );
};

export default Index;
