import React from 'react'
import { Link } from 'react-router-dom'

const NavbarMobile = () => {
  return (
    <div className="relative w-full md:hidden">
      <div className="absolute insert-x-0  px-7 w-full bg-white dark:bg-slate-900 shadow-lg mb-5">
                <div className="flex">
                  <div className="flex-auto hover:w-full group">
                    <Link
                      to="/"
                      className="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500"
                    >
                      <span className="block px-1 py-1 border border-transparent group-hover:border-indigo-500 rounded-full group-hover:flex-grow">
                        <i className="far fa-home text-2xl pt-1" />
                        <span className="hidden group-hover:inline-block ml-3 align-bottom pb-1">
                          Home
                        </span>
                      </span>
                    </Link>
                  </div>
                  <div className="flex-auto hover:w-full group">
                    <Link
                      to="/about"
                      className="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500"
                    >
                      <span className="block px-1 py-1 border border-transparent group-hover:border-indigo-500 rounded-full group-hover:flex-grow">
                        <i className="fal fa-address-card text-2xl pt-1" />
                        <span className="hidden group-hover:inline-block ml-3 align-bottom pb-1">
                          About
                        </span>
                      </span>
                    </Link>
                  </div>
                  <div className="flex-auto hover:w-full group">
                    <Link
                      to="/skill"
                      className="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500"
                    >
                      <span className="block px-1 py-1 border border-transparent group-hover:border-indigo-500 rounded-full group-hover:flex-grow">
                        <i className="far fa-cogs text-2xl pt-1" />
                        <span className="hidden group-hover:inline-block ml-3 align-bottom pb-1">
                          Skill
                        </span>
                      </span>
                    </Link>
                  </div>
                  <div className="flex-auto hover:w-full group">
                    <Link
                      to="/project"
                      className="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500"
                    >
                      <span className="block px-1 py-1 border border-transparent group-hover:border-indigo-500 rounded-full group-hover:flex-grow">
                        <i className="far fa-folder text-2xl pt-1" />
                        <span className="hidden group-hover:inline-block ml-3 align-bottom pb-1">
                          Projects
                        </span>
                      </span>
                    </Link>
                  </div>
                  <div className="flex-auto hover:w-full group">
                    <Link
                      to="/contact"
                      className="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500"
                    >
                      <span className="block px-1 py-1 border border-transparent group-hover:border-indigo-500 rounded-full group-hover:flex-grow">
                        <i className="far fa-envelope text-2xl pt-1" />
                        <span className="hidden group-hover:inline-block ml-3 align-bottom pb-1">
                          Contact
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>    
      </div>
  )
}

export default NavbarMobile