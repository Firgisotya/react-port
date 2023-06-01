import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import profile from "../assets/1.png";

const Home = () => {
  return (
      <div className="flex flex-row justify-evenly flex-wrap-reverse">
        <div className="flex justify-center flex-col w-1/2">
          <div className="flex flex-col justify-center">
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
              Freelancer providing services for programming and design content
              needs. Join me down below and let's get cracking!
            </p>
          </div>
          <div className="text-5xl flex gap-2 py-3 text-gray-600">
            <a href="" target="_blank">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/Firgisotya" target="_blank">
              <AiFillGithub />
            </a>
          </div>
          <div className="flex items-center gap-16 py-3 text-gray-600">
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
  );
};

export default Home;
