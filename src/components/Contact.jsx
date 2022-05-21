import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-gradient-to-tl from-sky-700 via-indigo-700 to-teal-900 flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/e75cc1cc-496f-4db4-86d7-ccb4da8c67ca"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-extrabold text-white inline border-b-4">
            Contact Me
          </p>
          <p className="font-extrabold text-white py-4">
            If you'd like to get in touch, please fill out the following form
            and I will get back to you as soon as possible.
          </p>
        </div>
        <input
          className="bg-[#1D3F6E] text-white p-2"
          type="text"
          placeholder="Your Name"
          name="name"
        />
        <input
          className="my-4 text-white p-2 bg-[#1D3F6E]"
          type="email"
          placeholder="Your Email"
          name="email"
        />
        <textarea
          className="bg-[#1D3F6E] text-white p-2"
          name="message"
          rows="10"
          placeholder="Your message"
        ></textarea>
        <button className="text-white shadow-xl shadow-[#00FFFF] border-4 hover:bg-[#00FFFF] hover:text-black px-4 py-3 my-8 mx-auto flex items-center font-bold">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
