import React from "react";

const Navbar = () => {
  return (
    <header className="text-gray-600 dark:text-gray-200 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          
          
          <span className="ml-3 text-xl dark:text-gray-200">Polanka</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <a
            className="mr-5 hover:text-gray-900 dark:hover:text-gray-100 border-black hover:border-b-2"
            href="/"
          >
            Home
          </a>
          <a
            className="mr-5 hover:text-gray-900 dark:hover:text-gray-100 border-black hover:border-b-2"
            href=""
          >
            New
          </a>
          <a
            className="mr-5 hover:text-gray-900 dark:hover:text-gray-100 border-black hover:border-b-2"
            href=""
          >
            Mens
          </a>
          <a
            className="mr-5 hover:text-gray-900 dark:hover:text-gray-100 border-black hover:border-b-2"
            href=""
          >
            Womens
          </a>
          <a
            className="mr-5 hover:text-gray-900 dark:hover:text-gray-100 border-black hover:border-b-2"
            href=""
          >
            Accessories
          </a>
        </nav>
        <a
          className="inline-flex items-center bg-pink-500 border-0 py-2 px-3 focus:outline-none hover:bg-pink-400 rounded text-gray-100 text-base mt-4 md:mt-0 font-bold cursor-pointer"
          href=""
        >
          Shop Now
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1 animate-none sm:animate-ping"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Navbar;

