import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
import { BsFillSunFill } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import html from "./assets/html.png";
import profile from "./assets/1.png";
import css from "./assets/css.png";
import js from "./assets/javascript.png";
import react from "./assets/react.png";
import node from "./assets/node.png";
import mongo from "./assets/mongo.png";
import aws from "./assets/aws.png";
import firebase from "./assets/firebase.png";
import npm from "./assets/npm.png";
import angular from "./assets/angular.png";
import java from "./assets/java.png";
import laravel from "./assets/laravel.png";
import mysql from "./assets/mysql.png";
import php from "./assets/php.png";
import tailwind from "./assets/tailwind.png";
import bootstrap from "./assets/bootstrap.png";
import python from "./assets/python.png";
import logo from "./assets/l1.png";
import g1 from "./assets/projects/gorent/1.PNG";
import g2 from "./assets/projects/gorent/2.PNG";
import g3 from "./assets/projects/gorent/3.PNG";
import g4 from "./assets/projects/gorent/4.PNG";
import g5 from "./assets/projects/gorent/5.PNG";
import g6 from "./assets/projects/gorent/6.PNG";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {
  const [navbar, setNavbar] = useState(false);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-schema: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="dark:text-gray-100 dark:bg-slate-900 text-black bg-white">
      <nav className="bg-white text-black dark:text-gray-100 dark:bg-gray-900 shadow-lg">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div>
              <a
                className="text-xl font-bold md:text-2xl hover:text-gray-700"
                href="#"
              >
                Logo
              </a>
            </div>
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
              <a
                className="my-1 text-sm font-medium hover:text-indigo-500 md:mx-4 md:my-0"
                href="#"
              >
                Home
              </a>
              <a
                className="my-1 text-sm font-medium hover:text-indigo-500 md:mx-4 md:my-0"
                href="#"
              >
                About
              </a>
              <a
                className="my-1 text-sm font-medium hover:text-indigo-500 md:mx-4 md:my-0"
                href="#"
              >
                Skills
              </a>
              <a
                className="my-1 text-sm font-medium hover:text-indigo-500 md:mx-4 md:my-0"
                href="#"
              >
                Projects
              </a>
              <a
                className="my-1 text-sm font-medium hover:text-indigo-500 md:mx-4 md:my-0"
                href="#"
              >
                Contact Us
              </a>

              <button
                onClick={toggleTheme}
                className="flex items-center justify-between px-2 py-2 text-gray-400 bg-white rounded-full shadow-md dark:bg-gray-800 focus:outline-none"
                aria-label="Toggle color mode"
                type="button"
              >
                {theme === "light" ? <BsFillSunFill /> : <BsMoon />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container px-6 mx-auto">
        <section id="home" className="pt-5">
          <div className="container">
            <div className="flex flex-row justify-evenly flex-wrap-reverse">
              <div className="flex justify-center flex-col w-1/2">
                <div className="flex flex-col justify-center px-5">
                  <h1 className="text-6xl font-bold ">
                    Hi,
                    <br />
                    I'm{" "}
                    <span className="text-sky-600 font-medium dark:text-sky-400">
                      Firgi Sotya I.
                    </span>
                  </h1>
                  <br />
                  <h2 className="text-2xl font-bold">Full Stack Developer</h2>
                  <p className="mt-4 text-xl ">
                    Freelancer providing services for programming and design
                    content needs. Join me down below and let's get cracking!
                  </p>
                </div>
                <div className="text-5xl flex gap-2 py-3 px-5 text-gray-600">
                  <a href="" target="_blank">
                    <AiFillLinkedin />
                  </a>
                  <a href="https://github.com/Firgisotya" target="_blank">
                    <AiFillGithub />
                  </a>
                </div>
                <div className="flex items-center gap-16 py-3 px-5 text-gray-600">
                  <a
                    className="bg-gradient-to-r from-sky-400 to-blue-500 text-white px-4 py-2 border-none rounded-full hover:shadow-lg hover:opacity-80 w-[200px] h-[60px] text-3xl text-center"
                    href="#"
                  >
                    Resume
                  </a>
                </div>
              </div>
              <div className="mx-auto bg-gradient-to-b from-sky-400 rounded-full w-80 h-80 relative overflow-hidden md:h-96 md:w-96">
                <img src={profile} alt="" layout="fill" objectFit="cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-40">
          <div className="container mx-auto">
            <div className=" container flex flex-col items-center justify-center">
              <h1 className="text-5xl font-bold text-center pb-10">
                <span className="text-sky-600 font-medium dark:text-sky-400">
                  About Me
                </span>
              </h1>
              <div className="flex flex-row justify-evenly flex-wrap">
                <div className="flex justify-center flex-col w-1/2 max-md:w-full">
                  <div className="mx-auto bg-gradient-to-b from-sky-400 rounded-full w-50 h-50 relative overflow-hidden md:h-96 md:w-96">
                    <img src={profile} alt="" layout="fill" objectFit="cover" />
                  </div>
                </div>
                <div className="flex justify-center flex-col w-1/2  ">
                  <p className="text-xl font-bold">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* skills */}
        <section id="skills" classname="py-40">
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-5xl font-bold text-center pb-10">
                <span className="text-sky-600 font-medium dark:text-sky-400">
                  Skills
                </span>
              </h1>
              <div className="flex flex-row justify-evenly flex-wrap w-full">
                <div className="flex justify-center flex-col p-2 w-1/5">
                  <div class="max-w-sm rounded overflow-hidden bg-gradient-to-b from-sky-400 to-blue-500 shadow-lg justify-center flex  ">
                    <img src={html} className="p-5 h-28 drop-shadow-lg" />
                  </div>
                </div>
                <div className="flex justify-center flex-col p-2 w-1/5">
                  <div class="max-w-sm rounded overflow-hidden bg-gradient-to-b from-sky-400 to-blue-500 shadow-lg justify-center flex ">
                    <img src={css} className="p-5 h-28 drop-shadow-lg" />
                  </div>
                </div>
                <div className="flex justify-center flex-col p-2 w-1/5">
                  <div class="max-w-sm rounded overflow-hidden bg-gradient-to-b from-sky-400 to-blue-500 shadow-lg justify-center flex ">
                    <img src={js} className="p-5 h-28 drop-shadow-lg" />
                  </div>
                </div>
                <div className="flex justify-center flex-col p-2 w-1/5">
                  <div class="max-w-sm rounded overflow-hidden bg-gradient-to-b from-sky-400 to-blue-500 shadow-lg justify-center flex ">
                    <img src={react} className="p-5 h-28 drop-shadow-lg" />
                  </div>
                </div>
                <div className="flex justify-center flex-col p-2 w-1/5">
                  <div class="max-w-sm rounded overflow-hidden bg-gradient-to-b from-sky-400 to-blue-500 shadow-lg justify-center flex ">
                    <img src={node} className="p-5 h-28 drop-shadow-lg" />
                  </div>
                </div>
                <div className="flex justify-center flex-col p-2 w-1/5">
                  <div class="max-w-sm rounded overflow-hidden bg-gradient-to-b from-sky-400 to-blue-500 shadow-lg justify-center flex ">
                    <img src={laravel} className="p-5 h-28 drop-shadow-lg" />
                  </div>
                </div>
                <div className="flex justify-center flex-col p-2 w-1/5">
                  <div class="max-w-sm rounded overflow-hidden bg-gradient-to-b from-sky-400 to-blue-500 shadow-lg justify-center flex ">
                    <img src={angular} className="p-5 h-28 drop-shadow-lg" />
                  </div>
                </div>
                <div className="flex justify-center flex-col p-2 w-1/5">
                  <div class="max-w-sm rounded overflow-hidden bg-gradient-to-b from-sky-400 to-blue-500 shadow-lg justify-center flex ">
                    <img src={mysql} className="p-5 h-28 drop-shadow-lg" />
                  </div>
                </div>
                <div className="flex justify-center flex-col p-2 w-1/5">
                  <div class="max-w-sm rounded overflow-hidden bg-gradient-to-b from-sky-400 to-blue-500 shadow-lg justify-center flex ">
                    <img src={php} className="p-5 h-28 drop-shadow-lg" />
                  </div>
                </div>
                <div className="flex justify-center flex-col p-2 w-1/5">
                  <div class="max-w-sm rounded overflow-hidden bg-gradient-to-b from-sky-400 to-blue-500 shadow-lg justify-center flex ">
                    <img src={java} className="p-5 h-28 drop-shadow-lg" />
                  </div>
                </div>
                <div className="flex justify-center flex-col p-2 w-1/5">
                  <div class="max-w-sm rounded overflow-hidden bg-gradient-to-b from-sky-400 to-blue-500 shadow-lg justify-center flex ">
                    <img src={bootstrap} className="p-5 h-28 drop-shadow-lg" />
                  </div>
                </div>
                <div className="flex justify-center flex-col p-2 w-1/5">
                  <div class="max-w-sm rounded overflow-hidden bg-gradient-to-b from-sky-400 to-blue-500 shadow-lg justify-center flex ">
                    <img src={npm} className="p-5 h-28 drop-shadow-lg" />
                  </div>
                </div>
                <div className="flex justify-center flex-col p-2 w-1/5">
                  <div class="max-w-sm rounded overflow-hidden bg-gradient-to-b from-sky-400 to-blue-500 shadow-lg justify-center flex ">
                    <img src={tailwind} className="p-5 h-28 drop-shadow-lg" />
                  </div>
                </div>
                <div className="flex justify-center flex-col p-2 w-1/5">
                  <div class="max-w-sm rounded overflow-hidden bg-gradient-to-b from-sky-400 to-blue-500 shadow-lg justify-center flex ">
                    <img src={firebase} className="p-5 h-28 drop-shadow-lg" />
                  </div>
                </div>
                <div className="flex justify-center flex-col p-2 w-1/5">
                  <div class="max-w-sm rounded overflow-hidden bg-gradient-to-b from-sky-400 to-blue-500 shadow-lg justify-center flex ">
                    <img src={python} className="p-5 h-28 drop-shadow-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project */}
        <section id="project" classname="py-40">
          <div className="container mx-auto mt-10">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-5xl font-bold text-center pb-10">
                <span className="text-sky-600 font-medium dark:text-sky-400">
                  Projects
                </span>
              </h1>

              <ul className="mx-auto grid w-full grid-cols-5 gap-x-5 px-8">
                <li className>
                  <input
                    className="peer sr-only"
                    type="radio"
                    defaultValue="react"
                    name="answer"
                    id="react"
                    defaultChecked
                  />
                  <label
                    className="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out"
                    htmlFor="react"
                  >
                    <img src={react} className="p-5 h-20 drop-shadow-lg" />
                  </label>
                  <div className="absolute bg-white shadow-lg p-6 border mt-2 border-indigo-300 rounded-lg w-[80vw] mx-auto transition-all duration-500 ease-in-out  opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1 max-w-sm overflow-hidden shadow-lg">
                    <Swiper
                      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                      spaceBetween={50}
                      slidesPerView={1}
                      navigation={true}
                      pagination={{ clickable: true }}
                      onSlideChange={() => console.log("slide change")}
                      onSwiper={(swiper) => console.log(swiper)}
                    >
                      <SwiperSlide>
                        <img src={g1} />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={g2} />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={g3} />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={g4} />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={g5} />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={g6} />
                      </SwiperSlide>
                      <h1>COBA</h1>
                    </Swiper>
                  </div>
                </li>
                <li className>
                  <input
                    className="peer sr-only"
                    type="radio"
                    defaultValue="laravel"
                    name="answer"
                    id="laravel"
                  />
                  <label
                    className="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-laravelne peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out"
                    htmlFor="laravel"
                  >
                    <img src={laravel} className="p-5 h-20 drop-shadow-lg" />
                  </label>
                  <div className="absolute bg-white shadow-lg left-0 p-6 border mt-2 border-indigo-300 rounded-lg w-[97vw] mx-auto transition-all duration-500 ease-in-out  opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis, voluptatum! Sequi consequatur error nulla
                    quaerat rem fugit provident tempore nihil a aspernatur ad
                    laboriosam, dolor nisi qui? Esse, mollitia? Nostrum? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis, voluptatum! Sequi consequatur error nulla
                    quaerat rem fugit provident tempore nihil a aspernatur ad
                    laboriosam, dolor nisi qui? Esse, mollitia? Nostrum? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis, voluptatum! Sequi consequatur error nulla
                    quaerat rem fugit provident tempore nihil a aspernatur ad
                    laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?
                  </div>
                </li>
                <li className>
                  <input
                    className="peer sr-only"
                    type="radio"
                    defaultValue="node"
                    name="answer"
                    id="node"
                  />
                  <label
                    className="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out "
                    htmlFor="node"
                  >
                    <img src={node} className="p-5 h-20 drop-shadow-lg" />
                  </label>
                  <div className="absolute bg-white shadow-lg left-0 p-6 border mt-2 border-indigo-300 rounded-lg w-[97vw] mx-auto transition-all duration-500 ease-in-out  opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis, voluptatum! Sequi consequatur error nulla
                    quaerat rem fugit provident tempore nihil a aspernatur ad
                    laboriosam, dolor nisi qui? Esse, mollitia? Nostrum? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis, voluptatum! Sequi consequatur error nulla
                    quaerat rem fugit provident tempore nihil a aspernatur ad
                    laboriosam, dolor nisi qui? Esse, mollitia? Nostrum? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis, voluptatum! Sequi consequatur error nulla
                    quaerat rem fugit provident tempore nihil a aspernatur ad
                    laboriosam, dolor nisi qui? Esse, mollitia? Nostrum? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis, voluptatum! Sequi consequatur error nulla
                    quaerat rem fugit provident tempore nihil a aspernatur ad
                    laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?
                  </div>
                </li>
                <li className>
                  <input
                    className="peer sr-only"
                    type="radio"
                    defaultValue="angular"
                    name="answer"
                    id="angular"
                  />
                  <label
                    className="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out "
                    htmlFor="angular"
                  >
                    <img src={angular} className="p-5 h-20 drop-shadow-lg" />
                  </label>
                  <div className="absolute bg-white shadow-lg left-0 p-6 border mt-2 border-indigo-300 rounded-lg w-[97vw] mx-auto transition-all duration-500 ease-in-out  opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis, voluptatum! Sequi consequatur error nulla
                    quaerat rem fugit provident tempore nihil a aspernatur ad
                    laboriosam, dolor nisi qui? Esse, mollitia? Nostrum? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis, voluptatum! Sequi consequatur error nulla
                    quaerat rem fugit provident tempore nihil a aspernatur ad
                    laboriosam, dolor nisi qui? Esse, mollitia? Nostrum? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis, voluptatum! Sequi consequatur error nulla
                    quaerat rem fugit provident tempore nihil a aspernatur ad
                    laboriosam, dolor nisi qui? Esse, mollitia? Nostrum? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis, voluptatum! Sequi consequatur error nulla
                    quaerat rem fugit provident tempore nihil a aspernatur ad
                    laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?
                  </div>
                </li>
                <li className>
                  <input
                    className="peer sr-only"
                    type="radio"
                    defaultValue="java"
                    name="answer"
                    id="java"
                  />
                  <label
                    className="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out "
                    htmlFor="java"
                  >
                    <img src={java} className="p-5 h-20 drop-shadow-lg" />
                  </label>
                  <div className="absolute bg-white shadow-lg left-0 p-6 border mt-2 border-indigo-300 rounded-lg w-[97vw] mx-auto transition-all duration-500 ease-in-out  opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis, voluptatum! Sequi consequatur error nulla
                    quaerat rem fugit provident tempore nihil a aspernatur ad
                    laboriosam, dolor nisi qui? Esse, mollitia? Nostrum? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis, voluptatum! Sequi consequatur error nulla
                    quaerat rem fugit provident tempore nihil a aspernatur ad
                    laboriosam, dolor nisi qui? Esse, mollitia? Nostrum? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis, voluptatum! Sequi consequatur error nulla
                    quaerat rem fugit provident tempore nihil a aspernatur ad
                    laboriosam, dolor nisi qui? Esse, mollitia? Nostrum? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis, voluptatum! Sequi consequatur error nulla
                    quaerat rem fugit provident tempore nihil a aspernatur ad
                    laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
