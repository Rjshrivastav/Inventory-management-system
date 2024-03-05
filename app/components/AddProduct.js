"use client"
import React from 'react'
import { useEffect, useState } from 'react'

const AddAndHandleProduct = () => {
  const [productForm, setproductForm] = useState({})
  const [Alert, setAlert] = useState([])

  const addProduct  = async(e) =>{
    e.preventDefault();

    try{
      const response = await fetch('api/product',
      {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(productForm)
      });

      if (response.ok){
        console.log('Product added successfully.');
        setAlert("Your Product has been added!")
        setproductForm({})

        //hide aleart in 5sec
        setTimeout(()=> {
          setAlert("")
        }, 5000)
        
      } else {
        console.error('Error adding product')
      }
    } catch(error){
      console.error('Error:', error)
    }
  }

  const handleChange = (e)=>{
    setproductForm({...productForm, [e.target.name]: e.target.value})

  }
  return (
    <div>
      <div className='text-green-800 font-bold bg-green-200'>{Alert}</div>
          <h1 className="text-3xl font-bold mb-4 text-center">Add a Product</h1>
          <form className="flex flex-col space-y-2">
            <input
            name='name'
            onChange={handleChange}
            value={productForm?.name || ""}
              type="text"
              placeholder="Enter product name"
              className="py-2 px-4 border border-gray-300 rounded"
            />
            <input
            name='category'
            value={productForm?.category || ""}
            onChange={handleChange}
              type="text"
              placeholder="Enter category"
              className="py-2 px-4 border border-gray-300 rounded"
            />
            <input
            name='price'
            value={productForm?.price || ""}
            onChange={handleChange}
              type="number"
              placeholder="Enter price"
              className="py-2 px-4 border border-gray-300 rounded"
            />
            <input
            name='quantity'
            value={productForm?.quantity || ""}
            onChange={handleChange}
              type="number"
              placeholder="Enter quantity"
              className="py-2 px-4 border border-gray-300 rounded"
            />

            <button
            onClick={addProduct}
              type="submit"
              className="bg-[#219ebc] text-white py-2 px-4 rounded"
            >
              Add Product
            </button>
          </form>
        </div>
  )
}

export default AddAndHandleProduct