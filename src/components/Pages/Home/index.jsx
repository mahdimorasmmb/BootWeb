import React, { useEffect, useState } from "react";
import MyModal from "../../Modal";
import Products from "../../Products";
import classes from "./Home.module.css";

export const Home = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    fetch("https://api.freerealapi.com/blogs")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProducts(json.blogs);
      });
  }, []);
  return (
    <>
      <div
        className={`${classes.custom_containerfluid} d-flex align-items-center justify-content-center   `}
      >
        <div className=" d-flex align-items-center justify-content-center  ">
          <MyModal />
        </div>
      </div>
      <Products products={products} />
      <Products products={products} />
      <Products products={products} />
      <Products products={products} />

      <ul className="pagination mt-3 justify-content-center">
        <li className="page-item">
          <a className="page-link" href="#">
            قبلی
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item active">
          <a className="page-link " href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            یعدی
          </a>
        </li>
      </ul>
      <div className={`    ${classes.news} py-5 `}>
        <div className="d-flex justify-content-center flex-column">
          <h2 className="mt-4 text-light text-center">استراک در خبرنامه</h2>
          <p className="text-light text-center mt-3  ">
            جهت اطلاع از آخرین اخبار و تخفیف های سایت ، مشترک شوید !!!
          </p>
          <div className=" input-group w-50 mx-auto mb-4 ">
            <button className="btn btn-success rounded-end rounded-pill ">
              اشتراک
            </button>
            <input
              dir="rtl"
              className=" form-control rounded-start rounded-pill  "
              placeholder="ایمیل حود را وارد گنید "
            />
          </div>
        </div>
      </div>
    </>
  );
};
