import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../cssPages/HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            Latest Tech Gadgets at Your Fingertips
          </h1>
          
          <p className="hero-description">
            Discover cutting-edge technology with unbeatable prices. From 
            smartphones to laptops, we have everything you need.
          </p>
          
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => navigate('/products')}>Shop Now</button>
            <button className="btn btn-secondary">View Details</button>
          </div>
        </div>
        
        {/* Right Content - Product Image */}
        <div className="hero-image">
          <div className="discount-badge">50% off</div>
          <div className="product-showcase">
            <img src="./src/assets/mouse.jpg" alt="Nice pic" width="500" height="390" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
