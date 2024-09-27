// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-lightBrown p-4 flex justify-between items-center">
      <h1 className="text-darkBrown font-lufga text-3xl">Beat Farm</h1>
      <nav className="space-x-6">
        <a href="#" className="text-darkBrown hover:text-electricBlue">All Beats</a>
        <a href="#" className="text-darkBrown hover:text-electricBlue">Free Beats</a>
        <a href="#" className="text-darkBrown hover:text-electricBlue">Premium Beats</a>
        <a href="#" className="text-darkBrown hover:text-electricBlue">License Info</a>
        <a href="#" className="text-darkBrown hover:text-electricBlue">FAQ</a>
        <a href="#" className="text-darkBrown hover:text-electricBlue">Contact</a>
      </nav>
      <button className="bg-electricBlue text-white py-2 px-4 rounded">Sign Up / Log In</button>
    </header>
  );
};

export default Header;
