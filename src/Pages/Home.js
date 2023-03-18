import React, { useState } from "react";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Project from "../Components/Project";
import Contact from "../Components/Contact";
import Connect from "../Components/Connect";

const Home = () => {
  const [Mode, setMode] = useState("white");
  const [textColor, settextColor] = useState("black");
  const changeMode = () => {
    if (Mode === "black" && textColor === "white") {
      setMode("white");
      settextColor("black");
    } else {
      setMode("black");
      settextColor("white");
    }
  };
  return (
    <>
      <div className="Home-page scroll-smooth">
        <header>
          <Navbar Mode={Mode} changeMode={changeMode} textColor={textColor} />
        </header>
        <main
          className={`${
            Mode ? `bg-${Mode}` : `bg-${Mode}`
          } px-4 py-4 font-poppins`}
        >
          <Hero textColor={textColor} />
        </main>
        <section className="projects-dashboard min-h-[100vh]">
          <Project />
        </section>
        <Connect textColor={textColor} Mode={Mode} />
        <Contact />
      </div>
    </>
  );
};

export default Home;
