"use client";
import React, { useState } from "react";
import data from "./data/data.json";

interface ExtensionItem {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

const Page = () => {
  const [filter, setFilter] = useState<"all" | "active" | "inactive">("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [extensions, setExtensions] = useState<ExtensionItem[]>(data);

  const filteredExtensions = extensions
    .filter((item) => {
      if (filter === "active") return item.isActive;
      if (filter === "inactive") return !item.isActive;
      return true;
    })
    .filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const toggleExtension = (index: number) => {
    setExtensions((prev) =>
      prev.map((ext, i) =>
        i === index ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl">
        <div className="h-16 border-2 border-gray-300 rounded-xl shadow-md flex items-center bg-white px-4 overflow-hidden">
          <img src="/images/logo.svg" alt="Logo" className="h-8 md:h-10 mr-4" />
          <input
            type="text"
            placeholder="Search extensions..."
            className="flex-1 outline-none text-gray-700 min-w-0"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Title and Filter Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 mb-6 gap-4 flex-wrap">
          <h1 className="font-bold text-2xl md:text-3xl text-gray-800">
            Extension Manager
          </h1>

          <div className="flex flex-wrap gap-2">
            {["all", "active", "inactive"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type as any)}
                className={`px-4 py-2 rounded-full border-2 text-sm ${
                  filter === type
                    ? "bg-red-500 border-red-500 text-white"
                    : "border-gray-300 hover:bg-gray-100 text-gray-700"
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of Extensions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExtensions.length > 0 ? (
            filteredExtensions.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl p-5 flex flex-col h-full border-gray-100 break-words"
              >
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="w-12 h-12 object-contain rounded-lg"
                  />
                  <div className="min-w-0">
                    <h2 className="font-semibold text-lg">{item.name}</h2>
                    <p className="text-gray-600 text-sm mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={item.isActive}
                      onChange={() =>
                        toggleExtension(
                          extensions.findIndex((e) => e.name === item.name)
                        )
                      }
                    />
                    <div
                      className={`w-11 h-6 rounded-full peer transition-colors ${
                        item.isActive
                          ? "bg-red-500 peer-checked:bg-red-500"
                          : "bg-gray-200 peer-checked:bg-gray-200"
                      } relative`}
                    >
                      <div
                        className={`absolute top-0.5 left-0.5 bg-white border-gray-300 border rounded-full h-5 w-5 transition-transform ${
                          item.isActive ? "transform translate-x-5" : ""
                        }`}
                      ></div>
                    </div>
                  </label>
                  <button className="text-gray-600 hover:text-white px-4 py-2 font-medium text-sm border rounded-2xl hover:bg-red-500 transition">
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-gray-500">
              No extensions found matching your criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
