import React,{useEffect} from "react";
import SocialMediaIcons from "../Components/SocialMediaIcons";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Contact = ({ Toggle, Mode, showNavbar, changeMode }) => {
  // for loading the animation first time
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className={`h-[100vh] contact-page-container ${Mode ? `bg-black text-white` : `bg-white text-black`}`}>
  
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
          <button className="bg-orange-700 px-3 w-[6rem] font-concert cursor-pointer text-white py-1 mt-5"><Link to='mailto:chaturvedia435@gmail.com'>Mail</Link></button>
          <button className="ml-2 bg-orange-700 px-3 py-1 w-[6rem] font-concert cursor-pointer text-white"><Link to='https://www.linkedin.com/in/abhishek1949/'>Linkedin</Link></button>
        </div>
        <SocialMediaIcons data-aos="fade-down" />
      </div>
    </>
  );
};

export default Contact;
