import React from 'react';

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-8">
      <h1 className="text-5xl font-bold mb-6">Welcome to Gadget Store</h1>
      <p className="text-xl max-w-3xl text-center mb-8">
        Discover the latest and greatest tech gadgets at unbeatable prices.
        Shop now and experience quality and innovation like never before.
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition">
        Shop Now
      </button>
    </div>
  );
};

export default Landing;
