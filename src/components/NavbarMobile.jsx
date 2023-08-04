import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";
import SwitchMode from "./SwitchMode";

const NavbarMobile = ({children}) => {
  return (
    // <div className=" w-full md:hidden">
    //   <div className="sticky top-0 insert-x-0  px-7 w-full bg-white dark:bg-slate-900 shadow-lg mb-5">
    //             <div className="flex">
    //               <div className="flex-auto hover:w-full group">
    //                 <Link
    //                   to="/"
    //                   className="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500"
    //                 >
    //                   <span className="block px-1 py-1 border border-transparent group-hover:border-indigo-500 rounded-full group-hover:flex-grow">
    //                     <i className="far fa-home text-2xl pt-1" />
    //                     <span className="hidden group-hover:inline-block ml-3 align-bottom pb-1">
    //                       Home
    //                     </span>
    //                   </span>
    //                 </Link>
    //               </div>
    //               <div className="flex-auto hover:w-full group">
    //                 <Link
    //                   to="/about"
    //                   className="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500"
    //                 >
    //                   <span className="block px-1 py-1 border border-transparent group-hover:border-indigo-500 rounded-full group-hover:flex-grow">
    //                     <i className="fal fa-address-card text-2xl pt-1" />
    //                     <span className="hidden group-hover:inline-block ml-3 align-bottom pb-1">
    //                       About
    //                     </span>
    //                   </span>
    //                 </Link>
    //               </div>
    //               <div className="flex-auto hover:w-full group">
    //                 <Link
    //                   to="/skill"
    //                   className="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500"
    //                 >
    //                   <span className="block px-1 py-1 border border-transparent group-hover:border-indigo-500 rounded-full group-hover:flex-grow">
    //                     <i className="far fa-cogs text-2xl pt-1" />
    //                     <span className="hidden group-hover:inline-block ml-3 align-bottom pb-1">
    //                       Skill
    //                     </span>
    //                   </span>
    //                 </Link>
    //               </div>
    //               <div className="flex-auto hover:w-full group">
    //                 <Link
    //                   to="/project"
    //                   className="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500"
    //                 >
    //                   <span className="block px-1 py-1 border border-transparent group-hover:border-indigo-500 rounded-full group-hover:flex-grow">
    //                     <i className="far fa-folder text-2xl pt-1" />
    //                     <span className="hidden group-hover:inline-block ml-3 align-bottom pb-1">
    //                       Projects
    //                     </span>
    //                   </span>
    //                 </Link>
    //               </div>
    //               <div className="flex-auto hover:w-full group">
    //                 <Link
    //                   to="/contact"
    //                   className="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500"
    //                 >
    //                   <span className="block px-1 py-1 border border-transparent group-hover:border-indigo-500 rounded-full group-hover:flex-grow">
    //                     <i className="far fa-envelope text-2xl pt-1" />
    //                     <span className="hidden group-hover:inline-block ml-3 align-bottom pb-1">
    //                       Contact
    //                     </span>
    //                   </span>
    //                 </Link>
    //               </div>
    //             </div>
    //           </div>    
    //   </div>

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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full max-md:h-full py-32">
        {children}
      </div>
    </div>

  )
}

export default NavbarMobile