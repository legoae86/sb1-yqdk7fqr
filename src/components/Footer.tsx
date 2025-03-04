import React from 'react';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-light mb-4">MONOCHROME</h3>
            <p className="text-gray-400 mb-4">
              Minimalist clothing for the modern individual. Quality essentials that stand the test of time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-gray-400 hover:text-white transition-colors">All Products</Link></li>
              <li><Link to="/shop?category=T-Shirts" className="text-gray-400 hover:text-white transition-colors">T-Shirts</Link></li>
              <li><Link to="/shop?category=Hoodies" className="text-gray-400 hover:text-white transition-colors">Hoodies</Link></li>
              <li><Link to="/shop?category=Pants" className="text-gray-400 hover:text-white transition-colors">Pants</Link></li>
              <li><Link to="/shop?category=Accessories" className="text-gray-400 hover:text-white transition-colors">Accessories</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/sustainability" className="text-gray-400 hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQs</Link></li>
              <li><Link to="/shipping" className="text-gray-400 hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/size-guide" className="text-gray-400 hover:text-white transition-colors">Size Guide</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} MONOCHROME. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" alt="Visa" className="h-6 w-auto opacity-50" />
              <img src="https://cdn-icons-png.flaticon.com/512/196/196561.png" alt="Mastercard" className="h-6 w-auto opacity-50" />
              <img src="https://cdn-icons-png.flaticon.com/512/196/196565.png" alt="PayPal" className="h-6 w-auto opacity-50" />
              <img src="https://cdn-icons-png.flaticon.com/512/196/196539.png" alt="American Express" className="h-6 w-auto opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;