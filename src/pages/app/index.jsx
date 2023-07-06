import React from "react";
import AppLayout from "./../../common/layout/app.layout";
import { Route, Routes } from "react-router-dom";
import Home from "../common-pages/home/home";
import Cart from "./cart/cart";
import Profile from "./profile/profile";
import { NotFoundPage } from "../common-pages/err-page/notFoundPage";
import GenresPage from "../common-pages/genres/genres";
import ProfileUpdatePage from "./profile/profileUpdate";
import BookPage from "../common-pages/book/book";
import AddBookPage from "./sale/add-book";

const AppRoutes = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/genres" element={<GenresPage />} />
        <Route path="/update" element={<ProfileUpdatePage />} />
        <Route path="/book/:id" element={<BookPage />} />
        <Route path="/add-book" element={<AddBookPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppLayout>
  );
};

export default AppRoutes;
