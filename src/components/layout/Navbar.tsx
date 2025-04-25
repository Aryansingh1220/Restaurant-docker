
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navLinks = [
    { text: 'Home', path: '/' },
    { text: 'Menu', path: '/menu' },
    { text: 'Reservations', path: '/reservations' },
    { text: 'Contact', path: '/contact' }
  ];
  
  // Check if scrolled
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
  
  // Close menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl md:text-3xl font-serif font-bold text-restaurant-burgundy">
          YumYum
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <Link 
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors hover:text-restaurant-burgundy ${
                location.pathname === link.path 
                  ? 'text-restaurant-burgundy' 
                  : isScrolled ? 'text-gray-800' : 'text-gray-800'
              }`}
            >
              {link.text}
            </Link>
          ))}
          <Button 
            asChild 
            className="bg-restaurant-burgundy hover:bg-restaurant-burgundy/90 text-white"
          >
            <Link to="/reservations">Reserve Now</Link>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-restaurant-burgundy"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 animate-fade-in">
          <div className="container-custom flex flex-col space-y-4">
            {navLinks.map(link => (
              <Link 
                key={link.path}
                to={link.path}
                className={`py-2 font-medium ${
                  location.pathname === link.path 
                    ? 'text-restaurant-burgundy' 
                    : 'text-gray-800'
                }`}
              >
                {link.text}
              </Link>
            ))}
            <Button 
              asChild 
              className="w-full bg-restaurant-burgundy hover:bg-restaurant-burgundy/90 text-white"
            >
              <Link to="/reservations">Reserve Now</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
