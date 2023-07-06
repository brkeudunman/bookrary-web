import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Badge, Button, Input, Spin, message } from "antd";
import DropdownRouteMenu from "../dropdown";
import { CartIco, PersonIco } from "./navicons";
import { MenuOutlined } from "@ant-design/icons";
import MobileDrawer from "../drawer";
import Logo from "../../../assets/Bookrary (1).png";
import getToken from "../../../util/get-token";
import { useLogOutUserMe } from "../../../hooks/auth";
import { useCart } from "../cart/cartProvider";
import { useGetUser } from "../../../hooks/user";

const publicDropItems = [
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
// Might be refactored too, 24,06,2023
const Navbar = () => {
  const navigate = useNavigate();
  const items = useCart();
  const [open, setOpen] = useState(false);
  const logout = useLogOutUserMe(() =>
    message.success("You have been successfully logged out")
  );
  const appDropItems = [
    {
      label: "View Profile",
      key: "0",
      to: "profile",
    },
    {
      label: "Update Profile",
      key: "1",
      to: "update",
    },
    {
      label: "Add Sale",
      key: "2",
      to: "add-book",
    },
    {
      label: (
        <div
          className="text-[#343434] hover:text-white"
          onClick={() => {
            window.location.reload();
            logout();
          }}
        >
          Logout
        </div>
      ),
      key: "3",
      to: "",
      danger: true,
    },
  ];
  const isLoggedIn = getToken();
  const { data: userData, isLoading } = useGetUser(
    window.localStorage.getItem("id")
  );

  const showDrawer = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="flex justify-between sm:px-14 px-2 sm:gap-3 gap-1 py-2 bg-[#3BC3FF] w-full  h-fit">
        <div className="drawer sm:hidden bg-white rounded-lg ">
          <Button size="large" type="text" onClick={showDrawer}>
            <MenuOutlined />
          </Button>
          <MobileDrawer open={open} setOpen={setOpen} />
        </div>
        <div
          className="logo sm:static flex w-fit sm:ml-0 ml-10 sm:px-10 px-4 items-center cursor-pointer rounded-full bg-white sm:text-lg"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={Logo} className="md:w-20 md:h-14 h-12 w-16" alt="" />
        </div>
        <div className="flex sm:gap-3 gap-1">
          {!isLoggedIn ? (
            <div className="sign-button sm:w-fit h-full hover:shadow-md">
              <DropdownRouteMenu items={publicDropItems}>
                <div className="flex border p-2 rounded-md bg-white gap-x-2 h-fit">
                  <div className="flex items-center  sm:w-fit">
                    <PersonIco className="w-6 sm:w-fit" />
                  </div>
                  <div className="sm:flex flex-col gap-0.5 hidden">
                    <p className="text-[#343434] font-medium">Login</p>
                    <p className="text-[#7AD6FF] font-medium">New Account</p>
                  </div>
                </div>
              </DropdownRouteMenu>
            </div>
          ) : (
            <div className="sign-button sm:w-fit hover:shadow-md">
              <DropdownRouteMenu items={appDropItems}>
                <div className="flex border p-2 rounded-md bg-white gap-x-2">
                  <div className="flex items-center  sm:w-fit">
                    <PersonIco className="w-6 sm:w-fit" />
                  </div>
                  <Spin spinning={isLoading}>
                    <div className="sm:flex flex-col gap-0.5 hidden">
                      <p className="text-[#7AD6FF] py-2">
                        {userData?.firstName + " " + userData?.lastName}
                      </p>
                    </div>
                  </Spin>
                </div>
              </DropdownRouteMenu>
            </div>
          )}
          <div className="cart-button sm:w-fit flex flex-col sm:px-4 px-1 justify-center items-center border bg-white rounded-md hover:shadow-md">
            <Link to={"./cart"}>
              <Badge
                className="flex"
                count={
                  <p className="font-bold text-white rounded-full bg-[#7AD6FF] p-1">
                    {items.length}
                  </p>
                }
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
