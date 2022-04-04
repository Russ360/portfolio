import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-tr from-purple-600 via-indigo-500 to-sky-700"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-extrabold text-white inline border-b-4  ">
              About Me:
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right font-extrabold text-white  text-3xl ">
            <p>
              "Whether you think you can, or you think you can't, you're right."{" "}
            </p>
          </div>
          <div className="font-extrabold text-white">
            <p>
              Henry Ford put it best when it comes to my outlook on virtually
              all things in the Information Age. I firmly believe that if it can
              be done, I can do it personally. This philosophy keeps me not only
              productive, but also learning in perpetuity.{" "}
            </p>
            <div>
              <Link to="skills" smooth={true} offset={-90} duration={500}>
                <button className="text-white shadow-xl shadow-[#00FFFF] group border-4 px-6 py-3 my-2 flex items-center font-bold hover:bg-[#00FFFF] hover:text-black">
                  View My Skills
                  <span className="group-hover:rotate-90 duration-300">
                    <HiArrowNarrowRight className="ml-3 " />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
