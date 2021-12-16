import React from "react";
import classes from "./News.module.css";

const News = () => {
  return (
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
  );
};

export default News;
