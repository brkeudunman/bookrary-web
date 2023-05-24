import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Badge, Button, Input } from "antd";
import DropdownRouteMenu from "./../dropdown";
import { CartIco, PersonIco } from "./navicons";
import { MenuOutlined } from "@ant-design/icons";
import MobileDrawer from "../drawer";

const items = [
  {
    label: "Log In",
    key: "0",
    to: "login",
  },
  {
    label: "Sign Up",
    key: "1",
    to: "sign-up",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="flex justify-between sm:px-14 px-2 sm:gap-3 gap-1 py-2 bg-[#3BC3FF] w-full">
        <div className="drawer sm:hidden bg-white rounded-lg">
          <Button size="large" type="text" onClick={showDrawer}>
            <MenuOutlined/>
          </Button>
          <MobileDrawer open={open} setOpen={setOpen} />
        </div>
        <div
          className="logo sm:static flex w-fit sm:ml-0 ml-10 sm:px-10 px-4 items-center cursor-pointer rounded-full bg-white sm:text-lg"
          onClick={() => {
            navigate("/");
          }}
        >
          Bookrary
        </div>
        <div className="input hidden sm:flex rounded-lg items-center px-2 bg-slate-300 flex-1">
          <Input className="h-3/4" />
        </div>
        <div className="flex sm:gap-3 gap-1">
          <div className="sign-button sm:w-fit">
            <DropdownRouteMenu items={items}>
              <div className="flex border p-2 rounded-md bg-white gap-x-2">
                <div className="flex items-center  sm:w-fit">
                  <PersonIco className="w-6 sm:w-fit" />
                </div>
                <div className="sm:flex flex-col gap-0.5 hidden">
                  <p>Login</p>
                  <p className="text-[#7AD6FF]">New Account</p>
                </div>
              </div>
            </DropdownRouteMenu>
          </div>
          <div className="cart-button sm:w-fit flex flex-col sm:px-4 px-1 justify-center items-center border bg-white rounded-md ">
            <Link to={"./cart"}>
              <Badge
                className="flex"
                count={0}
                offset={[5, 0]}
                showZero
                color="#DBF4FF"
              >
                <CartIco className="sm:w-fit w-6" />
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;