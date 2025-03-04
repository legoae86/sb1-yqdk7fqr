import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const collections = [
  {
    id: 1,
    name: 'Summer Essentials',
    description: 'Lightweight, breathable pieces for the warmer months.',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Monochrome Basics',
    description: 'Timeless black and white pieces for a minimalist wardrobe.',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Urban Outerwear',
    description: 'Stylish and functional outerwear for city living.',
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Workwear Edit',
    description: 'Elevated essentials for the modern professional.',
    image: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

const CollectionsPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light mb-4">Collections</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our curated collections, each designed with a specific aesthetic and purpose in mind.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map(collection => (
            <div key={collection.id} className="group relative h-[500px] overflow-hidden">
              <img 
                src={collection.image} 
                alt={collection.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-8">
                <h2 className="text-2xl font-light mb-2">{collection.name}</h2>
                <p className="text-gray-300 mb-4">{collection.description}</p>
                <Link 
                  to={`/shop?collection=${collection.id}`} 
                  className="inline-flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
                >
                  <span>Explore Collection</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <div className="relative h-[400px] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
              alt="Limited Edition" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-8">
              <h2 className="text-3xl font-light mb-4">Limited Edition Collection</h2>
              <p className="text-gray-300 max-w-2xl mb-6">
                Exclusive pieces available for a limited time only. Designed with premium materials and unique details.
              </p>
              <button className="btn">Coming Soon</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionsPage;