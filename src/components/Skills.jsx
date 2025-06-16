import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact, FaPython } from "react-icons/fa";
import { SiMui,SiExpress,SiTypescript ,SiMongodb,SiFlask} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";

const Skills = () => {
  return (
    <div id="Skills" className="text-white bg-black">
  <hr className="border-gray-300 w-3/4 mx-auto" />

  <div className="flex justify-center mt-12">
    <h1 className="text-2xl md:text-4xl font-bold">Skills</h1>
    </div>

  <div className="flex justify-center">
  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-5 sm:gap-8 p-8 sm:p-12 ">
    <span className="w-15 h-15 md:w-20 md:h-20 p-3 bg-zinc-900 flex items-center justify-center rounded-2xl hover:scale-110 transition-transform duration-300 ease-in-out">
      <FaHtml5 color="#E34F26" size={50} />
    </span>
    <span className="w-15 h-15 md:w-20 md:h-20 p-3 bg-zinc-900 flex items-center justify-center rounded-2xl hover:scale-110 transition-transform duration-300 ease-in-out">
      <FaCss3 color="#1572B6" size={50} />
    </span>
    <span className="w-15 h-15 md:w-20 md:h-20 p-3 bg-zinc-900 flex items-center justify-center rounded-2xl hover:scale-110 transition-transform duration-300 ease-in-out">
      <FaReact color="#61DAFB" size={50} />
    </span>
    <span className="w-15 h-15 md:w-20 md:h-20 p-3 bg-zinc-900 flex items-center justify-center rounded-2xl hover:scale-110 transition-transform duration-300 ease-in-out">
      <FaJs color="#F7DF1E" size={50} />
    </span>
    <span className="w-15 h-15 md:w-20 md:h-20 p-3 bg-zinc-900 flex items-center justify-center rounded-2xl hover:scale-110 transition-transform duration-300 ease-in-out">
      <FaPython color="#306998" size={50} />
    </span>
    <span className="w-15 h-15 md:w-20 md:h-20 p-3 bg-zinc-900 flex items-center justify-center rounded-2xl hover:scale-110 transition-transform duration-300 ease-in-out">
      <SiMui color="#0073e6" size={50} />
    </span>
    <span className="w-15 h-15 md:w-20 md:h-20 p-3 bg-zinc-900 flex items-center justify-center rounded-2xl hover:scale-110 transition-transform duration-300 ease-in-out">
      <SiExpress color="#0073e6" size={50} />
    </span>
    <span className="w-15 h-15 md:w-20 md:h-20 p-3 bg-zinc-900 flex items-center justify-center rounded-2xl hover:scale-110 transition-transform duration-300 ease-in-out">
      <SiTypescript color="#0073e6" size={50} />
    </span>
    <span className="w-15 h-15 md:w-20 md:h-20 p-3 bg-zinc-900 flex items-center justify-center rounded-2xl hover:scale-110 transition-transform duration-300 ease-in-out">
      <SiMongodb color="#0073e6" size={50} />
    </span>
    <span className="w-15 h-15 md:w-20 md:h-20 p-3 bg-zinc-900 flex items-center justify-center rounded-2xl hover:scale-110 transition-transform duration-300 ease-in-out">
      <RiNextjsFill color="#0073e6" size={50} />
    </span>
    <span className="w-15 h-15 md:w-20 md:h-20 p-3 bg-zinc-900 flex items-center justify-center rounded-2xl hover:scale-110 transition-transform duration-300 ease-in-out">
      <BiLogoPostgresql color="#0073e6" size={50} />
    </span>
    <span className="w-15 h-15 md:w-20 md:h-20 p-3 bg-zinc-900 flex items-center justify-center rounded-2xl hover:scale-110 transition-transform duration-300 ease-in-out">
      <SiFlask color="#0073e6" size={50} />
    </span>
  </div>
  </div>
</div>

  );
};

export default Skills;