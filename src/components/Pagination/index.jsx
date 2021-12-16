import React from "react";

const Pagination = () => {
  return (
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
  );
};

export default Pagination;
