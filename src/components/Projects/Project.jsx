import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import ProjectCard from "./ProjectCards";
import amazon_img from "../../assets/amazon_img.png";
import netflix_img from "../../assets/netflix_img.png";
import pokemon_img from "../../assets/pokemon_img.png";
import cinemate_img from "../../assets/cinemate_img.png";
import drivelearn_img from "../../assets/drivelearn_img.png";

const projects = [
  {
    title: "CineMate",
    main: "CineMate is a movie recommendation app using React, Node.js, and MongoDB, powered by Flask and machine learning to provide personalized movie suggestions with TF-IDF vectorization and cosine similarity.",
    image: cinemate_img,
    Demolink: "https://drive.google.com/file/d/10eVQdpD9FcIq5EqfPIsIcNSgSpUc6WYj/view?usp=sharing",
    codelink: "https://github.com/Nisha1409/movie-recommendation-system.git",
  },
  {
    title: "DriveLearn",
    main: "DriveLearn is an AI-powered tutor built using Next.js, with PostgreSQL for user authentication and the Gemini model to provide tailored answers based on the user's board.",
    image: drivelearn_img,
    Demolink: "https://drive-learn-seven.vercel.app/",
    codelink: "https://github.com/Nisha1409/DriveLearn.git",
  },
  {
    title: "Amazon Clone",
    main: "A non-responsive Amazon Home Page clone built with HTML & CSS.",
    image: amazon_img,
    Demolink: "https://nisha1409.github.io/AmazonClone/",
    codelink: "https://github.com/Nisha1409/AmazonClone.git",
  },
  {
    title: "Netflix Cards",
    main: "This Netflix series listing app is API-powered and built using React, dynamically fetching and displaying series data..",
    image: netflix_img,
    Demolink: "https://nisha1409.github.io/NetflixCards/",
    codelink: "https://github.com/Nisha1409/NetflixCards.git",
  },

  {
    title: "Pokemon Search",
    main: "This Pokémon Search App is an API-powered React project that allows users to search for Pokémon data. It dynamically fetches and displays details such as type, stats, abilities, height, and weight.",
    image: pokemon_img,
    Demolink: "https://nisha1409.github.io/PokemonProject/",
    codelink: "https://github.com/Nisha1409/PokemonProject.git",
  },
  
];

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-black bg-gray-200">
      <h1 className="text-2xl md:text-4xl font-bold">Projects</h1>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:hidden gap-6">
        {projects.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>

      {/* Carousel for Medium+ Screens */}
      <div className="hidden md:flex relative items-center">

        <div className="overflow-x-auto scroll-smooth flex gap-6 p-6">
          {projects.map((proj, index) => (
            <ProjectCard key={index} {...proj} className="inline-block " />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Projects;
