import React from "react";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className=" container">
      <div className=" row  mt-3 ">
        <div dir="rtl" className=" col-12 col-lg-3  text-end     ">
          <small className="border-bottom border-2 border-primary d-block  ">
            زرین پال
          </small>
          <img src="./img/1.svg" className=" col-3 mt-2 " />
        </div>
        <div dir="rtl" className="col-12 col-lg-3 text-end   ">
          <small className="border-bottom border-2 border-primary d-block">
            دسته ها
          </small>
          <ul className={`${classes.custom_ul} px-3`}>
            <li>
              <a className="text-dark text-decoration-none" href="#">
                حمل و نقل ، انبار داری و ارتباطات (2)
              </a>
            </li>
            <li>
              <a className="text-dark text-decoration-none fs-6 " href="#">
                دانش (1)
              </a>
            </li>
            <li>
              <a className="text-dark text-decoration-none fs-6 " href="#">
                سایر محصولات کانی و غیرفلزی (2)
              </a>
            </li>
            <li>
              <a className="text-dark text-decoration-none fs-6 " href="#">
                سیمان ؛ اهن و گچ (1)
              </a>
            </li>
            <li>
              <a className="text-dark text-decoration-none fs-6 " href="#">
                همه صنایع (4)
              </a>
            </li>
          </ul>
        </div>
        <div dir="rtl" className="col-12 col-lg-3 text-end   ">
          <small className="border-bottom border-2 border-primary d-block">
            دسته ها
          </small>
          <ul className={`${classes.custom_ul} px-3`}>
            <li>
              <a className="text-dark text-decoration-none" href="#">
                حمل و نقل ، انبار داری و ارتباطات (2)
              </a>
            </li>
            <li>
              <a className="text-dark text-decoration-none fs-6 " href="#">
                دانش (1)
              </a>
            </li>
            <li>
              <a className="text-dark text-decoration-none fs-6 " href="#">
                سایر محصولات کانی و غیرفلزی (2)
              </a>
            </li>
            <li>
              <a className="text-dark text-decoration-none fs-6 " href="#">
                سیمان ؛ اهن و گچ (1)
              </a>
            </li>
            <li>
              <a className="text-dark text-decoration-none fs-6 " href="#">
                همه صنایع (4)
              </a>
            </li>
          </ul>
        </div>
        <div dir="rtl" className="col-12 col-lg-3 text-end   ">
          <small className="border-bottom border-2 border-primary d-block">
            دسته ها
          </small>
          <ul className={`${classes.custom_ul} px-3`}>
            <li>
              <a className="text-dark text-decoration-none" href="#">
                حمل و نقل ، انبار داری و ارتباطات (2)
              </a>
            </li>
            <li>
              <a className="text-dark text-decoration-none fs-6 " href="#">
                دانش (1)
              </a>
            </li>
            <li>
              <a className="text-dark text-decoration-none fs-6 " href="#">
                سایر محصولات کانی و غیرفلزی (2)
              </a>
            </li>
            <li>
              <a className="text-dark text-decoration-none fs-6 " href="#">
                سیمان ؛ اهن و گچ (1)
              </a>
            </li>
            <li>
              <a className="text-dark text-decoration-none fs-6 " href="#">
                همه صنایع (4)
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className=" container mt-5 row">
        <div className=" text-muted col-lg-4 mb-4 text-center col-12 mb-lg-0">
          <span className="  border-2 border-end border-secondary px-2 me-2">
            Helali026@gmail.com
          </span>
          <span>+989364646164</span>
        </div>
        <div class="col-lg-4 mb-4 text-center col-12 mb-lg-0 text-center">
          <a
            href="#"
            className="text-muted"
            style={{ color: "#a7a7a7 !important" }}
          >
            {" "}
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a
            href="#"
            className="text-muted"
            style={{ color: "#a7a7a7 !important" }}
          >
            {" "}
            <i className="fa-brands fa-facebook-f px-3"></i>{" "}
          </a>
          <a
            href="#"
            className="text-muted"
            style={{ color: "#a7a7a7 !important" }}
          >
            {" "}
            <i className="fa-brands fa-instagram"></i>{" "}
          </a>
          <a
            href="#"
            className="text-muted"
            style={{ color: "#a7a7a7 !important" }}
          >
            {" "}
            <i className="fa-brands fa-google-plus px-3"></i>{" "}
          </a>
          <a
            href="#"
            className="text-muted"
            style={{ color: "#a7a7a7 !important" }}
          >
            {" "}
            <i className="fa-brands fa-telegram"></i>{" "}
          </a>
        </div>
        <div className=" text-muted col-lg-4 mb-4 text-center col-12 mb-lg-0">
          <span className="  border-2 border-end border-secondary px-2 me-2">
            CopyRight © 2006-2020
          </span>
          <span>کلیه حقوق محفوظ است</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
