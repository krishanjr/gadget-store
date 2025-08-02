import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import BASE_URL from '../../utils/api';
import ProductForm from "./ProductForm";

const ManageProducts = () => {
  const [products, setproducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [CreatingProduct, setCreatingProduct] = useState(false);
  
  useEffect(() => {
    axios.get(BASE_URL + "/products/")
      .then((res) => {
        let data = res.data;
        setproducts(data);
        console.log(data);
      })
      .catch((err) => {
        setError("Failed to fetch products.");
        console.error(err);
      });
  }, []);

  const CreateProduct = () => {
    const handleCreate = async (data) => {
      const res = await fetch(BASE_URL + "/products/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      console.log("Created:", json);
    };

    return <ProductForm onSubmit={handleCreate} />;
  };

  const EditProduct = async ({ product }) => {
    const handleUpdate = async (data) => {
      const res = await fetch(BASE_URL + "/products/${product.id}", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      console.log("Updated:", json);
    };
    alert(product);
    return <ProductForm initialData={product} onSubmit={handleUpdate} />;
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);
  };
  const handleCreateClick = (a) => {
    setCreatingProduct(a);
  }

  const handleCreateFormSubmit = async (newProduct) => {
    console.log("New Product:", newProduct);
    const res = await fetch(BASE_URL + "/products/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });
      const json = await res.json();
      console.log("Created:", json);
    setCreatingProduct(false);
  }
  const handleFormSubmit = async (updatedProduct) => {
    console.log("Updated Product:", updatedProduct);
    const res = await fetch(BASE_URL + `/products/${updatedProduct.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct),
    });
    const json = await res.json();
    console.log("Updated:", json);
    setEditingProduct(null); // hide form
  };

  const deleteProduct = async (id) => {
    if (!window.confirm("Are you sure you want to delete this Product?")) return;

    try {
      await axios.delete(`${BASE_URL}/products/${id}`);
      setproducts((prev) => prev.filter((product) => product.id !== id));
    } catch (err) {
      console.error("Error deleting Products:", err);
      alert("Failed to delete Products.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Products</h2>
      <button className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={() => handleCreateClick(true)}>Add New Product</button>
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">name</th>
              <th className="border p-2">description</th>
              <th className="border p-2">price</th>
              <th className="border p-2">originalPrice</th>
              <th className="border p-2">category</th>
              <th className="border p-2">subcategory</th>
              <th className="border p-2">images</th>
              <th className="border p-2">stock</th>
              <th className="border p-2">location</th>
              <th className="border p-2">rating</th>
              <th className="border p-2">reviewCount</th>
              <th className="border p-2">isActive</th>
              <th className="border p-2">isFeatured</th>
              <th className="border p-2">tags</th>
              <th className="border p-2">specifications</th>
              <th className="border p-2">shippingInfo</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
            <tr key={product.id}>
              <td className="border p-2">{product.name}</td>
              <td className="border p-2">{product.description}</td>
              <td className="border p-2">{product.price}</td>
              <td className="border p-2">{product.originalPrice}</td>
              <td className="border p-2">{product.category}</td>
              <td className="border p-2">{product.subcategory}</td>
              <td className="border p-2">
                <ul className="mb-6 list-disc list-inside text-gray-700">
                  {Object.entries(product.images).map(image => (<li key={image}>{image}</li>))}
                </ul>
              </td>
              <td className="border p-2">{product.stock}</td>
              <td className="border p-2">{product.location}</td>
              <td className="border p-2">{product.rating}</td>
              <td className="border p-2">{product.reviewCount}</td>
              <td className="border p-2">{product.isActive}</td>
              <td className="border p-2">{product.isFeatured}</td>
              <td className="border p-2">
                <ul className="mb-6 list-disc list-inside text-gray-700">
                  {Object.entries(product.tags).map(tag => (<li key={tag}>{tag}</li>))}
                </ul>
              </td>
              <td className="border p-2">          
                <ul className="mb-6 list-disc list-inside text-gray-700">
                  {Object.entries(product.specifications).map(specs => (<li key={specs}>{specs}</li>))}
                </ul>
              </td>
              <td className="border p-2">&nbsp;</td>
              <td className="border p-2">
                <button
                className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-md text-sm mt-2"
                onClick={() => handleEditClick(product)}
                >
                  Edit
                </button>
                <button className="text-red-500" onClick={() => deleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
      {editingProduct && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-3xl relative">
            <button
              onClick={() => setEditingProduct(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
            >
              ✕
            </button>
            <ProductForm initialData={editingProduct} onSubmit={handleFormSubmit} />
          </div>
        </div>
      )}
      {CreatingProduct && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-3xl relative">
            <button
              onClick={() => setCreatingProduct(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
            >
              ✕
            </button>
            <ProductForm onSubmit={handleCreateFormSubmit} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageProducts;
