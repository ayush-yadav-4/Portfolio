import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from './changingtext';
const Herosection2 = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-left">
          <h2 className="text-4xl font-bold text-gray-800 lg:text-6xl">E-Cell IIT BHU</h2>
          <Typewriter />
          <p className="mt-2 text-lg text-gray-600">Welcome to the entrepreneurship community of IIT BHU where we ideate, iterate, and incubate the future innovations of the century!</p>
          <button className="mt-6 px-4 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-400">Get Started!</button>
        </div>
        <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
          <img src={''} alt="Illustration" className="w-3/4 lg:w-full" />
        </div>
      </div>
    </div>
  );
};

export default Herosection2;
