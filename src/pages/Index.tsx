
import React from 'react';
import { Navigate } from 'react-router-dom';
import { Seo } from "@/components/Seo";

const Index = () => {
  return (
    <>
      <Seo 
        title="Growwth Partners | Award-Winning Financial & Accounting Experts Singapore"
        description="Transform your business with expert accounting, CFO, and financial advisory services in Singapore. Award-winning team helping SMEs and startups achieve sustainable growth since 2020." 
        canonical={`${window.location.origin}/`}
      />
      {/* Redirect to the Home page which contains the proper content */}
      <Navigate to="/" replace />
    </>
  );
};

export default Index;
