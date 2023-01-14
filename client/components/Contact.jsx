import React from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="w-full bg-blue-600 flex flex-col md:flex-row justify-center gap-2 md:gap-3 lg:gap-5 items-center mt-10 py-2">
      <div className="text-white text-xs md:text-base font-medium">
        STAY CONNECTED
      </div>
      <div className="bg-slate-700 rounded-xl">
        <input
          className="flex-grow px-3 placeholder-gray-400 py-1  outline-none text-md md:text-lg rounded-l-xl "
          type="text"
          placeholder="Insert your mail"
        />
        <button className="text-white text-sm md:text-base font-semibold  px-2 py-1 h-full rounded-r-xl">
          {" "}
          JOIN US{" "}
        </button>
      </div>
      <div className="text-white flex flex-row gap-2">
        <AiFillFacebook size={20} />
        <AiFillInstagram size={20} />
        <AiOutlineTwitter size={20} />
        <AiOutlineGoogle size={20} />
        <FaPinterest size={20} />
      </div>
    </div>
  );
};

export default Contact;
