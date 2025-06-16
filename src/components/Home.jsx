import React from "react";
import img1 from '../assets/img1.jpg'; // Adjust the path as necessary

const Home = () => {
    return (
        <div className="transition-opacity duration-700 text-gray-200 flex flex-col md:flex-row w-full justify-center items-start gap-4 md:gap-8 p-10 md:p-20">
            <div className="w-1/4 flex justify-center md:mt-12 animate-scaleUp">
                <img className="w-3/5 sm:w-4/5 md:w-full rounded-full" src={img1} alt="Profile" />
            </div>

            <div className="w-full md:w-3/5 lg:w-2/3 md:pt-10">

                <h1 className="animate-slideIn drop-shadow-xl text-xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-tighter">
                    Hi, I’m Nisha—a passionate developer building efficient and scalable web applications.
                </h1>
                <p className="text-gray-300 leading-relaxed italic mt-3 md:text-lg">
                    Creating clean, scalable, and impactful solutions for modern applications.
                </p>


                <div className="flex flex-row flex-wrap gap-4 md:mt-5">

                    <a href="#Contact">
                        <button className="mt-5 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 bg-[#465697] hover:bg-[#334275] hover:scale-105 duration-300 shadow-lg rounded-3xl">
                            Contact Me
                        </button>
                    </a>
                    <a href="/portfolio/Nisha_Bhartiya.pdf" target="_blank">
                        <button className="mt-5 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 bg-[#465697] hover:bg-[#334275] hover:scale-105 duration-300 shadow-lg rounded-3xl">
                            Download CV
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
