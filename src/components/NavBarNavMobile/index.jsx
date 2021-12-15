import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { dataNavBarNav } from "../../data/data";
import DropDown from "../DropDown";
import Bars from "../Icon/Bars";

const NavBarNavMobile = () => {
  const [navBarMobileShow, setNavBarMobileShow] = useState(false);
  return (
    <div className=" d-lg-none   ">
      <button
        className="btn btn-secondary w-100 text-end rounded-0  h-100 "
        onClick={() => setNavBarMobileShow((prev) => !prev)}
      >
        <Bars />
      </button>
      <Collapse in={navBarMobileShow}>
        <div>
          {" "}
          {dataNavBarNav.map((item) => (
            <div
              key={item.id}
              className=" btn-group-vertical d-inline-block w-100  "
            >
              {item.dropdown ? (
                <DropDown item={item} />
              ) : (
                <button
                  key={item.id}
                  className="btn btn-secondary border-start   rounded-0"
                >
                  {item.name}
                </button>
              )}
            </div>
          ))}
        </div>
      </Collapse>
    </div>
  );
};

export default NavBarNavMobile;
