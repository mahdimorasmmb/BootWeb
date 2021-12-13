import React from "react";
import CartIcon from "../Icon/CartIcon";
import LoginIcon from "../Icon/LoginIcon";
import UserIcon from "../Icon/UserIcon";

const NavLogin = () => {
  return (
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
  );
};

export default NavLogin;
