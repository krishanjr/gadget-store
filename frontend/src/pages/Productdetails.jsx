import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  if (!product) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Product not found</h2>
          <button
            onClick={() => navigate('/products')}
            className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Back to Shop
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="md:w-1/2">
          <img
            src={product.image || './src/assets/mouse.jpg'}
            alt={product.name}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">{product.description || 'No description available.'}</p>
          <p className="text-2xl font-semibold text-blue-600 mb-6">{product.price}</p>

          {/* Additional Features */}
          <ul className="mb-6 list-disc list-inside text-gray-700">
            <li>High quality and durable</li>
            <li>Classic design with modern features</li>
            <li>1 year warranty included</li>
            <li>Free shipping and returns</li>
          </ul>

          <div className="flex gap-4">
            <button
              onClick={() => navigate('/cart')}
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Buy Now
            </button>
            <button
              onClick={() => navigate('/products')}
              className="border border-gray-300 px-6 py-3 rounded-md font-semibold text-gray-700 hover:bg-gray-100 transition"
            >
              Back to Shop
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
