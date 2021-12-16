import React, { useEffect, useState } from "react";

import News from "../../News";
import Pagination from "../../Pagination";
import Products from "../../Products";
import Slider from "../../Slider";

export const Home = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    fetch("https://api.freerealapi.com/blogs")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProducts(json.blogs);
      });
  }, []);
  return (
    <>
      <Slider />
      <Products products={products} />
      <Products products={products} />
      <Products products={products} />
      <Products products={products} />

      <Pagination />
      <News />
    </>
  );
};
