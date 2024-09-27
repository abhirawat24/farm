// src/components/Header.js
import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <header className="bg-lightBrown p-4 flex justify-between items-center">
      <h1 className="text-darkBrown font-lufga text-3xl">Beat Farm</h1>
      <nav className="space-x-6">
        <a href="#freeAudio" className="text-darkBrown hover:text-electricBlue">All Beats</a>
        <a href="#freeAudio" className="text-darkBrown hover:text-electricBlue ">Free Beats</a>
        <a href="#premiumAudio" className="text-darkBrown hover:text-electricBlue">Premium Beats</a>
        <a href="#" className="text-darkBrown hover:text-electricBlue" onClick={openModal}>Contact</a>
        {/* Modal popup */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Information</h2>
            <p className="text-gray-700">
              <strong>Email:</strong> contact@beatfarm.com
            </p>
            <p className="text-gray-700 mt-2">
              <strong>Phone:</strong> +1 (234) 567-8901
            </p>
            <p className="text-gray-700 mt-2">
              <strong>Address:</strong> 123 Music Lane, Melody City, USA
            </p>

            {/* Close button */}
            <div className="mt-6 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      </nav>
      <button className="bg-electricBlue text-white py-2 px-4 rounded">Sign Up / Log In</button>
    </header>
  );
};
export default Header;