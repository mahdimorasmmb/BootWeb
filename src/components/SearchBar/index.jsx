import React from "react";

const SearchBar = () => {
  return (
    <div className=" input-group ">
      <button className="btn btn-primary rounded-pill rounded-end">
        جستجو
      </button>
      <input
        dir="rtl"
        className=" form-control rounded-pill rounded-start"
        type="search"
        placeholder="عبارت جستجو را وارد کنید "
      />
    </div>
  );
};

export default SearchBar;
