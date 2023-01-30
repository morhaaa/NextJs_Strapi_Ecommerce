import React, { useState } from "react";
import { useRouter } from "next/router";
import { RiSearch2Line } from "react-icons/ri";
import { RiHeart3Line } from "react-icons/ri";
import { RiShoppingCart2Line } from "react-icons/ri";
import { RiUserLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import Hamburger from "hamburger-react";
import Cart from "./Cart";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [burger, setBurger] = useState(false);

  const NavMenu = [
    { value: "Woman", category: "woman" },
    { value: "Man", category: "Man" },
    { value: "Shoes", category: "shoes" },
    { value: "Accessory", category: "accessory" },
  ];

  return (
    <>
      {/*big size screen*/}
      <nav className="w-screen hidden lg:flex flex-row  items-center border shadow-md  ">
        {/*left side*/}
        <div className="flex items-center basis-1/3">
          <div className="flex  mx-2  text-lg font-medium">
            {NavMenu.map((item, id) => (
              <p
                key={id}
                onClick={() => {
                  router.push({
                    pathname: "/products",
                    query: { category: item.category },
                  });
                  setBurger(false);
                  setOpen(false);
                }}
                className="rounded-2xl px-4 cursor-pointer hover:bg-slate-100 transition ease-in-out duration-150"
              >
                {item.value}
              </p>
            ))}
          </div>
        </div>
        {/*center*/}
        <div
          onClick={() => {
            router.push("/");
            setOpen(false);
          }}
          className="text-3xl font-bold basis-1/3 text-center cursor-pointer   "
        >
          STORE
        </div>
        {/*right side*/}
        <div className="flex justify-end items-center font-medium px-5 basis-1/3">
          <div className="flex gap-4 items-center">
            <RiUserLine
              size={22}
              className="cursor-pointer rounded-2xl   transition ease-in-out duration-150"
            />
            <RiSearch2Line
              size={22}
              className="cursor-pointer rounded-2xl  transition ease-in-out duration-150"
            />
            <RiHeart3Line
              size={22}
              className="cursor-pointer rounded-2xl transition ease-in-out duration-150"
            />
            <div onClick={() => setOpen(!open)} className="relative">
              <RiShoppingCart2Line
                size={24}
                className="cursor-pointer rounded-2xl   transition ease-in-out duration-150"
              />
              <span className="absolute -top-1 -right-1 px-1  bg-black text-white font-bold  text-xs rounded-full">
                {products.length}
              </span>
            </div>
          </div>
        </div>{" "}
      </nav>

      {/*small size screen*/}

      <nav className="flex lg:hidden w-screen justify-between items-center px-4 drop-shadow-md bg-white ">
        <div
          onClick={() => {
            router.push("/");
            setBurger(false);
            setOpen(false);
          }}
          className="text-lg font-bold  text-center cursor-pointer    "
        >
          STORE
        </div>
        <div
          onClick={() => {
            setOpen(!open);
            setBurger(false);
          }}
          className="relative"
        >
          <RiShoppingCart2Line
            size={24}
            className="cursor-pointer rounded-2xl   transition ease-in-out duration-150"
          />
          <span className="absolute -top-1 -right-1 px-1  bg-black text-white font-bold  text-xs rounded-full">
            {products.length}
          </span>
        </div>
        <Hamburger toggled={burger} toggle={setBurger} size={18} />
      </nav>

      {open && <Cart />}

      {burger && (
        <div className="absolute bg-white z-50 right-0 w-[50%] flex flex-col gap-3 py-4 px-4 border drop-shadow-xl rounded-xl">
          <h2 className="font-bold text-lg">CATEGORIES</h2>
          {NavMenu.map((item, id) => (
            <p
              key={id}
              onClick={() => {
                router.push({
                  pathname: "/products",
                  query: { category: item.category },
                });
                setBurger(false);
                setOpen(false);
              }}
              className="font-semibold italic cursor-pointer"
            >
              {item.value}
            </p>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
