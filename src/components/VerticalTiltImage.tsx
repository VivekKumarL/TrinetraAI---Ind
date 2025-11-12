import React from "react";

const VerticalTiltImage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="perspective-800">
        <img
          src="/dashboardlayoutclean.png"
          alt="Vertical Tilt"
          className="transform rotate-x-12 hover:rotate-x-0 transition duration-700 ease-in-out rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
};

export default VerticalTiltImage;
