import React from 'react';

const Featuredproduct = ({ product }) => {
  return (
    <div className="border rounded-lg shadow p-4 hover:shadow-lg transition">
      <img
        src={product.image || '/mouse.jpg'}
        alt={product.name}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
      <p className="text-blue-600 font-bold mt-2">${product.price}</p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        View Details
      </button>
    </div>
  );
};

export default Featuredproduct;
