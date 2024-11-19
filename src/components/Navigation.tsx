import React, { useState } from 'react';
import logo from '../../public/images/white-logo.png';

export const Navigation = () => {
  // State to control visibility of mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-transparent px-4 md:px-10">
      {/* Container for navigation */}
      <div className="flex items-center justify-between font-thin py-4 text-sm text-white">
        {/* Logo */}
        <div className="w-2/6 md:w-1/6">
          <img src={logo} alt="Logo" />
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:block ">
          <div className="flex space-x-6 lg:space-x-14">
            <a
              href=""
              className="relative text-white hover:text-white after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#DD6A18] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
            >
              Home
            </a>
            <a
              href=""
              className="relative text-white hover:text-white after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#DD6A18] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
            >
              About Us
            </a>
            <a
              href=""
              className="relative text-white hover:text-white after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#DD6A18] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
            >
              Partners
            </a>
            <a
              href=""
              className="relative text-white hover:text-white after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#DD6A18] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
            >
              Testimonials
            </a>
            <a
              href=""
              className="relative text-white hover:text-white after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#DD6A18] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
            >
              Opportunities
            </a>
            <a
              href=""
              className="relative text-white hover:text-white after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#DD6A18] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="block md:hidden">
          <button
            className="text-[#0737A5] focus:outline-none  bg-white"
            onClick={toggleMenu} // Toggle menu on click
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Popup Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-50 md:hidden">
          <div className="flex flex-col items-center justify-center h-full bg-[#0737A5] text-white space-y-8">
            <a
              href=""
              className="text-white hover:text-[#DD6A18] after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#DD6A18] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
            >
              Home
            </a>
            <a
              href=""
              className="text-white hover:text-[#DD6A18] after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#DD6A18] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
            >
              About Us
            </a>
            <a
              href=""
              className="text-white hover:text-[#DD6A18] after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#DD6A18] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
            >
              Partners
            </a>
            <a
              href=""
              className="text-white hover:text-[#DD6A18] after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#DD6A18] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
            >
              Testimonials
            </a>
            <a
              href=""
              className="text-white hover:text-[#DD6A18] after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#DD6A18] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
            >
              Opportunities
            </a>
            <a
              href=""
              className="text-white hover:text-[#DD6A18] after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#DD6A18] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
            >
              Contact Us
            </a>
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-3 right-4 text-[#0737A5] focus:outline-none  bg-white text-2xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
