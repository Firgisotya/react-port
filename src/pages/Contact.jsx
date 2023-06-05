import React from "react";

const Contact = () => {
  return (
    <div className="h-screen max-md:h-full">
    <div className="container mx-auto mt-10 h-screen">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-center pb-10" data-aos="fade-down">
          <span className="text-sky-600 font-medium dark:text-sky-400">
            Contact Me
          </span>
        </h1>

        <div className="w-full justify-center">

        <form>
          <div className="mb-6" >
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Full Name
            </label>
            <input
              type="text"
              id="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your Full Name"
              required
            />
          </div>
          <div className="mb-6" >
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-6" >
          <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Messsage
            </label>
            <textarea id="message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your Message"
              required>

            </textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-sky-400 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            
          >
            Submit
          </button>
        </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
