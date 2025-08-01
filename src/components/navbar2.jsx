// src/components/Navbar.js
import React from 'react';

const Navbar2 = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold text-gray-700">
            <a href="#" className="text-2xl font-bold text-gray-800 lg:text-3xl">
            
            </a>
          </div>
        </div>
        <div className="flex md:items-center">
          <div className="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
            <a href="#" className="my-1 text-sm text-gray-700 leading-5 hover:text-gray-600 md:mx-4 md:my-0">Home</a>
            <a href="#" className="my-1 text-sm text-gray-700 leading-5 hover:text-gray-600 md:mx-4 md:my-0">Projects</a>
            <a href="#" className="my-1 text-sm text-gray-700 leading-5 hover:text-gray-600 md:mx-4 md:my-0">Skills</a>
            <a href="#" className="my-1 text-sm text-gray-700 leading-5 hover:text-gray-600 md:mx-4 md:my-0">Contact Me</a>
            <a href="#" className="my-1 text-sm text-gray-700 leading-5 hover:text-gray-600 md:mx-4 md:my-0">Socials</a>
         
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
