import React from "react";
import MyModal from "../Modal";
import classes from "./Slider.module.css";

const Slider = () => {
  return (
    <div
      className={`${classes.custom_containerfluid} d-flex align-items-center justify-content-center   `}
    >
      <div className=" d-flex align-items-center justify-content-center  ">
        <MyModal />
      </div>
    </div>
  );
};

export default Slider;
