import React from "react";
import bg from "../../assets/img/project-banner.jpg";
import business from "../../assets/img/business.jpg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./Project.css";
import { Link } from "react-router-dom";
import ProjectsDetails from "./ProjectsDetails";

const Projects = () => {
  const Projects = [
    {
      projectName: "Rainbosoft",
      projectCategory: "Business",
      image: business,
      id: 1,
    },
  ];
  return (
    <div>
      <div
        className="pt-[300px] pb-40 bg-cover bg-center md:px-24 px-5"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="md:text-5xl text-3xl lg:text-6xl text-[#ffffff] pb-[10px] font-bold">
          Rainbosoft Projects
        </h1>
        <p className="uppercase text-base font-medium text-[#ffffff]">
          Home &#10095; Project
        </p>
      </div>
      <div className="my-10">
        <p className="uppercase text-3xl text-center text-[#6A6A74]">
          Projects
        </p>
        <h1 className="font-bold md:text-5xl text-center leading-relaxed text-2xl">
          Our Latest Incredible Client's <br />
          Project
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 mx-auto max-w-6xl md:grid-cols-2 grid-cols-1 gap-10 mb-20 px-5 lg:px-0">
        {Projects.map((project, index) => (
          <div className="relative cardImage" key={index}>
            <img
              src={project.image}
              alt=""
              className="object-cover rounded-md"
            />
            <div className="bg-[#2dcf9e] max-w-[80%] absolute bottom-32 right-24 imageCard">
              <div className="relative">
                <p className="text-[#6a6a74] text-lg capitalize">
                  {project.projectCategory}
                </p>
                <h2 className="text-3xl font-semibold capitalize hover:border-b-2 hover:border-white duration-100 cursor-default">
                  {project.projectName}
                </h2>
                <Link
                  className="absolute top-[35%] -right-8 cursor-pointer"
                >
                  <ChevronRightIcon className="icon"></ChevronRightIcon>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
