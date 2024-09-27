// src/components/FilterTags.js
import React from 'react';

const FilterTags = () => {
  const tags = ['Genre', 'Mood', 'Instrument', 'Key', 'BPM'];

  return (
    <div className="flex justify-center space-x-4 my-6">
      {tags.map((tag, idx) => (
        <button
          key={idx}
          className="bg-cream text-darkBrown py-2 px-4 rounded-full hover:bg-electricBlue hover:text-white transition"
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default FilterTags;
