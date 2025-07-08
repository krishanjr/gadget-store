import React from 'react';
import '../cssPages/ShopCatagoryPage.css';

const ShopCategoriesPage = () => {
  const categories = [
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

  const featuredProducts = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      category: 'Phones',
      price: '$999',
      badge: 'New',
      badgeColor: 'new'
    },
    {
      id: 2,
      name: 'MacBook Pro M3',
      category: 'Laptops',
      price: '$1999',
      badge: 'Popular',
      badgeColor: 'popular'
    },
    {
      id: 3,
      name: 'AirPods Pro',
      category: 'Accessories',
      price: '$249',
      badge: 'Sale',
      badgeColor: 'sale'
    },
    {
      id: 4,
      name: 'Samsung Galaxy S24',
      category: 'Phones',
      price: '$899',
      badge: 'Hot',
      badgeColor: 'hot'
    }
  ];

  return (
    <div className="app">
      <div className="container">
        
        {/* Shop by Category Section */}
        <section className="category-section">
          <div className="section-header">
            <h1 className="section-title">Shop by Category</h1>
            <p className="section-subtitle">Find exactly what you're looking for</p>
          </div>
          
          <div className="category-grid">
            {categories.map(category => (
              <div key={category.id} className="category-card">
                <div className="category-image">
                  <div className="image-placeholder">
                    <svg className="placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <circle cx="9" cy="9" r="2"></circle>
                      <path d="M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                    </svg>
                  </div>
                </div>
                <div className="category-info">
                  <h3 className="category-name">{category.name}</h3>
                  <p className="category-count">{category.productCount}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="featured-section">
          <div className="section-header">
            <div className="header-content">
              <h2 className="section-title">Featured Products</h2>
              <p className="section-subtitle">Handpicked favorites just for you</p>
            </div>
            <button className="view-all-btn">
              View All
              <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </button>
          </div>
          
          <div className="products-grid">
            {featuredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <span className={`product-badge ${product.badgeColor}`}>
                    {product.badge}
                  </span>
                  <div className="image-placeholder">
                    <svg className="placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <circle cx="9" cy="9" r="2"></circle>
                      <path d="M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                    </svg>
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-category">{product.category}</p>
                  <div className="product-footer">
                    <span className="product-price">{product.price}</span>
                    <button className="view-btn">View</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default ShopCategoriesPage;