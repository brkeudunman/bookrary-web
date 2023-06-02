import React from "react";
import AltNavbar from './../components/navbar/alt-navbar';
import Navbar from "../components/navbar/navbar";

const AppLayout = ({children}) => {
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

export default AppLayout;
