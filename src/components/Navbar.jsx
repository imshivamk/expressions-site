import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 bg-white backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="w-52 h-full 0 rounded flex items-center justify-center text-white text-xs font-bold">
              <img src="public/bvdu.webp" alt="" />
            </div>
          </div>


          <div className="flex-shrink-0 flex items-center">
            <div className="w-28 h-full 0 rounded flex items-center justify-center text-white text-xs font-bold">
              <img src="public/imed_logo.jpg" alt="" />
            </div>
          </div>

          {/* Desktop Menu */}
          {/* <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Schedule', 'Committee', 'Sponsorship'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200">
                {item}
              </a>
            ))}
            <a href="#register" className="bg-indigo-600 text-white px-4 py-2 rounded-full font-medium hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg">
              Register
            </a>
          </div> */}

          {/* Hamburger Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-xl">
            {['Home', 'About', 'Schedule', 'Committee', 'Sponsorship'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <a href="#register" className="block w-full text-center mt-4 bg-indigo-600 text-white px-4 py-3 rounded-lg font-bold shadow-md">
              Register Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;