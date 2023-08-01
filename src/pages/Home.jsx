import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiGmail } from "react-icons/si";

import cv from "../assets/cv.pdf";
import hero from "../assets/hero.svg";
import p1 from "../assets/p1.svg";
import p2 from "../assets/p2.svg";
import si from "../assets/gif/si.gif";
import apiGif from "../assets/gif/api.gif";
import profile from "../assets/1.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import mongo from "../assets/mongo.png";
import aws from "../assets/aws.png";
import firebase from "../assets/firebase.png";
import npm from "../assets/npm.png";
import angular from "../assets/angular.png";
import java from "../assets/java.png";
import laravel from "../assets/laravel.png";
import mysql from "../assets/mysql.png";
import php from "../assets/php.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";
import python from "../assets/python.png";

import LaravelData from "../data/LaravelData.json";
import ReactData from "../data/ReactData.json";
import AngularData from "../data/AngularData.json";
import PythonData from "../data/PythonData.json";

import { motion } from "framer-motion";

const Home = () => {
  console.log(LaravelData.Laravel[0]);
  return (
    <div className="max-md:h-full">
      <div className="container mx-auto">
        {/* home */}
        <div className="flex flex-row justify-evenly flex-wrap-reverse mb-20">
          <div className="flex justify-center flex-col w-1/2 max-md:w-full">
            <div className="flex flex-col justify-center">
              <h1 className="text-6xl font-bold" data-aos="fade-right">
                Hi,
                <br />
                I'm{" "}
                <span
                  className="text-sky-600 font-medium dark:text-sky-400"
                  data-aos="fade-right"
                >
                  Firgi Sotya I.
                </span>
              </h1>
              <br />
              <h2 className="text-2xl font-bold" data-aos="fade-right">
                Full Stack Developer
              </h2>
              <p className="mt-4 text-xl" data-aos="fade-right">
                Freelancer providing services for programming and design content
                needs. Join me down below and let's get cracking!
              </p>
            </div>
            <div
              className="text-5xl flex gap-2 py-3 text-gray-600"
              data-aos="fade-right"
            >
              <a
                href="https://www.linkedin.com/in/firgi-sotya-izzuddin-348b80221/"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/Firgisotya" target="_blank">
                <AiFillGithub />
              </a>
              <a href="mailto:zzuuddiinn28@gmail.com" target="_blank">
                <SiGmail />
              </a>
              <a href="https://t.me/Firgi_Sotya" target="_blank">
                <FaTelegramPlane />
              </a>
            </div>
            <div
              className="flex items-center gap-16 py-3 text-gray-600"
              data-aos="fade-right"
            >
              <motion.a
                href={cv}
                target="_blank"
                className="bg-gradient-to-r from-sky-400 to-blue-500 text-white px-4 py-2 border-none rounded-full hover:shadow-lg hover:opacity-80 w-[200px] h-[60px] text-3xl text-center"
                whileHover={{ scale: 1.2 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
              >
                Resume
              </motion.a>
            </div>
          </div>
          <div className="flex justify-center flex-col w-1/2 max-md:w-full">
            <img src={p2} alt="" data-aos="fade-left" />
          </div>
        </div>

        {/* about */}
        <div className="flex flex-col items-center justify-center">
          <h1
            className="text-5xl font-bold text-center pb-10"
            data-aos="fade-down"
          >
            <span className="text-sky-600 font-medium dark:text-sky-400">
              About Me
            </span>
          </h1>

          <div className="flex flex-col md:flex-row justify-evenly items-center md:mb-20">
            <div className="flex justify-center md:w-1/2 max-md:w-full">
              <div
                className="mx-auto bg-gradient-to-b from-sky-400 rounded-full w-80 h-80 relative overflow-hidden md:h-96 md:w-96"
                data-aos="fade-right"
              >
                <img src={profile} alt="" layout="fill" objectFit="cover" />
              </div>
            </div>
            <div className="flex justify-center md:w-1/2 max-md:w-full">
              <p className="text-2xl md:px-4" data-aos="fade-left">
                I am a Full Stack Web Developer with approximately 3 years
                experience with expertise in responsive design and SEO
                optimization. I have knowledge in the programming language
                Javascript, PHP, Java and the use of frameworks such as Node.js,
                React.js, Laravel. I also have skills in client needs analysis
                and good teamwork.
              </p>
            </div>
          </div>
        </div>

        {/* skill */}
        <div className="flex flex-col items-center justify-center mb-20">
          <h1
            className="text-5xl font-bold text-center pb-10"
            data-aos="fade-down"
          >
            <span className="text-sky-600 font-medium dark:text-sky-400">
              Skills
            </span>
          </h1>
          <div className="flex md:flex-row max-md:flex-col justify-evenly flex-wrap w-full px-14">
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5"
              data-aos="zoom-in"
            >
              <div class="max-w-sm rounded overflow-hidden bg-gradient-to-b from-sky-400 to-blue-500 shadow-lg justify-center flex  ">
                <img src={html} className="p-5 h-28 drop-shadow-lg" />
              </div>
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5"
              data-aos="zoom-in"
            >
              <div class="max-w-sm rounded overflow-hidden bg-gradient-to-b from-sky-400 to-blue-500 shadow-lg justify-center flex ">
                <img src={css} className="p-5 h-28 drop-shadow-lg" />
              </div>
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5"
              data-aos="zoom-in"
            >
              <div class="max-w-sm rounded overflow-hidden bg-gradient-to-b from-sky-400 to-blue-500 shadow-lg justify-center flex ">
                <img src={js} className="p-5 h-28 drop-shadow-lg" />
              </div>
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5"
              data-aos="zoom-in"
            >
              <div class="max-w-sm rounded overflow-hidden bg-gradient-to-b from-sky-400 to-blue-500 shadow-lg justify-center flex ">
                <img src={react} className="p-5 h-28 drop-shadow-lg" />
              </div>
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5"
              data-aos="zoom-in"
            >
              <div class="max-w-sm rounded overflow-hidden bg-gradient-to-b from-sky-400 to-blue-500 shadow-lg justify-center flex ">
                <img src={node} className="p-5 h-28 drop-shadow-lg" />
              </div>
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5"
              data-aos="zoom-in"
            >
              <div class="max-w-sm rounded overflow-hidden bg-gradient-to-b from-sky-400 to-blue-500 shadow-lg justify-center flex ">
                <img src={laravel} className="p-5 h-28 drop-shadow-lg" />
              </div>
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5"
              data-aos="zoom-in"
            >
              <div class="max-w-sm rounded overflow-hidden bg-gradient-to-b from-sky-400 to-blue-500 shadow-lg justify-center flex ">
                <img src={angular} className="p-5 h-28 drop-shadow-lg" />
              </div>
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5"
              data-aos="zoom-in"
            >
              <div class="max-w-sm rounded overflow-hidden bg-gradient-to-b from-sky-400 to-blue-500 shadow-lg justify-center flex ">
                <img src={mysql} className="p-5 h-28 drop-shadow-lg" />
              </div>
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5"
              data-aos="zoom-in"
            >
              <div class="max-w-sm rounded overflow-hidden bg-gradient-to-b from-sky-400 to-blue-500 shadow-lg justify-center flex ">
                <img src={php} className="p-5 h-28 drop-shadow-lg" />
              </div>
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5"
              data-aos="zoom-in"
            >
              <div class="max-w-sm rounded overflow-hidden bg-gradient-to-b from-sky-400 to-blue-500 shadow-lg justify-center flex ">
                <img src={java} className="p-5 h-28 drop-shadow-lg" />
              </div>
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5"
              data-aos="zoom-in"
            >
              <div class="max-w-sm rounded overflow-hidden bg-gradient-to-b from-sky-400 to-blue-500 shadow-lg justify-center flex ">
                <img src={bootstrap} className="p-5 h-28 drop-shadow-lg" />
              </div>
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5"
              data-aos="zoom-in"
            >
              <div class="max-w-sm rounded overflow-hidden bg-gradient-to-b from-sky-400 to-blue-500 shadow-lg justify-center flex ">
                <img src={npm} className="p-5 h-28 drop-shadow-lg" />
              </div>
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5"
              data-aos="zoom-in"
            >
              <div class="max-w-sm rounded overflow-hidden bg-gradient-to-b from-sky-400 to-blue-500 shadow-lg justify-center flex ">
                <img src={tailwind} className="p-5 h-28 drop-shadow-lg" />
              </div>
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5"
              data-aos="zoom-in"
            >
              <div class="max-w-sm rounded overflow-hidden bg-gradient-to-b from-sky-400 to-blue-500 shadow-lg justify-center flex ">
                <img src={firebase} className="p-5 h-28 drop-shadow-lg" />
              </div>
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5"
              data-aos="zoom-in"
            >
              <div class="max-w-sm rounded overflow-hidden bg-gradient-to-b from-sky-400 to-blue-500 shadow-lg justify-center flex ">
                <img src={python} className="p-5 h-28 drop-shadow-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* project */}
        <div className="flex flex-col items-center justify-center mb-20">
          <h1
            className="text-5xl font-bold text-center pb-10"
            data-aos="fade-down"
          >
            <span className="text-sky-600 font-medium dark:text-sky-400">
              My Projects
            </span>
          </h1>

          <div className="grid grid-cols-3 gap-2 max-md:grid-cols-1">  
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="p-8 rounded-t-lg"
                  src={LaravelData.Laravel[0].image}
                  alt=""
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {LaravelData.Laravel[0].name}
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {LaravelData.Laravel[0].description}
                </p>
                <div className="flex items-center mt-2.5 mb-5">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    Laravel
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    Bootstrap
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    Mysql
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="p-8 rounded-t-lg"
                  src={ReactData.React[0].image[1]}
                  alt=""
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {ReactData.React[0].name}
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {ReactData.React[0].description}
                </p>
                <div className="flex items-center mt-2.5 mb-5">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    ReactJs
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    Tailwind
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    Firebase
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="p-8 rounded-t-lg"
                  src={LaravelData.Laravel[1].image}
                  alt=""
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {LaravelData.Laravel[1].name}
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {LaravelData.Laravel[1].description}
                </p>
                <div className="flex items-center mt-2.5 mb-5">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    Laravel
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    Bootstrap
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    Mysql
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* contact */}
        <div className="flex flex-col items-center justify-center mb-20">
          <h1
            className="text-5xl font-bold text-center pb-10"
            data-aos="fade-down"
          >
            <span className="text-sky-600 font-medium dark:text-sky-400">
              Hire Me
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
