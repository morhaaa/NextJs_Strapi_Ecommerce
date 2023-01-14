import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Categories = () => {
  const router = useRouter();

  return (
    <div className="w-screen px-4 py-5">
      <h1 className="text-center text-2xl font-bold py-4">CATEGORIES</h1>
      <div className="flex flex-row justify-between h-[78vh] gap-2 md:gap-5 cursor-pointer">
        {/* col 1*/}
        <div className="flex flex-col gap-2 md:gap-5 basis-1/4">
          {/* row 1*/}
          <div
            onClick={() =>
              router.push({
                pathname: "/products",
                query: { category: "onSale" },
              })
            }
            className="basis-2/3 w-full h-full  relative flex items-center justify-center hover:scale-105 transition easy-in-out"
          >
            <Image
              src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
              fill
              alt=""
              className="object-cover rounded-2xl"
            />
            <button className="bg-white py-1 px-2 absolute rounded-lg text-violet-500 font-bold  ">
              <p className="text-xs md:text-base">SALE</p>
            </button>
          </div>
          {/* row 2*/}
          <div
            onClick={() =>
              router.push({
                pathname: "/products",
                query: { category: "woman" },
              })
            }
            className="basis-1/3 w-full h-full relative flex items-center justify-center hover:scale-105 transition easy-in-out"
          >
            <Image
              src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
              fill
              alt=""
              className="object-cover rounded-2xl"
            />
            <button className="bg-white py-1 px-2 absolute rounded-lg text-violet-500 font-bold  ">
              <p className="text-xs md:text-base">WOMEN</p>
            </button>
          </div>
        </div>

        {/* col 2*/}
        <div
          onClick={() =>
            router.push({
              pathname: "/products",
              query: { category: "isNew" },
            })
          }
          className="h-full basis-1/4 relative flex items-center justify-center hover:scale-105 transition easy-in-out"
        >
          {" "}
          <Image
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
            fill
            alt=""
            className="object-cover rounded-2xl"
          />
          <button className="bg-white py-1 md:px-2 absolute rounded-lg text-violet-500 font-bold  ">
            <p className="text-xs md:text-base">NEW SEASON</p>
          </button>
        </div>

        {/* col 3*/}
        <div className="flex flex-col gap-2 md:gap-5 basis-2/4">
          {/* row 1*/}
          <div
            onClick={() =>
              router.push({
                pathname: "/products",
                query: { category: "man" },
              })
            }
            className="flex flex-row h-full gap-2 md:gap-5  basis-1/2 "
          >
            <div className="basis-1/2 relative flex items-center justify-center hover:scale-105 transition easy-in-out">
              {" "}
              <Image
                src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                fill
                alt=""
                className="object-cover rounded-2xl"
              />
              <button className="bg-white py-1 px-2 absolute rounded-lg text-violet-500 font-bold  ">
                <p className="text-xs md:text-base">MAN</p>
              </button>
            </div>
            <div
              onClick={() =>
                router.push({
                  pathname: "/products",
                  query: { category: "accessory" },
                })
              }
              className="basis-1/2 relative flex items-center justify-center hover:scale-105 transition easy-in-out"
            >
              {" "}
              <Image
                src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                fill
                alt=""
                className="object-cover rounded-2xl"
              />
              <button className="bg-white py-1 md:px-2 absolute rounded-lg text-violet-500 font-bold   ">
                <p className="text-xs md:text-base">ACCESSORIES</p>
              </button>
            </div>
          </div>

          {/* row w*/}
          <div
            onClick={() =>
              router.push({
                pathname: "/products",
                query: { category: "shoes" },
              })
            }
            className="basis-1/2 relative flex items-center justify-center hover:scale-105 transition easy-in-out"
          >
            {" "}
            <Image
              src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
              fill
              alt=""
              className="object-cover rounded-2xl"
            />
            <button className="bg-white py-1 px-2 absolute rounded-lg text-violet-500 font-bold  ">
              <p className="text-xs md:text-base">SHOES</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
