import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="relative">
        <input
          type="text"
          className="w-[650px] p-3 rounded-full border-2 border-transparent focus:outline-none ring-2 ring-primary focus:ring-secondary bg-gray-50"
          placeholder="Cari Sampah Elektronik..."
        />
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <FiSearch className="h-6 w-6 text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
