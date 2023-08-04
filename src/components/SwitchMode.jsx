// import React, { useState, useEffect } from "react";
// import { BsFillSunFill } from "react-icons/bs";
// import { BsMoon } from "react-icons/bs";

// const SwitchMode = () => {
//   const [theme, setTheme] = useState(null);

//   useEffect(() => {
//     if (window.matchMedia("(prefers-color-schema: dark)").matches) {
//       setTheme("dark");
//     } else {
//       setTheme("light");
//     }
//   }, []);

//   useEffect(() => {
//     if (theme === "light") {
//       document.documentElement.classList.remove("dark");
//       document.documentElement.classList.add("light");
//     } else {
//       document.documentElement.classList.remove("light");
//       document.documentElement.classList.add("dark");
//     }
//   }, [theme]);

//   const toggleTheme = () => {
//     if (theme === "light") {
//       setTheme("dark");
//     } else {
//       setTheme("light");
//     }
//   };

//   return (
//     <div className="py-2 flex justify-end items-end">
//       <label
//         htmlFor="themeSwitcherTwo"
//         className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center"
//       >
//         <input
//           type="checkbox"
//           name="themeSwitcherTwo"
//           id="themeSwitcherTwo"
//           className="sr-only"
//           checked={theme === "dark"}
//           onChange={toggleTheme}
//         />
//         <span className="label flex items-center text-sm font-medium text-black">
//           <BsFillSunFill
//             className={theme === "light" ? "text-yellow-500" : "text-gray-500"}
//           />
//         </span>
//         <span className="slider mx-4 flex h-8 w-[60px] items-center rounded-full bg-[#CCCCCE] p-1 duration-200">
//           <span
//             className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
//               theme === "dark" ? "transform translate-x-[36px]" : ""
//             }`}
//           />
//         </span>
//         <span className="label flex items-center text-sm font-medium text-black">
//           <BsMoon
//             className={theme === "dark" ? "text-gray-500" : "text-yellow-500"}
//           />
//         </span>
//       </label>
//     </div>
//   );
// };

// export default SwitchMode;

import React, { useState, useEffect } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";

const SwitchMode = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
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
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="">
      <button
        className="themeSwitcherTwo relative flex items-center hover:shadow-lg hover:shadow-blue-500 bg-white shadow-md shadow-slate-400 dark:bg-slate-700 dark:shadow-slate-800 justify-center cursor-pointer select-none h-8 w-8 rounded-full focus:outline-none"
        onClick={toggleTheme}
      >
        <span className="label flex items-center text-sm font-medium text-black">
          {theme === "light" ? (
            <BsFillMoonFill className="text-gray-500" />
          ) : (
            <BsFillSunFill className="text-yellow-500" />
          )}
        </span>
      </button>
    </div>
  );
};

export default SwitchMode;
