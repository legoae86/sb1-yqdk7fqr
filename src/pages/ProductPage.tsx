import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, Check } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import FeaturedProducts from '../components/FeaturedProducts';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  
  const product = products.find(p => p.id === Number(id));
  
  if (!product) {
    return (
      <div className="pt-24 pb-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl mb-4">Product not found</h1>
          <Link to="/shop" className="btn">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };
  
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Link to="/shop" className="inline-flex items-center space-x-2 text-gray-400 hover:text-white mb-8">
          <ArrowLeft size={16} />
          <span>Back to Shop</span>
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-zinc-900">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-light mb-2">{product.name}</h1>
            <p className="text-gray-400 mb-4">{product.category}</p>
            <p className="text-2xl mb-6">${product.price.toFixed(2)}</p>
            
            <div className="mb-6">
              <h3 className="text-sm uppercase tracking-wider mb-2">Description</h3>
              <p className="text-gray-400">
                This premium {product.name.toLowerCase()} is crafted from high-quality materials, 
                designed for both comfort and style. A versatile addition to any wardrobe, 
                perfect for everyday wear or special occasions.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-sm uppercase tracking-wider mb-2">Quantity</h3>
              <div className="flex items-center border border-zinc-700">
                <button 
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className="px-4 py-2 text-gray-400 hover:text-white"
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </button>
                <span className="px-4 py-2 border-l border-r border-zinc-700 min-w-[50px] text-center">
                  {quantity}
                </span>
                <button 
                  onClick={() => setQuantity(prev => prev + 1)}
                  className="px-4 py-2 text-gray-400 hover:text-white"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
            
            <button 
              onClick={handleAddToCart}
              className={`w-full py-3 mb-4 flex items-center justify-center space-x-2 transition-colors ${
                addedToCart 
                  ? 'bg-green-600 text-white' 
                  : 'bg-white text-black hover:bg-gray-200'
              }`}
            >
              {addedToCart ? (
                <>
                  <Check size={16} />
                  <span>Added to Cart</span>
                </>
              ) : (
                <span>Add to Cart</span>
              )}
            </button>
            
            <div className="border-t border-zinc-800 pt-6 mt-6">
              <div className="mb-4">
                <h3 className="text-sm uppercase tracking-wider mb-2">Details</h3>
                <ul className="text-gray-400 space-y-1">
                  <li>Premium quality materials</li>
                  <li>Ethically manufactured</li>
                  <li>Designed for comfort and durability</li>
                  <li>Easy care instructions</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm uppercase tracking-wider mb-2">Shipping & Returns</h3>
                <p className="text-gray-400">
                  Free shipping on orders over $100. Easy returns within 30 days.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-light mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(product => (
                <Link key={product.id} to={`/product/${product.id}`} className="product-card group">
                  <div className="relative overflow-hidden mb-4">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {product.isNew && (
                      <div className="absolute top-2 left-2 bg-white text-black text-xs px-2 py-1">
                        NEW
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-light mb-1">{product.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">{product.category}</p>
                  <p className="font-medium">${product.price.toFixed(2)}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;