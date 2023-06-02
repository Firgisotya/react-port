import { React, useState } from "react";

import g1 from "../assets/projects/gorent/1.PNG";
import g2 from "../assets/projects/gorent/2.PNG";
import g3 from "../assets/projects/gorent/3.PNG";
import g4 from "../assets/projects/gorent/4.PNG";
import g5 from "../assets/projects/gorent/5.PNG";
import g6 from "../assets/projects/gorent/6.PNG";
import g7 from "../assets/projects/gorent/7.PNG";
import g8 from "../assets/projects/gorent/8.PNG";
import g9 from "../assets/projects/gorent/9.PNG";
import g10 from "../assets/projects/gorent/10.PNG";
import g11 from "../assets/projects/gorent/11.PNG";
import g12 from "../assets/projects/gorent/12.PNG";

import k1 from "../assets/projects/kitabantuin/1.PNG";
import k2 from "../assets/projects/kitabantuin/2.PNG";
import k3 from "../assets/projects/kitabantuin/3.PNG";
import k4 from "../assets/projects/kitabantuin/4.PNG";
import k5 from "../assets/projects/kitabantuin/5.PNG";
import k6 from "../assets/projects/kitabantuin/6.PNG";
import k7 from "../assets/projects/kitabantuin/7.PNG";
import k8 from "../assets/projects/kitabantuin/8.PNG";
import k9 from "../assets/projects/kitabantuin/9.PNG";
import k10 from "../assets/projects/kitabantuin/10.PNG";
import k11 from "../assets/projects/kitabantuin/11.PNG";
import k12 from "../assets/projects/kitabantuin/12.PNG";

import a1 from "../assets/projects/apotek/1.png";
import a2 from "../assets/projects/apotek/2.png";
import a3 from "../assets/projects/apotek/3.png";
import a4 from "../assets/projects/apotek/4.png";

import d1 from "../assets/projects/dsqa/1.PNG";
import d2 from "../assets/projects/dsqa/2.PNG";
import d3 from "../assets/projects/dsqa/3.PNG";

import c1 from "../assets/projects/chat/1.PNG";
import c2 from "../assets/projects/chat/2.png";

import laravel from "../assets/laravel.png";
import angular from "../assets/angular.png";
import react from "../assets/react.png";
import java from "../assets/java.png";
import python from "../assets/python.png";

export const ProjectData = [
  {
    title: [
      {
        Laravel: [
          {
            name: "Gorent",
            description:
              "Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel attempts to take the pain out of development by easing common tasks used in most web projects.",
            image: [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12],
            link: "https://gorent.trixsite.com/",
          },
          {
            name: "Kitabantuin",
            description:
              "Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel attempts to take the pain out of development by easing common tasks used in most web projects.",
            image: [k1, k2, k3, k4, k5, k6, k7, k8, k9, k10, k11, k12],
            link: "https://kitabantuin.trixsite.com/",
          },
          {
            name: "Apochecker",
            description:
              "Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel attempts to take the pain out of development by easing common tasks used in most web projects.",
            image: [a1, a2, a3, a4],
            link: "https://apochecker.trixsite.com/",
          },
        ],
        Angular: [
          {
            name: "DSQA",
            description:
              "DSQA is a web application for managing data from the results of the quality control of the product. This application is made using Angular 8 and Laravel 7.",
            image: [d1, d2, d3],
            link: "https://github.com/Firgisotya/Dashboard_QA.git",
          },
        ],
        React: [
          {
            name: "Chat App",
            description:
              "Chat App is a web application for chatting with friends. This application is made using React JS and Firebase.",
            image: [c1, c2],
            link: "https://github.com/Firgisotya/unichat-firebase.git",
          },
        ],
        Java: [
          {
            name: "Chat App",
            description:
              "Chat App is a web application for chatting with friends. This application is made using React JS and Firebase.",
            image: [c1, c2],
            link: "https://github.com/Firgisotya/unichat-firebase.git",
          },
        ],
        Python: [
          {
            name: "Chat App",
            description:
              "Chat App is a web application for chatting with friends. This application is made using React JS and Firebase.",
            image: [c1, c2],
            link: "https://github.com/Firgisotya/unichat-firebase.git",
          },
        ],
      },
    ],
    icon: [laravel, angular, react, java, python],
  },
];
