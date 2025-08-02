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

// Admin Pages
import { AdminRoute, UserRoute } from "./components/ProtectedRoute";
import Dashboard from './pages/admin/dashboard'
import ManageOrders from './pages/admin/manageOrders'
import ManageUsers from './pages/admin/manageUser'
import ManageProducts from './pages/admin/manageProducts'
import ProductForm from './pages/admin/ProductForm'
import ManageMessages from './pages/admin/manageMessage'

function App() {
  const location = useLocation();

  return (
    <AuthProvider>
      <CartProvider>
        <div>
          {!location.pathname.startsWith('/admin') && !location.pathname.startsWith('/login') && !location.pathname.startsWith('/signup') && <Navbar />} 
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
            <Route
            path="/admin/*"
            element={
              <AdminRoute>
                <Dashboard />
              </AdminRoute>
            }
            />
            <Route
            path="/admin/manageOrders"
            element={
              <AdminRoute>
                <ManageOrders />
              </AdminRoute>
            }
            />
            <Route
            path="/admin/manageProducts"
            element={
              <AdminRoute>
                <ManageProducts />
              </AdminRoute>
            }
            />
            <Route
            path="/admin/manageUser"
            element={
              <AdminRoute>
                <ManageUsers />
              </AdminRoute>
            }
            />
            <Route
            path="/admin/productForm"
            element={
              <AdminRoute>
                <ProductForm />
              </AdminRoute>
            }
            />
            <Route
            path="/admin/messages"
            element={
              <AdminRoute>
                <ManageMessages />
              </AdminRoute>
            }
            />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/details" element={<ProductDetails />} />
            <Route path="/profile" element={<ManageProfile />} />
          </Routes>
          {!location.pathname.startsWith('/admin') && !location.pathname.startsWith('/login') && !location.pathname.startsWith('/signup') && <Footer />} 
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
