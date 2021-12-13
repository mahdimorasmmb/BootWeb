import React from "react";

const SearchBar = () => {
  return (
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
  );
};

export default SearchBar;
