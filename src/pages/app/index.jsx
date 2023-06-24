import React from "react";
import AppLayout from "./../../common/layout/app.layout";
import { Route, Routes } from "react-router-dom";
import Home from "../common-pages/home/home";
import Cart from "./cart/cart";

const AppRoutes = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </AppLayout>
  );
};

export default AppRoutes;
