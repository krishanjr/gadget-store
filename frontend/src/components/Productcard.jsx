import React from 'react';
import { useNavigate } from 'react-router-dom';

const Productcard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/productdetails', { state: { product } });
  };

  return (
    <div className="border rounded-lg shadow p-4 transition">
      <img
        src={product.image || '/mouse.jpg'}
        alt={product.name}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
      <p className="text-blue-600 font-bold mt-1">${product.price}</p>
      <button
        onClick={handleClick}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        View Details
      </button>
    </div>
  );
};

export default Productcard;
