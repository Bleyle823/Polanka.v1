import Image from "next/image";
import React from "react";

const Announcement = () => {
  return (
    <div className="flex justify-center bg-black font-semibold text-white text-sm sm:text-lg h-8 lg:h-10 leading-8 lg:leading-10 outline-none uppercase overflow-hidden">
      <div className="mt-1 lg:mt-1.5 mr-3">
    
       <Image
          className="rounded-sm"
          src="/images/ukraine/ua.svg"
          alt="BLACK LIVES MATTER"
          width={0}
          height={0}
        />
      
      </div>
      BLACK LIVES MATTER
    </div>
    /*
    <div className="flex justify-center bg-pink-600 font-semibold text-white h-8 lg:h-10 leading-8 lg:leading-10 outline-none">
      FREE SHIPPING ON ORDERS $20+
    </div>
    */
  );
};

export default Announcement;

