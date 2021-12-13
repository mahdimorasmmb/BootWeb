import React, { useState } from "react";
import { dataNavBarNav } from "../../data/data";
import DropDown from "../DropDown";
import Bars from "../Icon/Bars";

const NavBarNavMobile = () => {
  const [navBarMobileShow, setNavBarMobileShow] = useState(false);
  return (
    <div className=" d-lg-none    ">
      <button
        className="btn btn-secondary w-100  "
        onClick={() => setNavBarMobileShow((prev) => !prev)}
      >
        <Bars />
      </button>
      <div className=" btn-group-vertical d-inline-block w-100">
        {navBarMobileShow &&
          dataNavBarNav.map((item) =>
            item.dropdown ? (
              <DropDown key={item.id} item={item} />
            ) : (
              <button
                key={item.id}
                className="btn btn-secondary border-start   rounded-0"
              >
                {item.name}
              </button>
            )
          )}
      </div>
    </div>
  );
};

export default NavBarNavMobile;
