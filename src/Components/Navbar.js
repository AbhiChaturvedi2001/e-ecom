import React, { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsSun } from "react-icons/bs";

const Navbar = ({ Mode, Toggle, showNavbar, changeMode }) => {
  return (
    <>
      <nav
        className={`flex justify-between items-center ${
          Mode ? `bg-black` : `bg-white`
        } min-h-[12vh] px-14`}
      >
        <div
          className={`s:text-xs sm:text-lg mt-3 font-concert text-2xl ${
            Mode ? `text-white` : `text-black`
          } uppercase tracking-wider`}
        >
          Developed By Abhi
        </div>
        <div className="flex items-center justify-around s:w-[65%] md:w-[40%] w-[20%]">
          <button className="btn bg-orange-500 px-3 py-1 text-white font-normal ">
            Resume
          </button>
          <HiBars3BottomRight
            onClick={showNavbar}
            className={`mt-3 text-3xl cursor-pointer ${
              Mode ? `text-white` : `text-black`
            } `}
          />
          {Mode ? (
            <BsSun
              onClick={changeMode}
              className="mt-3 text-3xl cursor-pointer text-white"
            />
          ) : (
            <MdDarkMode
              onClick={changeMode}
              className="mt-3 text-3xl cursor-pointer"
            />
          )}
        </div>
      </nav>
      <div>
        <ul
          className={`bg-gray-500 absolute top-0 duration-300 ease-in-out ${
            Toggle ? `left-0 w-[200px]` : `-left-40`
          } flex flex-col items-center h-[100vh] `}
        >
          <li className="links">
            <Link to="/">Home</Link>
          </li>
          <li className="links">
            <Link to="/about">About</Link>
          </li>
          <li className="links">
            <Link to="/project">Project</Link>
          </li>
          <li className="links">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
