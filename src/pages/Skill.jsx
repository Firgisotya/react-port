import React from "react";
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

const Skill = () => {
  return (
    <div className="h-screen max-md:h-full">
      <div className="container mx-auto">
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
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5 duration-0 ease-in-out cursor-pointer filter grayscale hover:scale-102 hover:filter-none"
              data-aos="zoom-in"
            >
              <img src={html} className="p-5 drop-shadow-lg" />
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5 duration-0 ease-in-out cursor-pointer filter grayscale hover:scale-102 hover:filter-none"
              data-aos="zoom-in"
            >
              <img src={css} className="p-5 drop-shadow-lg" />
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5 duration-0 ease-in-out cursor-pointer filter grayscale hover:scale-102 hover:filter-none"
              data-aos="zoom-in"
            >
              <img src={js} className="p-5 drop-shadow-lg" />
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5 duration-0 ease-in-out cursor-pointer filter grayscale hover:scale-102 hover:filter-none"
              data-aos="zoom-in"
            >
              <img src={react} className="p-5 drop-shadow-lg" />
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5 duration-0 ease-in-out cursor-pointer filter grayscale hover:scale-102 hover:filter-none"
              data-aos="zoom-in"
            >
              <img src={node} className="p-5 drop-shadow-lg" />
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5 duration-0 ease-in-out cursor-pointer filter grayscale hover:scale-102 hover:filter-none"
              data-aos="zoom-in"
            >
              <img src={laravel} className="p-5 drop-shadow-lg" />
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5 duration-0 ease-in-out cursor-pointer filter grayscale hover:scale-102 hover:filter-none"
              data-aos="zoom-in"
            >
              <img src={angular} className="p-5 drop-shadow-lg" />
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5 duration-0 ease-in-out cursor-pointer filter grayscale hover:scale-102 hover:filter-none"
              data-aos="zoom-in"
            >
              <img src={mysql} className="p-5 drop-shadow-lg" />
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5 duration-0 ease-in-out cursor-pointer filter grayscale hover:scale-102 hover:filter-none"
              data-aos="zoom-in"
            >
              <img src={php} className="p-5 drop-shadow-lg" />
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5 duration-0 ease-in-out cursor-pointer filter grayscale hover:scale-102 hover:filter-none"
              data-aos="zoom-in"
            >
              <img src={java} className="p-5 drop-shadow-lg" />
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5 duration-0 ease-in-out cursor-pointer filter grayscale hover:scale-102 hover:filter-none"
              data-aos="zoom-in"
            >
              <img src={bootstrap} className="p-5 drop-shadow-lg" />
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5 duration-0 ease-in-out cursor-pointer filter grayscale hover:scale-102 hover:filter-none"
              data-aos="zoom-in"
            >
              <img src={npm} className="p-5 drop-shadow-lg" />
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5 duration-0 ease-in-out cursor-pointer filter grayscale hover:scale-102 hover:filter-none"
              data-aos="zoom-in"
            >
              <img src={tailwind} className="p-5 drop-shadow-lg" />
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5 duration-0 ease-in-out cursor-pointer filter grayscale hover:scale-102 hover:filter-none"
              data-aos="zoom-in"
            >
              <img src={firebase} className="p-5 drop-shadow-lg" />
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5 duration-0 ease-in-out cursor-pointer filter grayscale hover:scale-102 hover:filter-none"
              data-aos="zoom-in"
            >
              <img src={python} className="p-5 drop-shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
