import { React, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TabProject from "../components/Tabs";

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

        <TabProject />


      </div>
    </div>
  );
};

export default Project;
