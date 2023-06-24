import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../common-pages/home/home";
import PublicLayout from "../../common/layout/public.layout";
import SignUp from "./auth/signup";
import LogIn from "./auth/login";
import Cart from "../app/cart/cart"
import GenresPage from "../common-pages/genres/genres";
import { NotFoundPage } from "../common-pages/err-page/notFoundPage";

const PublicRoutes = () => {
  return (
    <PublicLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="cart" element={<Cart />} />
        <Route path="genres" element={<GenresPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </PublicLayout>
  );
};

export default PublicRoutes;
