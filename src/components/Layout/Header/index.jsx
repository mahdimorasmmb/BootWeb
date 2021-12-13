import React from "react";
import CartIcon from "../../Icon/CartIcon";
import LoginIcon from "../../Icon/LoginIcon";
import UserIcon from "../../Icon/UserIcon";

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
          <div className=" input-group ">
            <button className="btn btn-primary rounded-pill rounded-end">
              جستجو
            </button>
            <input
              dir="rtl"
              className=" form-control"
              type="search"
              placeholder="عبارت جستجو را وارد کنید "
            />
          </div>
        </div>
        <div className="  d-none d-lg-flex col-lg-3  align-items-center justify-content-end">
          <img src="./img/logo.png" alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
