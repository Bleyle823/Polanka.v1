import React from "react";

const Hero = () => {
  return (
    <div className="h-lgvh bg-hero bg-no-repeat bg-cover bg-center bg-opacity-100">
      <div className="h-lgvh bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-70">
        <div className="flex flex-col items-center justify-center text-center h-5/6 ">
          <div className="w-full sm:bg-black bg-opacity-60 sm:bg-opacity-0 rounded-2xl p-12 ">
            <h1 className="flex flex-col items-center justify-center text-center font-bold sm:font-extrabold text-pink-700 dark:text-pink-600 text-5xl pt-20 sm:text-6xl md:text-8xl pb-10">
              HANDMADE IN KENYA 
            </h1>
            <div className="m-auto max-w-3xl">
              <p className="text-lg sm:text-2xl text-gray-900 dark:text-gray-100 capitalize">
                For a limited time, stock up on some of our most gift-able
                picks. Snap them up quick, values like this are too good to
                last.
              </p>
            </div>
            <div className="mt-5 max-w-md mx-auto flex justify-center items-center md:mt-8">
              <a
                href="https://shop.modernapparel.ga"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium py-3 border-transparent rounded-md text-white bg-pink-900 hover:bg-pink-800"
              >
                SHOP NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

