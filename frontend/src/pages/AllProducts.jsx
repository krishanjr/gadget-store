import React, { useState } from 'react';
import { Search, Grid, List, Star } from 'lucide-react';
import '../cssPages/AllProducts.css';

const AllProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [viewMode, setViewMode] = useState('grid');

  // Sample product data
  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      description: "Latest iPhone with A17 Pro chip and titanium design",
      price: 999,
      originalPrice: 1299,
      rating: 4.5,
      reviews: 45,
      category: "Phones",
      brand: "Apple",
      image: "/api/placeholder/300/200",
      badges: ["New", "Sale"],
      inStock: true
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      description: "Flagship Android with S Pen and AI features",
      price: 1199,
      rating: 4.7,
      reviews: 32,
      category: "Phones",
      brand: "Samsung",
      image: "/api/placeholder/300/200",
      badges: ["Popular"],
      inStock: true
    },
    {
      id: 3,
      name: "Google Pixel 8 Pro",
      description: "Pure Android experience with advanced AI photography",
      price: 899,
      rating: 4.6,
      reviews: 28,
      category: "Phones",
      brand: "Google",
      image: "/api/placeholder/300/200",
      badges: [],
      inStock: true
    },
    {
      id: 4,
      name: "OnePlus 12",
      description: "Flagship killer with fast charging and smooth performance",
      price: 799,
      rating: 4.5,
      reviews: 19,
      category: "Phones",
      brand: "OnePlus",
      image: "/api/placeholder/300/200",
      badges: [],
      inStock: true
    },
    {
      id: 5,
      name: "MacBook Pro M3",
      description: "Professional laptop with M3 chip for creative workflows",
      price: 1999,
      rating: 4.9,
      reviews: 67,
      category: "Laptops",
      brand: "Apple",
      image: "/api/placeholder/300/200",
      badges: ["Popular"],
      inStock: true
    },
    {
      id: 6,
      name: "Dell XPS 13",
      description: "Premium ultrabook with InfinityEdge display",
      price: 1299,
      rating: 4.5,
      reviews: 43,
      category: "Laptops",
      brand: "Dell",
      image: "/api/placeholder/300/200",
      badges: ["Out of Stock"],
      inStock: false
    },
    {
      id: 7,
      name: "HP Spectre x360",
      description: "2-in-1 convertible laptop with premium design",
      price: 1399,
      rating: 4.4,
      reviews: 25,
      category: "Laptops",
      brand: "HP",
      image: "/api/placeholder/300/200",
      badges: [],
      inStock: true
    },
    {
      id: 8,
      name: "Lenovo ThinkPad X1 Carbon",
      description: "Business laptop with legendary ThinkPad reliability",
      price: 1599,
      rating: 4.6,
      reviews: 38,
      category: "Laptops",
      brand: "Lenovo",
      image: "/api/placeholder/300/200",
      badges: [],
      inStock: true
    },
    {
      id: 9,
      name: "AirPods Pro 2",
      description: "Premium wireless earbuds with active noise cancellation",
      price: 249,
      rating: 4.7,
      reviews: 156,
      category: "Accessories",
      brand: "Apple",
      image: "/api/placeholder/300/200",
      badges: ["New"],
      inStock: true
    },
    {
      id: 10,
      name: "Sony WH-1000XM5",
      description: "Industry-leading noise canceling headphones",
      price: 399,
      rating: 4.8,
      reviews: 89,
      category: "Accessories",
      brand: "Sony",
      image: "/api/placeholder/300/200",
      badges: [],
      inStock: true
    }
  ];

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
        className={i < Math.floor(rating) ? 'star filled' : 'star'}
        fill={i < Math.floor(rating) ? '#ffc107' : 'none'}
      />
    ));
  };

  const formatPrice = (price) => {
    return `$${price.toLocaleString()}`;
  };

  const handleAddToCart = (product) => {
    if (!product.inStock) return;
    console.log('Added to cart:', product);
  };

  return (
    <div className="all-products">
      <div className="container">
        {/* Header */}
        <header className="products-header">
          <h1>All Products</h1>
          <p>Browse our complete collection of {products.length} premium tech products</p>
        </header>

        {/* Search and View Toggle */}
        <div className="search-section">
          <div className="search-bar">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search products, brands, or descriptions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="view-toggle">
            <button
              className={viewMode === 'grid' ? 'active' : ''}
              onClick={() => setViewMode('grid')}
            >
              <Grid size={20} />
            </button>
            <button
              className={viewMode === 'list' ? 'active' : ''}
              onClick={() => setViewMode('list')}
            >
              <List size={20} />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.name}
              className={`filter-btn ${activeFilter === category.name ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.name)}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="results-info">
          <p>Showing all {filteredProducts.length} products</p>
        </div>

        {/* Products Grid */}
        <div className={`products-grid ${viewMode}`}>
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              {/* Product Image */}
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                {/* Badges */}
                <div className="badges">
                  {product.badges.map(badge => (
                    <span key={badge} className={`badge ${badge.toLowerCase().replace(' ', '-')}`}>
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="product-info">
                {/* Rating */}
                <div className="rating">
                  {renderStars(product.rating)}
                  <span className="rating-text">({product.rating})</span>
                </div>

                {/* Product Name */}
                <h3 className="product-name">{product.name}</h3>

                {/* Description */}
                <p className="product-description">{product.description}</p>

                {/* Price */}
                <div className="price-section">
                  <div className="price">
                    <span className="current-price">{formatPrice(product.price)}</span>
                    {product.originalPrice && (
                      <span className="original-price">{formatPrice(product.originalPrice)}</span>
                    )}
                  </div>
                  <div className="brand">{product.brand}</div>
                </div>

                {/* Actions */}
                <div className="product-actions">
                  <button className="view-details-btn">View Details</button>
                  <button 
                    className={`add-to-cart-btn ${!product.inStock ? 'disabled' : ''}`}
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                  >
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="no-results">
            <h3>No products found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;

