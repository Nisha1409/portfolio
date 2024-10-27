import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub , FaPhone} from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="flex justify-around bg-[#0c0e19] text-white p-10 md:p-12 items-center"
    >
      <div>
        
        <h1 className="text-2xl md:text-4xl font-bold">Contact</h1>
        <p className="text-sm md:text-xl font-normal">
          Feel Free To reach out!
        </p>
      </div>

      <ul className="text-sm md:text-lg">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          <a href="mailto:nbhartiya@gmail.com">nbhartiya200@gmail.com</a>
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          <a href="https://www.linkedin.com/in/nisha-bhartiya-a4293b284/"> LinkedIn </a>
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          <a href="https://github.com/Nisha1409" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;