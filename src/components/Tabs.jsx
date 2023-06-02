import { React, useState } from "react";
import { Tab } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import react from "../assets/react.png";
import laravel from "../assets/laravel.png";
import angular from "../assets/angular.png";
import java from "../assets/java.png";
import python from "../assets/python.png";

import {LaravelData} from "../data/Laravel";
import {ReactData} from "../data/React";
import {AngularData} from "../data/Angular";
import {javaData} from "../data/Java";
import {pythonData} from "../data/Python";

import projects from "../data/project.json";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Tabs = () => {
  console.log(projects.title[0].Laravel[0].image);
  return (
    <div className="w-full px-2 py-4 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
        {Object.keys(projects.title[0]).map((framework, index) => (
          <Tab
          key={index}
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            <div className="flex items-center pl-4">
                <img src={projects.icon[index]} alt={framework} className="w-8 h-8 mr-2" />
                <h1>{framework}</h1>
              </div>
          </Tab>
        ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
        {Object.entries(projects.title[0]).map(([framework, projectsArray], index) => (
          <Tab.Panel
          key={index}
            className={classNames(
              "rounded-xl bg-blue-900/20 text-black dark:bg-white p-3",
              "ring-white ring-opacity-60 dark:text-black ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            <div className="flex flex-row justify-evenly flex-wrap pb-10">
            {projectsArray.map((project, index) => (
              <div key={index} className="flex justify-center flex-col w-1/2 max-md:w-full p-3">
                <h1 className="text-3xl font-bold text-center pb-2">
                  <span className="text-sky-600 font-medium dark:text-sky-400">
                  {project.name}
                  </span>
                </h1>
                <p className="text-xl">
                  {project.description}
                </p>
              </div>
              ))}
              {projectsArray.map((project, index) => (
              <div key={index} className="flex justify-center flex-col w-1/2 max-md:w-full p-3">
                
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
                 {project.image.map((image, index) => (
                        <SwiperSlide key={index}>
                          <img src={image} alt={`Image ${index}`} />
                        </SwiperSlide>
                      ))}
                </Swiper>
              </div>
              ))}
            </div>
          </Tab.Panel>
            ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Tabs;
