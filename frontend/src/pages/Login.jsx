import React, { useState } from 'react';
import '../cssPages/Login.css';

const Login = () => {
  const [email, setEmail] = useState('YourEmail@gmail.com');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    console.log('Login attempted with:', { email, password });
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <div className="logo">
          <div className="logo-icon">
            <span>T</span>
          </div>
          <div className="logo-text">
            <h1>Gadget Store</h1>
            <p>Find Your House</p>
          </div>
        </div>
      </div>

      <div className="login-form-container">
        <div className="login-form-wrapper">
          <h2>Login</h2>
          
          <div className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-input">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            <button onClick={handleSubmit} className="login-button">
              Log In
            </button>

            <div className="forgot-password">
              <a href="#forgot">Forgot?</a>
            </div>
          </div>

          <div className="signup-link">
            <span>Don't have account? </span>
            <a href="#create">Create now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;