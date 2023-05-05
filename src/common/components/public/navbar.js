import React from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";
import DropdownRouteMenu from "./../dropdown";
import AltNavbar from "../alt-navbar";

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
  return (
    <>
      <div className="flex px-14 gap-3 py-2 bg-blue-300">
        <div
          className="logo cursor-pointer rounded-full bg-white px-10 text-lg flex items-center"
          onClick={() => {
            navigate("/");
          }}
        >
          Logo
        </div>
        <div className="input flex items-center px-2 border bg-slate-300 flex-1">
          <Input className="h-3/4" />
        </div>
        <div className="sign-button">
          <DropdownRouteMenu items={items}>
            <div className="flex border p-2 rounded-md bg-white gap-x-2">
              <div className="flex items-center">PersonIco</div>
              <div className="flex flex-col gap-0.5">
                <p>Login</p>
                <p className="text-blue-300">New Account</p>
              </div>
            </div>
          </DropdownRouteMenu>
        </div>
        <div className="cart-button flex flex-col justify-center border bg-white rounded-md px-4">
          Cart
        </div>
      </div>
      <AltNavbar />
    </>
  );
};

export default Navbar;
