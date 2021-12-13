import React from "react";
import Logo from "../../Logo";

import NavBarMobile from "../../NavBareMobile";
import NavBarNav from "../../NavBarNav";
import NavBarNavMobile from "../../NavBarNavMobile";
import NavLogin from "../../NavLogin";
import SearchBar from "../../SearchBar";

const Header = () => {
  return (
    <>
      <div className="    ">
        <div className=" row container  mx-auto p-3 ">
          <div className="   d-none d-lg-flex col-lg-3 align-items-center justify-content-start ">
            <NavLogin />
          </div>
          <div className=" d-none d-lg-flex col-lg-6 align-items-center justify-content-center">
            <SearchBar />
          </div>
          <div className="  d-none d-lg-flex col-lg-3  align-items-center justify-content-end">
            <Logo />
          </div>
          <div className=" col-12 d-lg-none mt-lg-4   ">
            <NavBarMobile />
          </div>
        </div>

        <NavBarNav />
        <NavBarNavMobile />
      </div>
    </>
  );
};

export default Header;
