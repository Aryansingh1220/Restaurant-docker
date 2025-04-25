
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-restaurant-burgundy mb-6">404</h1>
        <p className="text-2xl md:text-3xl font-serif text-gray-700 mb-4">Page Not Found</p>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button 
          asChild
          className="bg-restaurant-burgundy hover:bg-restaurant-burgundy/90 text-white"
        >
          <Link to="/">Return to Homepage</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
