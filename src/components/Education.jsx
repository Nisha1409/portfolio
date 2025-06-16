import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology Honors",
      institution: "United University",
      year: "2022 - Current",
    },
    {
      degree: "Senior Secondary School",
      institution: "Air Force School, Jodhpur",
      board: "CBSE",
      year: "2022",
    },
    {
      degree: "Secondary School",
      institution: "Air Force School, Jodhpur",
      board: "CBSE",
      year: "2020",
    },
  ];

  return (
    <div id="Education" className="text-black bg-gray-200 flex flex-col items-center p-12 sm:p-20 ">
      <h2 className="text-4xl font-extrabold tracking-tight mt-8 sm:mt-12 mb-12">Education</h2>

      <div className="relative border-l-4 border-blue-500 mx-auto  min-h-[300px] sm:min-h-[500px] lg:min-h-[400px]" >
        {education
          .slice(0)
          .map((edu, index) => (
            <div key={index} className="mb-10 sm:mb-18 ml-3 relative">

              <div className="absolute w-5 h-5 bg-blue-500 border-2 border-white rounded-full -left-6 sm:-left-6 top-1/2 transform -translate-y-1/2"></div>
              <div className="pl-4 sm:pl-10 w-full">
                <div className="relative flex items-center">
                  <FaGraduationCap className="hidden md:block text-blue-500 text-3xl opacity-80 absolute left-[-15px] top-2" />
                  <div className="pl-4 sm:pl-10 w-full">
                    <p className="text-lg font-semibold text-gray-900">{edu.degree}</p>
                    <p className="text-md font-medium text-gray-900">{edu.institution}</p>
                    {edu.board && <p className="text-sm font-medium text-gray-800">{edu.board}</p>}
                    <p className="text-sm font-light text-gray-700">{edu.year}</p>
                  </div>
                </div>



              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Education;
