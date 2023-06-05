import React from "react";
import profile from "../assets/1.png";

const About = () => {
  return (
    <div className="container mx-auto">
      <div className=" container flex flex-col items-center justify-center">
        <h1
          className="text-5xl font-bold text-center pb-10"
          data-aos="fade-down"
        >
          <span className="text-sky-600 font-medium dark:text-sky-400">
            About Me
          </span>
        </h1>
        <div className="flex flex-row justify-evenly flex-wrap-reverse">
          <div className="flex justify-center flex-col w-1/2 max-md:w-full">
            <div
              className="mx-auto bg-gradient-to-b from-sky-400 rounded-full w-80 h-80 relative overflow-hidden md:h-96 md:w-96"
              data-aos="fade-right"
            >
              <img src={profile} alt="" layout="fill" objectFit="cover" />
            </div>
          </div>
          <div className="flex justify-center flex-col w-1/2 max-md:w-full">
            <p className="text-2xl" data-aos="fade-left">
              I am a Full Stack Web Developer with approximately 3 years
              experience with expertise in responsive design and SEO
              optimization. I have knowledge in the programming language
              Javascript, PHP, Java and the use of frameworks such as Node.js,
              React.js, Laravel. I also have skills in client needs analysis and
              good team work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
