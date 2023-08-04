import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";
import SwitchMode from "./SwitchMode";

const NavbarMobile = ({children}) => {
  return (

    <div className="">
      <div className="fixed w-full z-10 md:hidden bottom-0">
        <div className="flex justify-center py-4">
          <nav className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 p-5 rounded-lg shadow-lg flex flex-row items-center backdrop-blur-xl">
            <Link
              className="my-1 px-1 text-xs sm:text-sm font-medium bg-white shadow-md shadow-slate-400 rounded-md hover:text-blue-500 dark:bg-slate-700 dark:shadow-slate-800 mx-1 sm:mx-4 md:my-0"
              to="/"
            >
              <i className="far fa-home text-2xl pt-1" />
            </Link>
            <Link
              className="my-1 px-1 text-xs sm:text-sm font-medium bg-white shadow-md shadow-slate-400 rounded-md hover:text-blue-500 dark:bg-slate-700 dark:shadow-slate-800 mx-1 sm:mx-4 md:my-0"
              to="/about"
            >
              <i className="fal fa-address-card text-2xl pt-1" />
            </Link>
            <Link
              className="my-1 px-1 text-xs sm:text-sm font-medium bg-white shadow-md shadow-slate-400 rounded-md hover:text-blue-500 dark:bg-slate-700 dark:shadow-slate-800 mx-1 sm:mx-4 md:my-0"
              to="/skill"
            >
              <i className="far fa-cogs text-2xl pt-1" />
            </Link>
            <Link
              className="my-1 px-1 text-xs sm:text-sm font-medium bg-white shadow-md shadow-slate-400 rounded-md hover:text-blue-500 dark:bg-slate-700 dark:shadow-slate-800 mx-1 sm:mx-4 md:my-0"
              to="/project"
            >
               <i className="far fa-folder text-2xl pt-1" />
            </Link>
            <Link
              className="my-1 px-1 text-xs sm:text-sm font-medium bg-white shadow-md shadow-slate-400 rounded-md hover:text-blue-500 dark:bg-slate-700 dark:shadow-slate-800 mx-1 sm:mx-4 md:my-0"
              to="/contact"
            >
              <i className="far fa-envelope text-2xl pt-1" />
            </Link>
            <SwitchMode />
          </nav>
        </div>
      </div>
    </div>

  )
}

export default NavbarMobile