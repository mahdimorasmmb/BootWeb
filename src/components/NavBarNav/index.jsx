import React, { useState } from "react";
import { dataNavBarNav } from "../../data/data";
import DropDown from "../DropDown";
import Bars from "../Icon/Bars";

const NavBarNav = () => {
  return (
    <>
      <div className=" d-none d-lg-flex justify-content-center bg-secondary py-2">
        {dataNavBarNav.map((item) =>
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
    </>
  );
};

export default NavBarNav;

{
  /* <div className=" navbar navbar-dark navbar-expand-lg bg-secondary justify-content-center">
      <ul className="nav  ">
        <li className="nav-item">
          <a href="#" className=" nav-link text-light ">
            صفحه اصلی{" "}
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className=" nav-link border-start  text-light ">
            دوره های متخصص
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className=" nav-link border-start  text-light ">
            گرافیک
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className=" nav-link border-start  text-light ">
            افیس
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className=" nav-link border-start  text-light ">
            لینوکس
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className=" nav-link border-start  text-light">
            سی پلاس پلاس
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className=" nav-link border-start  text-light ">
            کانفیگ سرور های لینوکس
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className=" nav-link border-start  text-light ">
            مهندسی{" "}
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className=" nav-link border-start  text-light ">
            تماس با ما{" "}
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className=" nav-link border-start   text-light ">
            تحلیل بورس
          </a>
        </li>
      </ul>
    </div> */
}
