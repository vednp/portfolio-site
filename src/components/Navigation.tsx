import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Navigation() {
  return (
    <ul className="flex space-x-3 md:space-x-4 font-light cursor-pointer text-[#93B1A6] dark:text-[#93B1A6]">
      <li>
        <ScrollLink to="about" smooth={true} spy={true} className="transition-all duration-500 ease-in-out bg-clip-text" activeClass="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-transparent">
          About
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="skills" smooth={true} spy={true} className="transition-all duration-500 ease-in-out bg-clip-text" activeClass="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-transparent">
          Skills
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="projects" smooth={true} spy={true} className="transition-all duration-500 ease-in-out bg-clip-text" activeClass="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-transparent">
          Projects
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="academics" smooth={true} spy={true} className="transition-all duration-500 ease-in-out bg-clip-text" activeClass="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-transparent">
          Academic Work
        </ScrollLink>
      </li>
    </ul>
  );
}

export default Navigation;
