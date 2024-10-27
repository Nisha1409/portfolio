import React from "react";
import { FaCss3,FaHtml5, FaJs, FaReact, FaPython } from "react-icons/fa";
import { SiMui } from "react-icons/si";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div  className="flex flex-wrap items-center justify-around">
      <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaPython color="#306998" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMui color="#0073e6" size={50} />
          </span>
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <span className="text-white">
              <h2 className="leading-tight">IT Intern, Distance Education School (SODE)</h2>
              <p className="text-sm leading-tight font-thin">
                Jun - Aug 2024
              </p>
              <ul className="text-sm p-2">
                <li>- Worked as Frontend Developer</li>
                <li>- Building a responsive Interface for CRM</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <span className="text-white">
              <h2 className="leading-tight">UHack 2.0</h2>
              <p className="text-sm leading-tight font-thin">
                Oct 2023
              </p>
              <ul className="text-sm p-2">
                <li>- Worked on a Project to identify Disease in Plants</li>
                <li>- Build a Image classification model using CNN</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;