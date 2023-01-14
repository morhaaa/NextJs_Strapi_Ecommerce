import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import getElement from "./getElement";

const TrendingProducts = () => {
  const { products, loading } = getElement("products?populate=*");
  const router = useRouter();

  return (
    <>
      {loading ? (
        "loading"
      ) : (
        <div className="px-5 lg:px-10 py-5">
          <h2 className="font-bold text-2xl py-4 text-center">
            TRENDING PRODUCTS
          </h2>

          <div className="flex flex-col md:flex-row  gap-2 lg:gap-10 w-full justify-center overflow-x-auto">
            {products.map((element, id) =>
              element.attributes.trendingProducts ? (
                <div
                  key={id}
                  onClick={() => router.push(`product/${id}`)}
                  className="flex flex-col items-center"
                >
                  <div className="h-[200px] w-[150px] md:h-[230px] md:w-[180px] lg:h-[400px] lg:w-[250px]  mx-auto relative cursor-pointer ">
                    {element.attributes.isNew ? (
                      <div className="z-20  m-2 py-1 px-2 absolute bg-white text-violet-500 font-bold rounded-xl">
                        NEW !
                      </div>
                    ) : (
                      ""
                    )}
                    <Image
                      src={element?.attributes?.img?.data?.attributes?.url}
                      fill
                      className="object-cover hover:opacity-0 z-10 rounded-xl"
                      alt="products1"
                    />
                    <Image
                      src={element?.attributes?.img2?.data?.attributes?.url}
                      fill
                      alt="products2"
                      className="object-cover hover:z-0 rounded-xl"
                    />
                  </div>
                  <h3 className="font-bold italic ">
                    {element.attributes.title}
                  </h3>
                  <div className="flex gap-3">
                    {element.attributes.oldPrice ? (
                      <p className="line-through  italic font-bold text-gray-500">
                        €{element.attributes.oldPrice}
                      </p>
                    ) : (
                      ""
                    )}
                    <p className="font-bold ">€{element?.attributes.price}</p>
                  </div>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default TrendingProducts;
