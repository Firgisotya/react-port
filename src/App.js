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


function App() {
  
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
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
    </BrowserRouter>
    </div>
  );
}

export default App;
