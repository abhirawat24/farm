// src/components/SearchBar.js
import React from 'react';

const SearchBar = () => {
  return (
    <div className="bg-white shadow-md flex items-center py-2 px-4 mt-8 mx-auto w-2/3 rounded">
      <input
        type="text"
        className="flex-grow text-darkBrown font-secondary p-2 outline-none"
        placeholder="Search beats by genre, mood, instrument..."
      />
      <button className="text-electricBlue">
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;
