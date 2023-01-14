import Image from "next/image";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../redux/cartReducer";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const total = () => {
    let total = 0;
    products.map((element) => (total += element.quantity * element.price));
    return total.toFixed(2);
  };

  return (
    <div className=" w-screen lg:w-[600px] right-0  absolute bg-white rounded-2xl border  py-4 px-6 z-40 flex flex-col gap-3 shadow-2xl">
      <h2 className="font-bold text-xl">Your Products</h2>

      {products.length == 0 ? (
        <div className="font-bold text-lg text-gray-300 text-center">
          YOUR CART IS EMPTY{" "}
        </div>
      ) : (
        ""
      )}

      {products?.map((item, id) => (
        <div key={id} className="flex justify-between  items-center">
          <div className="h-24 w-20 relative">
            <Image
              src={item.img}
              fill
              alt="your cart"
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            {" "}
            <h3 className="italic font-semibold">{item.title}</h3>
            <p className="w-40 md:w-96 text-gray-600 text-sm">
              {item?.description?.substring(0, 100)}
            </p>
            <div
              value={item.quantity * item.price}
              className="font-semibold text-blue-500"
            >
              {" "}
              {item.quantity} x €{item.price}
            </div>
          </div>
          <FaTrashAlt
            className="cursor-pointer"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}

      <div className="flex justify-between font-bold">
        {" "}
        <p>SUBTOTAL</p>
        <p>€ {total()}</p>
      </div>

      <button
        type="submit"
        role="link"
        className="bg-blue-500 font-medium text-white py-2 rounded-xl"
      >
        PROCEED TO CHECKOUT
      </button>

      <button
        className="text-sm text-red-600"
        onClick={() => dispatch(resetCart())}
      >
        Reset Cart
      </button>
    </div>
  );
};

export default Cart;
