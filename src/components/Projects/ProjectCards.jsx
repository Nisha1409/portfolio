import React from "react";
const ProjectCard = ({ title, main, image, Demolink, codelink }) => {
  return (
    <div className="flex justify-center">
      <div className="text-white p-3 md:p-3 flex flex-col min-w-[300px] max-w-[300px] bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
        <img src={image} alt="" className="p-4 w-full h-40 object-cover rounded-lg" />

        <h3 className="p-2 text-xl md:text-2xl font-bold leading-normal text-gray-200 shadow-md">
          {title}
        </h3>

        <p className="px-2 text-sm md:text-md tracking-wide font-mono text-gray-300">
          {main}
        </p>

        <div className="mt-auto p-2 flex gap-2 md:gap-4">
          <a href={Demolink} target="_blank">
            <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-md md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              Demo
            </button>
          </a>
          <a href={codelink} target="_blank">
            <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-md md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              Source Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;