import React, { useState, useEffect } from "react";
import SocialMediaIcons from "./SocialMediaIcons";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [statement, setstatement] = useState("<code />");
  return (
    <>
      <div className="md:flex md:flex-col md:text-center hero-container flex justify-center items-center h-[65%]  mt-20">
        <div>
          <div className="font-concert">Hey, 👋🏻</div>
          <div className=" md:text-5xl font-concert text-6xl mt-2">
            Abhishek Chaturvedi
          </div>
          <div className=" md:text-xl font-concert mt-2 text-4xl">
            I speak in {statement} so you don't have to
          </div>
          <div className=" md:text-sm mt-5 font-concert text-xl">
            I'm your friendly neighborhood Full-Stack Developer.Helping people{" "}
            <br /> turn their ideas into sites and apps that work.
          </div>
          <button className="mt-3 px-4 py-1 bg-slate-500  cursor-pointer text-white font-concert">
            <Link to="/"> github</Link>
          </button>
          <button className="mt-3 px-4 py-1 bg-slate-500 ml-2  cursor-pointer text-white font-concert">
            Check My work
          </button>
        </div>
        <img
          className="md:m-auto max-md:mt-4 ml-4 w-[420px]"
          src="https://github.com/developedbyed/react-portofolio-with-tailwind/blob/main/public/dev-ed-wave.png?raw=true"
          alt="dummy logo"
        />
      </div>
      <SocialMediaIcons data-aos="fade-down" />
    </>
  );
};

export default Hero;
