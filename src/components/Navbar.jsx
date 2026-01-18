import React, { useState } from "react";
import bvdu from "./bvdu.jpeg";
// Assuming imed_logo is in your public folder or imported
// import imed_logo from "./imed_logo.jpg"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 bg-white backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-center py-2 md:py-4">
          
          <div className="flex-shrink-0 flex items-center">
            <a href="https://www.bvuniversity.edu.in/">
              {/* Responsive logo size: h-12 mobile, h-20 desktop */}
              <img 
                src={bvdu} 
                alt="BVDU Logo" 
                className="h-14 w-14 md:h-20 md:w-20 object-contain" 
              />
            </a>
          </div>

          {/* Center Text - Responsive Sizing */}
          <div className="flex flex-col items-center text-center px-2">
            <h2 className="font-bold text-[10px] xs:text-xs sm:text-sm md:text-base leading-tight text-gray-900">
              BHARATI VIDYAPEETH <span className="hidden xs:inline">(Deemed to be University)</span>
            </h2>
            <h2 className="font-bold text-[9px] xs:text-[10px] sm:text-xs md:text-sm text-gray-800 mt-0.5 md:mt-1 leading-tight">
              INSTITUTE OF MANAGEMENT AND ENTREPRENEURSHIP DEVELOPMENT, PUNE
            </h2>
            <p className="text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs text-gray-600 mt-0.5 md:mt-1 font-medium">
              NAAC A++ | NIRF 59th Rank | Category-I University
            </p>
          </div>

          {/* Right Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="https://www.bvuniversity.edu.in/imed/">
              {/* Responsive logo size */}
              <img 
                src="./imed_logo.jpg" 
                alt="IMED Logo" 
                className="h-10 w-auto md:h-16 object-contain" 
              />
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;