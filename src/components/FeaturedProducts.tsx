import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface FeaturedProductsProps {
  products: Product[];
  title: string;
  subtitle?: string;
  limit?: number;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ 
  products, 
  title, 
  subtitle,
  limit = 4
}) => {
  const displayProducts = products.slice(0, limit);
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light mb-4">{title}</h2>
          {subtitle && <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/shop" className="inline-flex items-center space-x-2 text-white hover:text-gray-300 transition-colors">
            <span>View All Products</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;