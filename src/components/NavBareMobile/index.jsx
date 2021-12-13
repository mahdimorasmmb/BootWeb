import React, { useState } from "react";
import ArrowUpIcon from "../Icon/ArrowUpIcon";
import CartIcon from "../Icon/CartIcon";
import SearchIcon from "../Icon/SearchIcon";
import UserIcon from "../Icon/UserIcon";
import SearchBar from "../SearchBar";
import classes from "./NavBarMobile.module.css";

const NavBarMobile = () => {
  const [searchBarShow, setSearchBarShow] = useState(false);
  return (
    <div className="row justify-content-center ">
      <div className="col-12 d-flex justify-content-center">
        <a
          onClick={() => setSearchBarShow((prev) => !prev)}
          className={`ms-5 text-secondary  ${classes.link}`}
        >
          <SearchIcon />
        </a>
        <a className={`ms-5 text-secondary  ${classes.link}`}>
          <CartIcon />
        </a>
        <a className={`ms-5 text-secondary  ${classes.link}`}>
          <UserIcon />
        </a>
        <a className={`ms-5 text-secondary  ${classes.link}`}>
          <ArrowUpIcon />
        </a>
      </div>

      <div className={`col-12 mt-4 ${searchBarShow ? "show" : "fade"} `}>
        <SearchBar />
      </div>
    </div>
  );
};

export default NavBarMobile;
