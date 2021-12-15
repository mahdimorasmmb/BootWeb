import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const MyModal = ({}) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <h6 className="bg-danger text-light">
        <button
          onClick={() => setShow((prev) => !prev)}
          className=" btn btn-primary btn-lg rounded-0"
        >
          عضویت رایگان{" "}
        </button>
        برای تمام اموزش ها گروه رفع اشکال ایجاد شد{" "}
      </h6>

      <Modal show={show}>
        <Modal.Header dir="rtl">عضویت در گروه رفع اشکال</Modal.Header>
        <Modal.Body>
          <ol dir="rtl">
            <li>نام خانوادگی</li>
            <li>شماره تماس اکانت تلگرام</li>
            <li> ایمیلی که با ان در سایت ثبت نام کردید</li>
            <li>نام دورهای که خریداری کردید</li>
          </ol>
          <ul className="px-2 py-3" style={{ listStyle: "none" }}>
            <li>
              <i className="fa-solid fa-envelope"></i>(09363000000)پیامک
            </li>
            <li>
              <i className="fa-solid fa-envelope-open"></i>mahdimoras@gmail.com
            </li>
            <li>
              <i className="fa-brands fa-telegram"></i>Zicooo
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={() => setShow((prev) => !prev)}
            className=" btn btn-danger"
          >
            بستن
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModal;
