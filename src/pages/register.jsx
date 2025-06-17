
import '../cssfolders/register.css'; 
import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration data:', formData);
    // Handle registration logic here
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">
          <span className="logo-icon">🔵</span>
          <span className="logo-text">Hamro Gadget</span>
        </div>
        
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search for anything" 
            className="search-input"
          />
          <button className="search-button">🔍</button>
        </div>
        
        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </header>

      <nav className="navigation">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">Gadget</a>
        <a href="#" className="nav-link">Shop</a>
        <a href="#" className="nav-link active">Contact</a>
      </nav>

      <main className="main-content">
        <div className="register-container">
          <h1 className="register-title">Register</h1>
          
          <div className="register-form-wrapper">
            <h2 className="form-subtitle">Registered Customers</h2>
            <p className="form-description">
              If you have an account, sign in with your email address.
            </p>
            
            <div className="register-form">
              <div className="form-group">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <button onClick={handleSubmit} className="submit-btn">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegistrationForm;