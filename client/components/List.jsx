import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import getElement from "./getElement";

const List = ({ maxPrice, sort, cat, isNew, onSale }) => {
  const { products, loading } = getElement(`products?populate=*${cat.map(
    (element) => `&[filters][category][$eq]?=${element}&`
  )}&[filters][price][$lte]=${maxPrice}${
    sort === null ? "" : `&sort=price:${sort}`
  }${isNew ? `&[filters][isNew][$eq]=${true}` : ""}
  ${onSale ? `&[filters][sale][$eq]=${true}` : ""}`);

  const router = useRouter();

  return (
    <>
      {loading ? (
        <h3 className="h-[70vh] text-center py-10 font-semibold">
          loading items
        </h3>
      ) : (
        <div className="flex flex-wrap justify-center py-4 gap-6">
          {products.map((element, id) => (
            <div
              key={id}
              onClick={() => router.push(`/product/${element.id}`)}
              className="flex flex-col items-center"
            >
              <div className="h-[200px] w-[150px] md:h-[230px] md:w-[180px] lg:h-[250px] lg:w-[190px]  mx-auto relative cursor-pointer ">
                {element.attributes.isNew ? (
                  <div className="z-20  m-2 py-1 px-2 absolute bg-white text-violet-500 font-bold rounded-xl">
                    NEW !
                  </div>
                ) : (
                  ""
                )}
                {element.attributes.img.data ? (
                  <Image
                    src={element.attributes.img.data.attributes.url}
                    fill
                    className="object-cover hover:opacity-0 z-10 rounded-xl"
                    alt="products1"
                  />
                ) : (
                  ""
                )}
                <Image
                  src={element?.attributes.img2.data.attributes.url}
                  fill
                  alt="products2"
                  className="object-cover hover:z-0 rounded-xl"
                />
              </div>
              <h3 className="font-semibold italic ">
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
          ))}
        </div>
      )}
    </>
  );
};

export default List;
