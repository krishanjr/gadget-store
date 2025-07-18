import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import NavBar from './pages/NavBar';
import HeroSection from './pages/HeroSection';
import ShopCategoriesPage from './pages/ShopCatagoryPage';
import Footer from './pages/Footer';
import Login from './pages/Login';
import ForgetPassword from './pages/ForgetPassword';
import AllProducts from './pages/AllProducts';
import Cart from './pages/Cart';
import { Home } from 'lucide-react';
import HomePage from './pages/home';
import SignUp from './pages/Signup';

function App() {
  const location = useLocation();

  return (
    <div>
      {/* <AllProducts/>
      <Login/> */}
      {/* <SignUp/> */}
      <NavBar/>

           <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />        <Route path="/products" element={<AllProducts />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/shop-categories" element={<ShopCategoriesPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {!location.pathname.startsWith('/login') && !location.pathname.startsWith('/signup') && <Footer />} 
    
    </div>
  );
}





export default App;
