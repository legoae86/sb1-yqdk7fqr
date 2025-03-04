import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1483118714900-540cf339fd46?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-light mb-4 tracking-wider">MINIMALIST ESSENTIALS</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
          Timeless pieces designed for the modern individual. Quality over quantity.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/shop" className="btn flex items-center justify-center space-x-2">
            <span>Shop Collection</span>
            <ArrowRight size={16} />
          </Link>
          <Link to="/about" className="btn border-gray-500 text-gray-300 hover:bg-gray-800 hover:border-gray-800 hover:text-white">
            Our Story
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;