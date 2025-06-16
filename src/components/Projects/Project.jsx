import React from "react";
import ProjectCard from "./ProjectCards";
import amazon_img from "../../assets/amazon_img.png"
import netflix_img from "../../assets/netflix_img.png"
import pokemon_img from "../../assets/pokemon_img.png"

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-black bg-gray-200 ">
      <h1 className="text-2xl md:text-4xl text-black font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Amazon Clone"
          main="This is non reponsive Amazon Home Page clone, build with HtML and CSS"
          image={amazon_img}
          Demolink="https://nisha1409.github.io/AmazonClone/"
          codelink="https://github.com/Nisha1409/AmazonClone.git"
        />
        <ProjectCard
          title="Netflix Cards"
          main="This is page which contains some of Netflix Series cards, build using React"
          image={netflix_img}
          Demolink="https://nisha1409.github.io/NetflixCards/"
          codelink="https://github.com/Nisha1409/NetflixCards.git"
        />
        <ProjectCard
          title="Pokemon Search"
          main="This is Page with collection of Pokemon features Called through API, build using React"
          image={pokemon_img}
          Demolink="https://nisha1409.github.io/PokemonProject/"
          codelink="https://github.com/Nisha1409/PokemonProject.git"
        />
      </div>
    </div>
  );
};

export default Projects;