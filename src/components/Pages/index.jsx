import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./Home";
import Product from "./Product";

export const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};
