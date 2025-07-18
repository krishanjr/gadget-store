import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, User, ShoppingCart } from 'lucide-react';
import '../cssPages/NavBar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    // Placeholder logout logic, can be replaced with actual logout
    setDropdownOpen(false);
    navigate('/login');
  };

  const handleProfile = () => {
    setDropdownOpen(false);
    navigate('/profile');
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="navbar-logo">
            <h1>Gadget Store</h1>
          </div>

          {/* Navigation Links */}
          <div className="navbar-nav">
            <div className="navbar-links">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/products" className="nav-link">All Products</Link>
              <Link to="/categories" className="nav-link">Categories</Link>
            </div>
          </div>

          {/* Search Bar */}
          <div className="navbar-search">
            <div className="search-container">
              <div className="search-icon">
                <Search size={20} />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                className="search-input"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="navbar-actions" ref={dropdownRef}>
            <button className="action-btn" onClick={toggleDropdown}>
              <User size={20} />
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <button className="dropdown-item" onClick={handleProfile}>User Profile</button>
                <button className="dropdown-item" onClick={handleLogout}>Logout</button>
              </div>
            )}
            <button className="action-btn" onClick={() => navigate('/cart')}>
              <ShoppingCart size={20} />
            </button>
            <Link to="/login">
            <button className="login-btn">Login</button>
            </Link>
            <Link to="/Signup">
            <button className="signup-btn">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="mobile-menu">
        <div className="mobile-menu-content">
          <Link to="/" className="mobile-nav-link">Home</Link>
          <Link to="/products" className="mobile-nav-link">All Products</Link>
          <Link to="/categories" className="mobile-nav-link">Categories</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
