import React, { useState, useEffect } from "react";
import List from "../components/List";
import { useRouter } from "next/router";

const Products = () => {
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState(
    router.query.category == "woman" ||
      router.query.category == "man" ||
      router.query.category == "shoes" ||
      router.query.category == "accessory"
      ? [router.query.category]
      : []
  );
  const [isNew, setIsNew] = useState(
    router.query.category == "isNew" ? true : false
  );
  const [onSale, setOnSale] = useState(
    router.query.category == "onSale" ? true : false
  );
  const [maxPrice, setMaxPrice] = useState(500);
  const [sort, setSort] = useState(null);

  useEffect(() => {
    setSelectedCategory(
      router.query.category == "woman" ||
        router.query.category == "man" ||
        router.query.category == "shoes" ||
        router.query.category == "accessory"
        ? [router.query.category]
        : []
    );
    if (router.query.category == "isNew") {
      setIsNew(true);
    }
    if (router.query.category == "onSale") {
      setOnSale(true);
    }
  }, [router.query]);

  const categories = [
    { category: "woman" },
    { category: "man" },
    { category: "shoes" },
    { category: "accessory" },
  ];

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedCategory(
      isChecked
        ? [...selectedCategory, value]
        : selectedCategory.filter((element) => element !== value)
    );
  };

  return (
    <div className="flex px-4 w-screen flex-col md:flex-row border-b-2 h-[120vh] md:h-[90vh] ">
      {/* CATOGORIES AND FILTER*/}
      <div className="py-4 px-4 flex flex-col md:basis-3/12 gap-2 md:gap-10 border-b-2 md:border-r-2 drop-shadow-md ">
        <div className="flex flex-col  gap-1 font-medium ">
          <h2 className="font-bold text-xl">Categories</h2>

          <div className="flex flex-row md:flex-col flex-wrap gap-2">
            {categories.map((element, id) => (
              <div key={id}>
                <input
                  type="checkbox"
                  id={element.category}
                  value={element.category}
                  onChange={handleChange}
                  defaultChecked={
                    router.query.category == element.category ? true : false
                  }
                  className="cursor-pointer  mr-1"
                />
                <label htmlFor={element.category}>{element.category}</label>
              </div>
            ))}
            <div>
              <input
                type="checkbox"
                id="isNew"
                value="isNew"
                defaultChecked={router.query.category == "isNew" ? true : false}
                onChange={() => setIsNew(!isNew)}
                className="cursor-pointer  mr-1"
              />
              <label htmlFor="isNew">New Collection</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="onSale"
                value="onSale"
                defaultChecked={
                  router.query.category == "onSale" ? true : false
                }
                onChange={() => setOnSale(!onSale)}
                className="cursor-pointer  mr-1"
              />
              <label htmlFor="onSale">On Sale</label>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-xl">Range Price</h2>
          <div className="flex items-center">
            <span>0€</span>
            <input
              type="range"
              min="0"
              max="1000"
              onChange={(e) => setMaxPrice(e.target.value)}
              className="cursor-pointer"
            />
            <span>€{maxPrice}</span>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-xl">Sort By</h2>
          <div>
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
              className="cursor-pointer  mr-1"
            />
            <label>Price: Low-high</label>
          </div>
          <div>
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
              className="cursor-pointer  mr-1"
            />
            <label>Price: High-Low</label>
          </div>
        </div>
      </div>

      <div className="px-4 md:basis-9/12 overflow-y-scroll">
        <List
          maxPrice={maxPrice}
          sort={sort}
          cat={selectedCategory}
          isNew={isNew}
          onSale={onSale}
        />
      </div>
    </div>
  );
};

export default Products;
