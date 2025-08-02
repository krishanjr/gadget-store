// import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import featuredProducts from '../../data/products';
import React, { useState, useEffect, useContext, useMemo } from 'react';
import axios from "axios";
import BASE_URL from '../../utils/api';

const ShopCategoriesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  let categories = []
  useEffect(() => {
    axios.get(BASE_URL + "/products/")
      .then((res) => {
        let data = res.data;
        data.forEach(element => {
          element.inStock = element.stock > 0;
        });
        setProducts(data);
      })
      .catch((err) => {
        setError("Failed to fetch products.");
        console.error(err);
      });
  }, []);
  const categoriess = [
    {
      id: 1,
      name: 'Phones',
      productCount: '120+ Products'
    },
    {
      id: 2,
      name: 'Laptops',
      productCount: '80+ Products'
    },
    {
      id: 3,
      name: 'Accessories',
      productCount: '200+ Products'
    }
  ];


  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  categories = Object.entries(
    products.reduce((acc, product) => {
      console.log(product);
      const category = product.category || "Uncategorized";
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {})
  ).map(([name, count], index) => ({
    id: index + 1,
    name,
    productCount: `${count} Product${count > 1 ? "s" : ""}`,
  }));
  console.log(categories);
  // Filter categories and products based on search query
const filteredCategories = useMemo(() => {
  if (!products.length) return [];

  const categoryCount = products.reduce((acc, product) => {
    const category = product.category || "Uncategorized";
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  const allCategories = Object.entries(categoryCount).map(([name, count], index) => ({
    id: index + 1,
    name,
    productCount: `${count} Product${count > 1 ? "s" : ""}`,
  }));

  return !searchQuery
    ? allCategories
    : allCategories.filter(cat =>
        cat.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
}, [products, searchQuery]);


  console.log("filteredCategories " , filteredCategories);
  return (
    <div className="max-w-7xl mx-auto p-4 pt-24">
      {/* Search Section */}
      <section className="mb-6">
        <input
          type="text"
          placeholder="Search categories or products..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </section>

      {/* Shop by Category Section */}
      <section className="mb-10">
        <div className="mb-4">
          <h1 className="text-3xl font-bold text-gray-900">Shop by Category</h1>
          <p className="text-gray-600">Find exactly what you're looking for</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {filteredCategories.map(category => (
            <div key={category.id} className="border border-gray-300 rounded-lg p-4 flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-200 rounded-md flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="9" cy="9" r="2"></circle>
                  <path d="M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">{category.name}</h3>
              <p className="text-gray-600">{category.productCount}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
            <p className="text-gray-600">Handpicked favorites just for you</p>
          </div>
          <button 
            onClick={() => window.location.href = '/products'} 
            className="flex items-center gap-1 text-blue-600 font-semibold hover:underline"
          >
            View All
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="border border-gray-300 rounded-lg p-4 flex flex-col">
              <div className="relative mb-4">
                <span className={`absolute top-0 left-0 px-2 py-1 text-white text-xs font-bold rounded-br-md ${product.badgeColor}`}>
                  {product.badge}
                </span>
                <div className="w-full h-40 bg-gray-200 rounded-md flex items-center justify-center">
                  <img src={product.image} alt={product.name} className="w-12 h-12 object-contain" />
                </div>
              </div>
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.category}</p>
              <div className="mt-auto flex items-center justify-between">
                <span className="font-bold">{product.price}</span>
                <button 
                  onClick={() => navigate('/details', { state: { product } })}
                  className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ShopCategoriesPage;
