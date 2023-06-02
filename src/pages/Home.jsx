import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiGmail } from "react-icons/si";

import profile from "../assets/1.png";
import hero from "../assets/hero.svg";
import si from "../assets/gif/si.gif"
import apiGif from "../assets/gif/api.gif"

const Home = () => {
  return (
    <div className="h-screen max-md:h-full">
      <div className="container mx-auto">
        <div className="flex flex-row justify-evenly flex-wrap-reverse">
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
              <a
                className="bg-gradient-to-r from-sky-400 to-blue-500 text-white px-4 py-2 border-none rounded-full hover:shadow-lg hover:opacity-80 w-[200px] h-[60px] text-3xl text-center"
                href="#"
              >
                Resume
              </a>
            </div>
          </div>
          <div className="flex justify-center flex-col w-1/2 max-md:w-full">
            <img src={hero} alt="" data-aos="fade-left" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
