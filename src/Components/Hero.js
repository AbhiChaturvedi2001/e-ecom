import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";

const Hero = ({ changeMode, Mode, textColor }) => {
  return (
    <>
      <div
        className={`hero-container  min-h-full max-sm:w-[90%] w-[65%] text-center mx-auto mt-10`}
      >
        <div
          className={`font-bebas text-3xl tracking-widest ${
            textColor ? `text-${textColor}` : `text-${textColor}`
          }`}
        >
          Abhishek Chaturvedi
        </div>
        <div
          className={`about mt-2 font-medium  ${
            textColor ? `text-${textColor}` : `text-${textColor}`
          }`}
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop .
        </div>
      </div>
      <div
        className={`flex justify-center items-center mt-7  ${
          textColor ? `text-${textColor}` : `text-${textColor}`
        }`}
      >
        <AiFillLinkedin className="text-5xl ml-4 cursor-pointer" />
        <AiFillGithub className="text-5xl ml-4 cursor-pointer" />
        <AiFillTwitterCircle className="text-5xl ml-4 cursor-pointer" />
        <AiFillInstagram className="text-5xl ml-4 cursor-pointer" />
      </div>
      <img
        className="w-[400px] mx-auto mt-5"
        src="https://github.com/developedbyed/react-portofolio-with-tailwind/blob/main/public/dev-ed-wave.png?raw=true"
        alt="3d logo"
      ></img>
    </>
  );
};

export default Hero;
