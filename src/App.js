import React, { useState } from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import Navbar from "../src/Components/Navbar"

const App = () => {
  const [Toggle, setToggle] = useState(false);
  const [Mode, setMode] = useState(false);
  const showNavbar = () => {
    if (Toggle === false) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  const changeMode = () => {
    if (Mode === false) {
      setMode(true);
    } else {
      setMode(false);
    }
  };
  return (
    <>
      <BrowserRouter>
      <Navbar Toggle={Toggle} Mode={Mode} setToggle={setToggle} showNavbar={showNavbar} changeMode={changeMode} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                Toggle={Toggle}
                Mode={Mode}
                showNavbar={showNavbar}
                changeMode={changeMode}
              />
            }
          ></Route>
          <Route
            exact
            path="/about"
            element={
              <About
                Toggle={Toggle}
                Mode={Mode}
                showNavbar={showNavbar}
                changeMode={changeMode}
              />
            }
          ></Route>
          <Route
            exact
            path="/project"
            element={
              <Project
                Toggle={Toggle}
                Mode={Mode}
                showNavbar={showNavbar}
                changeMode={changeMode}
              />
            }
          ></Route>
          <Route
            exact
            path="/contact"
            element={
              <Contact
                Toggle={Toggle}
                Mode={Mode}
                showNavbar={showNavbar}
                changeMode={changeMode}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
