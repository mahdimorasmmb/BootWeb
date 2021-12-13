import React from "react";
import { Dropdown } from "react-bootstrap";

const DropDown = ({ item }) => {
  return (
    <Dropdown className=" border-start align-self-center      ">
      <Dropdown.Toggle
        className="w-lg-auto w-100 rounded-0"
        variant="secondary"
        size="sm"
      >
        {" "}
        {item.name}
      </Dropdown.Toggle>

      <Dropdown.Menu className="   text-end">
        {item.dropdown.map((drop) => (
          <Dropdown.Item key={drop.id} href={drop.link}>
            {drop.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDown;
