import React, { useState, useEffect } from "react";
import { Package, Image, Tag, Truck, Star, MapPin, DollarSign, Archive } from "lucide-react";

const defaultProduct = {
  name: "",
  description: "",
  price: 0,
  originalPrice: 0,
  category: "",
  subcategory: "",
  images: [],
  stock: 0,
  location: "",
  rating: 0,
  reviewCount: 0,
  isActive: true,
  isFeatured: false,
  tags: [],
  specifications: {},
  shippingInfo: {
    weight: 0,
    dimensions: {},
    shippingCost: 0,
    freeShipping: false,
  },
};

const ProductForm = ({ initialData = null, onSubmit }) => {
  const [product, setProduct] = useState(defaultProduct);
  const [activeTab, setActiveTab] = useState('basic');

  const [rawJson, setRawJson] = useState({
    images: JSON.stringify(product.images || []),
    tags: JSON.stringify(product.tags || []),
    specifications: JSON.stringify(product.specifications || {}, null, 2),
    shippingInfo: JSON.stringify(product.shippingInfo || {}, null, 2),
  });
    
  const handleJsonInputChange = (e, fieldName) => {
    setRawJson((prev) => ({
      ...prev,
      [fieldName]: e.target.value,
    }));
  };

  const handleJsonInputBlur = (fieldName) => {
    try {
      const parsed = JSON.parse(rawJson[fieldName]);
      setProduct((prev) => ({
        ...prev,
        [fieldName]: parsed,
      }));
    } catch (err) {
      console.error(`Invalid JSON for ${fieldName}`);
      alert(`Invalid JSON format for ${fieldName}`);
    }
  };

  useEffect(() => {
    if (initialData) {
      setProduct({ ...defaultProduct, ...initialData });
      setRawJson({
        images: JSON.stringify(initialData.images || []),
        tags: JSON.stringify(initialData.tags || []),
        specifications: JSON.stringify(initialData.specifications || {}, null, 2),
        shippingInfo: JSON.stringify(initialData.shippingInfo || {}, null, 2),
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    onSubmit && onSubmit(product);
    alert('Product saved successfully!');
  };

  const tabs = [
    { id: 'basic', label: 'Basic Info', icon: Package },
    { id: 'media', label: 'Media & Tags', icon: Image },
    { id: 'pricing', label: 'Pricing & Stock', icon: DollarSign },
    { id: 'shipping', label: 'Shipping', icon: Truck },
  ];

  const renderBasicInfo = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Product Name *</label>
          <input
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Enter product name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MapPin className="inline w-4 h-4 mr-1" />
            Location
          </label>
          <input
            name="location"
            value={product.location}
            onChange={handleChange}
            placeholder="Product location"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Detailed product description"
          required
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
          <input
            name="category"
            value={product.category}
            onChange={handleChange}
            placeholder="Product category"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Subcategory</label>
          <input
            name="subcategory"
            value={product.subcategory}
            onChange={handleChange}
            placeholder="Product subcategory"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Star className="inline w-4 h-4 mr-1" />
            Rating
          </label>
          <input
            name="rating"
            type="number"
            step="0.1"
            min="0"
            max="5"
            value={product.rating}
            onChange={handleChange}
            placeholder="0.0"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Review Count</label>
          <input
            name="reviewCount"
            type="number"
            min="0"
            value={product.reviewCount}
            onChange={handleChange}
            placeholder="0"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-6">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            name="isActive"
            type="checkbox"
            checked={product.isActive}
            onChange={handleChange}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <span className="text-sm font-medium text-gray-700">Active Product</span>
        </label>
        
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            name="isFeatured"
            type="checkbox"
            checked={product.isFeatured}
            onChange={handleChange}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <span className="text-sm font-medium text-gray-700">Featured Product</span>
        </label>
      </div>
    </div>
  );

  const renderMediaAndTags = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Image className="inline w-4 h-4 mr-1" />
          Image URLs
        </label>
        <textarea
          value={rawJson.images}
          onChange={(e) => handleJsonInputChange(e, "images")}
          onBlur={() => handleJsonInputBlur("images")}
          placeholder='["https://example.com/image1.jpg", "https://example.com/image2.jpg"]'
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
        />
        <p className="text-xs text-gray-500 mt-1">Enter image URLs as a JSON array</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Tag className="inline w-4 h-4 mr-1" />
          Tags
        </label>
        <textarea
          value={rawJson.tags}
          onChange={(e) => handleJsonInputChange(e, "tags")}
          onBlur={() => handleJsonInputBlur("tags")}
          placeholder='["electronics", "smartphone", "mobile"]'
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
        />
        <p className="text-xs text-gray-500 mt-1">Enter tags as a JSON array</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Specifications</label>
        <textarea
          value={rawJson.specifications}
          onChange={(e) => handleJsonInputChange(e, "specifications")}
          onBlur={() => handleJsonInputBlur("specifications")}
          placeholder='{\n  "color": "Black",\n  "size": "Large",\n  "material": "Cotton"\n}'
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
        />
        <p className="text-xs text-gray-500 mt-1">Enter specifications as JSON object</p>
      </div>
    </div>
  );

  const renderPricingAndStock = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <DollarSign className="inline w-4 h-4 mr-1" />
            Price *
          </label>
          <input
            name="price"
            type="number"
            step="0.01"
            min="0"
            value={product.price}
            onChange={handleChange}
            placeholder="0.00"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Original Price</label>
          <input
            name="originalPrice"
            type="number"
            step="0.01"
            min="0"
            value={product.originalPrice}
            onChange={handleChange}
            placeholder="0.00"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Archive className="inline w-4 h-4 mr-1" />
          Stock Quantity
        </label>
        <input
          name="stock"
          type="number"
          min="0"
          value={product.stock}
          onChange={handleChange}
          placeholder="0"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {product.originalPrice > 0 && product.price > 0 && (
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-sm text-green-700">
            <strong>Discount:</strong> {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
          </p>
          <p className="text-sm text-green-700">
            <strong>Savings:</strong> ${(product.originalPrice - product.price).toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );

  const renderShipping = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Truck className="inline w-4 h-4 mr-1" />
          Shipping Information
        </label>
        <textarea
          value={rawJson.shippingInfo}
          onChange={(e) => handleJsonInputChange(e, "shippingInfo")}
          onBlur={() => handleJsonInputBlur("shippingInfo")}
          placeholder='{\n  "weight": 1.5,\n  "dimensions": {\n    "width": 10,\n    "height": 5,\n    "depth": 3\n  },\n  "shippingCost": 9.99,\n  "freeShipping": false\n}'
          rows={8}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
        />
        <p className="text-xs text-gray-500 mt-1">Enter shipping details as JSON object</p>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'basic': return renderBasicInfo();
      case 'media': return renderMediaAndTags();
      case 'pricing': return renderPricingAndStock();
      case 'shipping': return renderShipping();
      default: return renderBasicInfo();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {initialData ? 'Edit Product' : 'Create New Product'}
        </h1>
        <p className="text-gray-600">Fill in the details below to create or update your product listing.</p>
      </div>

      <div>
        {/* Tab Navigation */}
        <div className="mb-8">
          <nav className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2.5 text-sm font-medium rounded-md transition-colors ${
                    activeTab === tab.id
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          {renderTabContent()}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-6 py-3 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            {initialData ? 'Update Product' : 'Create Product'}
          </button>
        </div>
      </div>

      {/* Product Preview */}
      {product.name && (
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Preview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div><strong>Name:</strong> {product.name}</div>
            <div><strong>Category:</strong> {product.category}</div>
            <div><strong>Price:</strong> ${product.price}</div>
            <div><strong>Stock:</strong> {product.stock}</div>
            <div><strong>Location:</strong> {product.location}</div>
            <div><strong>Rating:</strong> {product.rating} ⭐ ({product.reviewCount} reviews)</div>
          </div>
        </div>
      )}
    </div>
  );
};


export default ProductForm;