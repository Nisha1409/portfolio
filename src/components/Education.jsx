import React from "react";

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
      board:"CBSE",
      year: "2022",
    },
    {
      degree: "Secondary School",
      institution: "Air Force School, Jodhpur",
      board:"CBSE",
      year: "2020",
    },
  ];

  return (
    <div id="Education" className="flex flex-col items-center py-10">
      <h2 className="text-3xl font-bold mb-10 mt-10 text-white">Education</h2>
      <div className="relative border-l-4 border-blue-500">
        {education
          .slice(0)
          .reverse()
          .map((edu, index) => (
            <div key={index} className="mb-12 ml-6 relative">
              <div className="absolute w-5 h-5 bg-blue-500 rounded-full -left-9 top-1/2 transform -translate-y-1/2"></div>
              
              <div className="pl-10">
                <p className="text-lg font-semibold text-gray-300">{edu.degree}</p>
                <p className="text-md font-medium text-gray-400">{edu.institution}</p>
                <p className="text-sm font-medium text-gray-500">{edu.board}</p>
                <p className="text-sm font-light text-gray-500">{edu.year}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Education;
