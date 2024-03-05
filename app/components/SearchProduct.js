"use client";
import React from "react";
import { useState, useEffect } from "react";

const SearchProduct = () => {
  const [query, setquery] = useState("");
  const [loading, setloading] = useState(false);
  const [dropdown, setdropdown] = useState([]);

  const onDropdownEdit = async (e) => {
    const value = e.target.value;
    setquery(value);
    if (!loading) {
      setloading(true);
      setdropdown([]);

      if (value.trim() === "") {
        setquery("");
        setloading(false);
        return
      }
      const response = await fetch("api/search?query=" + query);
      let rjson = await response.json();
      console.log(rjson);
      setdropdown(rjson);
      setloading(false);
    }
  };

  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-4">Search a Product</h1>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          onChange={onDropdownEdit}
          placeholder="Enter product name"
          className="w-full h-[40px] marker:py-2 px-4 border border-gray-300 rounded"
        />
      </div>
      {loading && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="animate-spin h-5 w-5 text-gray-500"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            fill="currentColor"
            d="M12 2a10 10 0 0110 10h-2a8 8 0 00-8-8V2z"
          ></path>
        </svg>
      )}
      {dropdown.length > 0 ? (
        <div className=" max-h-[77vh] overflow-y-scroll">
          <table className="table-auto w-full border-collapse border border-green-800 mt-2">
            <thead>
              <tr className="bg-[#219ebc] text-white">
                <th className="text-left pl-2 py-3">Name</th>
                <th className="text-left pl-2 py-3">Category</th>
                <th className="text-left pl-2 py-3">Price</th>
                <th className="text-left pl-2 py-3">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {dropdown.map((item) => (
                <tr className="border-b" key={item._id}>
                  <td className="text-left pl-2 py-3">{item.name}</td>
                  <td className="text-left pl-2 py-3">{item.category}</td>
                  <td className="text-left pl-2 py-3">{item.price}</td>
                  <td className="text-left pl-2 py-3">{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ): (
        <span className="block opacity-75 my-4 text-gray-400">No data to show</span>
      )
    }
    </div>
  );
};

export default SearchProduct;
