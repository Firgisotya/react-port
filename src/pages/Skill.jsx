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
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5"
              data-aos="zoom-in"
              style={{ filter: "grayscale(100%)", transition: "0.1s" }}
              onMouseEnter={(e) => (e.target.style.filter = "grayscale(0%)")}
              onMouseLeave={(e) => (e.target.style.filter = "grayscale(100%)")}
            >
              <img src={html} className="p-5 drop-shadow-lg" />
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5"
              data-aos="zoom-in"
              style={{ filter: "grayscale(100%)", transition: "0.1s" }}
              onMouseEnter={(e) => (e.target.style.filter = "grayscale(0%)")}
              onMouseLeave={(e) => (e.target.style.filter = "grayscale(100%)")}
            >
              <img src={css} className="p-5 drop-shadow-lg" />
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5"
              data-aos="zoom-in"
              style={{ filter: "grayscale(100%)", transition: "0.1s" }}
              onMouseEnter={(e) => (e.target.style.filter = "grayscale(0%)")}
              onMouseLeave={(e) => (e.target.style.filter = "grayscale(100%)")}
            >
              <img src={js} className="p-5 drop-shadow-lg" />
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5"
              data-aos="zoom-in"
              style={{ filter: "grayscale(100%)", transition: "0.1s" }}
              onMouseEnter={(e) => (e.target.style.filter = "grayscale(0%)")}
              onMouseLeave={(e) => (e.target.style.filter = "grayscale(100%)")}
            >
              <img src={react} className="p-5 drop-shadow-lg" />
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5"
              data-aos="zoom-in"
              style={{ filter: "grayscale(100%)", transition: "0.1s" }}
              onMouseEnter={(e) => (e.target.style.filter = "grayscale(0%)")}
              onMouseLeave={(e) => (e.target.style.filter = "grayscale(100%)")}
            >
              <img src={node} className="p-5 drop-shadow-lg" />
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5"
              data-aos="zoom-in"
              style={{ filter: "grayscale(100%)", transition: "0.1s" }}
              onMouseEnter={(e) => (e.target.style.filter = "grayscale(0%)")}
              onMouseLeave={(e) => (e.target.style.filter = "grayscale(100%)")}
            >
              <img src={laravel} className="p-5 drop-shadow-lg" />
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5"
              data-aos="zoom-in"
              style={{ filter: "grayscale(100%)", transition: "0.1s" }}
              onMouseEnter={(e) => (e.target.style.filter = "grayscale(0%)")}
              onMouseLeave={(e) => (e.target.style.filter = "grayscale(100%)")}
            >
              <img src={angular} className="p-5 drop-shadow-lg" />
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5"
              data-aos="zoom-in"
              style={{ filter: "grayscale(100%)", transition: "0.1s" }}
              onMouseEnter={(e) => (e.target.style.filter = "grayscale(0%)")}
              onMouseLeave={(e) => (e.target.style.filter = "grayscale(100%)")}
            >
              <img src={mysql} className="p-5 drop-shadow-lg" />
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5"
              data-aos="zoom-in"
              style={{ filter: "grayscale(100%)", transition: "0.1s" }}
              onMouseEnter={(e) => (e.target.style.filter = "grayscale(0%)")}
              onMouseLeave={(e) => (e.target.style.filter = "grayscale(100%)")}
            >
              <img src={php} className="p-5 drop-shadow-lg" />
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5"
              data-aos="zoom-in"
              style={{ filter: "grayscale(100%)", transition: "0.1s" }}
              onMouseEnter={(e) => (e.target.style.filter = "grayscale(0%)")}
              onMouseLeave={(e) => (e.target.style.filter = "grayscale(100%)")}
            >
              <img src={java} className="p-5 drop-shadow-lg" />
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5"
              data-aos="zoom-in"
              style={{ filter: "grayscale(100%)", transition: "0.1s" }}
              onMouseEnter={(e) => (e.target.style.filter = "grayscale(0%)")}
              onMouseLeave={(e) => (e.target.style.filter = "grayscale(100%)")}
            >
              <img src={bootstrap} className="p-5 drop-shadow-lg" />
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5"
              data-aos="zoom-in"
              style={{ filter: "grayscale(100%)", transition: "0.1s" }}
              onMouseEnter={(e) => (e.target.style.filter = "grayscale(0%)")}
              onMouseLeave={(e) => (e.target.style.filter = "grayscale(100%)")}
            >
              <img src={npm} className="p-5 drop-shadow-lg" />
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5"
              data-aos="zoom-in"
              style={{ filter: "grayscale(100%)", transition: "0.1s" }}
              onMouseEnter={(e) => (e.target.style.filter = "grayscale(0%)")}
              onMouseLeave={(e) => (e.target.style.filter = "grayscale(100%)")}
            >
              <img src={tailwind} className="p-5 drop-shadow-lg" />
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5"
              data-aos="zoom-in"
              style={{ filter: "grayscale(100%)", transition: "0.1s" }}
              onMouseEnter={(e) => (e.target.style.filter = "grayscale(0%)")}
              onMouseLeave={(e) => (e.target.style.filter = "grayscale(100%)")}
            >
              <img src={firebase} className="p-5 drop-shadow-lg" />
            </div>
            <div
              className="flex justify-center max-md:flex-row md:flex-col p-2 max-md:w-full md:w-1/5"
              data-aos="zoom-in"
              style={{ filter: "grayscale(100%)", transition: "0.1s" }}
              onMouseEnter={(e) => (e.target.style.filter = "grayscale(0%)")}
              onMouseLeave={(e) => (e.target.style.filter = "grayscale(100%)")}
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
