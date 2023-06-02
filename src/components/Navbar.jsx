import { React, useState, useEffect } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="bg-white text-black dark:text-gray-100 dark:bg-gray-900 shadow-lg">
        <div className="container px-6 py-4 mx-auto md:flex  md:items-center">
          <div className="flex items-center justify-between">
            
            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label="toggle menu"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                    <path
                      className="hidden"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 5H20V7H4V5ZM4 11H20V13H4V11ZM4 17H20V19H4V17Z"
                    />
                    <path
                      className="block"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6 5H20V7H6V5ZM6 11H20V13H6V11ZM6 17H20V19H6V17Z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          {/* Mobile Menu open: "block", Menu closed: "hidden" */}

          <div
            className={`items-center md:flex ${navbar ? "block" : "hidden"}`}
          >
            <div className="flex items-center justify-start flex-col md:flex-row md:mx-6">
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
            </div>
          </div>
        </div>
      </nav>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </div>
  );
};

export default Navbar;
