import React, { useState } from "react";
import Uxui from "../assets/uxui.png";
import Dart from "../assets/dart.png";
import AndroidStudio from "../assets/androidstudio.png";
import Gatsby from "../assets/gatsby.png";
import Vscode from "../assets/vscode.png";
import Python from "../assets/python.png";
import Git from "../assets/git.png";
import Firebase from "../assets/firebase.png";
import Flutter from "../assets/flutter.png";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import { Link } from "react-scroll";

import { HiArrowNarrowRight } from "react-icons/hi";
const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-full md:h-full bg-gradient-to-tl from-sky-700 via-indigo-700 to-teal-900 text-white"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-10 flex justify-center flex-col w-full h-full">
        <div>
          <p className="text-4xl font-extrabold text-white inline border-b-4 ">
            Skills & Strengths
          </p>
          <p className="py-4 font-extrabold text-white">
            I have proficiency with:
          </p>
        </div>

        <div className="w-full h-full grid grid-cols-2  sm:grid-cols-3 gap-3 text-center py-8">
          <div className="shadow-lg shadow-[#00FFFF] hover:scale-110 duration-500">
            <img className="w-10 mx-auto " src={HTML} alt="HTML icon" />
            <p className="my-4 font-extrabold text-white">HTML</p>
          </div>
          <div className="shadow-lg shadow-[#00FFFF] hover:scale-110 duration-500">
            <img className="w-10 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4 font-extrabold text-white">CSS</p>
          </div>
          <div className="shadow-lg shadow-[#00FFFF] hover:scale-110 duration-500">
            <img className="w-10 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4 justify-items w-full h-full font-extrabold text-white">
              JAVASCRIPT
            </p>
          </div>
          <div className="shadow-lg shadow-[#00FFFF] hover:scale-110 duration-500">
            <img className="w-10 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4 font-extrabold text-white">REACT</p>
          </div>
          <div className="shadow-lg shadow-[#00FFFF] hover:scale-110 duration-500">
            <img className="w-10 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4 font-extrabold text-white">GITHUB</p>
          </div>
          <div className="shadow-lg shadow-[#00FFFF] hover:scale-110 duration-500">
            <img className="w-10 mx-auto" src={Node} alt="HTML icon" />
            <p className="my-4 font-extrabold text-white">NODE JS</p>
          </div>
          <div className="shadow-lg shadow-[#00FFFF] hover:scale-110 duration-500">
            <img className="w-10 mx-auto" src={Flutter} alt="HTML icon" />
            <p className="my-4 font-extrabold text-white">FLUTTER</p>
          </div>
          <div className="shadow-lg shadow-[#00FFFF] hover:scale-110 duration-500">
            <img className="w-10 mx-auto" src={Firebase} alt="HTML icon" />
            <p className="my-4 font-extrabold text-white">FIREBASE</p>
          </div>
          <div className="shadow-lg shadow-[#00FFFF] hover:scale-110 duration-500">
            <img className="w-10 mx-auto" src={Git} alt="HTML icon" />
            <p className="my-4 font-extrabold text-white">GIT</p>
          </div>
          <div className="shadow-lg shadow-[#00FFFF] hover:scale-110 duration-500">
            <img className="w-10 mx-auto" src={Python} alt="HTML icon" />
            <p className="my-4 font-extrabold text-white">PYTHON</p>
          </div>
          <div className="shadow-lg shadow-[#00FFFF] hover:scale-110 duration-500">
            <img className="w-10 mx-auto" src={Vscode} alt="HTML icon" />
            <p className="my-4 font-extrabold text-white">VS CODE</p>
          </div>
          <div className="shadow-lg shadow-[#00FFFF] hover:scale-110 duration-500">
            <img className="w-10 mx-auto" src={Gatsby} alt="HTML icon" />
            <p className="my-4 font-extrabold text-white">GATSBY</p>
          </div>{" "}
          <div className="shadow-lg shadow-[#00FFFF] hover:scale-110 duration-500">
            <img className="w-10 mx-auto" src={Uxui} alt="HTML icon" />
            <p className="my-4 font-extrabold text-white">UX/UI</p>
          </div>
          <div className="shadow-lg shadow-[#00FFFF] hover:scale-110 duration-500">
            <img className="w-10 mx-auto" src={AndroidStudio} alt="HTML icon" />
            <p className="my-4 font-extrabold text-white">ANDROID STUDIO</p>
          </div>
          <div className="shadow-lg shadow-[#00FFFF] hover:scale-110 duration-500">
            <img className="my-6 w-10 mx-auto" src={Dart} alt="HTML icon" />
            <p className="my-6 font-extrabold text-white">DART</p>
          </div>
          <div>
            <Link to="work" smooth={true} offset={-90} duration={500}>
              <button className="text-white group shadow-xl shadow-[#00FFFF] border-4 px-6 py-3 my-2 flex items-center font-bold hover:bg-[#00FFFF] hover:text-black">
                View Work
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3 " />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
