import React, { useState } from "react";
import MobileNavbar from "./MobileNavbar";
import { Link } from "react-scroll";
import { RiCloseFill } from "react-icons/ri";
import { CgMenuMotion } from "react-icons/cg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {isMenuOpen && (
        <MobileNavbar isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}

      <div className="w-screen hidden md:flex items-center justify-center py-4 fixed top-0 z-10 ">
        <nav className="max-w-screen-xl mx-auto py-3 px-6 bg-navbg rounded-xl shadow-lg shadow-sky-600/10">
          <ul className="flex items-center gap-14">
            <li>
              <Link to="home" smooth spy offset={-80} className="menu-item">
                HOME
              </Link>
            </li>

            <li>
              <Link to="team" smooth spy offset={-80} className="menu-item">
                TEAM
              </Link>
            </li>

            <li>
              <Link
                to="projects"
                smooth
                spy
                offset={-80}
                className="menu-item"
              >
                PROJECTS
              </Link>
            </li>

            <li>
              <Link to="about" smooth spy offset={-80} className="menu-item">
                ABOUT US
              </Link>
            </li>

            <li>
              <Link to="contact" smooth spy offset={-80} className="menu-item">
                CONTACT US
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="p-3 fixed top-0 right-0 z-50">
        <button
          onClick={toggleMenu}
          className="w-11 h-11 text-2xl text-sky-300 bg-blue-800/40 border border-sky-900/80 backdrop-blur-lg flex items-center justify-center rounded md:hidden z-50 ml-auto"
        >
          {isMenuOpen ? <RiCloseFill /> : <CgMenuMotion />}
        </button>
      </div>
    </>
  );
};

export default Navbar;
