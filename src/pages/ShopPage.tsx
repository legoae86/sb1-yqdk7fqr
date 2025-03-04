import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Product } from '../types';

const ShopPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
  const [sortBy, setSortBy] = useState<string>('newest');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  
  // Get unique categories
  const categories = ['All', ...new Set(products.map(product => product.category))];
  
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategory && selectedCategory !== 'All') {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Sort products
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // Assuming newer products have higher IDs
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, sortBy]);
  
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light mb-4">Shop</h1>
          <p className="text-gray-400">Explore our collection of minimalist essentials.</p>
        </div>
        
        {/* Filters and Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <button 
            className="flex items-center space-x-2 md:hidden mb-4"
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          >
            <Filter size={18} />
            <span>Filter</span>
            <ChevronDown size={16} className={`transform transition-transform ${isMobileFilterOpen ? 'rotate-180' : ''}`} />
          </button>
          
          <div className={`w-full md:w-auto mb-4 md:mb-0 ${isMobileFilterOpen ? 'block' : 'hidden md:block'}`}>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category === 'All' ? null : category)}
                  className={`px-4 py-2 text-sm ${
                    (category === 'All' && !selectedCategory) || category === selectedCategory
                      ? 'bg-white text-black'
                      : 'bg-zinc-900 text-white hover:bg-zinc-800'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="w-full md:w-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-zinc-900 text-white px-4 py-2 w-full md:w-auto focus:outline-none"
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
        
        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-400">No products found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;