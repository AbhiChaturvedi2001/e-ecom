import React from "react";
import ProjectDataApi from "../ProjectDataApi";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";

const Project = () => {
  return (
    <>
      <div className="project-container">
        <div className="text-center text-5xl font-bebas mt-10">
          Personal projects
        </div>
        <h3 className="text-center font-poppins font-medium">
          We have to coverd all the main projects that are help to <br />{" "}
          understanding my work and strategy as well.
        </h3>
        <div className="cards w-[90%] m-auto mt-10 px-5 py-5">
          {ProjectDataApi.map((x, y) => {
            const {
              projectName,
              projectLink,
              projectSourceCodeLink,
              projectDescription,
            } = x;
            return (
              <>
                <div className="left flex justify-center max-md:flex max-md:flex-col max-md:text-center pt-3">
                  <div>
                    <div className="text-3xl font-bold underline font-poppins">
                      {projectName}
                    </div>
                    <div className="font-poppins mt-4">
                      {projectDescription}
                    </div>
                    <button className="bg-orange-400 px-2 py-2 mt-4 text-white font-semibold font-poppins rounded-md cursor-pointer">
                      <a href={projectSourceCodeLink}>Source Code</a>{" "}
                    </button>
                    <button className="ml-2 bg-red-400 px-2 py-2 rounded-md text-white font-semibold font-poppins cursor-pointer">
                      <a href={projectLink}>Project Preview</a>
                    </button>
                  </div>
                  <img
                  className="max-md:mt-5"
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                    alt=""
                  ></img>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Project;
