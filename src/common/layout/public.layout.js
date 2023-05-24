import React from "react";
import Navbar from "../components/public/navbar";
import AltNavbar from "../components/navbar/alt-navbar";


const PublicLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <span className="hidden sm:block">
        <AltNavbar />
      </span>
      {children}
    </>
  );
};

export default PublicLayout;
