import React from "react";
import profile from "../assets/tes1.png";

const About = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-center pb-10" data-aos="fade-down">
          <span className="text-sky-600 font-medium dark:text-sky-400">
            About Me
          </span>
        </h1>

        <div className="flex flex-col md:flex-row justify-evenly items-center md:mb-20">
        <div className="relative flex justify-center items-center md:w-1/2 max-md:w-full" data-aos="fade-right">
              <img className="absolute w-1/2" src={profile} />
              <svg
                className=""
                viewBox="210 80 500 500"
                width="{900}"
                height="{600}"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsxlink="http://www.w3.org/1999/xlink"
                version="1.1"
              >
                <g transform="translate(457.42376625483564 347.07045701994696)">
                  <path
                    d="M127.6 -141C164.3 -91 192.2 -45.5 187.1 -5.1C182 35.4 144 70.7 107.4 97.4C70.7 124 35.4 142 -4 146C-43.4 150 -86.7 140.1 -127.4 113.4C-168.1 86.7 -206 43.4 -202.3 3.8C-198.5 -35.8 -153 -71.7 -112.3 -121.7C-71.7 -171.7 -35.8 -235.8 4.8 -240.7C45.5 -245.5 91 -191 127.6 -141"
                    fill="#4FACF7"
                  />
                </g>
              </svg>

              {/* <div
                className="mx-auto bg-gradient-to-b from-sky-400 rounded-full w-80 h-80 relative overflow-hidden md:h-96 md:w-96"
                data-aos="fade-right"
              >
                <img src={profile} alt="" layout="fill" objectFit="cover" />
              </div> */}
            </div>
          <div className="flex justify-center md:w-1/2 max-md:w-full">
            <p className="text-2xl md:px-4" data-aos="fade-left">
              I am a Full Stack Web Developer with approximately 3 years
              experience with expertise in responsive design and SEO
              optimization. I have knowledge in the programming language
              Javascript, PHP, Java and the use of frameworks such as Node.js,
              React.js, Laravel. I also have skills in client needs analysis and
              good teamwork.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
