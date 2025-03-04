import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="product-card group">
      <div className="relative overflow-hidden mb-4">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
        {product.isNew && (
          <div className="absolute top-2 left-2 bg-white text-black text-xs px-2 py-1">
            NEW
          </div>
        )}
        <button 
          onClick={() => addToCart(product)}
          className="absolute bottom-0 left-0 w-full bg-white text-black py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center space-x-2"
        >
          <ShoppingBag size={16} />
          <span>Add to Cart</span>
        </button>
      </div>
      <Link to={`/product/${product.id}`}>
        <h3 className="text-lg font-light mb-1">{product.name}</h3>
      </Link>
      <p className="text-gray-400 text-sm mb-2">{product.category}</p>
      <p className="font-medium">${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;