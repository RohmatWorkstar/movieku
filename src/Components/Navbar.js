import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-w-full bg-[#0EA5E9] text-white fixed top-0 left-0 z-50">
      <div className="flex px-4 md:px-32 justify-between items-center h-16">
        <Link to={"/"} className="text-4xl font-bold">
          Movies
        </Link>
        <div className="hidden md:flex space-x-10 ">
          <Link to="/favorite" onClick={toggleMenu} className="hover:text-blue-700">
            Favorite
          </Link>
          <Link to="/watchlist" onClick={toggleMenu} className="hover:text-blue-700">
            Watchlist
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="bg-black p-4">
          <Link to="/watchlist" onClick={toggleMenu} className="block text-white py-2 hover:text-blue-700">
            Watchlist
          </Link>
          <Link to="/favorite" onClick={toggleMenu} className="block text-white py-2 hover:text-blue-700">
            Favorite
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
