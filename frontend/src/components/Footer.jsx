import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 space-y-12">

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-700 text-white rounded-sm w-10 h-10 flex items-center justify-center font-bold text-lg">GS</div>
              <span className="text-xl font-bold">Gadget Store</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted destination for the latest tech gadgets and electronics. Quality products, competitive prices, and exceptional service.
            </p>
            <div className="flex space-x-4 text-gray-400">
              <a href="#" aria-label="Facebook" className="hover:text-white"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter" className="hover:text-white"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Instagram" className="hover:text-white"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="YouTube" className="hover:text-white"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/products" className="hover:text-white">All Products</Link></li>
              <li><Link to="/shop-categories?cat=phones" className="hover:text-white">Phones</Link></li>
              <li><Link to="/shop-categories?cat=laptops" className="hover:text-white">Laptops</Link></li>
              <li><Link to="/shop-categories?cat=accessories" className="hover:text-white">Accessories</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
        </div>
      </div>
    </footer>
  );
};

export default Footer;
