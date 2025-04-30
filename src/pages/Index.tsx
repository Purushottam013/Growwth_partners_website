
import React from 'react';
import { Navigate } from 'react-router-dom';

const Index = () => {
  // Redirect to the Home page which contains the proper content
  return <Navigate to="/" replace />;
};

export default Index;
