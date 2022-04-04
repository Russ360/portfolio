import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
import Holder2 from "../assets/holder2.jpg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div
      className="fixed w-full h-[80px] flex justify-between items-center shadow-lg shadow-[#00FFFF] px-4 bg-[#353539] text-gray-300 "
      style={{ backgroundImage: `url(${Holder2})` }}
    >
      <div>
        <Link to="home" smooth={true} duration={500}>
          <img src={Logo} alt="Logo Image" style={{ width: "85px" }} />
        </Link>
      </div>

      {/* menu */}
      <ul className="hidden md:flex text-4xl sm:text-2xl font-bold text-white ">
        <li className=" m-2 border-4 bg-[#000000] hover:text-black hover:bg-[#00FFFF]">
          <Link to="home" smooth={true} duration={500}>
            Go Home
          </Link>
        </li>

        <li className="border-4 m-2 bg-[#000000] hover:text-black hover:bg-[#00FFFF]">
          <Link to="about" smooth={true} offset={-90} duration={500}>
            About Me
          </Link>
        </li>
        <li className="border-4 m-2 bg-[#000000] hover:text-black hover:bg-[#00FFFF]">
          <Link to="skills" smooth={true} offset={-90} duration={500}>
            Skills & Strengths
          </Link>
        </li>
        <li className="border-4 m-2 bg-[#000000] hover:text-black hover:bg-[#00FFFF]">
          <Link to="work" smooth={true} offset={-90} duration={500}>
            My Works
          </Link>
        </li>
        <li className="border-4 m-2 bg-[#000000] hover:text-black hover:bg-[#00FFFF]">
          <Link to="contact" smooth={true} offset={-90} duration={500}>
            Contact Me
          </Link>
        </li>
        <li className="m-2 border-4 bg-[#000000] hover:text-black hover:bg-[#00FFFF]">
          <a
            className="flex justify-between items-center w-full text-white hover:text-black hover:bg-[#00FFFF]"
            href="https://github.com/Russ360"
          >
            Github <FaGithub size={30} />
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-sky-700 via-indigo-700 to-teal-900 flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-200 to-rose-200">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Go Home
          </Link>
        </li>
        <li className="py-6 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-200 to-rose-200">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About Me
          </Link>
        </li>
        <li className="py-6 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-200 to-rose-200">
          {" "}
          <Link
            onClick={handleClick}
            to="skills"
            smooth={true}
            offset={-90}
            duration={500}
          >
            Skills & Strengths
          </Link>
        </li>
        <li className="py-6 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-200 to-rose-200">
          {" "}
          <Link
            onClick={handleClick}
            to="work"
            smooth={true}
            offset={-90}
            duration={500}
          >
            My Works
          </Link>
        </li>
        <li className="py-6 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-200 to-rose-200">
          {" "}
          <Link
            onClick={handleClick}
            to="contact"
            smooth={true}
            offset={-90}
            duration={500}
          >
            Contact Me
          </Link>
        </li>
        <li className="py-6 text-4xl py-6 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-200 to-rose-200">
          <a
            className="py-6 flex justify-between items-center w-full"
            href="https://github.com/Russ360"
          >
            Github <FaGithub size={0.1} />
          </a>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[30%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] border-2 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#000000] shadow-lg shadow-[#00FFFF]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://github.com/Russ360"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <Link to="contact" smooth={true} duration={500}>
            <li className="w-[160px] h-[60px] border-2 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#353539] shadow-lg shadow-[#00FFFF]">
              <a className="flex justify-between items-center w-full text-white">
                Email <HiOutlineMail size={30} />
              </a>
            </li>
          </Link>
          <Link to="skills" smooth={true} offset={-90} duration={500}>
            <li className="w-[160px] h-[60px] flex justify-between items-center border-2 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] shadow-md shadow-[#00FFFF]">
              <a className="flex justify-between items-center w-full text-white">
                Resume <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
