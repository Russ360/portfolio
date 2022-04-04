import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-br from-sky-700 via-indigo-700 to-teal-900"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl m-2 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-200 to-rose-200 sm:text-7xl inline border-b-4">
          Hi, I'm Russell H.
        </h1>
        <h2 className="text-4xl sm:text-5xl text-5xl font-extrabold text-white">
          a Freelance Developer
        </h2>
        <p className="font-extrabold text-white">
          and a self-taught programmer specializing in Web Development, UI/UX
          design and cross-platform mobile applications.
        </p>
        <div>
          <Link to="about" smooth={true} offset={-90} duration={500}>
            <button className="text-white group shadow-xl shadow-[#00FFFF] border-4 px-6 py-3 my-2 flex items-center hover:bg-[#00FFFF] hover:text-black font-bold ">
              About Me
              <span className="group-hover:rotate-90 duration-300 ">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
