import React from "react";
import profile from "../assets/1.png";

const About = () => {
  return (
    <div className="container mx-auto">
      <div className=" container flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-center pb-10" data-aos="fade-down">
          <span className="text-sky-600 font-medium dark:text-sky-400">
            About Me
          </span>
        </h1>
        <div className="flex flex-row justify-evenly flex-wrap-reverse">
          <div className="flex justify-center flex-col w-1/2 max-md:w-full">
            <div className="mx-auto bg-gradient-to-b from-sky-400 rounded-full w-80 h-80 relative overflow-hidden md:h-96 md:w-96" data-aos="fade-right">
              <img src={profile} alt="" layout="fill" objectFit="cover" />
            </div>
          </div>
          <div className="flex justify-center flex-col w-1/2 max-md:w-full">
            <p className="text-xl font-bold" data-aos="fade-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
