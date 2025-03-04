import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-light mb-4">404</h1>
        <h2 className="text-2xl font-light mb-6">Page Not Found</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="inline-flex items-center space-x-2 btn">
          <ArrowLeft size={16} />
          <span>Back to Homepage</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;