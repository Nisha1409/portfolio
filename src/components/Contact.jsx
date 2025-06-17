import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="ContactMe"
      className="flex flex-col md:flex-row justify-center bg-[#0c0e19] text-white p-6 md:p-12 items-center gap-6 md:gap-20"
    >
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-200 tracking-wide">
          Contact
        </h1>
        <p className="text-sm md:text-xl font-normal">
          Feel Free To reach out!
        </p>
      </div>

      <ul className="text-sm md:text-lg flex flex-col gap-4">
        <li className="flex gap-2 items-center">
          <MdOutlineEmail size={20} />
          <a href="mailto:nbhartiya@gmail.com" className="text-blue-300 hover:text-blue-500">
            nbhartiya200@gmail.com
          </a>
        </li>
        <li className="flex gap-2 items-center">
          <CiLinkedin />
          <a href="https://www.linkedin.com/in/nisha-bhartiya-a4293b284/" target="_blank"> LinkedIn </a>
        </li>
        <li className="flex gap-2 items-center">
          <FaGithub />
          <a href="https://github.com/Nisha1409" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
