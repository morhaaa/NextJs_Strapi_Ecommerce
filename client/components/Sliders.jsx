import React, { useEffect, useState } from "react";
import Image from "next/image";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import intro1 from "../public/intro1.png";
import intro2 from "../public/intro2.png";
import intro3 from "../public/intro3.png";

const sliders = () => {
  const data = [intro1, intro2, intro3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prev) =>
        prev == data.length - 1 ? prev - (data.length - 1) : prev + 1
      );
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const prevSlide = () => {
    setCurrentImage(currentImage === 0 ? data.length - 1 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentImage(currentImage === data.length - 1 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="overflow-x-hidden relative h-full">
      <div
        className={`flex w-[${300}vw] transition duration-300 ease-in`}
        style={{ transform: `translateX(-${currentImage * 100}vw)` }}
      >
        {data.map((element, id) => (
          <div
            key={id}
            className="w-[300vw]  h-[40vh] md:h-[70vh] flex relative "
          >
            <Image src={element} alt="slide" fill className="object-contain" />
          </div>
        ))}
      </div>
      <div className="absolute w-full flex items-center gap-2 justify-center bottom-2">
        <HiOutlineArrowSmLeft
          size={40}
          onClick={prevSlide}
          className="border-2 rounded-full backdrop-blur-3xl text-white hover:scale-105 active:scale-95 cursor-pointer transition ease-in-out duration-150 drop-shadow-2xl"
        />
        <HiOutlineArrowSmRight
          size={40}
          onClick={nextSlide}
          className="border-2 rounded-full backdrop-blur-3xl text-white hover:scale-105 active:scale-95 cursor-pointer transition ease-in-out duration-150 drop-shadow-2xl"
        />
      </div>
    </div>
  );
};

export default sliders;
