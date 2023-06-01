import { React, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import react from "../assets/react.png";
import laravel from "../assets/laravel.png";
import node from "../assets/node.png";
import angular from "../assets/angular.png";
import java from "../assets/java.png";
import g1 from "../assets/projects/gorent/1.PNG";
import g2 from "../assets/projects/gorent/2.PNG";
import g3 from "../assets/projects/gorent/3.PNG";
import g4 from "../assets/projects/gorent/4.PNG";
import g5 from "../assets/projects/gorent/5.PNG";
import g6 from "../assets/projects/gorent/6.PNG";

const Project = () => {
  const [activeTab, setActiveTab] = useState("laravel");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-center pb-10">
          <span className="text-sky-600 font-medium dark:text-sky-400">
            Projects
          </span>
        </h1>

        <div className="tabs">
          <a
            className={`tab tab-lg tab-lifted dark:text-gray-100 ${
              activeTab === "laravel"
                ? "bg-gradient-to-r from-sky-400 to-blue-500 text-white"
                : "text-black"
            }`}
            href="#laravel"
            onClick={() => handleTabClick("laravel")}
          >
            Laravel
          </a>
          <a
            className={`tab tab-lg tab-lifted dark:text-gray-100 ${
              activeTab === "react"
                ? "bg-gradient-to-r from-sky-400 to-blue-500 text-white"
                : "text-black"
            }`}
            href="#react"
            onClick={() => handleTabClick("react")}
          >
            React Js
          </a>
          <a
            className={`tab tab-lg tab-lifted dark:text-gray-100 ${
              activeTab === "angular"
                ? "bg-gradient-to-r from-sky-400 to-blue-500 text-white"
                : "text-black"
            }`}
            href="#angular"
            onClick={() => handleTabClick("angular")}
          >
            Angular
          </a>
          <a
            className={`tab tab-lg tab-lifted dark:text-gray-100 ${
              activeTab === "python"
                ? "bg-gradient-to-r from-sky-400 to-blue-500 text-white"
                : "text-black"
            }`}
            href="#python"
            onClick={() => handleTabClick("python")}
          >
            Python
          </a>
          <a
            className={`tab tab-lg tab-lifted dark:text-gray-100 ${
              activeTab === "java"
                ? "bg-gradient-to-r from-sky-400 to-blue-500 text-white"
                : "text-black"
            }`}
            href="#java"
            onClick={() => handleTabClick("java")}
          >
            Java
          </a>
        </div>
        
        {/* laravel */}
        <div id="laravel" className="tab-content py-4">
          <div className="flex mb-8">
            <div className="w-1/2 p-2">
              <h1 className="text-3xl font-bold text-center mb-2">
                <span className="text-sky-600 font-medium dark:text-sky-400">
                  Gorent
                </span>
              </h1>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
              quam ab animi quidem commodi beatae fugit sed, qui ipsam dolorem
              exercitationem dolorum accusamus excepturi eligendi eveniet quas
              nihil possimus suscipit tempora dignissimos laudantium pariatur
              ullam quasi? Dolorum autem deserunt expedita minima magni cum
              facilis culpa repudiandae tempora a facere soluta quis atque vitae
              fugiat dolore debitis nobis, omnis natus, tempore alias odio
              consectetur, dicta iste. Reiciendis enim quo perferendis dolorum
              ad earum dolore, eveniet dolores totam recusandae voluptates
              beatae cum debitis exercitationem laboriosam! Quia dicta nemo
              magnam architecto quisquam obcaecati doloribus! Itaque, dolores
              dolorem exercitationem culpa nemo deserunt voluptas perferendis?
            </div>
            <div className="w-1/2 p-2">
              <div className="card shadow-xl">
                <img src={g1} alt="" />
              </div>
            </div>
          </div>
          <div className="flex mb-8">
            <div className="w-1/2 p-2">
              <img src={g1} alt="" />
            </div>
            <div className="w-1/2 p-2">
              <h1 className="text-3xl font-bold text-center mb-2">
                <span className="text-sky-600 font-medium dark:text-sky-400">
                  Kitabantuin
                </span>
              </h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              error iste et quaerat debitis consequuntur ex possimus neque in
              corrupti eos odit quis fugiat dolorem reprehenderit eaque
              consectetur, atque eum, sed soluta molestiae eveniet. Similique
              amet recusandae, minus consequuntur porro delectus in velit nihil
              consectetur magni, quasi natus, at tenetur! Eum dolores sed
              molestias, provident iusto dolor cum magnam laborum recusandae,
              dolorum natus repellendus excepturi aliquam inventore illo,
              pariatur odio maiores. Aliquam excepturi atque suscipit maxime
              quis ducimus dolore, iusto necessitatibus dolorem repudiandae nisi
              rerum deserunt aliquid quos quae eaque recusandae reprehenderit
              molestias enim vel repellat fugit nobis veritatis! Quod.
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Project;
