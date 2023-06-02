import { React, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import react from "../assets/react.png";
import laravel from "../assets/laravel.png";
import angular from "../assets/angular.png";
import python from "../assets/python.png";

import LaravelData from "../data/LaravelData.json";
import ReactData from "../data/ReactData.json";
import AngularData from "../data/AngularData.json";
import PythonData from "../data/PythonData.json";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState("laravel");

  // Function to handle tab selection
  const handleTabSelect = (tabSelect) => {
    setSelectedTab(tabSelect);
  };


  return (
    <div className="w-full px-2 py-4 sm:px-0">
      <div className="flex justify-center items-center">
        <div data-aos="zoom-in" className="flex max-md:w-full bg-gray-100 hover:bg-gray-200 rounded-lg transition p-1 dark:bg-gray-700 dark:hover:bg-gray-600">
          <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <li className="mr-2">
              <a
                href="#"
                className={`flex items-center inline-block rounded-lg px-4 py-3  ${
                  selectedTab === "laravel"
                    ? "text-black dark:text-white bg-gradient-to-r from-sky-400 to-blue-500"
                    : "rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                }`}
                onClick={() => handleTabSelect("laravel")}
              >
                <img src={laravel} alt="laravel" className="w-8" />
                <span className="ml-2 text-xl">Laravel</span>
              </a>
            </li>
            <li className="mr-2">
              <a
                href="#"
                className={`flex items-center inline-block rounded-lg px-4 py-3 ${
                  selectedTab === "react"
                    ? "text-black dark:text-white bg-gradient-to-r from-sky-400 to-blue-500"
                    : "rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                }`}
                onClick={() => handleTabSelect("react")}
              >
                <img src={react} alt="react" className="w-8" />
                <span className="ml-2 text-xl">React</span>
              </a>
            </li>
            <li className="mr-2">
              <a
                href="#"
                className={`flex items-center inline-block rounded-lg px-4 py-3 ${
                  selectedTab === "angular"
                    ? "text-black dark:text-white bg-gradient-to-r from-sky-400 to-blue-500"
                    : "rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                }`}
                onClick={() => handleTabSelect("angular")}
              >
                <img src={angular} alt="angular" className="w-8" />
                <span className="ml-2 text-xl">Angular</span>
              </a>
            </li>
            <li className="mr-2">
              <a
                href="#"
                className={`flex items-center inline-block rounded-lg px-4 py-3 ${
                  selectedTab === "python"
                    ? "text-black dark:text-white bg-gradient-to-r from-sky-400 to-blue-500"
                    : "rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                }`}
                onClick={() => handleTabSelect("python")}
              >
                <img src={python} alt="python" className="w-8" />
                <span className="ml-2 text-xl">Python</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-3 justify-center items-center" data-aos="zoom-in">
        {/* laravel */}
        <div id="laravel" className={selectedTab === "laravel" ? "" : "hidden"}>
          {LaravelData.Laravel.map((item, index) => (
            <div className="pb-10">
              <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-row justify-evenly flex-wrap">
                  <div className="flex justify-center flex-col w-1/2 p-4 max-md:w-full">
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {item.name}
                    </h5>

                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                      {item.description}
                    </p>
                    <a
                      href={item.link}
                      className="inline-flex items-center text-blue-600 hover:underline"
                    >
                      Demo
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </a>
                  </div>
                  <div className="flex justify-center flex-col w-1/2 p-4 max-md:w-full">
                    <Swiper
                      modules={[
                        Navigation,
                        Pagination,
                        Scrollbar,
                        A11y,
                        EffectFade,
                        Autoplay,
                      ]}
                      spaceBetween={50}
                      slidesPerView={1}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      navigation
                      pagination={{ clickable: true }}
                      scrollbar={{ draggable: true }}
                      effect="fade"
                      className="mySwiper w-full"
                    >
                      {item.image.map((img, index) => (
                        <SwiperSlide key={index}>
                          <img src={img} alt="img" className="w-full" />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* react */}
        <div id="react" className={selectedTab === "react" ? "" : "hidden"}>
        {ReactData.React.map((item, index) => (
            <div className="pb-10">
              <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-row justify-evenly flex-wrap">
                  <div className="flex justify-center flex-col w-1/2 p-4 max-md:w-full">
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {item.name}
                    </h5>

                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                      {item.description}
                    </p>
                    <a
                      href={item.link}
                      className="inline-flex items-center text-blue-600 hover:underline"
                    >
                      Demo
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </a>
                  </div>
                  <div className="flex justify-center flex-col w-1/2 p-4 max-md:w-full">
                    <Swiper
                      modules={[
                        Navigation,
                        Pagination,
                        Scrollbar,
                        A11y,
                        EffectFade,
                        Autoplay,
                      ]}
                      spaceBetween={50}
                      slidesPerView={1}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      navigation
                      pagination={{ clickable: true }}
                      scrollbar={{ draggable: true }}
                      effect="fade"
                      className="mySwiper w-full"
                    >
                      {item.image.map((img, index) => (
                        <SwiperSlide key={index}>
                          <img src={img} alt="img" className="w-full" />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* angular */}
        <div id="angular" className={selectedTab === "angular" ? "" : "hidden"}>
        {AngularData.Angular.map((item, index) => (
            <div className="pb-10">
              <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-row justify-evenly flex-wrap">
                  <div className="flex justify-center flex-col w-1/2 p-4 max-md:w-full">
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {item.name}
                    </h5>

                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                      {item.description}
                    </p>
                    <a
                      href={item.link}
                      className="inline-flex items-center text-blue-600 hover:underline"
                    >
                      Demo
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </a>
                  </div>
                  <div className="flex justify-center flex-col w-1/2 p-4 max-md:w-full">
                    <Swiper
                      modules={[
                        Navigation,
                        Pagination,
                        Scrollbar,
                        A11y,
                        EffectFade,
                        Autoplay,
                      ]}
                      spaceBetween={50}
                      slidesPerView={1}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      navigation
                      pagination={{ clickable: true }}
                      scrollbar={{ draggable: true }}
                      effect="fade"
                      className="mySwiper w-full"
                    >
                      {item.image.map((img, index) => (
                        <SwiperSlide key={index}>
                          <img src={img} alt="img" className="w-full" />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* python */}
        <div id="python" className={selectedTab === "python" ? "" : "hidden"}>
        {PythonData.Python.map((item, index) => (
            <div className="pb-10">
              <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-row justify-evenly flex-wrap">
                  <div className="flex justify-center flex-col w-1/2 p-4 max-md:w-full">
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {item.name}
                    </h5>

                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                      {item.description}
                    </p>
                    <a
                      href={item.link}
                      className="inline-flex items-center text-blue-600 hover:underline"
                    >
                      Demo
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </a>
                  </div>
                  <div className="flex justify-center flex-col w-1/2 p-4 max-md:w-full">
                    <Swiper
                      modules={[
                        Navigation,
                        Pagination,
                        Scrollbar,
                        A11y,
                        EffectFade,
                        Autoplay,
                      ]}
                      spaceBetween={50}
                      slidesPerView={1}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      navigation
                      pagination={{ clickable: true }}
                      scrollbar={{ draggable: true }}
                      effect="fade"
                      className="mySwiper w-full"
                    >
                      {item.image.map((img, index) => (
                        <SwiperSlide key={index}>
                          <img src={img} alt="img" className="w-full" />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
