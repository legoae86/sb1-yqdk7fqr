import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link to="/" className="text-2xl font-light tracking-wider">
            MONOCHROME
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/shop" className="nav-link">Shop</Link>
            <Link to="/collections" className="nav-link">Collections</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-gray-300 transition-colors">
              <Search size={20} />
            </button>
            <Link to="/cart" className="text-white hover:text-gray-300 transition-colors relative">
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-black text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 absolute top-full left-0 w-full h-screen animate-fade-in">
          <nav className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
            <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/shop" className="nav-link" onClick={() => setIsMenuOpen(false)}>Shop</Link>
            <Link to="/collections" className="nav-link" onClick={() => setIsMenuOpen(false)}>Collections</Link>
            <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;