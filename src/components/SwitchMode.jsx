import React, { useState, useEffect } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";

const SwitchMode = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-schema: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="py-2 flex justify-end items-end">
      <button
        onClick={toggleTheme}
        className="flex items-center justify-between px-2 py-2 text-gray-400 bg-white rounded-full shadow-md dark:bg-gray-800 focus:outline-none"
        aria-label="Toggle color mode"
        type="button"
      >
        {theme === "light" ? <BsFillSunFill /> : <BsMoon />}
      </button>
    </div>
  );
};

export default SwitchMode;
