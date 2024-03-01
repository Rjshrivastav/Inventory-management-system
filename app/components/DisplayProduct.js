import React from 'react'

const DisplayProduct = () => {
  return (
    <div className="my-8">
          <h1 className="text-3xl font-bold mb-4">Display Current Stock</h1>
          <table className="table-auto w-full border-collapse border border-green-800">
            <thead>
              <tr className="bg-green-500 text-white">
                <th className="py-2 px-4">Product ID</th>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Category</th>
                <th className="py-2 px-4">Price</th>
                <th className="py-2 px-4">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {/* Replace the following dummy data with your actual stock data */}
              <tr className="border-b">
                <td className="py-2 px-4">1</td>
                <td className="py-2 px-4">Widget A</td>
                <td className="py-2 px-4">Electronics</td>
                <td className="py-2 px-4">$29.99</td>
                <td className="py-2 px-4">100</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">2</td>
                <td className="py-2 px-4">Gizmo B</td>
                <td className="py-2 px-4">Home & Kitchen</td>
                <td className="py-2 px-4">$39.99</td>
                <td className="py-2 px-4">75</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
  )
}

export default DisplayProduct