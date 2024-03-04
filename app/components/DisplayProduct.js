"use client"
import React from 'react'
import { useEffect, useState } from 'react'

const DisplayProduct = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
        const response = await fetch('api/product');
        const rjson = await response.json();
        setProducts(rjson);
    };
  
    fetchProducts();
  }, [products]);
  
  

  return (
    <div className="my-8">
          <h1 className="text-3xl font-bold mb-4">Display Current Stock</h1>
          <table className="table-auto w-full border-collapse border border-green-800">
            <thead>
              <tr className="bg-green-500 text-white">
                <th className="text-left pl-2 py-3">Name</th>
                <th className="text-left pl-2 py-3">Category</th>
                <th className="text-left pl-2 py-3">Price</th>
                <th className="text-left pl-2 py-3">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product=>{
                return <tr className="border-b" key={product._id}>
                <td className="text-left pl-2 py-3">{product.name}</td>
                <td className="text-left pl-2 py-3">{product.category}</td>
                <td className="text-left pl-2 py-3">{product.price}</td>
                <td className="text-left pl-2 py-3">{product.quantity}</td>
              </tr>
              })}
            </tbody>
          </table>
        </div>
  )
}

export default DisplayProduct