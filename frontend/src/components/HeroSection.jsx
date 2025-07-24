import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-24 bg-gradient-to-r from-blue-50 via-white to-blue-50 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4 md:px-0">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 animate-fadeInDown">
            Latest Tech Gadgets at Your Fingertips
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Discover cutting-edge technology with unbeatable prices. From smartphones to laptops, we have everything you need.
          </p>
          <div className="flex justify-center md:justify-start gap-6">
            <button 
              className="bg-blue-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-700 transition transform hover:scale-105 shadow-lg"
              onClick={() => navigate('/products')}
            >
              Shop Now
            </button>
          </div>
        </div>

        {/* Right Content - Product Image */}
        <div className="md:w-1/2 relative mt-10 md:mt-0 flex justify-center">
          <div className="absolute top-0 left-0 bg-red-600 text-white px-4 py-2 rounded-md font-bold text-sm shadow-lg animate-pulse">
            50% off
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500">
            <img 
              src="./src/assets/mouse.jpg" 
              alt="Nice pic" 
              width="500" 
              height="390" 
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
