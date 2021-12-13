import React from "react";
import ArrowUpIcon from "../../Icon/ArrowUpIcon";
import CartIcon from "../../Icon/CartIcon";
import LoginIcon from "../../Icon/LoginIcon";
import SearchIcon from "../../Icon/SearchIcon";
import UserIcon from "../../Icon/UserIcon";
import NavBarMobile from "../../NavBareMobile";
import SearchBar from "../../SearchBar";

const Header = () => {
  return (
    <div>
      <div className=" container row p-3 mx-auto ">
        <div className="  d-none d-lg-flex col-lg-3 align-items-center justify-content-start ">
          <div className=" btn-group btn-group-sm border-bottom-0 border-top-0  ">
            <button className="btn btn-outline-secondary border-bottom-0 border-top-0 border-start-0 ">
              <CartIcon />
            </button>
            <button className="btn btn-outline-secondary border-bottom-0 border-top-0  ">
              ثبت نام <UserIcon />
            </button>
            <button className="btn btn-outline-secondary border-bottom-0 border-top-0 border-end-0  ">
              ورود <LoginIcon />
            </button>
          </div>
        </div>
        <div className=" d-none d-lg-flex col-lg-6 align-items-center justify-content-center">
          <SearchBar />
        </div>
        <div className="  d-none d-lg-flex col-lg-3  align-items-center justify-content-end">
          <img src="./img/logo.png" alt="Logo" />
        </div>
        <div className=" col-12 d-lg-none mt-4  ">
          <NavBarMobile />
        </div>
      </div>
    </div>
  );
};

export default Header;
