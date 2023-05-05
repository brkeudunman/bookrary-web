
import React from "react";
import Navbar from "../components/public/navbar";
import AltNavbar from "../components/alt-navbar";

const PublicLayout = ({ children }) => {

  return (
    <>
      <Navbar/>
      
      {children}
    </>
  );
};

export default PublicLayout;
