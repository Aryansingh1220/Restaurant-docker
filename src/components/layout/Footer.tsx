
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-restaurant-charcoal text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo and brief description */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <Link to="/" className="text-2xl font-serif font-bold text-restaurant-gold">
              YumYum
            </Link>
            <p className="mt-4 text-gray-300">
              Exquisite dining experience with a focus on seasonal ingredients and innovative culinary techniques.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-4 text-restaurant-gold">Contact Us</h3>
            <address className="not-italic">
              <p className="mb-2">123 Gourmet Avenue</p>
              <p className="mb-2">Culinary District</p>
              <p className="mb-2">Foodville, FC 12345</p>
              <p className="mb-2">Phone: (555) 123-4567</p>
              <p>Email: info@yumyum.com</p>
            </address>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-4 text-restaurant-gold">Opening Hours</h3>
            <ul>
              <li className="mb-2">Monday - Thursday: 11:00 AM - 10:00 PM</li>
              <li className="mb-2">Friday - Saturday: 11:00 AM - 11:00 PM</li>
              <li>Sunday: 10:00 AM - 9:00 PM</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-4 text-restaurant-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-restaurant-gold transition-colors">Home</Link></li>
              <li><Link to="/menu" className="hover:text-restaurant-gold transition-colors">Our Menu</Link></li>
              <li><Link to="/reservations" className="hover:text-restaurant-gold transition-colors">Reservations</Link></li>
              <li><Link to="/contact" className="hover:text-restaurant-gold transition-colors">Contact</Link></li>
              <li><Link to="#" className="hover:text-restaurant-gold transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-restaurant-gold transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} YumYum Restaurant. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-restaurant-gold transition-colors" aria-label="Facebook">Facebook</a>
            <a href="#" className="hover:text-restaurant-gold transition-colors" aria-label="Instagram">Instagram</a>
            <a href="#" className="hover:text-restaurant-gold transition-colors" aria-label="Twitter">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
