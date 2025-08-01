import React, { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Search, Grid, List, Star, ChevronDown } from 'lucide-react';
import { CartContext } from '../../context/CartContext';
import BASE_URL from '../../utils/api';
import axios from "axios";

const AllProducts = () => {
  // Fix lint error: 'ChevronDown' used but not defined or other error at line 19 col 9
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    const search = params.get('search') || '';
    setSearchTerm(search);
    if (category) {
      setActiveFilter(category);
    } else {
      setActiveFilter('All');
    }
  }, [location.search]);

  // Sample product data

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(BASE_URL + "/products/")
      .then((res) => {
        let data = res.data;
        data.forEach(element => {
          element.inStock = element.stock > 0;
        });
        setProducts(data);
        console.log(data);
      })
      .catch((err) => {
        setError("Failed to fetch products.");
        console.error(err);
      });
  }, []);

  const categories = [
    { name: 'All', count: products.length },
    { name: 'Phones', count: products.filter(p => p.category === 'Phones').length },
    { name: 'Laptops', count: products.filter(p => p.category === 'Laptops').length },
    { name: 'Accessories', count: products.filter(p => p.category === 'Accessories').length }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeFilter === 'All' || product.category === activeFilter;
    return matchesSearch && matchesCategory;
  });

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        className={i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}
        fill={i < Math.floor(rating) ? '#ffc107' : 'none'}
      />
    ));
  };

  const formatPrice = (price) => {
    return `$${price.toLocaleString()}`;
  };

  const handleAddToCart = (product) => {
    if (!product.inStock) return;
    addToCart(product);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 pt-24">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-1">All Products</h1>
        <p className="text-gray-600">Browse our complete collection of {products.length} premium tech products</p>
      </header>

      {/* Search and View Toggle */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div className="flex gap-2">
          <button
            className={`p-2 rounded-md border ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'} hover:bg-blue-700 hover:text-white transition`}
            onClick={() => setViewMode('grid')}
            aria-label="Grid view"
          >
            <Grid size={20} />
          </button>
          <button
            className={`p-2 rounded-md border ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'} hover:bg-blue-700 hover:text-white transition`}
            onClick={() => setViewMode('list')}
            aria-label="List view"
          >
            <List size={20} />
          </button>
        </div>
      </div>

      {/* Category Filters */}
      <div className="relative inline-block text-left mb-6">
        <div>
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
            id="menu-button"
            aria-expanded={dropdownOpen}
            aria-haspopup="true"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {activeFilter}
            <ChevronDown className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {dropdownOpen && (
          <div
            className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              {categories.map(category => (
                <button
                  key={category.name}
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    activeFilter === category.name ? 'bg-blue-600 text-white' : 'text-gray-700'
                  } hover:bg-blue-100 hover:text-blue-900`}
                  role="menuitem"
                  tabIndex="-1"
                  onClick={() => {
                    setActiveFilter(category.name);
                    setDropdownOpen(false);
                  }}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="mb-4">
        <p className="text-gray-700">Showing all {filteredProducts.length} products</p>
      </div>

      {/* Products Grid/List */}
      <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1'}`}>
        {filteredProducts.map(product => (
          <div key={product.id} className="border border-gray-300 rounded-lg p-4 flex flex-col">
            {/* Product Image */}
            <div className="relative mb-4">
              <img src={product.images || './src/assets/mouse.jpg'} alt={product.name} className="w-full h-40 object-cover rounded-md" />
              {/* tags */}
              <div className="absolute top-0 left-0 flex space-x-1 p-2">
                {product.tags.map(badge => (
                  <span
                    key={badge}
                    className={`text-xs font-bold text-white px-2 py-1 rounded ${
                      badge.toLowerCase() === 'new' ? 'bg-green-500' :
                      badge.toLowerCase() === 'sale' ? 'bg-red-500' :
                      badge.toLowerCase() === 'popular' ? 'bg-blue-500' :
                      badge.toLowerCase() === 'out of stock' ? 'bg-gray-500' : 'bg-gray-400'
                    }`}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col flex-grow">
              {/* Rating */}
              <div className="flex items-center mb-1">
                {renderStars(product.rating)}
                <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
              </div>

              {/* Product Name */}
              <h3 className="text-lg font-semibold mb-1">{product.name}</h3>

              {/* Description */}
              <p className="text-gray-600 mb-2 flex-grow">{product.description}</p>

              {/* Price */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="font-bold text-lg">{formatPrice(product.price)}</span>
                  {product.originalPrice && (
                    <span className="line-through text-gray-500 ml-2">{formatPrice(product.originalPrice)}</span>
                  )}
                </div>
                <div className="text-sm text-gray-500">{product.brand}</div>
              </div>

              {/* Actions */}
              <div className="mt-auto flex gap-2">
                <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition" onClick={() => handleAddToCart(product)} disabled={!product.inStock}>
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
                <button
                  className="flex-1 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
                  onClick={() => {
                    navigate('/details', { state: { product } });
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-10">
          <h3 className="text-xl font-semibold mb-2">No products found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default AllProducts;
