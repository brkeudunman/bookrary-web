import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../common-pages/home/home";
import PublicLayout from "../../common/layout/public.layout";
import SignUp from "./auth/signup";
import LogIn from "./auth/login";
import Cart from "../common-pages/cart/cart";

const PublicRoutes = () => {
  return (
    <PublicLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </PublicLayout>
  );
};

export default PublicRoutes;
