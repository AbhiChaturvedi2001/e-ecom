import React,{useEffect} from "react";
import Navbar from "../Components/Navbar";
import SocialMediaIcons from "../Components/SocialMediaIcons";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = ({ Toggle, Mode, showNavbar, changeMode }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className={`h-[100vh] contact-page-container ${Mode ? `bg-black text-white` : `bg-white text-black`}`}>
        <Navbar
          Toggle={Toggle}
          Mode={Mode}
          showNavbar={showNavbar}
          changeMode={changeMode}
        />
        <div className="relative text-center md:mt-[6rem] ">
          <h1
            className={`${Mode ? `heading-active` : `heading`} font-concert left-[35%] -z-4 md:text-7xl `}
          >{`<Contact />`}</h1>
        </div>
        <div data-aos="fade-left" className="mt-6 m-auto md:mt-6 md:w-[80%] w-[51%]">
        <div className="font-concert mt-4 text-3xl">Say to Hello 👋🏻</div>
          <div className="font-medium mt-4 font-poppins">
            Sweet, that's it from my side! Now it's your turn to say hi. <br />
            I'm available for freelance projects. Let's work together to create
            something worth sharing.
          </div>
          <button className="bg-orange-700 px-3 w-[6rem] font-concert cursor-pointer text-white py-1 mt-5">Mail</button>
          <button className="ml-2 bg-orange-700 px-3 py-1 w-[6rem] font-concert cursor-pointer text-white">Linkedin</button>
        </div>
        <SocialMediaIcons data-aos="fade-down" />
      </div>
    </>
  );
};

export default Contact;
