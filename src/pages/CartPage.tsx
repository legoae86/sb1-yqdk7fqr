import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
  
  if (cart.length === 0) {
    return (
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center py-16">
            <ShoppingBag size={48} className="mx-auto mb-4 text-gray-400" />
            <h1 className="text-2xl font-light mb-4">Your cart is empty</h1>
            <p className="text-gray-400 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link to="/shop" className="btn">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-light mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="border-b border-zinc-800 pb-4 mb-4 hidden md:grid md:grid-cols-12 text-sm text-gray-400">
              <div className="md:col-span-6">Product</div>
              <div className="md:col-span-2 text-center">Price</div>
              <div className="md:col-span-2 text-center">Quantity</div>
              <div className="md:col-span-2 text-right">Total</div>
            </div>
            
            {cart.map(item => (
              <div key={item.id} className="border-b border-zinc-800 py-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-6 flex items-center space-x-4">
                  <Link to={`/product/${item.id}`} className="w-20 h-20 bg-zinc-900 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </Link>
                  <div>
                    <Link to={`/product/${item.id}`} className="hover:text-gray-300">
                      {item.name}
                    </Link>
                    <p className="text-sm text-gray-400">{item.category}</p>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-white text-sm flex items-center space-x-1 mt-2 md:hidden"
                    >
                      <Trash2 size={14} />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
                
                <div className="md:col-span-2 text-center">
                  <div className="md:hidden text-sm text-gray-400 mb-1">Price:</div>
                  ${item.price.toFixed(2)}
                </div>
                
                <div className="md:col-span-2 flex justify-center">
                  <div className="md:hidden text-sm text-gray-400 mb-1">Quantity:</div>
                  <div className="flex items-center border border-zinc-700">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 text-gray-400 hover:text-white"
                    >
                      -
                    </button>
                    <span className="px-2 py-1 border-l border-r border-zinc-700 min-w-[40px] text-center">
                      {item.quantity}
                    </span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 text-gray-400 hover:text-white"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="md:col-span-2 text-right flex justify-between md:justify-end items-center">
                  <div className="md:hidden text-sm text-gray-400">Total:</div>
                  <div className="flex items-center space-x-4">
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-white hidden md:block"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="mt-8">
              <Link to="/shop" className="inline-flex items-center space-x-2 text-gray-400 hover:text-white">
                <ArrowLeft size={16} />
                <span>Continue Shopping</span>
              </Link>
            </div>
          </div>
          
          <div className="bg-zinc-900 p-6">
            <h2 className="text-xl font-light mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-400">Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Shipping</span>
                <span>Calculated at checkout</span>
              </div>
            </div>
            
            <div className="border-t border-zinc-800 pt-4 mb-6">
              <div className="flex justify-between text-lg">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            
            <button className="w-full py-3 bg-white text-black hover:bg-gray-200 transition-colors mb-4">
              Proceed to Checkout
            </button>
            
            <div className="text-sm text-gray-400 text-center">
              <p>Secure checkout powered by Stripe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;