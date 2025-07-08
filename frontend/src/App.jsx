// import React from 'react';
// import Navbar from './pages/Navbar';
// import HeroSection from './pages/HeroSection';
// import ShopCategoriesPage from './pages/ShopCatagoryPage';
// import Footer from './pages/Footer';
import {Routes, Route} from "react-router-dom";
import Register from './pages/Register';
import Navbar from './pages/Navbar';

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      
    </div>
  );
}

export default App;
