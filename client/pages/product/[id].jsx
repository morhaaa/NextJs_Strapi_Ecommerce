import Image from "next/image";
import React, { useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { GiScales } from "react-icons/gi";
import { useRouter } from "next/router";
import getElement from "../../components/getElement";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState("img2");
  const [quantity, setQuantity] = useState(1);

  const router = useRouter();
  const idQuery = parseInt(router.query.id);
  const dispatch = useDispatch();

  const { products, loading } = getElement(`products?populate=*`);

  return (
    <>
      {loading ? (
        <h3 className="h-[70vh] text-center py-10 font-semibold">
          loading items
        </h3>
      ) : (
        <>
          {products.map((element, id) =>
            element.id == `${idQuery}` ? (
              <div key={id} className="flex md:flex-row flex-col gap-2  py-5">
                {" "}
                {console.log(element.id)}
                {console.log(idQuery)}
                <div className="basis-2/12 items-center justify-center md:justify-start  flex md:flex-col gap-4 md:gap-6 ">
                  <div className="h-[170px] w-[150px]  md:h-[200px] md:w-[175px]l g:h-[220px] lg:w-[200px] relative">
                    <Image
                      src={element?.attributes?.img2?.data?.attributes?.url}
                      alt=""
                      onClick={(e) => setSelectedImg("img2")}
                      fill
                      className="object-cover rounded-lg cursor-pointer"
                    />
                  </div>
                  <div className="h-[170px] w-[150px] lg:h-[220px] lg:w-[200px] relative">
                    <Image
                      src={element?.attributes?.img?.data?.attributes?.url}
                      onClick={(e) => setSelectedImg("img")}
                      fill
                      alt=""
                      className="object-cover rounded-lg cursor-pointer "
                    />
                  </div>
                </div>
                <div className="md:basis-5/12 h-[60vh] lg:h-[90vh] lg:basis-4/12 relative">
                  <Image
                    src={
                      element?.attributes?.[selectedImg]?.data?.attributes?.url
                    }
                    alt=""
                    fill
                    className="object-cover rounded-lg cursor-pointer "
                  />
                </div>
                <div className=" md:basis-5/12 lg:basis-6/12 gap-4  px-6 flex flex-col justify-between">
                  <div className="flex flex-col gap-2 md:gap-3">
                    <h1 className="font-extrabold md:text-3xl lg:text-3xl">
                      {element?.attributes?.title}
                    </h1>
                    <div className="flex items-center">
                      {" "}
                      {element.attributes.oldPrice ? (
                        <h4 className="font-bold line-through  text-gray-400 italic text-xl lg:text-2xl px-2">
                          € {element.attributes.oldPrice}
                        </h4>
                      ) : (
                        ""
                      )}
                      <h4 className="font-bold text-blue-500 text-2xl lg:text-3xl">
                        € {element?.attributes?.price}
                      </h4>
                    </div>

                    <p className="font-medium text-sm md:text-base ">
                      {element?.attributes?.description}
                    </p>
                    <div className="py-6 border-y-2">
                      {" "}
                      <h2 className="font-bold text-xl">Reviews</h2>
                      <div className="flex gap-2">
                        <AiFillStar size={30} />
                        <AiFillStar size={30} />
                        <AiFillStar size={30} />
                        <AiFillStar size={30} />
                        <AiOutlineStar size={30} />
                        <h2 className="font-bold text-xl">4/5 (124)</h2>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="flex items-center gap-3 font-semibold text-md lg:text-xl py-3">
                      <button
                        onClick={() =>
                          setQuantity(quantity === 1 ? 1 : quantity - 1)
                        }
                        className="bg-blue-400 text-white  rounded-full px-4 py-2 hover:bg-blue-500"
                      >
                        -
                      </button>
                      <span>{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="bg-blue-400 text-white rounded-full px-4 py-2 hover:bg-blue-500"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() =>
                        dispatch(
                          addToCart({
                            id: element.id,
                            title: element.attributes.title,
                            description: element?.attributes?.description,
                            price: element.attributes.price,
                            img: element.attributes.img.data.attributes.url,
                            quantity,
                          })
                        )
                      }
                      className="bg-blue-500 hover:bg-blue-300 text-white font-semibold my-2 py-2 px-12 flex gap-4 items-center rounded-xl"
                    >
                      <BsCartPlus size={25} />
                      ADD TO CART
                    </button>
                    <div className="flex">
                      <button className="flex items-center gap-1 lg:gap-2 text-blue-500 font-semibold text-md lg:text-lg hover:bg-blue-100 rounded-2xl py-2 px-4">
                        {" "}
                        <BsHeart size={20} />
                        <p className="">WISHLIST</p>
                      </button>
                      <button className="flex items-center gap-1 lg:gap-2 text-blue-500 font-semibold text-md lg:text-lg hover:bg-blue-100 rounded-2xl py-2 px-4">
                        {" "}
                        <GiScales size={20} />
                        <p className="">COMPARE</p>
                      </button>
                    </div>
                  </div>
                  <div className="w-full flex flex-col text-sm lg:text-md text-gray-400 border-b-2 py-2 ">
                    <p>Logo: Polo</p>
                    <p>Seller: Store</p>
                    <p>
                      Tag: {element?.attributes?.title},
                      {element?.attributes?.category}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </>
      )}
    </>
  );
};

export default Product;
