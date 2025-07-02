import React from 'react';
import { Search, Heart, User, ShoppingCart } from 'lucide-react';
import '../cssPages/Navbar.css';

const Navigation = () => {
  return (
    <header className="navigation-header">
      <div className="nav-container">
        {/* Logo/Brand Name */}
        <div className="brand">
          <h1>Gadget Store</h1>
        </div>

        {/* Main Navigation Links */}
        <nav className="main-nav">
          <a href="#home" className="nav-link">Home</a>
          <a href="#products" className="nav-link">All Products</a>
          <a href="#categories" className="nav-link">Categories</a>
        </nav>

        {/* Search Bar */}
        <div className="search-container">
          <div className="search-box">
            <Search className="search-icon" size={20} />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="search-input"
            />
          </div>
        </div>

        {/* Action Icons */}
        <div className="action-icons">
          <button className="icon-button">
            <Heart size={20} />
          </button>
          <button className="icon-button">
            <User size={20} />
          </button>
          <button className="icon-button">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;