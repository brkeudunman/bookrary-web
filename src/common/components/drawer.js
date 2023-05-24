import { Drawer, Menu } from "antd";

import React, { useState } from "react";

const MobileDrawer = ({ open, setOpen }) => {
  const onClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      width={300}
      title={<div className="flex justify-center">
        Bookrary
      </div>}
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
    getItem(<DrawerButton>Categories</DrawerButton>, "1", null, [
      getItem(<DrawerButton>Action</DrawerButton>, "1-1", null),
      getItem(<DrawerButton>Action</DrawerButton>, "1-2", null),
      getItem(<DrawerButton>Action</DrawerButton>, "1-3", null),
      getItem(<DrawerButton>Action</DrawerButton>, "1-4", null),
      getItem(<DrawerButton>Action</DrawerButton>, "1-5", null),
      getItem(<DrawerButton>Action</DrawerButton>, "1-6", null),
      getItem(<DrawerButton>Action</DrawerButton>, "1-7", null),
      getItem(<DrawerButton>Action</DrawerButton>, "1-8", null),
    ]),
    getItem(<DrawerButton>Cities</DrawerButton>, "2", null, [
      getItem(<DrawerButton>Istanbul</DrawerButton>, "2-1", null),
      getItem(<DrawerButton>Izmir</DrawerButton>, "2-2", null),
      getItem(<DrawerButton>Ankara</DrawerButton>, "2-3", null),
      getItem(<DrawerButton>Adana</DrawerButton>, "2-4", null),
      getItem(<DrawerButton>Adiyaman</DrawerButton>, "2-5", null),
      getItem(<DrawerButton>Afyon</DrawerButton>, "2-6", null),
    ]),
  ];
  const [collapsed, setCollapsed] = useState(false);

  return <Menu mode="inline" inlineCollapsed={collapsed} items={items} />;
};
