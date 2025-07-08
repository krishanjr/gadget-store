import React, { useState } from 'react';
import { Search, Heart, User, ShoppingCart, Menu, X } from 'lucide-react';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        {/* Brand */}
        <button 
          className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
          onClick={() => setCurrentPage('home')}
        >
          Gadget Store
        </button>

        {/* Navigation Links - Desktop */}
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <button
              className={`font-medium transition-colors ${
                currentPage === 'home' 
                  ? 'text-blue-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setCurrentPage('home')}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className={`font-medium transition-colors ${
                currentPage === 'products' 
                  ? 'text-blue-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setCurrentPage('products')}
            >
              All Products
            </button>
          </li>
          <li>
            <button
              className={`font-medium transition-colors ${
                currentPage === 'categories' 
                  ? 'text-blue-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setCurrentPage('categories')}
            >
              Categories
            </button>
          </li>
        </ul>

        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            className="w-full px-4 py-2 pr-10 border-2 border-gray-200 rounded-full text-sm focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSearch(e);
              }
            }}
          />
          <Search 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600" 
            size={18}
            onClick={handleSearch}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">
            <Heart size={20} />
          </button>
          <button 
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setCurrentPage('login')}
          >
            <User size={20} />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">
            <ShoppingCart size={20} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg md:hidden">
            <div className="px-4 py-2 space-y-2">
              <button
                className="block w-full text-left py-3 text-gray-600 hover:text-gray-900 border-b border-gray-100"
                onClick={() => {
                  setCurrentPage('home');
                  setIsMenuOpen(false);
                }}
              >
                Home
              </button>
              <button
                className="block w-full text-left py-3 text-gray-600 hover:text-gray-900 border-b border-gray-100"
                onClick={() => {
                  setCurrentPage('products');
                  setIsMenuOpen(false);
                }}
              >
                All Products
              </button>
              <button
                className="block w-full text-left py-3 text-gray-600 hover:text-gray-900"
                onClick={() => {
                  setCurrentPage('categories');
                  setIsMenuOpen(false);
                }}
              >
                Categories
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;