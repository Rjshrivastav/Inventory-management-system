import React from 'react'

const AddProduct = () => {
  return (
    <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Add a Product</h1>
          <form className="flex flex-col space-y-4">
            <label className="text-lg">Product Name:</label>
            <input
              type="text"
              placeholder="Enter product name"
              className="py-2 px-4 border border-gray-300 rounded"
            />

            <label className="text-lg">Category:</label>
            <input
              type="text"
              placeholder="Enter category"
              className="py-2 px-4 border border-gray-300 rounded"
            />

            <label className="text-lg">Price:</label>
            <input
              type="number"
              placeholder="Enter price"
              className="py-2 px-4 border border-gray-300 rounded"
            />

            <label className="text-lg">Quantity:</label>
            <input
              type="number"
              placeholder="Enter quantity"
              className="py-2 px-4 border border-gray-300 rounded"
            />

            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
            >
              Add Product
            </button>
          </form>
        </div>
  )
}

export default AddProduct