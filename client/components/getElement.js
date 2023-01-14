import React, { useState, useEffect } from "react";
import axios from "axios";

const getElement = (url) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(process.env.NEXT_PUBLIC_STRAPI_URL + url, {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API}`,
          },
        });
        setProducts(res.data.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { products, loading };
};

export default getElement;
