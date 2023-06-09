import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SocialMediaIcons from "../Components/SocialMediaIcons";

const About = ({ Toggle, Mode, showNavbar, changeMode }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className={`about-page-container ${Mode ? `bg-black text-white` : `bg-white text-black`}`}>
        <div className="relative text-center">
          <h1
            data-aos="fade-right"
            className={`${Mode ? `heading-active` : `heading`} font-concert left-[35%] -z-4 `}
          >{`<About />`}</h1>
        </div>
        <div className="mt-6 m-auto md:mt-6 md:w-[80%] w-[51%]">
          <div className="text-3xl font-concert">🤓 About Me</div>
          <div className="w-[100%] font-poppins font-medium">
            I am a FrontEnd creative developer based in Bharatpur, India. I am a
            Bachelors of Computer Application(BCA) undergraduate from IMS NOIDA
            and also did some coursework in Designing and Visual Arts. I enjoy
            using my skill-set to empower people to accomplish their goals.
            <br /> <br /> My development stack is focused on converting ideas
            into sites & apps that work. I create lighting fast WebApps UI and
            Websites Front end Stack with the help of React Js.
          </div>
          <div className="mt-4 font-concert">Want to know More About Me ? </div>
          <button className="px-2 py-1 mt-3 bg-orange-400 text-white ">
            Know More
          </button>
        </div>
        <div className="tech-stack-container relative text-center">
        <h1
          data-aos="fade-right"
          className={`${Mode ? `heading-active` : `heading`} font-concert left-[35%] -z-4 `}
        >{`< weapons />`}</h1>
      </div>
      <SocialMediaIcons data-aos="fade-down" />
      </div>
    </>
  );
};

export default About;
