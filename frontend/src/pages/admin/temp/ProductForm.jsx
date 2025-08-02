import React, { useState, useEffect } from "react";

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
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setProduct((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleJsonInput = (e, fieldName, parse = true) => {
    try {
      const value = parse ? JSON.parse(e.target.value) : e.target.value;
      setProduct((prev) => ({
        ...prev,
        [fieldName]: value,
      }));
    } catch (err) {
      console.error(`Invalid JSON for ${fieldName}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      Name: <input name="name" className="input input-bordered" value={product.name} onChange={handleChange} placeholder="Name" required /> <br/>
      Description: <textarea name="description" className="textarea textarea-bordered col-span-2" value={product.description} onChange={handleChange} placeholder="Description" required /> <br/>

      Price: <input name="price" className="input input-bordered" type="number" value={product.price} onChange={handleChange} placeholder="Price" required /> <br/>
      Original Price: <input name="originalPrice" className="input input-bordered" type="number" value={product.originalPrice} onChange={handleChange} placeholder="Original Price" /> <br/>

      Category: <input name="category"  className="input input-bordered" value={product.category} onChange={handleChange} placeholder="Category" required /> <br/>
      Sub Category: <input name="subcategory" className="input input-bordered" value={product.subcategory} onChange={handleChange} placeholder="Subcategory" /> <br/>

      Image URLs:
      <input
        name="images"
        value={rawJson.images}
        onChange={(e) => handleJsonInputChange(e, "images")}
        onBlur={() => handleJsonInputBlur("images")}
        placeholder='["img1.jpg", "img2.jpg"]'
        className="input input-bordered w-full"
      />

      Stock: <input name="stock" className="input input-bordered" type="number" value={product.stock} onChange={handleChange} placeholder="Stock" /> <br/>
      Location: <input name="location" className="input input-bordered" value={product.location} onChange={handleChange} placeholder="Location" /> <br/>
      Rating: <input name="rating" className="input input-bordered" type="number" step="0.1" value={product.rating} onChange={handleChange} placeholder="Rating" /> <br/>
      Review Count: <input name="reviewCount" className="input input-bordered" type="number" value={product.reviewCount} onChange={handleChange} placeholder="Review Count" /> <br/>

      Active: <label>
        <input name="isActive" type="checkbox" checked={product.isActive} onChange={handleChange} /> Active
      </label><br/>
      IsFeatured: <label>
        <input name="isFeatured" type="checkbox" checked={product.isFeatured} onChange={handleChange} /> Featured
      </label>

      <label>Tags:</label>
      <textarea
        value={rawJson.tags}
        onChange={(e) => handleJsonInputChange(e, "tags")}
        onBlur={() => handleJsonInputBlur("tags")}
        placeholder='["tag1", "tag2"]'
        className="textarea textarea-bordered w-full mb-4"
      />

      {/* Specifications */}
      <label>Specifications:</label>
      <textarea
        value={rawJson.specifications}
        onChange={(e) => handleJsonInputChange(e, "specifications")}
        onBlur={() => handleJsonInputBlur("specifications")}
        placeholder='{"color":"red","size":"XL"}'
        className="textarea textarea-bordered w-full mb-4"
      />

      {/* Shipping Info */}
      <label>Shipping Info:</label>
      <textarea
        value={rawJson.shippingInfo}
        onChange={(e) => handleJsonInputChange(e, "shippingInfo")}
        onBlur={() => handleJsonInputBlur("shippingInfo")}
        placeholder='{"weight":1,"dimensions":{"width":10},"shippingCost":5,"freeShipping":false}'
        className="textarea textarea-bordered w-full mb-4"
      />

      <button type="submit">{initialData ? "Update" : "Create"} Product</button>
    </form>
  );
};

export default ProductForm;
