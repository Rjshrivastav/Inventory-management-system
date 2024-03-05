"use client"
import React, { useEffect, useState } from 'react';

const DisplayProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('api/product');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []); // Empty dependency array to run the effect only once

  const handleRefresh = () => {
    fetchProducts();
  };

  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold">Current Stock</h1>
      
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          onClick={handleRefresh}
          disabled={loading}
        >
          {loading ? 'Refreshing...' : 'Refresh'}
        </button>
      </div>
      <table className="table-auto w-full border-collapse border border-green-800">
        <thead>
          <tr className="bg-[#219ebc] text-white">
            <th className="text-left pl-2 py-3">Name</th>
            <th className="text-left pl-2 py-3">Category</th>
            <th className="text-left pl-2 py-3">Price</th>
            <th className="text-left pl-2 py-3">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr className="border-b" key={product._id}>
              <td className="text-left pl-2 py-3">{product.name}</td>
              <td className="text-left pl-2 py-3">{product.category}</td>
              <td className="text-left pl-2 py-3">{product.price}</td>
              <td className="text-left pl-2 py-3">{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayProduct;
