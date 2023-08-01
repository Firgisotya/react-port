import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";
import SwitchMode from "./SwitchMode";

const Navbar = ({ children }) => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="">
      <div className="fixed w-full z-10 max-md:hidden">
        <div className="flex justify-center py-4">
          <nav className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 p-5 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
            <Link
              className="my-1 text-sm font-medium hover:text-indigo-500 md:mx-4 md:my-0"
              to="/"
            >
              Home
            </Link>
            <Link
              className="my-1 text-sm font-medium hover:text-indigo-500 md:mx-4 md:my-0"
              to="/about"
            >
              About
            </Link>
            <Link
              className="my-1 text-sm font-medium hover:text-indigo-500 md:mx-4 md:my-0"
              to="/skill"
            >
              Skills
            </Link>
            <Link
              className="my-1 text-sm font-medium hover:text-indigo-500 md:mx-4 md:my-0"
              to="/project"
            >
              Projects
            </Link>
            <Link
              className="my-1 text-sm font-medium hover:text-indigo-500 md:mx-4 md:my-0"
              to="/contact"
            >
              Contact Us
            </Link>
            <SwitchMode />
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full max-md:h-full py-32">
        {children}
      </div>
    </div>
  );
};

export default Navbar;
