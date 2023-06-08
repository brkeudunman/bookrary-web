import React from "react";
import { Dropdown, Space } from "antd";
import { useNavigate } from "react-router-dom";

const DropdownRouteMenu = ({ items, children, onHover }) => {
  const navigate = useNavigate();

  const onClick = ({ key }) => {
    if(key!=="2"){
      navigate(`./${items[key]?.to}`);
    }
  };

  return (
    <Dropdown
      className="rounded-md bg-White"
      menu={{
        items,
        onClick,
      }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>{children}</Space>
      </a>
    </Dropdown>
  );
};

export default DropdownRouteMenu;
