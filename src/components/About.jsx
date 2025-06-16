import React from "react";
import computergirl from "../assets/computergirl.gif"; // Adjust the path to your GIF

const About = () => {
    return (
        <div id="About" className=" bg-black p-8 md:pt-20 flex justify-center">
            <div className="bg-gray-200 w-full lg:w-1/2 p-6 sm:p-8 rounded-lg md:rounded-l-lg md:rounded-r-none shadow-[0px_0px_25px_rgba(255,255,255,0.4)] flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                    <h2 className="text-gray-900 text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight text-center">About Me</h2>
                    <p className="text-gray-900 text-sm sm:text-lg leading-relaxed mt-4 text-left">
                        I’m a passionate <span className="font-bold">Frontend & Full-stack MERN developer</span> who thrives on crafting efficient, scalable, and user-friendly applications. With expertise in React.js, Express.js, Database Management, Tailwind CSS, AI-driven models, ML algorithms, and API integrations, I love blending logic with creativity to enhance user experience. My problem-solving mindset, adaptability, and attention to detail ensure polished, high-performance solutions. Enthusiastic and always eager to learn, I believe in building tech that feels seamless, intuitive, and impactful.
                    </p>
                </div>

            </div>
            <div className="hidden lg:block w-1/4 h-auto flex items-stretch">
                <img src={computergirl} alt="GIF" className="w-full h-full rounded-r-lg shadow-md object-fill" />
            </div>

        </div>
    );
};

export default About;
