import React, { useEffect, useState } from "react";
import classes from "./Products.module.css";

const Products = ({ products }) => {
  return (
    <>
      <div className="container row mx-auto mt-2">
        <button className="btn btn-secondary rounded-pill col-lg-2 ">
          مشاهده همه
          <i className="fa-solid fa-plus fs-5 ms-2  "></i>
        </button>
        <div
          style={{ height: 2 }}
          className=" d-none  d-lg-block bg-success align-self-center flex-fill border-0 col-md-8 "
        ></div>
        <h6 className=" bg-success col-lg-2 justify-content-center align-items-center m-0 px-3 py-2 mt-2 d-inline-flex   rounded-pill text-light ">
          متخصص انروید <i className="fa-solid fa-diamond fs-6 ms-2"></i>
        </h6>
        <div className="row mt-2 ">
          {products &&
            products
              .filter((item, i) => i < 4)
              .map((product) => (
                <div key={product.id} className="card col-lg-3 mt-4">
                  <div className={` card-img-top ${classes.imgCard}`}>
                    <img
                      src={product.image}
                      alt={product.text}
                      className="img-fluid image"
                    />
                    <span className="badge badge-secondary badge-pill">
                      {" "}
                      50 <i className="fa fa-shopping-basket pr-1"></i>
                    </span>
                    <button className="btn btn-primary  rounded-pill">
                      مشاهده وخرید{" "}
                    </button>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    {product.text.substring(0, 200)}
                  </div>
                  <div className=" card-footer d-flex justify-content-between">
                    <div>
                      <span className=" text-success">20.000</span>
                      <span className=" text-secondary text-decoration-line-through">
                        {" "}
                        4.000{" "}
                      </span>
                    </div>
                    <span className=" badge bg-danger rounded-pill"> 80%</span>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default Products;
