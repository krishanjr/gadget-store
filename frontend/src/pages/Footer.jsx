import React, { useState } from 'react';
import '../cssPages/Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribeEmail, setSubscribeEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const handleStayConnected = (e) => {
    e.preventDefault();
    // Handle stay connected subscription
    console.log('Stay connected subscription:', subscribeEmail);
    setSubscribeEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Newsletter Section */}
        <div className="newsletter-section">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter and be the first to know about new products, exclusive deals, and tech news.</p>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="email-input"
              required
            />
            <button type="submit" className="subscribe-btn">Subscribe</button>
          </form>
        </div>

        {/* Footer Links */}
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="company-info">
              <div className="logo">
                <span className="logo-icon">GS</span>
                <span className="logo-text">Gadget Store</span>
              </div>
              <p>Your trusted destination for the latest tech gadgets and electronics. Quality products, competitive prices, and exceptional service.</p>
              <div className="social-links">
                <a href="#" className="social-link">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">All Products</a></li>
              <li><a href="#">Phones</a></li>
              <li><a href="#">Laptops</a></li>
              <li><a href="#">Accessories</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="footer-section">
            <h3>Customer Service</h3>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Returns & Exchanges</a></li>
              <li><a href="#">Size Guide</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div className="footer-section">
            <h3>Stay Connected</h3>
            <p>Subscribe to get special offers, free giveaways, and updates.</p>
            <form className="stay-connected-form" onSubmit={handleStayConnected}>
              <input
                type="email"
                placeholder="Enter your email"
                value={subscribeEmail}
                onChange={(e) => setSubscribeEmail(e.target.value)}
                className="email-input-small"
                required
              />
              <button type="submit" className="subscribe-btn-small">Subscribe</button>
            </form>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>support@gadgetstore.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>1-800-GADGETS</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>123 Tech Street, Silicon Valley, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; 2024 Gadget Store. All rights reserved.</p>
          </div>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};  

export default Footer;