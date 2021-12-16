import React from "react";
import classes from "./Product.module.css";

const Product = () => {
  return (
    <div dir="rtl" className=" container mt-5 ">
      <div className=" card ">
        <div className=" card-header">
          <h4 className=" card-title">اموزش پروژه محور bootstrap4</h4>
        </div>
        <div className=" card-body row">
          <div className="col-12 col-lg-6 row">
            <table
              className={`${classes.mytable} table text-light `}
              style={{ fontSize: "smaller !important" }}
            >
              <tbody>
                <tr>
                  <td> بخش 3 </td>
                  <td> متخصص فرانت اند </td>
                </tr>
                <tr>
                  <td>مدرس </td>
                  <td> امیر دینی </td>
                </tr>
                <tr>
                  <td> پیش نیاز </td>
                  <td> Html , Css </td>
                </tr>
                <tr>
                  <td> وضعیت </td>
                  <td> درحال برگزاری </td>
                </tr>
                <tr>
                  <td> قسمت های ارسالی : </td>
                  <td> 96 </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-12 col-lg-6 d-flex flex-column  me-3">
            <div style={{ fontSize: ".8rem" }}>
              <i className="fa-solid fa-calendar-days"></i>{" "}
              <span> 28 فروردین و ۱۳۹۸</span>
              <i
                style={{ fontSize: "0.8rem" }}
                className="fa-solid fa-eye me-1"
              ></i>
              <span className="me-1">3230</span>
              <i className="fa-solid fa-bars me-2"></i>
              <span className="me-1">بوت استرپ</span>
              <span>:متخصص طراحی سایت همه دوره ها </span>
            </div>
            <div style={{ fontSize: ".8rem" }} className="mt-3 ">
              <span className="bg-danger rounded-pill p-1 text-light">
                ۷۳٪ تخفیف{" "}
              </span>
              <span className=" bg-secondary rounded-pill p-1 text-light me-1">
                ۴۴۴ دانشجو
              </span>
            </div>
            <div className="mt-2">
              <p>
                بوت استرپ (bootstrap) یک فریم ورک است که در طراحی صفحات وب به
                صورت رسپانسیو به کار می ورد. بوت استرپ شامل دستورات HTML، CSS و
                توابع جاوااسکریپت برای تولید و نمایش فرم ها، دکمه ها و المان های
                مورد نیاز طراحی وب می باشد. از نظر سئو هیچ تفاوتی بین سایت هایی
                که با استفاده از فریم ورک بوت استرپ ایجاد می شود و سایت هایی که
                به صورت دستی ساخته شده باشد وجود ندارد. با توجه به اینکه بوت
                استرپ برای طراحی سایت های اختصاصی راحت است، حتی کاربرانی که
                مبتدی هستند و تسلط چندانی بر HTML و CSS ندارند هم می توانند به
                راحتی از این فریم ورک استفاده کنند
              </p>
            </div>
            <hr />
            <div>
              <input
                type="number"
                className=" form-control form-control-sm rounded-pill "
                style={{ width: "70px" }}
              />
              <button className=" btn btn-success btn-sm rounded-pill mt-2  ">
                ۲۰.۰۰۰ تومان - خرید محصول
              </button>
            </div>
            <hr />
            <div>
              <a
                href="#"
                className="bg-light rounded-pill px-2 py-1 d-inline-flex my-1 text-muted"
              >
                اموزش bootstrap
              </a>
              <a
                href="#"
                className="bg-light rounded-pill px-2 py-1 d-inline-flex my-1 text-muted"
              >
                اموزش bootstrap4
              </a>
              <a
                href="#"
                className="bg-light rounded-pill px-2 py-1 d-inline-flex my-1 text-muted"
              >
                اموزش بوت استرپ
              </a>
              <a
                href="#"
                className="bg-light rounded-pill px-2 py-1 d-inline-flex my-1 text-muted"
              >
                اموزش بوت استرپ ۴
              </a>
              <a
                href="#"
                className="bg-light rounded-pill px-2 py-1 d-inline-flex my-1 text-muted"
              >
                امورزش پروژه محور بوت استرپ
              </a>
              <a
                href="#"
                className="bg-light rounded-pill px-2 py-1 d-inline-flex my-1 text-muted"
              >
                بوت استرپ
              </a>
              <a
                href="#"
                className="bg-light rounded-pill px-2 py-1 d-inline-flex my-1 text-muted"
              >
                بوت استرپ ۴
              </a>
              <a
                href="#"
                className="bg-light rounded-pill px-2 py-1 d-inline-flex my-1 text-muted"
              >
                {" "}
                بوت استرپ پروژه محور{" "}
              </a>
            </div>
          </div>
        </div>
        <div className=" card-footer">
          <div className=" text-start">
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
        </div>
      </div>
      <div className=" card ">
        <div className="card-header">
          <button className="btn btn-light text-muted">
            <i className="fa-solid fa-paste"></i> مشخصات
          </button>
          <button className="btn btn-light text-muted">
            <i className="fa-solid fa-table-cells ms-1"></i>اطلاعات تکمیلی
          </button>
          <button className="btn btn-light text-muted">
            <i className="fa-solid fa-message ms-1"></i>پرسش وپاسخ
          </button>
        </div>
        <div className="card-body">
          <div className="row">
            <ul
              className={`${classes.custom_ul} ${classes.custom_border_ul} col-12 col-md-9`}
            >
              <div
                className={`${classes.custom_li_hover} d-flex align-items-start`}
              >
                <i className="fa fa-circle p-2"></i>
                <li className="mb-2 w-100 d-block">
                  <div className="p-1">
                    <p className="mb-1"> دموی کلی دوره فرانت </p>
                    <video controls className="ratio ratio-16x9">
                      <source src="http://dl.zicco.ir/frontEnd/demoFrontEnd.mp4" />
                    </video>
                  </div>
                </li>
              </div>
            </ul>
            <ul
              className={`${classes.custom_ul} ${classes.custom_border_ul} col-12 col-md-9`}
            >
              <div
                className={`${classes.custom_li_hover} d-flex align-items-start`}
              >
                <i class="fa fa-circle p-2"></i>
                <li class="mb-2 w-100 d-block">
                  <div class="bg-danger p-1">
                    <p class="mb-1"> دموی کلی دوره فرانت </p>
                    <video controls class="ratio ratio-16x9">
                      <source src="http://dl.zicco.ir/frontEnd/demoFrontEnd.mp4" />
                    </video>
                  </div>
                </li>
              </div>
            </ul>
            <ul
              className={`${classes.custom_ul} ${classes.custom_border_ul} col-12 col-md-9`}
            >
              <div
                className={`${classes.custom_li_hover} d-flex align-items-start`}
              >
                <i class="fa fa-circle p-2"></i>
                <li class="mb-2 w-100 d-block">
                  <div class="bg-danger p-1">
                    <p class="mb-1"> آموزش پروژه محور بوت استرپ قسمت 0 </p>
                    <small>
                      {" "}
                      نگاه اجمالی به دوره bootstrap 4 ، بوت استرپ چیست !؟ کاربرد
                      های بوت استرپ ، پیش نیاز های این دوره{" "}
                    </small>
                  </div>
                </li>
              </div>
            </ul>
            <ul
              className={`${classes.custom_ul} ${classes.custom_border_ul} col-12 col-md-9`}
            >
              <div
                className={`${classes.custom_li_hover} d-flex align-items-start`}
              >
                <i class="fa fa-circle p-2"></i>
                <li class="mb-2 w-100 d-block">
                  <div class="bg-danger p-1">
                    <p class="mb-1"> آموزش پروژه محور بوت استرپ قسمت 1 </p>
                    <small>
                      {" "}
                      نگاهی متخصصانه به بوت استرپ ، آموزش اضافه کردن بوت استرپ
                      به صفحه ، تحلیل یک صفحه ساخته شده با بوت استرپ{" "}
                    </small>
                  </div>
                </li>
              </div>
            </ul>
            <ul
              className={`${classes.custom_ul} ${classes.custom_border_ul} col-12 col-md-9`}
            >
              <div
                className={`${classes.custom_li_hover} d-flex align-items-start`}
              >
                <i class="fa fa-circle p-2"></i>
                <li class="mb-2 w-100 d-block">
                  <div class="bg-danger p-1">
                    <p class="mb-1"> آموزش پروژه محور بوت استرپ قسمت 2 </p>
                    <small>
                      {" "}
                      اضافه کردن بوت استرپ ، آموزش کار با دستورات آماده بوت
                      استرپ ، بررسی ساختار کلاس های container و container و
                      توضیحات کامل راجب متاتگ viewport{" "}
                    </small>
                  </div>
                </li>
              </div>
            </ul>
            <ul
              className={`${classes.custom_ul} ${classes.custom_border_ul} col-12 col-md-9`}
            >
              <div
                className={`${classes.custom_li_hover} d-flex align-items-start`}
              >
                <i class="fa fa-circle p-2"></i>
                <li class="mb-2 w-100 d-block">
                  <div class="bg-danger p-1">
                    <p class="mb-1"> آموزش پروژه محور بوت استرپ قسمت 3 </p>
                    <small>
                      {" "}
                      بررسی سیستم گرید و شبکه بندی ۱۲ تایی در بوت استرپ xs - sm
                      - md - lg{" "}
                    </small>
                  </div>
                </li>
              </div>
            </ul>
            <ul
              className={`${classes.custom_ul} ${classes.custom_border_ul} col-12 col-md-9`}
            >
              <div
                className={`${classes.custom_li_hover} d-flex align-items-start`}
              >
                <i class="fa fa-circle p-2"></i>
                <li class="mb-2 w-100 d-block">
                  <div class="bg-danger p-1">
                    <p class="mb-1"> آموزش پروژه محور بوت استرپ قسمت 0 </p>
                    <small>
                      {" "}
                      نگاه اجمالی به دوره bootstrap 4 ، بوت استرپ چیست !؟ کاربرد
                      های بوت استرپ ، پیش نیاز های این دوره{" "}
                    </small>
                  </div>
                </li>
              </div>
            </ul>
            <ul
              className={`${classes.custom_ul} ${classes.custom_border_ul} col-12 col-md-9`}
            >
              <div
                className={`${classes.custom_li_hover} d-flex align-items-start`}
              >
                <i class="fa fa-circle p-2"></i>
                <li class="mb-2 w-100 d-block">
                  <div class="bg-danger p-1">
                    <p class="mb-1"> آموزش پروژه محور بوت استرپ قسمت 0 </p>
                    <small>
                      {" "}
                      نگاه اجمالی به دوره bootstrap 4 ، بوت استرپ چیست !؟ کاربرد
                      های بوت استرپ ، پیش نیاز های این دوره{" "}
                    </small>
                  </div>
                </li>
              </div>
            </ul>
            <ul
              className={`${classes.custom_ul} ${classes.custom_border_ul} col-12 col-md-9`}
            >
              <div
                className={`${classes.custom_li_hover} d-flex align-items-start`}
              >
                <i class="fa fa-circle p-2"></i>
                <li class="mb-2 w-100 d-block">
                  <div class="bg-danger p-1">
                    <p class="mb-1"> آموزش پروژه محور بوت استرپ قسمت 0 </p>
                    <small>
                      {" "}
                      نگاه اجمالی به دوره bootstrap 4 ، بوت استرپ چیست !؟ کاربرد
                      های بوت استرپ ، پیش نیاز های این دوره{" "}
                    </small>
                  </div>
                </li>
              </div>
            </ul>
            <ul
              className={`${classes.custom_ul} ${classes.custom_border_ul} col-12 col-md-9`}
            >
              <div
                className={`${classes.custom_li_hover} d-flex align-items-start`}
              >
                <i class="fa fa-circle p-2"></i>
                <li class="mb-2 w-100 d-block">
                  <div class="bg-danger p-1">
                    <p class="mb-1"> آموزش پروژه محور بوت استرپ قسمت 0 </p>
                    <small>
                      {" "}
                      نگاه اجمالی به دوره bootstrap 4 ، بوت استرپ چیست !؟ کاربرد
                      های بوت استرپ ، پیش نیاز های این دوره{" "}
                    </small>
                  </div>
                </li>
              </div>
            </ul>
            <ul
              className={`${classes.custom_ul} ${classes.custom_border_ul} col-12 col-md-9`}
            >
              <div
                className={`${classes.custom_li_hover} d-flex align-items-start`}
              >
                <i class="fa fa-circle p-2"></i>
                <li class="mb-2 w-100 d-block">
                  <div class="bg-danger p-1">
                    <p class="mb-1"> آموزش پروژه محور بوت استرپ قسمت 0 </p>
                    <small>
                      {" "}
                      نگاه اجمالی به دوره bootstrap 4 ، بوت استرپ چیست !؟ کاربرد
                      های بوت استرپ ، پیش نیاز های این دوره{" "}
                    </small>
                  </div>
                </li>
              </div>
            </ul>
            <ul
              className={`${classes.custom_ul} ${classes.custom_border_ul} col-12 col-md-9`}
            >
              <div
                className={`${classes.custom_li_hover} d-flex align-items-start`}
              >
                <i class="fa fa-circle p-2"></i>
                <li class="mb-2 w-100 d-block">
                  <div class="bg-danger p-1">
                    <p class="mb-1"> آموزش پروژه محور بوت استرپ قسمت 0 </p>
                    <small>
                      {" "}
                      نگاه اجمالی به دوره bootstrap 4 ، بوت استرپ چیست !؟ کاربرد
                      های بوت استرپ ، پیش نیاز های این دوره{" "}
                    </small>
                  </div>
                </li>
              </div>
            </ul>
            <ul
              className={`${classes.custom_ul} ${classes.custom_border_ul} col-12 col-md-9`}
            >
              <div
                className={`${classes.custom_li_hover} d-flex align-items-start`}
              >
                <i class="fa fa-circle p-2"></i>
                <li class="mb-2 w-100 d-block">
                  <div class="bg-danger p-1">
                    <p class="mb-1"> آموزش پروژه محور بوت استرپ قسمت 0 </p>
                    <small>
                      {" "}
                      نگاه اجمالی به دوره bootstrap 4 ، بوت استرپ چیست !؟ کاربرد
                      های بوت استرپ ، پیش نیاز های این دوره{" "}
                    </small>
                  </div>
                </li>
              </div>
            </ul>
            <ul
              className={`${classes.custom_ul} ${classes.custom_border_ul} col-12 col-md-9`}
            >
              <div
                className={`${classes.custom_li_hover} d-flex align-items-start`}
              >
                <i class="fa fa-circle p-2"></i>
                <li class="mb-2 w-100 d-block">
                  <div class="bg-danger p-1">
                    <p class="mb-1"> آموزش پروژه محور بوت استرپ قسمت 0 </p>
                    <small>
                      {" "}
                      نگاه اجمالی به دوره bootstrap 4 ، بوت استرپ چیست !؟ کاربرد
                      های بوت استرپ ، پیش نیاز های این دوره{" "}
                    </small>
                  </div>
                </li>
              </div>
            </ul>
            <ul
              className={`${classes.custom_ul} ${classes.custom_border_ul} col-12 col-md-9`}
            >
              <div
                className={`${classes.custom_li_hover} d-flex align-items-start`}
              >
                <i class="fa fa-circle p-2"></i>
                <li class="mb-2 w-100 d-block">
                  <div class="bg-danger p-1">
                    <p class="mb-1"> آموزش پروژه محور بوت استرپ قسمت 0 </p>
                    <small>
                      {" "}
                      نگاه اجمالی به دوره bootstrap 4 ، بوت استرپ چیست !؟ کاربرد
                      های بوت استرپ ، پیش نیاز های این دوره{" "}
                    </small>
                  </div>
                </li>
              </div>
            </ul>
            <ul
              className={`${classes.custom_ul} ${classes.custom_border_ul} col-12 col-md-9`}
            >
              <div
                className={`${classes.custom_li_hover} d-flex align-items-start`}
              >
                <i class="fa fa-circle p-2"></i>
                <li class="mb-2 w-100 d-block">
                  <div class="bg-danger p-1">
                    <p class="mb-1"> آموزش پروژه محور بوت استرپ قسمت 0 </p>
                    <small>
                      {" "}
                      نگاه اجمالی به دوره bootstrap 4 ، بوت استرپ چیست !؟ کاربرد
                      های بوت استرپ ، پیش نیاز های این دوره{" "}
                    </small>
                  </div>
                </li>
              </div>
            </ul>
            <ul
              className={`${classes.custom_ul} ${classes.custom_border_ul} col-12 col-md-9`}
            >
              <div
                className={`${classes.custom_li_hover} d-flex align-items-start`}
              >
                <i class="fa fa-circle p-2"></i>
                <li class="mb-2 w-100 d-block">
                  <div class="bg-danger p-1">
                    <p class="mb-1"> آموزش پروژه محور بوت استرپ قسمت 0 </p>
                    <small>
                      {" "}
                      نگاه اجمالی به دوره bootstrap 4 ، بوت استرپ چیست !؟ کاربرد
                      های بوت استرپ ، پیش نیاز های این دوره{" "}
                    </small>
                  </div>
                </li>
              </div>
            </ul>
            <ul
              className={`${classes.custom_ul} ${classes.custom_border_ul} col-12 col-md-9`}
            >
              <div
                className={`${classes.custom_li_hover} d-flex align-items-start`}
              >
                <i class="fa fa-circle p-2"></i>
                <li class="mb-2 w-100 d-block">
                  <div class="bg-danger p-1">
                    <p class="mb-1"> آموزش پروژه محور بوت استرپ قسمت 0 </p>
                    <small>
                      {" "}
                      نگاه اجمالی به دوره bootstrap 4 ، بوت استرپ چیست !؟ کاربرد
                      های بوت استرپ ، پیش نیاز های این دوره{" "}
                    </small>
                  </div>
                </li>
              </div>
            </ul>
            <ul
              className={`${classes.custom_ul} ${classes.custom_border_ul} col-12 col-md-9`}
            >
              <div
                className={`${classes.custom_li_hover} d-flex align-items-start`}
              >
                <i class="fa fa-circle p-2"></i>
                <li class="mb-2 w-100 d-block">
                  <div class="bg-danger p-1">
                    <p class="mb-1"> آموزش پروژه محور بوت استرپ قسمت 0 </p>
                    <small>
                      {" "}
                      نگاه اجمالی به دوره bootstrap 4 ، بوت استرپ چیست !؟ کاربرد
                      های بوت استرپ ، پیش نیاز های این دوره{" "}
                    </small>
                  </div>
                </li>
              </div>
            </ul>
            <ul
              className={`${classes.custom_ul} ${classes.custom_border_ul} col-12 col-md-9`}
            >
              <div
                className={`${classes.custom_li_hover} d-flex align-items-start`}
              >
                <i class="fa fa-circle p-2"></i>
                <li class="mb-2 w-100 d-block">
                  <div class="bg-danger p-1">
                    <p class="mb-1"> آموزش پروژه محور بوت استرپ قسمت 0 </p>
                    <small>
                      {" "}
                      نگاه اجمالی به دوره bootstrap 4 ، بوت استرپ چیست !؟ کاربرد
                      های بوت استرپ ، پیش نیاز های این دوره{" "}
                    </small>
                  </div>
                </li>
              </div>
            </ul>
            <ul
              className={`${classes.custom_ul} ${classes.custom_border_ul} col-12 col-md-9`}
            >
              <div
                className={`${classes.custom_li_hover} d-flex align-items-start`}
              >
                <i class="fa fa-circle p-2"></i>
                <li class="mb-2 w-100 d-block">
                  <div class="bg-danger p-1">
                    <p class="mb-1"> آموزش پروژه محور بوت استرپ قسمت 0 </p>
                    <small>
                      {" "}
                      نگاه اجمالی به دوره bootstrap 4 ، بوت استرپ چیست !؟ کاربرد
                      های بوت استرپ ، پیش نیاز های این دوره{" "}
                    </small>
                  </div>
                </li>
              </div>
            </ul>
            <ul
              className={`${classes.custom_ul} ${classes.custom_border_ul} col-12 col-md-9`}
            >
              <div
                className={`${classes.custom_li_hover} d-flex align-items-start`}
              >
                <i class="fa fa-circle p-2"></i>
                <li class="mb-2 w-100 d-block">
                  <div class="bg-danger p-1">
                    <p class="mb-1"> آموزش پروژه محور بوت استرپ قسمت 0 </p>
                    <small>
                      {" "}
                      نگاه اجمالی به دوره bootstrap 4 ، بوت استرپ چیست !؟ کاربرد
                      های بوت استرپ ، پیش نیاز های این دوره{" "}
                    </small>
                  </div>
                </li>
              </div>
            </ul>
            <ul
              className={`${classes.custom_ul} ${classes.custom_border_ul} col-12 col-md-9`}
            >
              <div
                className={`${classes.custom_li_hover} d-flex align-items-start`}
              >
                <i class="fa fa-circle p-2"></i>
                <li class="mb-2 w-100 d-block">
                  <div class="bg-danger p-1">
                    <p class="mb-1"> آموزش پروژه محور بوت استرپ قسمت 0 </p>
                    <small>
                      {" "}
                      نگاه اجمالی به دوره bootstrap 4 ، بوت استرپ چیست !؟ کاربرد
                      های بوت استرپ ، پیش نیاز های این دوره{" "}
                    </small>
                  </div>
                </li>
              </div>
            </ul>
            <ul
              className={`${classes.custom_ul} ${classes.custom_border_ul} col-12 col-md-9`}
            >
              <div
                className={`${classes.custom_li_hover} d-flex align-items-start`}
              >
                <i class="fa fa-circle p-2"></i>
                <li class="mb-2 w-100 d-block">
                  <div class="bg-danger p-1">
                    <p class="mb-1"> آموزش پروژه محور بوت استرپ قسمت 0 </p>
                    <small>
                      {" "}
                      نگاه اجمالی به دوره bootstrap 4 ، بوت استرپ چیست !؟ کاربرد
                      های بوت استرپ ، پیش نیاز های این دوره{" "}
                    </small>
                  </div>
                </li>
              </div>
            </ul>
            <ul
              className={`${classes.custom_ul} ${classes.custom_border_ul} col-12 col-md-9`}
            >
              <div
                className={`${classes.custom_li_hover} d-flex align-items-start`}
              >
                <i class="fa fa-circle p-2"></i>
                <li class="mb-2 w-100 d-block">
                  <div class="bg-danger p-1">
                    <p class="mb-1"> آموزش پروژه محور بوت استرپ قسمت 0 </p>
                    <small>
                      {" "}
                      نگاه اجمالی به دوره bootstrap 4 ، بوت استرپ چیست !؟ کاربرد
                      های بوت استرپ ، پیش نیاز های این دوره{" "}
                    </small>
                  </div>
                </li>
              </div>
            </ul>
            <ul
              className={`${classes.custom_ul} ${classes.custom_border_ul} col-12 col-md-9`}
            >
              <div
                className={`${classes.custom_li_hover} d-flex align-items-start`}
              >
                <i class="fa fa-circle p-2"></i>
                <li class="mb-2 w-100 d-block">
                  <div class="bg-danger p-1">
                    <p class="mb-1"> آموزش پروژه محور بوت استرپ قسمت 0 </p>
                    <small>
                      {" "}
                      نگاه اجمالی به دوره bootstrap 4 ، بوت استرپ چیست !؟ کاربرد
                      های بوت استرپ ، پیش نیاز های این دوره{" "}
                    </small>
                  </div>
                </li>
              </div>
            </ul>
            <ul
              className={`${classes.custom_ul} ${classes.custom_border_ul} col-12 col-md-9`}
            >
              <div
                className={`${classes.custom_li_hover} d-flex align-items-start`}
              >
                <i class="fa fa-circle p-2"></i>
                <li class="mb-2 w-100 d-block">
                  <div class="bg-danger p-1">
                    <p class="mb-1"> آموزش پروژه محور بوت استرپ قسمت 0 </p>
                    <small>
                      {" "}
                      نگاه اجمالی به دوره bootstrap 4 ، بوت استرپ چیست !؟ کاربرد
                      های بوت استرپ ، پیش نیاز های این دوره{" "}
                    </small>
                  </div>
                </li>
              </div>
            </ul>
            <ul
              className={`${classes.custom_ul} ${classes.custom_border_ul} col-12 col-md-9`}
            >
              <div
                className={`${classes.custom_li_hover} d-flex align-items-start`}
              >
                <i class="fa fa-circle p-2"></i>
                <li class="mb-2 w-100 d-block">
                  <div class="bg-danger p-1">
                    <p class="mb-1"> آموزش پروژه محور بوت استرپ قسمت 0 </p>
                    <small>
                      {" "}
                      نگاه اجمالی به دوره bootstrap 4 ، بوت استرپ چیست !؟ کاربرد
                      های بوت استرپ ، پیش نیاز های این دوره{" "}
                    </small>
                  </div>
                </li>
              </div>
            </ul>
            <ul
              className={`${classes.custom_ul} ${classes.custom_border_ul} col-12 col-md-9`}
            >
              <div
                className={`${classes.custom_li_hover} d-flex align-items-start`}
              >
                <i class="fa fa-circle p-2"></i>
                <li class="mb-2 w-100 d-block">
                  <div class="bg-danger p-1">
                    <p class="mb-1"> آموزش پروژه محور بوت استرپ قسمت 0 </p>
                    <small>
                      {" "}
                      نگاه اجمالی به دوره bootstrap 4 ، بوت استرپ چیست !؟ کاربرد
                      های بوت استرپ ، پیش نیاز های این دوره{" "}
                    </small>
                  </div>
                </li>
              </div>
            </ul>
            <ul
              className={`${classes.custom_ul} ${classes.custom_border_ul} col-12 col-md-9`}
            >
              <div
                className={`${classes.custom_li_hover} d-flex align-items-start`}
              >
                <i class="fa fa-circle p-2"></i>
                <li class="mb-2 w-100 d-block">
                  <div class="bg-danger p-1">
                    <p class="mb-1"> آموزش پروژه محور بوت استرپ قسمت 0 </p>
                    <small>
                      {" "}
                      نگاه اجمالی به دوره bootstrap 4 ، بوت استرپ چیست !؟ کاربرد
                      های بوت استرپ ، پیش نیاز های این دوره{" "}
                    </small>
                  </div>
                </li>
              </div>
            </ul>
            <ul
              className={`${classes.custom_ul} ${classes.custom_border_ul} col-12 col-md-9`}
            >
              <div
                className={`${classes.custom_li_hover} d-flex align-items-start`}
              >
                <i class="fa fa-circle p-2"></i>
                <li class="mb-2 w-100 d-block">
                  <div class="bg-danger p-1">
                    <p class="mb-1"> آموزش پروژه محور بوت استرپ قسمت 0 </p>
                    <small>
                      {" "}
                      نگاه اجمالی به دوره bootstrap 4 ، بوت استرپ چیست !؟ کاربرد
                      های بوت استرپ ، پیش نیاز های این دوره{" "}
                    </small>
                  </div>
                </li>
              </div>
            </ul>
          </div>
          <div>
            <table
              className={`${classes.mytable} table table-hover   `}
              style={{ fontSize: "smaller !important" }}
            >
              <tbody>
                <tr>
                  <td> بخش 3 </td>
                  <td> متخصص فرانت اند </td>
                </tr>
                <tr>
                  <td>مدرس </td>
                  <td> امیر دینی </td>
                </tr>
                <tr>
                  <td> پیش نیاز </td>
                  <td> Html , Css </td>
                </tr>
                <tr>
                  <td> وضعیت </td>
                  <td> درحال برگزاری </td>
                </tr>
                <tr>
                  <td> قسمت های ارسالی : </td>
                  <td> 96 </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <ul>
              <li>دیدگاه شما بعد از تایید مدیریت نمایش داده خواهد شد !</li>
              <li>از درج دیدگاه تکراری خودداری کنید !!</li>
              <li>ایمیل شما منتشر نخواهد شد !!!</li>
            </ul>

            <div class="rate">
              <small class="mr-4 pl-2"> امتیاز شما : </small>
              <input type="radio" id="star5" name="rate" value="5" />
              <label for="star5"> 5 Star </label>
              <input type="radio" id="star4" name="rate" value="5" />
              <label for="star5"> 4 Star </label>
              <input type="radio" id="star3" name="rate" value="5" />
              <label for="star5"> 3 Star </label>
              <input type="radio" id="star2" name="rate" value="5" />
              <label for="star5"> 2 Star </label>
              <input type="radio" id="star1" name="rate" value="5" />
              <label for="star5"> 1 Star </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
