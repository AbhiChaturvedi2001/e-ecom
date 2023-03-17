import React from "react";
import { MdDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";

const Navbar = ({ changeMode, Mode, textColor }) => {
  return (
    <>
      <nav
        className={`Navbar flex justify-between px-4 min-h-[10vh] ${
          Mode ? `bg-${Mode}` : `bg-${Mode}`
        } items-center`}
      >
        <div
          className={`uppercase font-bebas tracking-wider text-xl ${
            textColor ? `text-${textColor}` : `text-${textColor}`
          }`}
        >
          Developed by Abhi
        </div>
        <ul className="nav-links flex items-center">
          <li>
            {Mode === "white" ? (
              <MdDarkMode
                onClick={changeMode}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <BsSun
                onClick={changeMode}
                className="text-white text-2xl cursor-pointer"
              />
            )}
          </li>
          <li>
            <a
              className="font-poppins font-semibold bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 px-4 py-2 text-white cursor-pointer rounded-md ml-6 "
              href="/"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
