// src/components/BeatList.js
import React from 'react';

const BeatList = () => {
  return (
    <div className="bg-lightBrown p-4 mt-8 mx-auto w-2/3 rounded shadow-lg">
      <div className="grid grid-cols-5 gap-4 items-center text-darkBrown">
        <button className="text-electricBlue">▶️</button>
        <span>Track Name</span>
        <div className="waveform bg-gray-300 h-6 rounded"></div>
        <span>Key</span>
        <span>BPM</span>
      </div>
    </div>
  );
};

export default BeatList;
