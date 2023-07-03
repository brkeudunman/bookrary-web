import { Drawer, Menu } from "antd";

import React, { useState } from "react";
import { allGenres, trCities } from "../../temp/data";
import { Link } from "react-router-dom";
// MOBILE DRAWER SHOULD BE FIX BY TAKING CATEGORIES DATA
const MobileDrawer = ({ open, setOpen }) => {
  const onClose = () => {
    setOpen(false);
  };

  const getDrawerStyle = () => {
    const style = { position: "absolute" };
    if (open) {
      style.transform = undefined; // set to undefined here
    }
    return style;
  };

  return (
    <Drawer
      style={getDrawerStyle()}
      width={300}
      title={<div className="flex justify-center">Bookrary</div>}
      placement="left"
      closable={false}
      onClose={onClose}
      open={open}
    >
      <DrawerMenu />
    </Drawer>
  );
};

export default MobileDrawer;

const DrawerButton = ({ children }) => {
  return <div className="focus:text-[#3BC3FF]">{children}</div>;
};

const DrawerMenu = () => {
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem(<DrawerButton>Genres</DrawerButton>, "1", null, [
      getItem(
        <Link to={"/genres"}>
          <DrawerButton>All Genres</DrawerButton>
        </Link>,
        "1-all",
        null
      ),
      ...allGenres.map((genre) =>
        getItem(
          <DrawerButton>{genre.name}</DrawerButton>,
          `1-${genre.id}`,
          null
        )
      ),
    ]),
    getItem(
      <DrawerButton>Cities</DrawerButton>,
      "2",
      null,
      trCities.map((city) =>
        getItem(<DrawerButton>{city.name}</DrawerButton>, `1-${city.id}`, null)
      )
    ),
  ];
  const [collapsed, setCollapsed] = useState(false);

  return <Menu mode="inline" inlineCollapsed={collapsed} items={items} />;
};
