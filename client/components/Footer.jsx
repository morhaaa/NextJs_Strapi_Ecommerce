import React from "react";
import { GoMail } from "react-icons/go";
import { BiPhone } from "react-icons/bi";
import Image from "next/image";
import Payment from "../public/payment.png";

const Footer = () => {
  return (
    <div className="px-10 md:px-20 lg:px-28 py-5 flex flex-col items-center gap-6 w-screen">
      {/*Upper Section*/}
      <div className="flex flex-col gap-5 md:flex-row justify-between">
        <div className="flex flex-col gap-1 md:gap-2">
          <h1 className="font-bold text-gray-700 font-xl">Categories</h1>
          <p className="text-gray-500 font-medium cursor-pointer">Woman</p>
          <p className="text-gray-500 font-medium  cursor-pointer">Man</p>
          <p className="text-gray-500 font-medium  cursor-pointer">Shoes</p>
          <p className="text-gray-500 font-medium  cursor-pointer">
            Accessories
          </p>
        </div>

        <div className="flex flex-col gap-1 md:gap-2">
          <h1 className="font-bold text-gray-700 font-xl">Link</h1>
          <p className="text-gray-500 font-medium cursor-pointer">Faq</p>
          <p className="text-gray-500 font-medium  cursor-pointer">Stores</p>
          <p className="text-gray-500 font-medium  cursor-pointer">Cookies</p>
          <p className="text-gray-500 font-medium  cursor-pointer">Help</p>
        </div>

        <div className="basis-1/4">
          <h1 className="font-bold text-gray-700 font-xl ">Our Philosophy</h1>
          <p className="text-gray-500 font-medium ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex flex-col gap-1 md:gap-2">
          <h1 className="font-bold text-gray-700 font-xl">Contact</h1>
          <div className="text-gray-500 flex items-center gap-2">
            <GoMail />
            <p className=" font-medium cursor-pointer">xxxx@outlook.com</p>
          </div>
          <div className="text-gray-500  flex items-center gap-2">
            <BiPhone />
            <p className="font-medium cursor-pointer">+39 xxxx from Italy</p>
          </div>
          <div className="text-gray-500  flex items-center gap-2">
            <BiPhone />
            <p className="font-medium cursor-pointer">+1 xxxx from USA</p>
          </div>
        </div>
      </div>
      {/*Bottom Section*/}
      <div className="w-full flex flex-col md:flex-row gap-4 justify-between">
        <div className="flex gap-2 items-center">
          <h2 className="text-3xl font-bold text-end cursor-pointer ">STORE</h2>
          <p className="text-gray-500 italic text-xs lg:text-sm">
            © Copyright 2023. All Right Reserved
          </p>
        </div>

        <div>
          <Image src={Payment} alt="payment" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
