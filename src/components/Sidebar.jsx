// src/components/Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-cream p-6 rounded shadow-md">
      <h3 className="text-darkBrown font-lufga text-xl">Sign up for our Newsletter</h3>
      <input
        type="email"
        className="w-full mt-4 p-2 text-darkBrown rounded outline-none"
        placeholder="Enter your email"
      />
      <button className="mt-4 bg-electricBlue text-white py-2 px-4 rounded">Subscribe</button>
    </aside>
  );
};

export default Sidebar;
