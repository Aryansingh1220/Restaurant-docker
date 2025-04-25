
import React from 'react';
import { Navigate } from 'react-router-dom';

// This file is just a redirect to the HomePage
const Index = () => {
  return <Navigate to="/" replace />;
};

export default Index;
