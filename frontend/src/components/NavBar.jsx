import React, { useState, useEffect, useContext } from 'react';
import { Search, User, ShoppingCart, Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const navigate = useNavigate();
  const cartItems = useCart();
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleCategories = () => setIsCategoriesOpen(!isCategoriesOpen);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50' 
        : 'bg-gradient-to-r from-white via-blue-50/30 to-white shadow-sm border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-18">
        
        {/* Logo with enhanced styling */}
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => navigate('/')}>
          <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
            <Sparkles size={20} className="text-white" />
          </div>
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent tracking-tight">
            Gadget<span className="text-gray-800">Hub</span>
          </div>
        </div>

        {/* Desktop Navigation with enhanced hover effects */}
        <nav className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">
          {['Home', 'Products', 'About', 'Contact'].map((item) => {
            const path = item === 'Home' ? '/' : item === 'Products' ? '/products' : item === 'About' ? '/about-us' : '/contact';
            return (
              <button
                key={item}
                onClick={() => {
                  navigate(path);
                }}
                className="relative py-2 px-1 hover:text-blue-600 transition-colors duration-300 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            );
          })}
          
          {/* Removed Categories dropdown from NavBar */}
        </nav>

        {/* Enhanced Search Bar */}
        <div className="hidden md:block flex-1 max-w-md mx-8">
          <form onSubmit={handleSearchSubmit} className="relative">
            <div className={`relative transition-all duration-300 ${
              searchFocused ? 'transform scale-105' : ''
            }`}>
              <Search size={18} className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                searchFocused ? 'text-blue-500' : 'text-gray-400'
              }`} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                placeholder="Search for amazing products..."
                className={`w-full pl-12 pr-4 py-3 bg-white border-2 rounded-2xl text-sm transition-all duration-300 shadow-sm hover:shadow-md ${
                  searchFocused 
                    ? 'border-blue-500 ring-4 ring-blue-100 outline-none' 
                    : 'border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none'
                }`}
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X size={14} className="text-gray-400" />
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Desktop Actions with enhanced styling */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="relative">
            <button 
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
              className="p-3 rounded-2xl hover:bg-blue-50 transition-all duration-300 group hover:shadow-md flex items-center gap-1"
            >
              <User size={20} className="text-gray-600 group-hover:text-blue-600 transition-colors" />
              <ChevronDown size={16} className={`transition-transform duration-300 ${isProfileDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg z-50">
                <button
                  onClick={() => {
                    navigate('/profile');
                    setIsProfileDropdownOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-blue-100"
                >
                  Manage Profile
                </button>
                <button
                  onClick={() => {
                logout();
                setIsProfileDropdownOpen(false);
                navigate('/login');
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-blue-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
          
          <button 
            onClick={() => navigate('/cart')}
            className="relative p-3 rounded-2xl hover:bg-blue-50 transition-all duration-300 group hover:shadow-md"
          >
            <ShoppingCart size={20} className="text-gray-600 group-hover:text-blue-600 transition-colors" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full text-xs text-white font-bold flex items-center justify-center animate-pulse">
              {cartItems.length} 5
            </span>
          </button>
          
          <div className="w-px h-6 bg-gray-300 mx-2"></div>
          
          {!user && (
            <>
              <button 
                onClick={() => navigate('/login')}
                className="px-4 py-2 mr-4 text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                Login
              </button>
              
              <button 
                onClick={() => navigate('/signup')}
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 font-medium"
              >
                Sign Up
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={toggleMobileMenu} 
          className="lg:hidden p-3 rounded-2xl hover:bg-blue-50 transition-all duration-300 group"
        >
          <div className="relative w-6 h-6">
            <Menu size={24} className={`absolute inset-0 text-gray-700 group-hover:text-blue-600 transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
            }`} />
            <X size={24} className={`absolute inset-0 text-gray-700 group-hover:text-blue-600 transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
            }`} />
          </div>
        </button>
      </div>

      {/* Enhanced Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200/50 px-6 py-6 shadow-xl">
          
          {/* Mobile Search */}
          <div className="mb-6">
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearchSubmit(e)}
                placeholder="Search products..."
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-300"
              />
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex flex-col gap-1 mb-6">
            {['Home', 'Products', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  toggleMobileMenu();
                  const path = item === 'Home' ? '/' : item === 'Products' ? '/products' : item === 'About' ? '/about-us' : '/contact';
                  navigate(path);
                }}
                className="text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-300 font-medium"
              >
                {item}
              </button>
            ))}
          <button
              onClick={() => { toggleCategories(); toggleMobileMenu(); }}
              className="text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-300 font-medium flex items-center justify-between"
            >
              Categories
              <ChevronDown size={16} />
            </button>
            {isCategoriesOpen && (
              <div className="mt-2 ml-4 text-gray-600 font-medium">
                {/* Placeholder for categories dropdown items */}
                <button className="block px-4 py-2 hover:bg-blue-50 rounded">Category 1</button>
                <button className="block px-4 py-2 hover:bg-blue-50 rounded">Category 2</button>
                <button className="block px-4 py-2 hover:bg-blue-50 rounded">Category 3</button>
              </div>
            )}
          </nav>

          {/* Mobile Actions */}
          <div className="border-t border-gray-200 pt-6 flex flex-col gap-3">
            { !user ? (
              <>
                <button 
                  onClick={toggleMobileMenu}
                  className="flex-1 px-4 py-3 text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium border border-gray-200 rounded-xl hover:border-blue-300"
                >
                  Login
                </button>
                <button 
                  onClick={toggleMobileMenu}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md font-medium"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={() => { toggleMobileMenu(); navigate('/profile'); }}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-300"
                >
                  <User size={18} /> Profile
                </button>
                <button 
                  onClick={() => { toggleMobileMenu(); navigate('/cart'); }}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-300"
                >
                  <ShoppingCart size={18} /> Cart (3)
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
