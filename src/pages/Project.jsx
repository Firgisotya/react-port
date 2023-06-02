import { React, useState } from "react";
import TabProject from "../components/Tabs";

const Project = () => {

  return (
    <div className="container mx-auto">
      <div className="container flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-center pb-10" data-aos="fade-down">
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
