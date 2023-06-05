import React, { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SwitchMode from "./components/SwitchMode";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS file
import NavbarMobile from "./components/NavbarMobile";
import { motion, useScroll, useSpring } from "framer-motion";


function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  useEffect(() => {
    AOS.init({
      duration : 1500
    });
  }, []);

  return (
      <>
      <motion.div
      className="bg-gradient-to-r from-sky-400 to-blue-500 z-50"
      style={{
        scaleX,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 5,
        transformOrigin: "0%"
       }}
    >

    </motion.div>

    <div className="dark:text-gray-100 dark:bg-slate-900 text-black bg-white">
    <BrowserRouter>
      <Navbar>
      <SwitchMode />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </Navbar>
      <NavbarMobile />
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
