import React from "react";
import img1 from '../../src/assets/img1.jpg'

const Home = () => {
    return (
        <div className="text-white flex w-full justify-around items-start p-10 md:p-20">
            <div>
                <img className="w-3/5 sm:w-1/2 rounded-3xl" src={img1} alt="" />
            </div>
            <div className="md:w-11/12 md:pt-10 ">
                <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
                    Hello, I am Nisha
                </h1>
                <p className="text-sm md:text-2xl tracking-tight ">
                    I am a dedicated developer with a passion for creating efficient, user-friendly applications.
                </p>
                <a href="#Contact">
                <button  className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
                    Contact Me
                </button>
                </a>
                <a href="/Nisha_Bhartiya.pdf" download="My_CV.pdf">
                <button className="mt-5 sm:ml-4 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
                    Download CV
                </button>
                </a>
            </div>
        </div>
    );
};

export default Home;