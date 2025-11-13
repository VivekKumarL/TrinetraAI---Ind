"use client";

import Image from "next/image";
import React from "react";

const VerticalTiltImage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="perspective-800">
        <Image
          src="/dashboardlayoutclean.png"
          alt="Vertical Tilt"
          width={600}
          height={400}
          className="transform rotate-x-12 hover:rotate-x-0 transition duration-700 ease-in-out rounded-lg shadow-2xl object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default VerticalTiltImage;
