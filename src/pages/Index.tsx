
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const Index = () => {
  // Log navigation for debugging purposes
  useEffect(() => {
    console.log('Index page loaded, redirecting to home');
  }, []);

  // Redirect to the Home page which contains the proper content
  return <Navigate to="/" replace />;
};

export default Index;
