import React from "react";

const Experience = () => {
  return (
    <div id="Experience" className="text-white bg-black p-8">
      <hr className="border-gray-300 w-3/4 mx-auto" />

      <div className="flex justify-center mt-12">
        <h1 className="text-2xl md:text-4xl font-bold">Experience</h1>
      </div>

      <div className="flex flex-wrap items-center justify-around">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 mt-8">
          {/* Experience Card */}
          <div className="bg-gray-200 text-black max-w-md mx-auto rounded-lg p-6 shadow-inner hover:scale-105 transition-transform duration-300 ease-in-out">
            <h2 className="text-xl font-bold ">IT Intern, Distance Education School (SODE)</h2>
            <p className="text-sm font-medium">Jun - Aug 2024</p>
            <p className="text-sm mt-2">Worked as a Frontend Developer, building a responsive Interface for CRM.</p>
          </div>

          {/* Second Experience Card */}
          <div className="bg-gray-200 text-black max-w-md mx-auto rounded-lg p-6 shadow-inner hover:scale-105 transition-transform duration-300 ease-in-out">
            <h2 className="text-xl font-bold">UHack 2.0</h2>
            <p className="text-sm font-medium">Oct 2023</p>
            <p className="text-sm mt-2">Worked on a project to identify diseases in plants, using an image classification model with CNN.</p>
          </div>
        </div>

      </div>
      </div>
      );
};

      export default Experience;