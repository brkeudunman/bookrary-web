import React from "react";
import { Dropdown, Space } from "antd";
import { useNavigate } from "react-router-dom";

const DropdownRouteMenu = ({ items, children, onHover }) => {
  const navigate = useNavigate();

  const onClick = ({ key }) => {
    if (key !== "2") {
      navigate(`./${items[key]?.to}`);
    }
  };

  return (
    <Dropdown
      onOverlayClick={() => {
        return false;
      }}
      className="rounded-md bg-White"
      menu={{
        items,
        onClick,
      }}
    >
      <Space>{children}</Space>
    </Dropdown>
  );
};

export default DropdownRouteMenu;
