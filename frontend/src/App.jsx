import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from './components/NavBar';
import Footer from './components/Footer';
import AllProducts from './pages/userview/AllProducts';
import Cart from './pages/userview/Cart';
import Login from './pages/userview/Login';
import SignUp from './pages/userview/Signup';
import ForgotPassword from './pages/userview/ForgetPassword';
import AboutUs from './pages/userview/aboutUs';
import ContactPage from './pages/userview/contact';
import ProductDetails from './components/ProductDetails';
import HomePage from './pages/userview/home';
import ManageProfile from './pages/userview/manageProfile';
import ErrorBoundary from './components/ErrorBoundary';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

function App() {
  const location = useLocation();

  return (
    <AuthProvider>
      <CartProvider>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={
              <ErrorBoundary>
                <AllProducts />
              </ErrorBoundary>
            } />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={
              <ErrorBoundary>
                <Login />
              </ErrorBoundary>
            } />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/details" element={<ProductDetails />} />
            <Route path="/profile" element={<ManageProfile />} />
          </Routes>
          {!location.pathname.startsWith('/login') && !location.pathname.startsWith('/signup') && <Footer />} 
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
